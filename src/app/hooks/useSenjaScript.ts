import { useEffect } from "react";

function getSenjaScriptUrl(widgetId: string): string {
  return `https://widget.senja.io/widget/${widgetId}/platform.js`;
}

export function useSenjaScript(widgetId: string | undefined): void {
  useEffect(() => {
    if (!widgetId) return;

    const scriptUrl = getSenjaScriptUrl(widgetId);
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptUrl}"]`,
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, [widgetId]);
}
