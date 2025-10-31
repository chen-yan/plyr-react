const fs = require('fs-extra');
const path = require('path');

const keepFiles = [
  'dist',
  'node_modules'
];

// Remove everything except what we want to keep
fs.readdirSync('.').forEach(file => {
  if (!keepFiles.includes(file)) {
    fs.removeSync(file);
    console.log(`Removed: ${file}`);
  }
});

// Copy dist contents to root
if (fs.existsSync('dist')) {
  fs.copySync('dist', '.', { overwrite: true });
  console.log('Copied dist/* to root');

  // Remove dist folder
  fs.removeSync('dist');
  console.log('Removed dist folder');
}