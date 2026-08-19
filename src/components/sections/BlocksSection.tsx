import { useState } from "react";
import { blockTypes, mechanicSlides } from "../../content/blocks";
import { ArrowButton } from "../ui/ArrowButton";
import { CroppedImage } from "../ui/CroppedImage";
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
    <section className="section-shell section-inset py-14 md:py-[100px]" aria-labelledby="blocks-heading">
      <h2 id="blocks-heading" className="section-title">Чем отличаются блоки сайтов</h2>

      <div className="mt-8 grid gap-8 md:mt-[83px] md:grid-cols-3 md:gap-5">
        {blockTypes.map((block) => (
          <article key={block.title}>
            <KickerTitle className="text-center md:text-left">{block.title}</KickerTitle>
            <div className="relative mt-4 aspect-[426/300] overflow-hidden rounded-card">
              <CroppedImage
                src={block.image}
                alt={block.title}
                width={426}
                height={300}
                loading="lazy"
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

        <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-[minmax(0,870px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="relative aspect-[870/460] overflow-hidden rounded-card">
            <CroppedImage
              src={slide.image}
              alt={slide.title}
              width={870}
              height={460}
              loading="lazy"
            />
          </div>

          <div className="relative lg:min-h-[460px]" aria-live="polite">
            <p
              aria-hidden
              className="pointer-events-none absolute right-0 top-[280px] hidden font-display text-[125px] leading-[1.35] tracking-[-2.5px] text-accent lg:block"
            >
              <span className="text-accent-soft">{current}</span>/{totalLabel}
            </p>

            <p className="font-display text-base tracking-[-0.32px] text-accent-soft lg:hidden">
              <span>{current}</span>/{totalLabel}
            </p>

            <h3 className="mt-3 font-display text-base tracking-[-0.32px] text-ink lg:mt-0 lg:text-lg lg:tracking-[-0.36px]">
              {slide.title}
            </h3>

            <LinkPill label="Смотреть на сайте" href={slide.link} className="mt-6 lg:mt-10" />

            <div className="mt-8 flex gap-4 lg:absolute lg:bottom-0 lg:mt-0 lg:w-full">
              <ArrowButton direction="prev" onClick={goPrev} />
              <ArrowButton direction="next" onClick={goNext} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
