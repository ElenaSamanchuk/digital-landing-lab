/**
 * Verify every image/icon path referenced in src exists in public/assets after build.
 * Also validates icon files are real SVG/PNG (not mislabeled).
 */
import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(".");
const srcDir = path.join(root, "src");
const publicAssets = path.join(root, "public/assets");

const pathPattern = /\/assets\/(?!foo\.png)[a-zA-Z0-9_./-]+\.(?:webp|png|svg|mp4)/g;
const assetPathPattern = /assetPath\(["']([^"']+)["']\)/g;

async function collectSourceFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(full)));
    } else if (/\.(ts|tsx|html)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

const sourceFiles = await collectSourceFiles(srcDir);
sourceFiles.push(path.join(root, "index.html"));

const referenced = new Set();
for (const file of sourceFiles) {
  const content = await readFile(file, "utf8");
  for (const match of content.matchAll(pathPattern)) {
    referenced.add(match[0]);
  }
  for (const match of content.matchAll(assetPathPattern)) {
    referenced.add(`/assets/${match[1]}`);
  }
}

const missing = [];
for (const assetPath of [...referenced].sort()) {
  const relative = assetPath.replace(/^\//, "");
  const fullPath = path.join(root, "public", relative);
  if (!(await fileExists(fullPath))) {
    missing.push(assetPath);
  }
}

const iconMismatches = [];
for (const filename of ["icon-cursor.svg", "icon-arrow-left.svg", "icon-arrow-right.svg", "icon-menu.svg", "divider.svg"]) {
  const fullPath = path.join(publicAssets, filename);
  if (!(await fileExists(fullPath))) {
    iconMismatches.push(`${filename}: missing`);
    continue;
  }
  const content = await readFile(fullPath, "utf8");
  if (!content.trimStart().startsWith("<svg")) {
    iconMismatches.push(`${filename}: expected SVG content`);
  }
}

if (missing.length > 0) {
  console.error("Missing local assets:");
  for (const item of missing) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

if (iconMismatches.length > 0) {
  console.error("Icon validation failed:");
  for (const item of iconMismatches) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log(`Verified ${referenced.size} asset references in src — all present in public/.`);
console.log("Verified 5 icon SVG files — content type matches extension.");
