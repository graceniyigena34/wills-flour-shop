import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Logo.jpeg";
import { useLanguage, Lang } from "@/lib/i18n";

const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "rw", label: "RW" },
  { code: "sw", label: "SW" },
];

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
  const { t, lang, setLang } = useLanguage();

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
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-border px-2 py-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors ${
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/60 hover:text-primary"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <Link
            to="/products"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-bark"
          >
            {t.nav.shopNow}
          </Link>
        </div>
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
            <div className="mt-3 flex gap-2 border-t border-border/60 pt-3">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setOpen(false); }}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    lang === l.code
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground/60 hover:text-primary"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
