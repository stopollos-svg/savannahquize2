/**
 * Build and Sync Script for Vercel Deployment & Android Assets
 */
const fs = require('fs');
const path = require('path');

const filesToSync = [
  'index.html',
  'style.css',
  'app.js',
  'favicon.svg',
  'manifest.json',
  'robots.txt'
];

console.log('🚀 Preparing Savannah Quiz for Vercel deployment...');

// 1. Ensure public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 2. Ensure Android assets directory exists
const assetsDir = path.join(__dirname, 'app', 'src', 'main', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// 3. Copy files to public/ and app/src/main/assets/
filesToSync.forEach(file => {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    const destPublic = path.join(publicDir, file);
    fs.copyFileSync(src, destPublic);

    if (file !== 'robots.txt') { // robots.txt not required inside android assets
      const destAssets = path.join(assetsDir, file);
      fs.copyFileSync(src, destAssets);
    }
    console.log(`  ✓ Synced ${file} -> public/ and assets/`);
  } else {
    console.warn(`  ⚠️ File not found in root: ${file}`);
  }
});

console.log('✅ Savannah Quiz is 100% ready for Vercel deployment!');
