import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroOrb } from "@/components/HeroOrb";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lume — Minecraft PvP Client" },
      { name: "description", content: "The fastest, cleanest Minecraft PvP client. Built for Crystal, Mace, Sword and Axe PvP." },
      { property: "og:title", content: "Lume — Minecraft PvP Client" },
      { property: "og:description", content: "Illuminate your performance. Built for Crystal, Mace, Sword and Axe PvP." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-32 text-center">
          <div className="pill mx-auto inline-flex items-center gap-2 px-3 py-1.5 text-xs text-muted-foreground">
            <span className="text-primary">✦</span> New: 1.21.11 support just landed
          </div>
          <h1 className="mt-8 text-5xl font-semibold tracking-tight text-gradient md:text-7xl">
            Illuminate your<br/>performance.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            The fastest, cleanest Minecraft PvP client. Built for Crystal, Mace, Sword and Axe PvP.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link to="/download" className="rounded-full bg-gradient-to-b from-primary to-primary/80 px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.68_0.25_295/0.8)] hover:from-primary-glow hover:to-primary transition-colors">
              Download for free
            </Link>
            <Link to="/features" className="pill px-5 py-2.5 text-sm text-foreground hover:bg-white/10">
              View features
            </Link>
          </div>
          <HeroOrb />
        </section>

        <section className="mx-auto max-w-7xl px-6 pt-24">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by 5,000+ players across 10+ servers
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 opacity-60 md:grid-cols-5">
            {["Hypixel", "DonutSMP", "HugoSMP", "PVPClub", "Minemen"].map((s) => (
              <div key={s} className="text-center text-sm font-medium tracking-wide text-foreground/70">{s}</div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-32 grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {[
            { t: "Performance", d: "Tuned bytecode, Sodium-integrated rendering, and aggressive frame pacing for buttery PvP." },
            { t: "Customization", d: "Drag-and-drop ClickGUI, custom themes, and per-module bindings. You're in control." },
            { t: "Reliable", d: "Client-side hit registration and combo counters that respect server tick-rate." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-md">
              <div className="mb-4 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_20px_oklch(0.68_0.25_295/0.6)]" />
              <h3 className="text-lg font-semibold text-foreground">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
