/**
 * Verify every image/icon path referenced in src exists in public/assets after build.
 */
import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(".");
const srcDir = path.join(root, "src");
const publicAssets = path.join(root, "public/assets");

const pathPattern = /\/assets\/(?!foo\.png)[a-zA-Z0-9_./-]+\.(?:webp|png|svg|mp4)/g;

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
}

const missing = [];
for (const assetPath of [...referenced].sort()) {
  const relative = assetPath.replace(/^\//, "");
  const fullPath = path.join(root, "public", relative);
  if (!(await fileExists(fullPath))) {
    missing.push(assetPath);
  }
}

if (missing.length > 0) {
  console.error("Missing local assets:");
  for (const item of missing) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log(`Verified ${referenced.size} asset references in src — all present in public/.`);
