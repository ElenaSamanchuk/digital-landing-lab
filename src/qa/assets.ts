/** QA / accessibility helpers shared across sections. */

export const ASSET_PREFIX = "/assets/";
export const HERO_ASSET_PREFIX = "/assets/hero/";

export function assetPath(filename: string): string {
  return `${ASSET_PREFIX}${filename}`;
}

export function heroAssetPath(filename: string): string {
  return `${HERO_ASSET_PREFIX}${filename}`;
}

export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//.test(href);
}
