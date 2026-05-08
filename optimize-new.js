const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const gallerySrc = path.join(__dirname, '../new images');
const galleryDest = path.join(__dirname, 'public/gallery');

// Ensure destination dir exists
if (!fs.existsSync(galleryDest)) fs.mkdirSync(galleryDest, { recursive: true });

async function processDirectory(src, dest, maxWidth, quality) {
  const files = fs.readdirSync(src);
  const webpFiles = [];
  
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png|webp|heic)$/i)) continue;
    
    const srcPath = path.join(src, file);
    const fileNameWithoutExt = path.parse(file).name;
    const destFileName = `${fileNameWithoutExt.replace(/[^a-zA-Z0-9]/g, '_')}.webp`;
    const destPath = path.join(dest, destFileName);
    
    try {
      await sharp(srcPath)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality })
        .toFile(destPath);
      console.log(`Optimized: ${file} -> ${destFileName}`);
      webpFiles.push({
        original: file,
        optimized: destFileName
      });
    } catch (err) {
      console.error(`Failed to process ${file}:`, err.message);
    }
  }
  return webpFiles;
}

async function run() {
  console.log("Processing New Gallery Images...");
  const galleryFiles = await processDirectory(gallerySrc, galleryDest, 1200, 80);
  
  fs.writeFileSync('new-optimized-files.json', JSON.stringify({ gallery: galleryFiles }, null, 2));
  console.log("\nDone! Wrote new-optimized-files.json");
}

run();
