import type { MouseEvent } from "react";

type ScrollBehavior = ScrollOptions["behavior"];

function getScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

export function scrollToSection(hash: string): void {
  const behavior = getScrollBehavior();

  if (hash === "#" || hash === "") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const target = document.querySelector(hash);
  if (!(target instanceof HTMLElement)) return;

  target.scrollIntoView({ behavior, block: "start" });
}

export function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavigate?: () => void,
): void {
  if (!href.startsWith("#")) return;

  event.preventDefault();
  onNavigate?.();
  scrollToSection(href);

  if (href.length > 1) {
    history.pushState(null, "", href);
  } else {
    history.pushState(null, "", window.location.pathname);
  }
}
