type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      <h2 id={id} className="section-title whitespace-pre-line">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 font-body text-base text-muted md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
