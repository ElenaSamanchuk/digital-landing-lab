import { useEffect, useState } from "react";
import { heroFeatures, site } from "../../content/site";
import { assetPath, heroAssetPath } from "../../qa/assets";
import { KickerTitle } from "../ui/KickerTitle";
import { PrimaryButton } from "../ui/PrimaryButton";

function HeroVideoLayer({
  variant,
  playing,
  failed,
  onPlaying,
  onError,
  posterReady,
}: {
  variant: "desktop" | "mobile";
  playing: boolean;
  failed: boolean;
  onPlaying: () => void;
  onError: () => void;
  posterReady: boolean;
}) {
  const isDesktop = variant === "desktop";
  const poster = isDesktop ? "poster-desktop.webp" : "poster-mobile.webp";
  const video = isDesktop ? "hero-desktop.mp4" : "hero-mobile.mp4";
  const showPoster = !playing && !failed;
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    if (!posterReady || failed) return;

    const startLoading = () => setLoadVideo(true);
    const idleCallback = globalThis.requestIdleCallback?.(startLoading, { timeout: 2500 });
    const timeoutId = idleCallback ? undefined : globalThis.setTimeout(startLoading, 2000);

    return () => {
      if (idleCallback !== undefined) {
        globalThis.cancelIdleCallback?.(idleCallback);
      }
      if (timeoutId !== undefined) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, [posterReady, failed]);

  return (
    <>
      {showPoster ? (
        <img
          src={heroAssetPath(poster)}
          alt=""
          width={isDesktop ? 1400 : 750}
          height={isDesktop ? 710 : 1334}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      {loadVideo && !failed ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onPlaying={onPlaying}
          onError={onError}
        >
          <source src={heroAssetPath(video)} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}

function HeroBackground() {
  const [desktopPlaying, setDesktopPlaying] = useState(false);
  const [mobilePlaying, setMobilePlaying] = useState(false);
  const [desktopFailed, setDesktopFailed] = useState(false);
  const [mobileFailed, setMobileFailed] = useState(false);
  const [posterReady, setPosterReady] = useState(false);

  useEffect(() => {
    const mobilePoster = new Image();
    mobilePoster.src = heroAssetPath("poster-mobile.webp");
    mobilePoster.onload = () => setPosterReady(true);
    mobilePoster.onerror = () => setPosterReady(true);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-page" aria-hidden>
      <div className="hero-bg-layer hero-bg-desktop">
        <HeroVideoLayer
          variant="desktop"
          playing={desktopPlaying}
          failed={desktopFailed}
          posterReady={posterReady}
          onPlaying={() => setDesktopPlaying(true)}
          onError={() => setDesktopFailed(true)}
        />
      </div>

      <div className="hero-bg-layer hero-bg-mobile">
        <HeroVideoLayer
          variant="mobile"
          playing={mobilePlaying}
          failed={mobileFailed}
          posterReady={posterReady}
          onPlaying={() => setMobilePlaying(true)}
          onError={() => setMobileFailed(true)}
        />
      </div>
    </div>
  );
}

function HeroNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative z-20 flex items-center justify-between px-[15px] pt-[15px] md:px-10 md:pt-5 md:items-start">
        <a
          href="#top"
          className="font-display text-base tracking-[-0.32px] text-accent md:text-[26px] md:tracking-[-0.52px]"
        >
          {site.brand}
        </a>

        <nav
          className="hidden items-center gap-10 font-body text-base font-extralight tracking-[-0.32px] text-ink md:flex"
          aria-label="Основная навигация"
        >
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          <img
            src={assetPath("icon-menu.svg")}
            alt=""
            width={25}
            height={12}
            className="h-2.5 w-[25px]"
          />
        </button>
      </div>

      {open ? (
        <nav
          className="relative z-20 mx-4 mt-2 rounded-card bg-page/95 px-4 py-4 backdrop-blur-md md:hidden"
          aria-label="Мобильная навигация"
        >
          <ul className="flex flex-col gap-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-1 font-body text-base font-extralight text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="section-shell pb-10 pt-2.5 md:pb-20 md:pt-5">
      <div className="relative mx-auto min-h-[632px] max-w-[300px] overflow-hidden rounded-card md:max-w-none md:min-h-[710px]">
        <HeroBackground />

        <div className="relative z-10 md:px-10 md:pb-10 md:pt-5">
          <HeroNav />

          <div className="mx-auto flex max-w-[270px] flex-col items-center px-[15px] pb-8 pt-[42px] text-center md:max-w-4xl md:px-0 md:pt-16">
            <h1 className="font-display text-[26px] font-normal leading-[1.2] tracking-[-0.52px] text-ink md:text-[52px] md:tracking-[-1.04px]">
              <span className="block md:inline">{site.hero.title[0]} </span>
              <span className="block md:inline">
                <span className="md:hidden">от текста </span>
                <span className="hidden md:inline">{site.hero.title[1]}</span>
              </span>
              <span className="block md:hidden">до верстки</span>
            </h1>
            <p className="mt-4 max-w-[236px] font-body text-lg font-light tracking-[-0.36px] text-ink md:mt-6 md:max-w-[420px] md:text-[22px] md:tracking-[-0.44px]">
              {site.hero.subtitle}
            </p>
            <PrimaryButton className="mt-6 h-[45px] min-w-[270px] text-sm md:mt-8 md:h-[55px] md:min-w-[300px] md:text-base">
              {site.hero.cta}
            </PrimaryButton>
          </div>

          <div className="mx-auto flex max-w-[270px] flex-col gap-[15px] px-[15px] pb-6 md:max-w-none md:grid md:grid-cols-3 md:gap-5 md:px-10 md:pb-8">
            {heroFeatures.map((feature) => (
              <article
                key={feature.title}
                className="glass-card min-h-[95px] px-4 py-5 md:min-h-[125px] md:px-6 md:py-[30px]"
              >
                <div className="flex h-full flex-col items-center justify-center gap-[15px] text-center md:gap-5">
                  <KickerTitle className="text-base md:text-lg">{feature.title}</KickerTitle>
                  <p className="max-w-[160px] font-body text-sm font-extralight leading-[1.25] tracking-[-0.28px] text-ink md:max-w-none md:text-base md:tracking-[-0.32px]">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
