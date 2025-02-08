const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'node_modules', '.bin', 'tsc');

fs.chmodSync(targetPath, '755');
console.log(`Permissions for ${targetPath} set to 755`);

