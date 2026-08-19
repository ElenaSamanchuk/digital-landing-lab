/**
 * Compress large PNG assets to WebP for faster GitHub Pages loads.
 */
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetsDir = path.resolve("public/assets");
const MIN_BYTES = 200_000;
const SKIP = new Set(["hero"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP.has(entry.name)) {
        files.push(...(await walk(fullPath)));
      }
      continue;
    }
    if (/\.png$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await walk(assetsDir);
const summary = [];

for (const file of files) {
  const { size: before } = await stat(file);
  if (before < MIN_BYTES) continue;

  const webpPath = file.replace(/\.png$/i, ".webp");
  await sharp(file).webp({ quality: 80, effort: 6 }).toFile(webpPath);
  const { size: after } = await stat(webpPath);

  summary.push({
    file: path.relative(assetsDir, file),
    before,
    after,
    webp: path.relative(assetsDir, webpPath),
  });
}

console.log("Optimized images:");
for (const item of summary) {
  console.log(
    `- ${item.file}: ${(item.before / 1024 / 1024).toFixed(1)}MB -> ${(item.after / 1024 / 1024).toFixed(1)}MB (${item.webp})`,
  );
}
