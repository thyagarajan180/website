const sharp = require('sharp');
const path = require('path');

const src = path.join(__dirname, 'public/studio-logo.jpg');
const dest = path.join(__dirname, 'public/logo-v6.png');

async function processLogo() {
  try {
    console.log('Force generating logo V6 (Corrected)...');
    
    const mask = await sharp(src)
      .resize(1000, 1000)
      .grayscale()
      .threshold(200)
      .toBuffer();

    // Create a pure white 3-channel image and join the 1-channel mask as alpha
    const white = Buffer.alloc(1000 * 1000 * 3, 255);
    
    await sharp(white, {
      raw: { width: 1000, height: 1000, channels: 3 }
    })
    .joinChannel(mask)
    .png()
    .toFile(dest);

    console.log('Logo V6 generated successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}

processLogo();
