import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

/** Asset URLs from Figma MCP get_design_context — file HkCwtTRinN2TpQQDNf37DR, node 353:581 */
const assets = {
  "team-maria.png": "https://www.figma.com/api/mcp/asset/087ec260-27ae-45f1-b635-827f207f6901.png",
  "team-olga.png": "https://www.figma.com/api/mcp/asset/143d782e-df56-4b2a-bf06-2f698de64b2a.png",
  "team-elena.png": "https://www.figma.com/api/mcp/asset/97bcb657-b2d8-43be-a0a2-600f745b6a8c.png",
  "case-callcenter.png": "https://www.figma.com/api/mcp/asset/14b24a77-23c3-4245-916c-039e851db90f.png",
  "case-sales-manager.png": "https://www.figma.com/api/mcp/asset/44267c00-76af-4cd1-8a40-6812c944941a.png",
  "case-apsy.png": "https://www.figma.com/api/mcp/asset/35f5f2b9-bdab-4d3c-9ce8-1c547a78e9cf.png",
  "case-tha.png": "https://www.figma.com/api/mcp/asset/45399a1d-a5c3-4ffc-afe3-76b5b68dea23.png",
  "case-pinarin.png": "https://www.figma.com/api/mcp/asset/c554cf80-8e0b-452e-84df-b0bc28ff3bef.png",
  "case-ezo.png": "https://www.figma.com/api/mcp/asset/9d64319c-eb56-44ed-b2f5-78c985d78f8e.png",
  "case-mostovoy.png": "https://www.figma.com/api/mcp/asset/462c024c-d852-42d8-ac57-332318ae29f7.png",
  "case-celine.png": "https://www.figma.com/api/mcp/asset/8f842cdb-f62d-4cce-ad77-ba1e62036d2a.png",
  "case-agentezzo.png": "https://www.figma.com/api/mcp/asset/050508f7-8a40-4126-b7a4-73224bcdb59b.png",
  "case-tarot-melek.png": "https://www.figma.com/api/mcp/asset/421298d4-ad01-4465-9f89-b825e3af1ea3.png",
  "case-hera-tarolog.png": "https://www.figma.com/api/mcp/asset/6466c49b-e1ef-466d-bfc1-fee3ffe4a715.png",
  "block-standard.png": "https://www.figma.com/api/mcp/asset/205b941a-8900-46bf-aa02-fc0027e981b9.png",
  "block-zero.png": "https://www.figma.com/api/mcp/asset/0dbd1821-3c27-4a56-b127-38a24f540768.png",
  "block-mechanic.png": "https://www.figma.com/api/mcp/asset/08668f5a-d877-496a-8c82-be70150d45a6.png",
  "mechanic-player.png": "https://www.figma.com/api/mcp/asset/d2001718-eba8-429b-81ea-a5396ec3741e.png",
  "mechanic-wheel.png": "https://www.figma.com/api/mcp/asset/c14019c7-3390-4b1a-9c74-a75b07585c86.png",
  "mechanic-calc.png": "https://www.figma.com/api/mcp/asset/6ea8781f-17c9-4dc9-b6cb-282fad55bd8a",
  "mechanic-quiz.png": "https://www.figma.com/api/mcp/asset/ff29af92-ce61-4dc2-8043-466115f5bcd9",
  "icon-cursor.svg": "https://www.figma.com/api/mcp/asset/d31267b3-927c-41fd-a338-d15ff709053c.svg",
  "icon-arrow-left.svg": "https://www.figma.com/api/mcp/asset/e0afd436-8035-455c-8299-127792174897.svg",
  "icon-arrow-right.svg": "https://www.figma.com/api/mcp/asset/23e3051d-54e8-466f-828c-78332b24393c.svg",
  "icon-menu.svg": "https://www.figma.com/api/mcp/asset/daccba0d-c4f0-4efe-8254-72e85388dbad.svg",
  "divider.svg": "https://www.figma.com/api/mcp/asset/c516beab-c2b8-439d-bebe-1bdac4a86a68.svg",
};

const outDir = path.resolve("public/assets");

await mkdir(outDir, { recursive: true });

for (const [filename, url] of Object.entries(assets)) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${filename}: ${response.status}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(path.join(outDir, filename), buffer);
  console.log(`Saved ${filename} (${buffer.length} bytes)`);
}
