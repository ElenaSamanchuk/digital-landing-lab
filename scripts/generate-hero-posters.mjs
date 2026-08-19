/**
 * Extract background-only poster frames from hero video (no baked UI).
 * Replaces Figma frame exports that duplicated hero text/cards.
 */
import { execFile } from "node:child_process";
import { unlink } from "node:fs/promises";
import { promisify } from "node:util";
import ffmpegPath from "ffmpeg-static";
import path from "node:path";
import sharp from "sharp";

const execFileAsync = promisify(execFile);
const heroDir = path.resolve("public/assets/hero");
const videoPath = path.join(heroDir, "hero-desktop.mp4");

const posters = [
  { name: "poster-desktop.webp", width: 1400, height: 710 },
  { name: "poster-mobile.webp", width: 750, height: 1334 },
];

const framePath = path.join(heroDir, "_frame-temp.png");

await execFileAsync(ffmpegPath, [
  "-y",
  "-i",
  videoPath,
  "-vframes",
  "1",
  "-q:v",
  "2",
  framePath,
]);

for (const poster of posters) {
  const outPath = path.join(heroDir, poster.name);
  await sharp(framePath)
    .resize(poster.width, poster.height, { fit: "cover", position: "centre" })
    .webp({ quality: 82, effort: 6 })
    .toFile(outPath);
  console.log(`Wrote ${poster.name}`);
}

await unlink(framePath).catch(() => {});

console.log("Hero posters generated from video first frame.");
