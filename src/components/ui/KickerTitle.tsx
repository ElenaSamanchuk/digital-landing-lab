type KickerTitleProps = {
  children: string;
  className?: string;
};

export function KickerTitle({ children, className = "" }: KickerTitleProps) {
  return (
    <p className={`section-kicker ${className}`}>
      <span className="text-accent">/</span>
      {children}
    </p>
  );
}
