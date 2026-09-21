import os
import cv2
import numpy as np
import subprocess
import imageio_ffmpeg

def clean_video_watermark():
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    inp_video = r"c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\personal_video.mp4"
    backup_video = r"c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\personal_video_backup.mp4"
    temp_clean_video = r"c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\personal_video_clean_noaudio.mp4"
    final_output = r"c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\personal_video_clean.mp4"

    if not os.path.exists(backup_video):
        import shutil
        shutil.copyfile(inp_video, backup_video)
        print("Backup created at:", backup_video)

    cap = cv2.VideoCapture(inp_video)
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    print(f"Processing {total_frames} frames ({width}x{height} @ {fps} fps)...")

    # Star template bounding box: y in [1130:1190], x in [570:630]
    cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
    ret, f0 = cap.read()
    star_patch = f0[1130:1190, 570:630]
    gray_patch = cv2.cvtColor(star_patch, cv2.COLOR_BGR2GRAY)
    
    # Threshold star (it is bright whitish)
    patch_mask = np.zeros(gray_patch.shape, dtype=np.uint8)
    patch_mask[gray_patch > 85] = 255
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    patch_mask = cv2.dilate(patch_mask, kernel, iterations=1)

    # Start ffmpeg process to pipe frames into h264 encoder
    writer_cmd = [
        ffmpeg_exe,
        "-y",
        "-f", "rawvideo",
        "-vcodec", "rawvideo",
        "-s", f"{width}x{height}",
        "-pix_fmt", "bgr24",
        "-r", str(fps),
        "-i", "-",
        "-c:v", "libx264",
        "-preset", "slow",
        "-crf", "18",
        "-pix_fmt", "yuv420p",
        temp_clean_video
    ]
    
    proc = subprocess.Popen(writer_cmd, stdin=subprocess.PIPE)

    cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
    processed = 0
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Inpaint only the patch region for speed
        roi = frame[1125:1195, 565:635]
        roi_mask = np.zeros(roi.shape[:2], dtype=np.uint8)
        
        # The star is at local y: 5 to 65, local x: 5 to 65
        roi_mask[5:65, 5:65] = patch_mask
        inpainted_roi = cv2.inpaint(roi, roi_mask, inpaintRadius=4, flags=cv2.INPAINT_TELEA)
        frame[1125:1195, 565:635] = inpainted_roi

        proc.stdin.write(frame.tobytes())
        processed += 1
        if processed % 50 == 0:
            print(f"Processed {processed}/{total_frames} frames...")

    cap.release()
    proc.stdin.close()
    proc.wait()
    print("Video frames processed and encoded!")

    # Now merge original audio if any
    mux_cmd = [
        ffmpeg_exe,
        "-y",
        "-i", temp_clean_video,
        "-i", inp_video,
        "-c:v", "copy",
        "-c:a", "copy",
        "-map", "0:v:0",
        "-map", "1:a:0?",
        "-shortest",
        final_output
    ]
    subprocess.run(mux_cmd, check=True)
    print("Muxing complete! Final clean video ready at:", final_output)

    # Overwrite public/personal_video.mp4 with clean version
    import shutil
    shutil.copyfile(final_output, inp_video)
    print("public/personal_video.mp4 successfully updated with watermark removed!")

if __name__ == "__main__":
    clean_video_watermark()
