// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Deploy to Vercel. The Lovable config defaults to the "cloudflare-module"
  // preset and only auto-runs Nitro inside a Lovable sandbox, so on Vercel we
  // must pass an explicit `nitro` option to (1) force the deploy plugin to run
  // and (2) override the preset. Nitro's "vercel" preset emits the Vercel Build
  // Output API structure (.vercel/output) that Vercel auto-detects.
  nitro: { preset: "vercel" },
});
