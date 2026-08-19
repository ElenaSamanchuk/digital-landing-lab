/**
 * Hero background video + posters for Digital Landing Lab.
 *
 * Figma MCP cannot export embedded video fills from node 353:584 ("image 1").
 * Canonical source: ElenaSamanchuk/videohost, branch gh-pages, file bg.mp4
 *   https://raw.githubusercontent.com/ElenaSamanchuk/videohost/gh-pages/bg.mp4
 *
 * Posters: export Frame 4 via Figma download_assets (353:583 desktop, 408:869 mobile).
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("public/assets/hero");
const videoUrl =
  "https://raw.githubusercontent.com/ElenaSamanchuk/videohost/gh-pages/bg.mp4";

await mkdir(outDir, { recursive: true });

console.log("Downloading hero video from videohost…");
const response = await fetch(videoUrl);
if (!response.ok) {
  throw new Error(`Failed to download bg.mp4: ${response.status}`);
}

const buffer = Buffer.from(await response.arrayBuffer());
await writeFile(path.join(outDir, "hero-desktop.mp4"), buffer);
await writeFile(path.join(outDir, "hero-mobile.mp4"), buffer);

console.log(`Saved hero-desktop.mp4 and hero-mobile.mp4 (${buffer.length} bytes)`);
console.log("Posters (poster-desktop.png, poster-mobile.png) — refresh via Figma MCP.");
