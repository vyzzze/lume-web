import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/lume-web/",
    build: {
      outDir: "dist",
    },
  },
});
