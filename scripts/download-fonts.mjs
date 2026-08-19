import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const CSS_URL =
  "https://fonts.googleapis.com/css2?family=Geologica:wght@200;300;400;500&family=Unbounded:wght@400;500&display=swap";

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const fontsDir = path.resolve("public/fonts");
const cssOut = path.resolve("src/styles/fonts.css");

await mkdir(fontsDir, { recursive: true });

const cssResponse = await fetch(CSS_URL, { headers: { "User-Agent": UA } });
if (!cssResponse.ok) {
  throw new Error(`Failed to fetch font CSS: ${cssResponse.status}`);
}

const cssText = await cssResponse.text();
const faceBlocks = cssText.match(/@font-face\s*\{[^}]+\}/g) ?? [];
const urlToLocal = new Map();
const localFaces = [];

for (const block of faceBlocks) {
  const family = block.match(/font-family:\s*'([^']+)'/)?.[1];
  const weight = block.match(/font-weight:\s*([^;]+);/)?.[1]?.trim();
  const style = block.match(/font-style:\s*(\w+)/)?.[1] ?? "normal";
  const srcUrl = block.match(/url\((https:[^)]+)\)/)?.[1];
  const unicodeRange = block.match(/unicode-range:\s*([^;]+);/)?.[1]?.trim();

  if (!family || !weight || !srcUrl) continue;

  let localUrl = urlToLocal.get(srcUrl);
  if (!localUrl) {
    const slug = family.toLowerCase().replace(/\s+/g, "-");
    const filename = `${slug}-${urlToLocal.size + 1}.woff2`;
    const filePath = path.join(fontsDir, filename);

    const fileResponse = await fetch(srcUrl);
    if (!fileResponse.ok) {
      throw new Error(`Failed to download ${filename}: ${fileResponse.status}`);
    }

    await writeFile(filePath, Buffer.from(await fileResponse.arrayBuffer()));
    localUrl = `/fonts/${filename}`;
    urlToLocal.set(srcUrl, localUrl);
    console.log(`Saved ${filename}`);
  }

  localFaces.push({ family, weight, style, localUrl, unicodeRange });
}

const cssOutput = localFaces
  .map(({ family, weight, style, localUrl, unicodeRange }) => {
    const rangeLine = unicodeRange ? `\n  unicode-range: ${unicodeRange};` : "";
    return `@font-face {
  font-family: "${family}";
  font-style: ${style};
  font-weight: ${weight};
  font-display: swap;
  src: url("${localUrl}") format("woff2");${rangeLine}
}`;
  })
  .join("\n\n");

await writeFile(cssOut, `${cssOutput}\n`);
console.log(`Wrote ${cssOut} (${localFaces.length} @font-face rules)`);
