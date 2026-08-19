import { assetPath } from "../../qa/assets";

type LinkPillProps = {
  label: string;
  href?: string;
  className?: string;
};

export function LinkPill({ label, href = "#", className = "" }: LinkPillProps) {
  const external = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={`link-pill ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="text-xs text-ink md:text-sm">{label}</span>
      <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-accent md:size-[35px]">
        <img
          src={assetPath("icon-cursor.svg")}
          alt=""
          width={16}
          height={16}
          className="size-4 rotate-[9deg]"
        />
      </span>
    </a>
  );
}
