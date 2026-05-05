import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="h-5 w-5 rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_15px_oklch(0.68_0.25_295/0.7)]" />
          <span className="text-foreground font-medium">Lume</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <Link to="/features" className="hover:text-foreground">Features</Link>
          <Link to="/download" className="hover:text-foreground">Download</Link>
          <a href="#" className="hover:text-foreground">Discord</a>
          <a href="#" className="hover:text-foreground">Changelog</a>
          <a href="#" className="hover:text-foreground">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
