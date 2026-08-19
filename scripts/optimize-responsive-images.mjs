/**
 * Resize and recompress WebP assets; generate 430w mobile variants for case images.
 */
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetsDir = path.resolve("public/assets");
const SKIP_DIRS = new Set(["hero"]);
const CASE_PREFIX = "case-";
const DESKTOP_MAX_WIDTH = 870;
const MOBILE_MAX_WIDTH = 430;
const QUALITY = 78;
const MIN_BYTES = 200_000;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) {
        files.push(...(await walk(fullPath)));
      }
      continue;
    }
    if (/\.webp$/i.test(entry.name) && !/-mobile\.webp$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)}KB`;
}

const files = await walk(assetsDir);
const summary = [];

for (const file of files) {
  const base = path.basename(file);
  const { size: before } = await stat(file);
  const image = sharp(file);
  const meta = await image.metadata();
  const isCase = base.startsWith(CASE_PREFIX);
  const needsResize = (meta.width ?? 0) > DESKTOP_MAX_WIDTH || before >= MIN_BYTES;

  if (!needsResize && !isCase) continue;

  const desktopWidth = Math.min(meta.width ?? DESKTOP_MAX_WIDTH, DESKTOP_MAX_WIDTH);

  await sharp(file)
    .resize({ width: desktopWidth, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(`${file}.tmp`);

  await unlink(file);
  await sharp(`${file}.tmp`).toFile(file);
  await unlink(`${file}.tmp`);

  const { size: afterDesktop } = await stat(file);

  let mobileAfter = null;
  if (isCase) {
    const mobilePath = file.replace(/\.webp$/i, "-mobile.webp");
    await sharp(file)
      .resize({ width: MOBILE_MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(mobilePath);
    mobileAfter = (await stat(mobilePath)).size;
  }

  summary.push({
    file: path.relative(assetsDir, file),
    before,
    afterDesktop,
    mobile: mobileAfter,
    width: desktopWidth,
  });
}

console.log("Responsive image optimization:");
console.log("| File | Before | Desktop | Mobile |");
console.log("|------|--------|---------|--------|");
for (const item of summary) {
  const mobile = item.mobile ? formatKb(item.mobile) : "—";
  console.log(
    `| ${item.file} | ${formatKb(item.before)} | ${formatKb(item.afterDesktop)} (${item.width}w) | ${mobile} |`,
  );
}
