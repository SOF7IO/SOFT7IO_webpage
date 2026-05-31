/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SENJA_WIDGET_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
