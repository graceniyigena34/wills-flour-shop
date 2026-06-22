import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, MapPin, Wheat } from "lucide-react";
import { useLanguage, Lang } from "@/lib/i18n";

const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "rw", label: "Kinyarwanda" },
  { code: "sw", label: "Swahili" },
];

export function SiteFooter() {
  const { t, lang, setLang } = useLanguage();

  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-primary">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf-soft text-leaf">
              <Wheat className="h-5 w-5" />
            </span>
            <span className="font-serif text-lg">Will&rsquo;s Cassava Flour</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {t.footer.description}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/wills_cassava_flour_rw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-border p-2 text-primary transition-colors hover:bg-leaf-soft"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">{t.footer.explore}</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">{t.footer.aboutUs}</Link></li>
            <li><Link to="/process" className="hover:text-primary">{t.footer.ourProcess}</Link></li>
            <li><Link to="/products" className="hover:text-primary">{t.footer.products}</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">{t.footer.gallery}</Link></li>
            <li><Link to="/faq" className="hover:text-primary">{t.footer.faq}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">{t.footer.contact}</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-leaf" />
              <span>Kigali, Rwanda</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-leaf" />
              <span>Call +250 788 476 680</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-leaf" />
              <span>info@willscassavaflour.rw</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">{t.footer.languages}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {languages.map((l) => (
              <li key={l.code}>
                <button
                  onClick={() => setLang(l.code)}
                  className={`transition-colors hover:text-primary ${
                    lang === l.code
                      ? "font-semibold text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>{t.footer.rights}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
