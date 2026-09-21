from PIL import Image, ImageFilter, ImageEnhance
import numpy as np

def make_grad_sticker():
    cutout_path = r'c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\images\sathish_grad_cutout.png'
    img = Image.open(cutout_path).convert('RGBA')
    w, h = img.size
    
    # 1. Enhance colors, contrast and clarity
    rgb = img.convert('RGB')
    enhancer = ImageEnhance.Contrast(rgb)
    enhanced = enhancer.enhance(1.22)
    col_enh = ImageEnhance.Color(enhanced)
    vivid = col_enh.enhance(1.25)
    sharpener = ImageEnhance.Sharpness(vivid)
    sharp = sharpener.enhance(1.3)
    
    r, g, b, alpha = img.split()
    sharp_cutout = sharp.convert('RGBA')
    sharp_cutout.putalpha(alpha)
    
    # 2. Create the bold Red Sticker Outline (Image 1 style)
    # Dilate alpha mask to create the sticker border
    alpha_np = np.array(alpha, dtype=np.uint8)
    
    # Using PIL dilation filter / max filter
    alpha_img = Image.fromarray(alpha_np, mode='L')
    # Dilate by 12px for bold red border
    dilated_mask = alpha_img.filter(ImageFilter.MaxFilter(size=17))
    
    # Red sticker color #ef4444 or #dc2626
    sticker_np = np.zeros((h, w, 4), dtype=np.uint8)
    sticker_np[..., 0] = 239 # R
    sticker_np[..., 1] = 45  # G
    sticker_np[..., 2] = 45  # B
    sticker_np[..., 3] = np.array(dilated_mask)
    
    sticker_layer = Image.fromarray(sticker_np, mode='RGBA')
    
    # Smooth the outer border slightly
    sticker_layer = sticker_layer.filter(ImageFilter.GaussianBlur(radius=1.5))
    
    # Composite: Red Sticker Border behind the Sharp Cutout
    composite = Image.alpha_composite(sticker_layer, sharp_cutout)
    
    out_path = r'c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\images\sathish_grad_sticker.png'
    composite.save(out_path)
    print("Graduation sticker saved successfully:", out_path)

if __name__ == '__main__':
    make_grad_sticker()
