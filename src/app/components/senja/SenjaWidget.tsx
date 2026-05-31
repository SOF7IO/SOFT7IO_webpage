import { useSenjaScript } from "@/app/hooks/useSenjaScript";

const SENJA_WIDGET_ID = import.meta.env.VITE_SENJA_WIDGET_ID;

export function SenjaWidget() {
  useSenjaScript(SENJA_WIDGET_ID);

  return null;
}
