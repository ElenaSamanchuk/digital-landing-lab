import { cases } from "../../content/cases";
import { resolvePublicPath } from "../../qa/assets";
import { LinkPill } from "../ui/LinkPill";
import { SectionHeading } from "../ui/SectionHeading";

function CaseTag({
  tag,
  dark = false,
}: {
  tag: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex rounded-pill px-2.5 py-1.5 text-xs font-extralight backdrop-blur-[7.5px] ${
        dark ? "bg-ink text-page" : "bg-[#f7f7f7] text-ink"
      }`}
    >
      <span className="text-accent">#</span>
      {tag.replace(/^#/, "")}
    </span>
  );
}

export function CasesSection() {
  return (
    <section id="cases" className="section-shell py-14 md:py-24" aria-labelledby="cases-heading">
      <div className="rounded-card bg-surface px-4 py-10 md:px-10 md:py-16">
        <SectionHeading
          id="cases-heading"
          align="center"
          title="Сайты под ключ"
          subtitle="Текст + Дизайн + Верстка"
        />

        <div className="mt-10 space-y-10 md:mt-16 md:space-y-14">
          {cases.map((item, index) => (
            <article
              key={`${item.url}-${index}`}
              className={`grid gap-4 md:gap-6 ${
                item.wide ? "md:grid-cols-[280px_minmax(0,1fr)]" : "md:grid-cols-2"
              }`}
            >
              <div className={item.wide ? "md:pt-2" : ""}>
                {item.category ? (
                  <h3 className="font-display text-lg tracking-[-0.36px] text-ink">
                    {item.category}
                  </h3>
                ) : null}
                {item.title ? (
                  <h3 className="font-display text-lg tracking-[-0.36px] text-ink">
                    {item.title}
                  </h3>
                ) : null}
                {item.description ? (
                  <p className="mt-3 max-w-xl font-body text-sm font-extralight leading-[1.25] text-ink md:text-base">
                    {item.description}
                  </p>
                ) : null}
              </div>

              <div
                className={`relative overflow-hidden rounded-card ${
                  item.tall ? "aspect-[430/340]" : "aspect-[870/460]"
                }`}
              >
                <img
                  src={resolvePublicPath(item.image)}
                  alt={item.title || item.tag || item.category || "Кейс"}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
                {item.tag ? (
                  <div className="absolute left-4 top-4">
                    <CaseTag tag={item.tag} dark={item.tagDark} />
                  </div>
                ) : null}
                <div className="absolute inset-x-4 bottom-4">
                  <LinkPill label={item.url.replace("https://", "")} href={item.url} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
