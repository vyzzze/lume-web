import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download — Lume" },
      { name: "description", content: "Download Lume for Windows, macOS and Linux." },
      { property: "og:title", content: "Download Lume" },
      { property: "og:description", content: "Available for Windows, macOS and Linux." },
    ],
  }),
  component: Download,
});

const platforms = [
  { os: "Windows", ext: ".exe", size: "84 MB", req: "Windows 10 or newer · 4 GB RAM" },
  { os: "macOS", ext: ".dmg", size: "92 MB", req: "macOS 12+ · Apple Silicon or Intel" },
  { os: "Linux", ext: ".AppImage", size: "78 MB", req: "Ubuntu 20.04+ / any modern distro" },
];

function Download() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-16">
        <div className="text-center">
          <div className="pill mx-auto inline-flex px-3 py-1.5 text-xs text-muted-foreground">v1.4.0 · 1.21.11 ready</div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gradient md:text-6xl">
            Download Lume.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Free forever. Pick your platform and start fighting smarter in under a minute.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {platforms.map((p) => (
            <div key={p.os} className="relative rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-md">
              <div className="mb-6 h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_25px_oklch(0.68_0.25_295/0.6)]" />
              <h3 className="text-xl font-semibold text-foreground">{p.os}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.req}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span>Lume{p.ext}</span>
                <span>{p.size}</span>
              </div>
              <a
                href="#"
                className="mt-4 block rounded-full bg-gradient-to-b from-primary to-primary/80 px-4 py-2.5 text-center text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.68_0.25_295/0.8)] hover:from-primary-glow hover:to-primary transition-colors"
              >
                Download for {p.os}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {[
            { n: "01", t: "Download", d: "Pick your OS above and grab the installer." },
            { n: "02", t: "Install", d: "Run the installer — Lume sets up its own isolated launcher." },
            { n: "03", t: "Play", d: "Pick a Minecraft version, hit launch, and dominate." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-md">
              <div className="text-sm font-mono text-primary">{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card/30 p-6 text-center backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Supported Minecraft versions</p>
          <p className="mt-3 text-sm text-foreground/80">1.8.9 · 1.12.2 · 1.16.5 · 1.18.2 · 1.19.4 · 1.20.4 · 1.21 · 1.21.11</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
