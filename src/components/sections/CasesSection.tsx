import type { CaseBlock, CaseItem } from "../../content/cases";
import { caseBlocks } from "../../content/cases";
import { getImageCrop } from "../../content/imageCrops";
import { CroppedImage } from "../ui/CroppedImage";
import { LinkPill } from "../ui/LinkPill";

function CaseTag({ tag, dark = false }: { tag: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-pill px-1.5 py-1 text-[8px] font-extralight tracking-[-0.16px] backdrop-blur-[7.5px] md:px-2.5 md:py-1.5 md:text-xs md:tracking-[-0.24px] ${
        dark ? "bg-ink text-page" : "bg-[#f7f7f7] text-ink"
      }`}
    >
      <span className="text-accent">#</span>
      {tag.replace(/^#/, "")}
    </span>
  );
}

function CaseImageCard({ item }: { item: CaseItem }) {
  const crop = getImageCrop(item.image);
  const aspectClass = item.tall
    ? "aspect-[430/340]"
    : "aspect-[430/340] md:aspect-[870/460]";

  return (
    <div className={`relative overflow-hidden rounded-card ${aspectClass}`}>
      <CroppedImage
        src={item.image}
        alt={item.tag || item.url}
        width={item.tall ? 430 : 870}
        height={item.tall ? 340 : 460}
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

function CaseDescription({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p
      className={`font-body text-sm font-extralight leading-[1.25] tracking-[-0.28px] text-ink md:text-base md:tracking-[-0.32px] ${className}`}
    >
      {children}
    </p>
  );
}

function CaseBlockView({ block }: { block: CaseBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h3 className="font-display text-base tracking-[-0.32px] text-ink md:text-lg md:tracking-[-0.36px]">
          {block.title}
        </h3>
      );
    case "text":
      if (block.accent && !block.text) {
        return (
          <p className="font-body text-sm tracking-[-0.28px] text-muted md:text-base md:tracking-[-0.32px]">
            <span className="text-accent">/</span>
            {block.accent}
          </p>
        );
      }
      return <CaseDescription>{block.text ?? ""}</CaseDescription>;
    case "wide-left":
      return (
        <div className="space-y-4 md:space-y-6">
          {block.title ? (
            <h3 className="font-display text-base tracking-[-0.32px] text-ink md:text-lg md:tracking-[-0.36px]">
              {block.title}
            </h3>
          ) : null}
          <CaseImageCard item={block.item} />
          {block.description ? (
            <CaseDescription className="max-w-[650px] px-2.5 md:px-0">{block.description}</CaseDescription>
          ) : null}
        </div>
      );
    case "wide-right":
      return (
        <div className="space-y-4 md:grid md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] md:items-start md:gap-6 md:space-y-0">
          <div className="order-1 md:order-none">
            {block.title ? (
              <h3 className="font-display text-base tracking-[-0.32px] text-ink md:text-lg md:tracking-[-0.36px]">
                {block.title}
              </h3>
            ) : null}
            {block.description ? (
              <CaseDescription className={`px-2.5 md:px-0 ${block.title ? "mt-3" : ""}`}>
                {block.description}
              </CaseDescription>
            ) : null}
          </div>
          <div className="order-2 md:order-none">
            <CaseImageCard item={block.item} />
          </div>
        </div>
      );
    case "pair":
      return (
        <div className="flex flex-col gap-10 md:grid md:grid-cols-[minmax(0,430px)_minmax(0,430px)] md:justify-between md:gap-5 md:gap-y-0">
          {block.items.map((item, index) => (
            <div key={item.url} className="w-full md:max-w-[430px]">
              <CaseImageCard item={item} />
              {block.descriptions?.[index] ? (
                <CaseDescription className="mt-3 px-2.5 md:px-0">
                  {block.descriptions[index]}
                </CaseDescription>
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
      <div className="mx-auto max-w-[300px] rounded-card bg-surface px-[15px] py-10 md:max-w-none md:px-10 md:py-16">
        <div className="text-left md:text-center">
          <h2 id="cases-heading" className="section-title">
            Сайты под ключ
          </h2>
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
