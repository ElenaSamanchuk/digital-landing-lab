type PrimaryButtonProps = {
  children: string;
  href?: string;
  className?: string;
  fullWidth?: boolean;
};

export function PrimaryButton({
  children,
  href = "#brief",
  className = "",
  fullWidth = false,
}: PrimaryButtonProps) {
  const classes = `btn-primary ${fullWidth ? "w-full" : ""} ${className}`;

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
