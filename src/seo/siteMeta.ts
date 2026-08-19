export const siteMeta = {
  lang: "ru",
  title: "Digital Landing Lab — сайт под ключ",
  description:
    "Digital Landing Lab — сайт под ключ: от текста до вёрстки. SEO, адаптивный дизайн и игровые механики для роста конверсии.",
  siteName: "Digital Landing Lab",
  canonical: "https://elenasamanchuk.github.io/digital-landing-lab/",
  themeColor: "#51acfe",
  ogImage: "/assets/block-zero.webp",
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteMeta.siteName,
  url: siteMeta.canonical,
  description: siteMeta.description,
  sameAs: [],
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteMeta.siteName,
  url: siteMeta.canonical,
  inLanguage: siteMeta.lang,
} as const;
