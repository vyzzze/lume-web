import { Link } from "@tanstack/react-router";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_20px_oklch(0.68_0.25_295/0.7)]">
        <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
      </span>
      <span className="tracking-tight">Lume</span>
    </Link>
  );
}

const linkCls = "text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="pill hidden md:flex items-center gap-1 px-2 py-1.5">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground bg-white/5 rounded-full px-3 py-1.5 text-sm" }}>Product</Link>
          <Link to="/features" className={linkCls} activeProps={{ className: "text-foreground bg-white/5 rounded-full px-3 py-1.5 text-sm" }}>Features</Link>
          <Link to="/download" className={linkCls} activeProps={{ className: "text-foreground bg-white/5 rounded-full px-3 py-1.5 text-sm" }}>Download</Link>
          <a href="#" className={linkCls}>Discord</a>
          <a href="#" className={linkCls}>Changelog</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground">Login</a>
          <Link
            to="/download"
            className="pill px-4 py-1.5 text-sm font-medium text-foreground hover:bg-white/10 transition-colors border-primary/40 shadow-[0_0_20px_oklch(0.68_0.25_295/0.25)]"
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}
