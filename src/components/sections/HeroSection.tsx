import { useState } from "react";
import { heroFeatures, site } from "../../content/site";
import { heroAssetPath } from "../../qa/assets";
import { KickerTitle } from "../ui/KickerTitle";
import { PrimaryButton } from "../ui/PrimaryButton";

function HeroVideoLayer({
  variant,
  playing,
  failed,
  onPlaying,
  onError,
}: {
  variant: "desktop" | "mobile";
  playing: boolean;
  failed: boolean;
  onPlaying: () => void;
  onError: () => void;
}) {
  const isDesktop = variant === "desktop";
  const poster = isDesktop ? "poster-desktop.webp" : "poster-mobile.webp";
  const video = isDesktop ? "hero-desktop.mp4" : "hero-mobile.mp4";
  const showPoster = !playing && !failed;

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
      {!failed ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
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

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-page" aria-hidden>
      <div className="hero-bg-layer hero-bg-desktop">
        <HeroVideoLayer
          variant="desktop"
          playing={desktopPlaying}
          failed={desktopFailed}
          onPlaying={() => setDesktopPlaying(true)}
          onError={() => setDesktopFailed(true)}
        />
      </div>

      <div className="hero-bg-layer hero-bg-mobile">
        <HeroVideoLayer
          variant="mobile"
          playing={mobilePlaying}
          failed={mobileFailed}
          onPlaying={() => setMobilePlaying(true)}
          onError={() => setMobileFailed(true)}
        />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="section-shell pb-16 pt-6 md:pb-24 md:pt-8">
      <div className="relative min-h-[520px] overflow-hidden rounded-card md:min-h-[710px]">
        <HeroBackground />

        <div className="relative z-10 px-4 py-12 md:px-10 md:py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h1 className="font-display text-[26px] font-normal leading-[1.2] tracking-[-0.52px] text-ink md:text-[52px] md:tracking-[-1.04px]">
              {site.hero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-md font-body text-lg font-light tracking-[-0.36px] text-ink md:mt-6 md:text-[22px] md:tracking-[-0.44px]">
              {site.hero.subtitle}
            </p>
            <PrimaryButton className="mt-8 min-w-[270px] md:min-w-[300px]">
              {site.hero.cta}
            </PrimaryButton>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-3 md:mt-16 md:grid-cols-3 md:gap-5">
            {heroFeatures.map((feature) => (
              <article
                key={feature.title}
                className="glass-card min-h-[95px] px-4 py-5 md:min-h-[125px] md:px-6 md:py-7"
              >
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <KickerTitle className="text-base md:text-lg">{feature.title}</KickerTitle>
                  <p className="mt-3 max-w-xs font-body text-sm font-extralight leading-[1.25] tracking-[-0.28px] text-ink md:mt-5 md:text-base md:tracking-[-0.32px]">
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
