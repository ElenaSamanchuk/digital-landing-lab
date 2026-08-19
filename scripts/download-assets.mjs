import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const assets = {
  "team-maria.png": "https://www.figma.com/api/mcp/asset/c13757bc-5eb6-4f08-b013-e35fbb9e1add.png",
  "team-olga.png": "https://www.figma.com/api/mcp/asset/e06d8bcc-1ea5-4002-9ee5-320a36e6ed7e.png",
  "team-alex.png": "https://www.figma.com/api/mcp/asset/a713d70e-d378-4244-9a3e-6831ebe0ed18.png",
  "case-apsy.png": "https://www.figma.com/api/mcp/asset/1be3a6f3-45c0-470c-b906-2b78c1bb6a48.png",
  "case-tha.png": "https://www.figma.com/api/mcp/asset/094c06ae-9ba7-4a9b-af72-d54e3d793331.png",
  "case-pinarin.png": "https://www.figma.com/api/mcp/asset/1219a1a1-458e-4577-a061-7614b57bd3d8.png",
  "case-ezo.png": "https://www.figma.com/api/mcp/asset/d578885b-8492-48b1-b96d-21aa17f0385b.png",
  "case-mostovoy.png": "https://www.figma.com/api/mcp/asset/4caa2c61-9f6e-4e1c-8cf2-d3d18cce80bb.png",
  "case-celine.png": "https://www.figma.com/api/mcp/asset/eea985ca-f2d9-4c7f-b4e6-705622fa4d2c.png",
  "case-agentezzo.png": "https://www.figma.com/api/mcp/asset/8d708622-908d-4ee9-813b-2b600a33689d.png",
  "case-hr.png": "https://www.figma.com/api/mcp/asset/81165cba-0c13-439d-b6fc-5649fa5b3d33.png",
  "case-extra-1.png": "https://www.figma.com/api/mcp/asset/fb771efa-4ec5-4ce0-9f13-f76443ffed64.png",
  "case-extra-2.png": "https://www.figma.com/api/mcp/asset/76d1fd3c-5a2a-48df-9d0a-8eb66fa88fe0.png",
  "block-standard.png": "https://www.figma.com/api/mcp/asset/97928201-5a72-4d92-bc67-3602fed48646.png",
  "block-zero.png": "https://www.figma.com/api/mcp/asset/41622dba-f9d4-47b0-92ef-afc553db4b31.png",
  "block-mechanic.png": "https://www.figma.com/api/mcp/asset/86caedcb-7d95-4951-a5fe-a663346e80e4.png",
  "mechanic-player.png": "https://www.figma.com/api/mcp/asset/c091ca34-705b-438a-8b61-eb46c0c56347.png",
  "mechanic-wheel.png": "https://www.figma.com/api/mcp/asset/c14019c7-3390-4b1a-9c74-a75b07585c86.png",
  "mechanic-quiz.png": "https://www.figma.com/api/mcp/asset/d1c9c492-e17c-454f-8086-400685fb9cb8.png",
  "mechanic-calc.png": "https://www.figma.com/api/mcp/asset/55368571-9dd4-4923-bdb6-51acf3d8a75a.png",
  "icon-cursor.png": "https://www.figma.com/api/mcp/asset/664b2fcc-e5ef-470f-af06-83b0b13193a4.svg",
  "icon-arrow-left.png": "https://www.figma.com/api/mcp/asset/82ae8a4d-b01f-483a-8a7e-0d9dec678799.svg",
  "icon-arrow-right.png": "https://www.figma.com/api/mcp/asset/bc14c969-f226-4891-8132-e1abd877b5dd.svg",
  "icon-menu.svg": "https://www.figma.com/api/mcp/asset/daccba0d-c4f0-4efe-8254-72e85388dbad.svg",
  "divider.svg": "https://www.figma.com/api/mcp/asset/93756827-38c4-42f9-a02d-e92acc0da4d1.svg",
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
