import { useState } from "react";
import { heroFeatures, site } from "../../content/site";
import { heroAssetPath } from "../../qa/assets";
import { KickerTitle } from "../ui/KickerTitle";
import { PrimaryButton } from "../ui/PrimaryButton";

function HeroBackground() {
  const [desktopFailed, setDesktopFailed] = useState(false);
  const [mobileFailed, setMobileFailed] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 hidden md:block">
        <img
          src={heroAssetPath("poster-desktop.png")}
          alt=""
          className="h-full w-full object-cover"
        />
        {!desktopFailed && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={heroAssetPath("poster-desktop.png")}
            onError={() => setDesktopFailed(true)}
          >
            <source src={heroAssetPath("hero-desktop.mp4")} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="absolute inset-0 md:hidden">
        <img
          src={heroAssetPath("poster-mobile.png")}
          alt=""
          className="h-full w-full object-cover"
        />
        {!mobileFailed && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={heroAssetPath("poster-mobile.png")}
            onError={() => setMobileFailed(true)}
          >
            <source src={heroAssetPath("hero-mobile.mp4")} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="section-shell pb-16 pt-6 md:pb-24 md:pt-8">
      <div className="relative overflow-hidden rounded-card">
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
