import { useCallback, useState } from "react";

type UseMobileMenuReturn = {
  readonly isOpen: boolean;
  readonly toggle: () => void;
  readonly close: () => void;
};

export function useMobileMenu(): UseMobileMenuReturn {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, toggle, close };
}
