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
    <section
      className="section-shell section-inset section-deferred py-14 md:py-[100px]"
      aria-labelledby="blocks-heading"
    >
      <h2 id="blocks-heading" className="section-title px-2.5 md:px-0">
        Чем отличаются блоки сайтов
      </h2>

      <div className="mt-8 flex flex-col gap-12 md:mt-[83px] md:grid md:grid-cols-3 md:gap-5">
        {blockTypes.map((block) => (
          <article key={block.title}>
            <KickerTitle className="text-center md:text-left">{block.title}</KickerTitle>
            <div className="relative mt-4 aspect-[300/211] overflow-hidden rounded-card md:aspect-[426/300]">
              <CroppedImage
                src={block.image}
                alt={block.title}
                width={426}
                height={300}
                loading="lazy"
              />
            </div>
            <div className="mt-5 space-y-4 px-2.5 font-body text-sm font-extralight leading-[1.25] tracking-[-0.28px] text-ink md:px-0 md:text-base md:tracking-[-0.32px]">
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
        <h2 id="mechanics-heading" className="section-title max-w-[618px] px-2.5 md:px-0">
          Как могут быть реализованы игровые механики
        </h2>

        <div className="mt-8 flex flex-col gap-6 md:mt-12 lg:grid lg:grid-cols-[minmax(0,870px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div className="relative order-2 aspect-[300/160] overflow-hidden rounded-card bg-surface lg:order-none lg:aspect-[870/460]">
            <CroppedImage
              src={slide.image}
              alt={slide.title}
              width={870}
              height={460}
              loading="lazy"
            />
          </div>

          <div className="relative order-1 lg:min-h-[460px]" aria-live="polite">
            <div className="flex items-start justify-between px-2.5 lg:px-0">
              <p
                aria-hidden
                className="font-display text-[55px] leading-[1.35] tracking-[-1.1px] text-accent lg:absolute lg:right-0 lg:top-[280px] lg:text-[125px] lg:tracking-[-2.5px]"
              >
                <span className="text-accent-soft">{current}</span>/{totalLabel}
              </p>
              <div className="flex gap-4 lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
                <ArrowButton direction="prev" onClick={goPrev} />
                <ArrowButton direction="next" onClick={goNext} />
              </div>
            </div>

            <h3 className="mt-4 px-2.5 font-display text-base tracking-[-0.32px] text-ink lg:mt-0 lg:px-0 lg:text-lg lg:tracking-[-0.36px]">
              {slide.title}
            </h3>

            <LinkPill
              label="Смотреть на сайте"
              href={slide.link}
              className="mt-10 hidden lg:inline-flex"
            />
          </div>

          <LinkPill
            label="Смотреть на сайте"
            href={slide.link}
            className="order-3 mx-2.5 lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
