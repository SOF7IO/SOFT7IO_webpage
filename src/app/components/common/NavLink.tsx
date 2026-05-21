type NavLinkProps = {
  readonly href: string;
  readonly label: string;
  readonly onClick?: () => void;
  readonly variant?: "desktop" | "mobile";
};

const variantClasses: Record<NonNullable<NavLinkProps["variant"]>, string> = {
  desktop: "text-sm text-black/60 hover:text-black transition-colors",
  mobile: "block text-sm text-black/60 hover:text-black transition-colors",
};

export function NavLink({ href, label, onClick, variant = "desktop" }: NavLinkProps) {
  return (
    <a href={href} className={variantClasses[variant]} onClick={onClick}>
      {label}
    </a>
  );
}
