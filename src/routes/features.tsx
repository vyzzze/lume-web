import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Lume" },
      { name: "description", content: "Combat, visuals, performance and mod support — every Lume feature." },
      { property: "og:title", content: "Features — Lume" },
      { property: "og:description", content: "Combat, visuals, performance and mod support." },
    ],
  }),
  component: Features,
});

const features = [
  { t: "Combat", d: "ComboCounter, client-based HitReg, no distractions. Fights stay clean and your inputs land." },
  { t: "Visual", d: "Clean, responsive menus and a smooth interface designed for clarity at a glance." },
  { t: "Performance", d: "Massive FPS boost, optimized for low-end PCs, with Sodium integrated out of the box." },
  { t: "Mod Support", d: "Bring your own mods and themes. You're in control — load whatever fits your setup." },
  { t: "ClickGUI", d: "Drag-and-drop module windows, full keybind support, persistent layouts." },
  { t: "Updates", d: "First-class support for the latest Minecraft versions, shipped fast and tested." },
];

function Features() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-16">
        <div className="text-center">
          <div className="pill mx-auto inline-flex px-3 py-1.5 text-xs text-muted-foreground">Features</div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gradient md:text-6xl">
            Built for the way you play.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every module in Lume is hand-tuned. No bloat, no nonsense — only what wins fights.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-md">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/40 to-transparent blur-2xl transition-opacity group-hover:opacity-100 opacity-60" />
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_25px_oklch(0.68_0.25_295/0.6)]">
                <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-3xl border border-border bg-card/40 p-10 text-center backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">A note on custom mods</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Lume lets you load any mods you want. We are not responsible for bans or issues caused by
            third-party mods that aren't part of the official client.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
