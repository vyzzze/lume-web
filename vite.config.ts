import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/lume-web/",
    build: {
      outDir: "dist",
    },
    // Prerender all routes so GitHub Pages can serve static HTML.
    // The key isn't typed in the Lovable wrapper but is read by the
    // TanStack Start vite plugin underneath.
    // @ts-expect-error tanstackStart is a valid runtime option
    tanstackStart: {
      prerender: {
        enabled: true,
        routes: ["/", "/download", "/features"],
      },
    },
  },
});
