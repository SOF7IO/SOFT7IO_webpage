import { Menu, X } from "lucide-react";

type MobileMenuToggleProps = {
  readonly isOpen: boolean;
  readonly onToggle: () => void;
};

export function MobileMenuToggle({ isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="md:hidden p-2 text-black/60 hover:text-black"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}
