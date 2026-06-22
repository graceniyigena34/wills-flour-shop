import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Logo.jpeg";
import { useLanguage } from "@/lib/i18n";

const navKeys = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/process", key: "process" },
  { to: "/products", key: "products" },
  { to: "/gallery", key: "gallery" },
  { to: "/faq", key: "faq" },
  { to: "/contact", key: "contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-x flex h-24 items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-primary"
          aria-label="Will's Cassava Flour — home"
        >
          <img src={logo} alt="Will's Cassava Flour" className="h-20 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navKeys.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/70 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {t.nav[n.key]}
            </Link>
          ))}
        </nav>
        <Link
          to="/products"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-bark md:inline-block"
        >
          {t.nav.shopNow}
        </Link>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="container-x flex flex-col py-3">
            {navKeys.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-foreground/80"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {t.nav[n.key]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
