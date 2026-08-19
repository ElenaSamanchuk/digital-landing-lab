/** QA / accessibility helpers shared across sections. */

const base = import.meta.env.BASE_URL;

export const ASSET_PREFIX = `${base}assets/`;
export const HERO_ASSET_PREFIX = `${base}assets/hero/`;

export function assetPath(filename: string): string {
  return `${ASSET_PREFIX}${filename}`;
}

export function heroAssetPath(filename: string): string {
  return `${HERO_ASSET_PREFIX}${filename}`;
}

/** Resolve content paths like `/assets/foo.png` for GitHub Pages base URL. */
export function resolvePublicPath(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}

export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//.test(href);
}
