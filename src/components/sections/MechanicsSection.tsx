import { useState } from "react";
import { mechanicSlides } from "../../content/blocks";
import { resolvePublicPath } from "../../qa/assets";
import { ArrowButton } from "../ui/ArrowButton";
import { LinkPill } from "../ui/LinkPill";
import { SectionHeading } from "../ui/SectionHeading";

export function MechanicsSection() {
  const [activeIndex, setActiveIndex] = useState(1);
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
    <section id="mechanics" className="section-shell py-14 md:py-24" aria-labelledby="mechanics-heading">
      <SectionHeading id="mechanics-heading" title="Как могут быть реализованы игровые механики" />

      <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-[minmax(0,870px)_minmax(0,1fr)] md:items-start md:gap-10">
        <div className="overflow-hidden rounded-card">
          <img
            src={resolvePublicPath(slide.image)}
            alt={slide.title}
            loading="lazy"
            decoding="async"
            className="aspect-[870/460] w-full object-cover"
          />
        </div>

        <div className="relative md:pt-2" aria-live="polite">
          <p
            aria-hidden
            className="pointer-events-none absolute right-0 top-16 hidden font-display text-[125px] leading-none tracking-[-2.5px] text-accent-soft md:block"
          >
            <span className="text-accent-soft">{current}</span>/{totalLabel}
          </p>

          <p className="font-display text-base tracking-[-0.32px] text-accent-soft md:hidden">
            <span>{current}</span>/{totalLabel}
          </p>

          <h3 className="mt-3 font-display text-base tracking-[-0.32px] text-ink md:mt-0 md:text-lg md:tracking-[-0.36px]">
            {slide.title}
          </h3>

          <LinkPill label="Смотреть на сайте" href={slide.link} className="mt-6 md:mt-10" />

          <div className="mt-8 flex gap-4 md:mt-auto md:pt-[280px]">
            <ArrowButton direction="prev" onClick={goPrev} />
            <ArrowButton direction="next" onClick={goNext} />
          </div>
        </div>
      </div>
    </section>
  );
}
