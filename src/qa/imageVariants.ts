/** Responsive image paths: mobile variant at 430w, desktop at 870w max. */

const MOBILE_SUFFIX = "-mobile.webp";

export function getResponsiveSrcSet(src: string): { src: string; srcSet?: string } {
  if (!src.endsWith(".webp") || src.includes(MOBILE_SUFFIX)) {
    return { src };
  }

  const mobileSrc = src.replace(/\.webp$/i, MOBILE_SUFFIX);
  if (!src.startsWith("/assets/case-")) {
    return { src };
  }

  return {
    src,
    srcSet: `${mobileSrc} 430w, ${src} 870w`,
  };
}
