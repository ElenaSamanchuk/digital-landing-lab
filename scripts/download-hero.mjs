/**
 * Hero background assets from Figma file HkCwtTRinN2TpQQDNf37DR.
 *
 * The hero layer "image 1" (353:584 desktop, 408:870 mobile) uses a video fill.
 * Figma MCP cannot export embedded video fills directly — download_assets returns
 * a 149-byte PNG stub and export_video rejects nested frames.
 *
 * Workaround: use export_video on top-level frames, then download posters via
 * download_assets on the hero Frame 4 nodes (353:583 / 408:869).
 *
 *   Desktop video: export_video node 353:581 → hero-desktop.mp4
 *   Mobile video:  export_video node 408:868 → hero-mobile.mp4
 *   Desktop poster: download_assets node 353:583 → poster-desktop.png
 *   Mobile poster:  download_assets node 408:869 → poster-mobile.png
 *
 * Re-run via Figma MCP when URLs expire; committed files in public/assets/hero/ are canonical.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("public/assets/hero");

await mkdir(outDir, { recursive: true });

console.log(`Hero assets live in ${outDir}.`);
console.log("Refresh via Figma MCP export_video + download_assets (see script header).");
