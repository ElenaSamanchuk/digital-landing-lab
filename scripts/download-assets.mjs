import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

/** Asset URLs from Figma MCP get_design_context — file HkCwtTRinN2TpQQDNf37DR */
const assets = {
  "team-maria.png": "https://www.figma.com/api/mcp/asset/205a7426-43f1-4bfd-a9af-335dbaf7b973.png",
  "team-olga.png": "https://www.figma.com/api/mcp/asset/9a17826b-f964-4526-9128-9ebc0f034b18.png",
  "team-elena.png": "https://www.figma.com/api/mcp/asset/02f03510-981f-4960-9acc-6bb00f244a7c.png",
  "case-apsy.png": "https://www.figma.com/api/mcp/asset/a851319b-15d8-4881-8a95-8dac73faa396.png",
  "case-tha.png": "https://www.figma.com/api/mcp/asset/eca91d3f-4f34-4e49-ab34-85621f0ec4ee.png",
  "case-pinarin.png": "https://www.figma.com/api/mcp/asset/d43ed05d-d9f3-424e-bd3f-66a4ba5fe43b.png",
  "case-ezo.png": "https://www.figma.com/api/mcp/asset/a043765d-66c6-465e-9da3-91fcf38fc5fc.png",
  "case-mostovoy.png": "https://www.figma.com/api/mcp/asset/905d1ef6-91aa-4122-ae21-d08f4728983d.png",
  "case-celine.png": "https://www.figma.com/api/mcp/asset/b303ae4e-a6a6-4077-bf62-3a274c804f36.png",
  "case-agentezzo.png": "https://www.figma.com/api/mcp/asset/1c087454-05a5-4d3b-98a5-19095833a780.png",
  "case-tarot-melek.png": "https://www.figma.com/api/mcp/asset/1c44999b-b219-4c5b-911e-661cc7282a52.png",
  "case-hera-tarolog.png": "https://www.figma.com/api/mcp/asset/d4ba3b07-d8f9-4aac-bad3-35c85a816b92.png",
  "case-callcenter.png": "https://www.figma.com/api/mcp/asset/d164a527-a0f9-43d0-8bfb-3b7af250c7c9.png",
  "case-sales-manager.png": "https://www.figma.com/api/mcp/asset/3d766fb6-0e77-4bd5-81c9-425c396360a7.png",
  "block-standard.png": "https://www.figma.com/api/mcp/asset/517ddbd9-db8e-43f7-ad22-d0993b6d88b1.png",
  "block-zero.png": "https://www.figma.com/api/mcp/asset/2224636c-45eb-4e07-90e6-5b17d593852e.png",
  "block-mechanic.png": "https://www.figma.com/api/mcp/asset/e92edd24-3d0f-4e8b-aa9f-154ddbcc88e6.png",
  "mechanic-player.png": "https://www.figma.com/api/mcp/asset/75339f56-4a45-42ab-a46b-c7cd41b1b5a1.png",
  "mechanic-wheel.png": "https://www.figma.com/api/mcp/asset/771ee4c8-3e7c-4fc5-9e46-b406843142c1.png",
  "mechanic-calc.png": "https://www.figma.com/api/mcp/asset/55368571-9dd4-4923-bdb6-51acf3d8a75a.png",
  "mechanic-quiz.png": "https://www.figma.com/api/mcp/asset/d1c9c492-e17c-454f-8086-400685fb9cb8.png",
  "icon-cursor.png": "https://www.figma.com/api/mcp/asset/d31267b3-927c-41fd-a338-d15ff709053c.svg",
  "icon-arrow-left.png": "https://www.figma.com/api/mcp/asset/e0afd436-8035-455c-8299-127792174897.svg",
  "icon-arrow-right.png": "https://www.figma.com/api/mcp/asset/23e3051d-54e8-466f-828c-78332b24393c.svg",
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
  console.log(`Saved ${filename}`);
}
