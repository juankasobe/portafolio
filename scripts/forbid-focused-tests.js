const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const sourceRoot = path.join(root, 'src');
const focusedTestPattern = /\b(?:fit|fdescribe)\s*\(/;
const checkedExtensions = new Set(['.js', '.ts']);

function collectFiles(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectFiles(fullPath));
      continue;
    }

    if (entry.isFile() && checkedExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

const matches = collectFiles(sourceRoot).filter((file) => {
  const content = fs.readFileSync(file, 'utf8');
  return focusedTestPattern.test(content);
});

if (matches.length > 0) {
  console.error('Focused Jasmine tests are not allowed in CI:');
  for (const file of matches) {
    console.error(`- ${path.relative(root, file)}`);
  }
  process.exit(1);
}

console.log('No focused Jasmine tests found.');
