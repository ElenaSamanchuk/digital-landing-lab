import type { CaseBlock, CaseItem } from "../../content/cases";
import { caseBlocks } from "../../content/cases";
import { getImageCrop } from "../../content/imageCrops";
import { CroppedImage } from "../ui/CroppedImage";
import { LinkPill } from "../ui/LinkPill";

function CaseTag({ tag, dark = false }: { tag: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-pill px-2.5 py-1.5 text-xs font-extralight tracking-[-0.24px] backdrop-blur-[7.5px] ${
        dark ? "bg-ink text-page" : "bg-[#f7f7f7] text-ink"
      }`}
    >
      <span className="text-accent">#</span>
      {tag.replace(/^#/, "")}
    </span>
  );
}

function CaseImageCard({ item }: { item: CaseItem }) {
  const tall = item.tall ?? false;
  const crop = getImageCrop(item.image);

  return (
    <div
      className={`relative overflow-hidden rounded-card ${
        tall ? "aspect-[430/340]" : "aspect-[870/460]"
      }`}
    >
      <CroppedImage
        src={item.image}
        alt={item.tag || item.url}
        width={tall ? 430 : 870}
        height={tall ? 340 : 460}
        loading="lazy"
        crop={crop}
      />
      {item.tag ? (
        <div className="absolute left-4 top-4">
          <CaseTag tag={item.tag} dark={item.tagDark} />
        </div>
      ) : null}
      <div className="absolute inset-x-4 bottom-4">
        <LinkPill label={item.url.replace("https://", "").replace(/\/$/, "")} href={item.url} />
      </div>
    </div>
  );
}

function CaseBlockView({ block }: { block: CaseBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h3 className="font-display text-lg tracking-[-0.36px] text-ink md:text-[18px]">
          {block.title}
        </h3>
      );
    case "text":
      if (block.accent && !block.text) {
        return (
          <p className="font-body text-base tracking-[-0.32px] text-muted">
            <span className="text-accent">/</span>
            {block.accent}
          </p>
        );
      }
      return (
        <p className="font-body text-base font-extralight leading-[1.25] tracking-[-0.32px] text-ink">
          {block.text}
        </p>
      );
    case "wide-left":
      return (
        <div className="space-y-4 md:space-y-6">
          {block.title ? (
            <h3 className="font-display text-lg tracking-[-0.36px] text-ink">{block.title}</h3>
          ) : null}
          <CaseImageCard item={block.item} />
          {block.description ? (
            <p className="max-w-[650px] font-body text-base font-extralight leading-[1.25] tracking-[-0.32px] text-ink">
              {block.description}
            </p>
          ) : null}
        </div>
      );
    case "wide-right":
      return (
        <div className="grid gap-4 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] md:items-start md:gap-6">
          <div>
            {block.title ? (
              <h3 className="font-display text-lg tracking-[-0.36px] text-ink">{block.title}</h3>
            ) : null}
            {block.description ? (
              <p
                className={`font-body text-base font-extralight leading-[1.25] tracking-[-0.32px] text-ink ${
                  block.title ? "mt-3" : ""
                }`}
              >
                {block.description}
              </p>
            ) : null}
          </div>
          <CaseImageCard item={block.item} />
        </div>
      );
    case "pair":
      return (
        <div className="grid gap-4 md:grid-cols-[minmax(0,430px)_minmax(0,430px)] md:justify-between md:gap-5">
          {block.items.map((item, index) => (
            <div key={item.url} className="w-full md:max-w-[430px]">
              <CaseImageCard item={item} />
              {block.descriptions?.[index] ? (
                <p className="mt-3 font-body text-base font-extralight leading-[1.25] tracking-[-0.32px] text-ink">
                  {block.descriptions[index]}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      );
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}

export function CasesSection() {
  return (
    <section id="cases" className="section-shell section-deferred py-10 md:py-16" aria-labelledby="cases-heading">
      <div className="rounded-card bg-surface px-4 py-10 md:px-10 md:py-16">
        <div className="text-center">
          <h2 id="cases-heading" className="section-title">Сайты под ключ</h2>
          <p className="mt-3 font-body text-lg tracking-[-0.36px] text-muted">Текст + Дизайн + Верстка</p>
        </div>

        <div className="mt-10 space-y-10 md:mt-16 md:space-y-14">
          {caseBlocks.map((block, index) => (
            <div key={index}>
              <CaseBlockView block={block} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
