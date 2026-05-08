const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const gallerySrc = path.join(__dirname, '../Tattoo Works');
const teamSrc = path.join(__dirname, '../Team members');

const galleryDest = path.join(__dirname, 'public/gallery');
const teamDest = path.join(__dirname, 'public/team');

// Ensure destination dirs exist
if (!fs.existsSync(galleryDest)) fs.mkdirSync(galleryDest, { recursive: true });
if (!fs.existsSync(teamDest)) fs.mkdirSync(teamDest, { recursive: true });

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
      webpFiles.push(destFileName);
    } catch (err) {
      console.error(`Failed to process ${file}:`, err.message);
    }
  }
  return webpFiles;
}

async function run() {
  console.log("Processing Gallery...");
  const galleryFiles = await processDirectory(gallerySrc, galleryDest, 1200, 80);
  
  console.log("\nProcessing Team...");
  const teamFiles = await processDirectory(teamSrc, teamDest, 800, 80);
  
  // Write out the JSON structure of processed files to easily update data.ts
  fs.writeFileSync('optimized-files.json', JSON.stringify({ gallery: galleryFiles, team: teamFiles }, null, 2));
  console.log("\nDone! Wrote optimized-files.json");
}

run();
