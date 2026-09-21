import os
from PIL import Image, ImageFilter, ImageEnhance, ImageOps
import numpy as np

def create_variations():
    cutout_path = r'c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\images\sathish_bike_cutout.png'
    if not os.path.exists(cutout_path):
        print("Cutout does not exist yet.")
        return False
        
    img = Image.open(cutout_path).convert('RGBA')
    w, h = img.size
    print(f"Loaded cutout: {w}x{h}")
    
    # 1. Subtle Shadow / Silhouette Version (Dark atmospheric shadow)
    # Extract alpha channel
    r, g, b, a = img.split()
    
    # Create dark shadow version with slight soft blur for depth
    dark_fill = Image.new('RGBA', (w, h), (18, 20, 28, 255))
    shadow_img = dark_fill.copy()
    shadow_img.putalpha(a)
    # Soften edges slightly for shadow blur feel
    blurred_shadow = shadow_img.filter(ImageFilter.GaussianBlur(radius=2))
    shadow_path = r'c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\images\sathish_bike_shadow.png'
    blurred_shadow.save(shadow_path)
    print("Saved shadow version:", shadow_path)
    
    # 2. Lightning / Electric Rim-Light Glow Version
    # High contrast, punchy saturation, and edge lightning glow
    rgb = img.convert('RGB')
    enhancer = ImageEnhance.Contrast(rgb)
    enhanced_rgb = enhancer.enhance(1.25)
    color_enhancer = ImageEnhance.Color(enhanced_rgb)
    punchy_rgb = color_enhancer.enhance(1.2)
    
    # Edge detection on alpha to create rim lightning / electrical aura
    alpha_np = np.array(a, dtype=np.float32) / 255.0
    # Gradient magnitude (Sobel / edge)
    gy, gx = np.gradient(alpha_np)
    edge_mag = np.sqrt(gx**2 + gy**2)
    edge_mag = np.clip(edge_mag * 12.0, 0.0, 1.0) # Boost edge
    
    # Create electric cyan-blue & warm accent glow
    edge_glow_np = np.zeros((h, w, 4), dtype=np.uint8)
    # Electric neon cyan/white edge
    edge_glow_np[..., 0] = (edge_mag * 180).astype(np.uint8) # R
    edge_glow_np[..., 1] = (edge_mag * 230).astype(np.uint8) # G
    edge_glow_np[..., 2] = (edge_mag * 255).astype(np.uint8) # B
    edge_glow_np[..., 3] = (edge_mag * 240).astype(np.uint8) # A
    edge_glow = Image.fromarray(edge_glow_np, 'RGBA').filter(ImageFilter.GaussianBlur(radius=3))
    
    # Composite the punchy cutout on top of the lightning glow
    lit_cutout = punchy_rgb.convert('RGBA')
    lit_cutout.putalpha(a)
    
    lightning_composite = Image.alpha_composite(edge_glow, lit_cutout)
    lightning_path = r'c:\Users\mohan\OneDrive\Desktop\Portfolio\Persona-portfolio\frontend\public\images\sathish_bike_lightning.png'
    lightning_composite.save(lightning_path)
    print("Saved lightning version:", lightning_path)
    
    return True

if __name__ == '__main__':
    create_variations()
