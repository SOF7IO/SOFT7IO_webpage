import { useEffect } from "react";

const SENJA_SCRIPT_SRC = "https://static.senja.io/dist/platform.js";

let isScriptLoaded = false;

export function useSenjaScript(): void {
  useEffect(() => {
    if (isScriptLoaded) return;

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${SENJA_SCRIPT_SRC}"]`,
    );
    if (existingScript) {
      isScriptLoaded = true;
      return;
    }

    const script = document.createElement("script");
    script.src = SENJA_SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      isScriptLoaded = true;
    };
    document.body.appendChild(script);
  }, []);
}
