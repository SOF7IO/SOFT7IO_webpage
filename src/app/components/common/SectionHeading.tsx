type SectionHeadingProps = {
  readonly children: string;
  readonly className?: string;
};

export function SectionHeading({ children, className = "mb-12" }: SectionHeadingProps) {
  return (
    <h2 className={`text-sm uppercase tracking-wider text-black/40 ${className}`}>
      {children}
    </h2>
  );
}
