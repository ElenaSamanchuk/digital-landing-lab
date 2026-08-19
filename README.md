# Digital Landing Lab

Лендинг студии «Digital Landing Lab», свёрстанный по макетам Figma (desktop + mobile).

## Стек

| Слой | Технологии |
|------|------------|
| **JS / фреймворк** | React 19, TypeScript, Vite 8 |
| **CSS** | Tailwind CSS 3, PostCSS, Autoprefixer |
| **Сборка** | `tsc` + Vite, browserslist (`.browserslistrc`) |
| **Линт** | oxlint |

## Структура проекта

```
src/
  content/          # Копирайтинг — тексты, кейсы, тарифы, команда
  components/
    ui/             # UI-примитивы (кнопки, заголовки, pills)
    layout/         # Шапка, навигация
    sections/       # Секции страницы (hero, кейсы, механики…)
  styles/           # Глобальные стили, @font-face, design tokens
  seo/              # Meta-конфиг, JSON-LD
  qa/               # Хелперы для локальных ассетов и QA
public/
  assets/           # Изображения из Figma (PNG/SVG)
  fonts/            # Локальные woff2 (Geologica, Unbounded)
scripts/
  download-assets.mjs
  download-fonts.mjs
  verify-local-assets.mjs
```

### Дисциплины

- **Копирайтинг** → `src/content/` — весь текст вынесен из компонентов
- **UX / UI** → `src/components/` — секции и примитивы по макету Figma
- **CSS** → `src/styles/` + Tailwind tokens в `tailwind.config.js`
- **JS** → React functional components, hooks только где нужна интерактивность (карусель, меню)
- **SEO** → `index.html` (meta, OG, canonical) + `src/seo/` (JSON-LD)
- **QA** → `npm run check`, skip-link, aria-метки, `scripts/verify-local-assets.mjs`
- **Адаптив** → mobile-first, breakpoints `md:` (768px+), `xl:` (1280px+), min-width 320px
- **Кроссбраузерность** → Autoprefixer, `@supports` fallbacks для `backdrop-filter` и `scroll-behavior`

## Локальные ресурсы

Шрифты и картинки **не** загружаются с CDN в runtime.

```bash
npm run download-fonts   # public/fonts/ + src/styles/fonts.css
npm run download-assets  # public/assets/ из Figma MCP
```

## Hero video

Фон hero — локальный MP4 из репозитория [videohost](https://github.com/ElenaSamanchuk/videohost) (`gh-pages/bg.mp4`):

```bash
npm run download-hero   # public/assets/hero/hero-desktop.mp4 + hero-mobile.mp4
```

Постеры: `poster-desktop.png`, `poster-mobile.png` (из Figma Frame 4).

## Live

**https://ElenaSamanchuk.github.io/digital-landing-lab/**

## Команды

```bash
npm run dev      # dev-сервер
npm run build    # production-сборка
npm run check    # tsc + build + проверка отсутствия remote fonts/CDN
npm run preview  # просмотр dist/
```

## SEO checklist

- [x] `lang="ru"`, title, description
- [x] Open Graph + Twitter Card
- [x] Canonical (placeholder `https://example.com/` — заменить перед деплоем)
- [x] JSON-LD Organization + WebSite
- [x] Один `<h1>` на странице
- [x] Семантические `<section>`, `<main>`, `<nav>`, `aria-labelledby`

## Перед деплоем

1. Заменить `https://example.com/` в `index.html` и `src/seo/siteMeta.ts`
2. Запустить `npm run check`
3. Опционально: сжать PNG в `public/assets/` (кейсы ~5–10 MB каждый)
