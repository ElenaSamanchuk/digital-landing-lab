import { useState } from "react";
import { blockTypes, mechanicSlides } from "../../content/blocks";
import { resolvePublicPath } from "../../qa/assets";
import { ArrowButton } from "../ui/ArrowButton";
import { KickerTitle } from "../ui/KickerTitle";
import { LinkPill } from "../ui/LinkPill";

export function BlocksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = mechanicSlides[activeIndex];
  const total = mechanicSlides.length;
  const current = String(activeIndex + 1).padStart(2, "0");
  const totalLabel = String(total).padStart(2, "0");

  const goPrev = () => {
    setActiveIndex((index) => (index - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((index) => (index + 1) % total);
  };

  return (
    <section className="section-shell py-14 md:py-[100px]" aria-labelledby="blocks-heading">
      <h2 id="blocks-heading" className="section-title">Чем отличаются блоки сайтов</h2>

      <div className="mt-8 grid gap-8 md:mt-[83px] md:grid-cols-3 md:gap-5">
        {blockTypes.map((block) => (
          <article key={block.title}>
            <KickerTitle className="text-center md:text-left">{block.title}</KickerTitle>
            <div className="mt-4 overflow-hidden rounded-card">
              <img
                src={resolvePublicPath(block.image)}
                alt={block.title}
                loading="lazy"
                decoding="async"
                className="aspect-[426/300] w-full object-cover"
              />
            </div>
            <div className="mt-5 space-y-4 font-body text-base font-extralight leading-[1.25] tracking-[-0.32px] text-ink">
              <p className="flex gap-2">
                <span className="shrink-0 font-medium text-accent-faded">+</span>
                <span>{block.pros}</span>
              </p>
              <p className="flex gap-2.5">
                <span className="shrink-0 font-medium text-accent-faded">-</span>
                <span>{block.cons}</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      <div id="mechanics" className="mt-16 md:mt-[100px]" aria-labelledby="mechanics-heading">
        <h2 id="mechanics-heading" className="section-title max-w-[618px]">
          Как могут быть реализованы игровые механики
        </h2>

        <div className="mt-8 grid gap-6 md:mt-12 xl:grid-cols-[minmax(0,870px)_minmax(0,1fr)] xl:items-start xl:gap-10">
          <div className="overflow-hidden rounded-card">
            <img
              src={resolvePublicPath(slide.image)}
              alt={slide.title}
              loading="lazy"
              decoding="async"
              className="aspect-[870/460] w-full object-cover"
            />
          </div>

          <div className="relative xl:min-h-[460px]" aria-live="polite">
            <p
              aria-hidden
              className="pointer-events-none absolute right-0 top-[280px] hidden font-display text-[125px] leading-[1.35] tracking-[-2.5px] text-accent xl:block"
            >
              <span className="text-accent-soft">{current}</span>/{totalLabel}
            </p>

            <p className="font-display text-base tracking-[-0.32px] text-accent-soft xl:hidden">
              <span>{current}</span>/{totalLabel}
            </p>

            <h3 className="mt-3 font-display text-base tracking-[-0.32px] text-ink xl:mt-0 xl:text-lg xl:tracking-[-0.36px]">
              {slide.title}
            </h3>

            <LinkPill label="Смотреть на сайте" href={slide.link} className="mt-6 xl:mt-10" />

            <div className="mt-8 flex gap-4 xl:absolute xl:bottom-0 xl:mt-0 xl:w-full">
              <ArrowButton direction="prev" onClick={goPrev} />
              <ArrowButton direction="next" onClick={goNext} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
