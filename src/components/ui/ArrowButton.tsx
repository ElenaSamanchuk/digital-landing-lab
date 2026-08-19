import { assetPath } from "../../qa/assets";

type ArrowButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
};

export function ArrowButton({ direction, onClick, className = "" }: ArrowButtonProps) {
  const icon =
    direction === "prev"
      ? assetPath("icon-arrow-left.png")
      : assetPath("icon-arrow-right.png");

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Предыдущий слайд" : "Следующий слайд"}
      className={`flex h-[45px] flex-1 items-center justify-center rounded-card border border-accent transition hover:bg-surface ${className}`}
    >
      <img src={icon} alt="" width={24} height={24} className="size-6" />
    </button>
  );
}
