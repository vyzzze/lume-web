import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "./",
    build: {
      outDir: "dist",
    },
    // Add the TanStack Start configuration here
    plugins: [
      // If the Lovable config doesn't let you reach the plugin directly, 
      // you may need to add it to the plugins array manually if it's not there.
    ],
    // The key setting for TanStack Start Static Generation:
    tanstackStart: {
      prerender: {
        routes: ['/'], // Tell it which routes to turn into static HTML
      },
    },
  },
});
