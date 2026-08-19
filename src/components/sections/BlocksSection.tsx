import { blockTypes } from "../../content/blocks";
import { KickerTitle } from "../ui/KickerTitle";
import { SectionHeading } from "../ui/SectionHeading";

export function BlocksSection() {
  return (
    <section className="section-shell py-14 md:py-24" aria-labelledby="blocks-heading">
      <SectionHeading id="blocks-heading" title="Чем отличаются блоки сайтов" />

      <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-5">
        {blockTypes.map((block) => (
          <article key={block.title}>
            <div className="text-center md:text-left">
              <KickerTitle className="inline-block">{block.title}</KickerTitle>
            </div>
            <div className="mt-4 overflow-hidden rounded-card">
              <img
                src={block.image}
                alt={block.title}
                loading="lazy"
                decoding="async"
                className="aspect-[426/300] w-full object-cover"
              />
            </div>
            <div className="mt-5 space-y-4 font-body text-sm font-extralight leading-[1.25] text-ink md:text-base">
              <p>
                <span className="mr-2 font-medium text-accent-faded">+</span>
                {block.pros}
              </p>
              <p>
                <span className="mr-2 font-medium text-accent-faded">-</span>
                {block.cons}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
