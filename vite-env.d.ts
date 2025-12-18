/// <reference types="vite/client" />

declare module "*.css";

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_ENV: "development" | "qa" | "production";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
