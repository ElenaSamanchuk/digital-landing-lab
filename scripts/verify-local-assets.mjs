import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const forbidden = [
  /fonts\.googleapis\.com/,
  /fonts\.gstatic\.com/,
  /figma\.com\/api/,
  /<img[^>]+src=["']https?:\/\//i,
];

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath)));
    } else if (/\.(html|css|js)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await collectFiles(distDir);
const violations = [];

for (const file of files) {
  const content = await readFile(file, "utf8");
  for (const pattern of forbidden) {
    if (pattern.test(content)) {
      violations.push({ file: path.relative(distDir, file), pattern: String(pattern) });
    }
  }
}

if (violations.length > 0) {
  console.error("Local asset verification failed:");
  for (const item of violations) {
    console.error(`- ${item.file} matched ${item.pattern}`);
  }
  process.exit(1);
}

console.log(`Verified ${files.length} built files: no remote fonts or Figma assets.`);
