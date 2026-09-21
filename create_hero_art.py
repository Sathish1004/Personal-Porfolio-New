from PIL import Image, ImageFilter, ImageEnhance
import numpy as np

def generate_hero_lighting_backdrop():
    cutout_path = r'c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\images\sathish_bike_cutout.png'
    img = Image.open(cutout_path).convert('RGBA')
    w, h = img.size
    
    # Base image with vivid contrast and sharpness
    rgb = img.convert('RGB')
    enhancer = ImageEnhance.Contrast(rgb)
    punchy_rgb = enhancer.enhance(1.25)
    color_enh = ImageEnhance.Color(punchy_rgb)
    vivid_rgb = color_enh.enhance(1.2)
    sharpener = ImageEnhance.Sharpness(vivid_rgb)
    sharp_rgb = sharpener.enhance(1.35)
    
    # Extract alpha
    r, g, b, alpha = img.split()
    alpha_np = np.array(alpha, dtype=np.float32) / 255.0
    
    # Calculate Sobel / gradient for edge rim lightning
    gy, gx = np.gradient(alpha_np)
    edge = np.sqrt(gx**2 + gy**2)
    edge = np.clip(edge * 14.0, 0.0, 1.0)
    
    # Dual-tone rim lightning:
    # Upper half: Electric cyan-white light aura
    # Lower half: KTM electric orange aura
    h_indices = np.linspace(0, 1, h)[:, None]
    
    glow_np = np.zeros((h, w, 4), dtype=np.uint8)
    r_val = (edge * (140 + 115 * h_indices)).clip(0, 255).astype(np.uint8)
    g_val = (edge * (220 * (1 - h_indices*0.45))).clip(0, 255).astype(np.uint8)
    b_val = (edge * (255 * (1 - h_indices*0.8))).clip(0, 255).astype(np.uint8)
    a_val = (edge * 255).clip(0, 255).astype(np.uint8)
    
    glow_np[..., 0] = r_val
    glow_np[..., 1] = g_val
    glow_np[..., 2] = b_val
    glow_np[..., 3] = a_val
    
    glow_img = Image.fromarray(glow_np, 'RGBA')
    blurred_glow = glow_img.filter(ImageFilter.GaussianBlur(radius=3))
    
    # Subtle tight shadow just behind the contours (no border bleed)
    shadow_np = np.zeros((h, w, 4), dtype=np.uint8)
    shadow_np[..., 0] = 15
    shadow_np[..., 1] = 18
    shadow_np[..., 2] = 25
    shadow_np[..., 3] = (alpha_np * 180).astype(np.uint8)
    shadow_img = Image.fromarray(shadow_np, 'RGBA').filter(ImageFilter.GaussianBlur(radius=5))
    
    # Assemble layers without ANY ambient rectangle / box bleed
    base_cutout = sharp_rgb.convert('RGBA')
    base_cutout.putalpha(alpha)
    
    composite = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    composite = Image.alpha_composite(composite, shadow_img)
    composite = Image.alpha_composite(composite, blurred_glow)
    composite = Image.alpha_composite(composite, base_cutout)
    
    out_path = r'c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\images\sathish_bike_lighting_fx.png'
    composite.save(out_path)
    print("Clean transparent lighting FX saved:", out_path)

    # Also update shadow version to be ultra clean blueprint graphite
    dark_shadow_np = np.zeros((h, w, 4), dtype=np.uint8)
    dark_shadow_np[..., 0] = 18
    dark_shadow_np[..., 1] = 22
    dark_shadow_np[..., 2] = 30
    dark_shadow_np[..., 3] = (alpha_np * 220).astype(np.uint8)
    clean_shadow = Image.fromarray(dark_shadow_np, 'RGBA').filter(ImageFilter.GaussianBlur(radius=1.8))
    clean_shadow_path = r'c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\images\sathish_bike_shadow.png'
    clean_shadow.save(clean_shadow_path)
    print("Clean shadow saved:", clean_shadow_path)

if __name__ == '__main__':
    generate_hero_lighting_backdrop()
