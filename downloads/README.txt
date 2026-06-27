DOWNLOADS FOLDER
================

This folder contains downloadable 3D model files that customers purchase.

HOW TO ADD MODEL FILES:
-----------------------
1. Create ZIP files of your 3D models (e.g., robot-model.zip, castle-model.zip)
2. Place them in this folder
3. The download paths in main.js should reference these files:
   - downloads/robot-model.zip
   - downloads/castle-model.zip
   - downloads/spaceship-model.zip

EXAMPLE STRUCTURE:
------------------
downloads/
  ├── robot-model.zip
  ├── castle-model.zip
  ├── spaceship-model.zip
  └── README.txt (this file)

GITHUB PAGES NOTES:
-------------------
- Files in this folder will be accessible via GitHub Pages
- Make sure file sizes are reasonable (GitHub doesn't have strict limits for regular files)
- Large files (>100MB) may take longer to download
- Consider using a CDN or cloud storage for very large files

FILE SIZE RECOMMENDATIONS:
--------------------------
- Small models (simple geometry): 5-20 MB
- Medium models (detailed): 20-50 MB
- Large models (highly detailed): 50-200 MB
