import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Will's Cassava Flour" },
      {
        name: "description",
        content:
          "Answers to common questions about Will's Cassava Flour: gluten-free, storage, delivery, distribution and more.",
      },
      { property: "og:title", content: "Frequently Asked Questions" },
      {
        property: "og:description",
        content: "Everything you need to know about Will's Cassava Flour.",
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useLanguage();
  const f = t.faq;

  const faqs = [
    { q: f.faq1q, a: f.faq1a },
    { q: f.faq2q, a: f.faq2a },
    { q: f.faq3q, a: f.faq3a },
    { q: f.faq4q, a: f.faq4a },
    { q: f.faq5q, a: f.faq5a },
    { q: f.faq6q, a: f.faq6a },
  ];

  return (
    <div>
      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">{f.eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
          {f.h1a} <span className="italic text-accent">{f.h1italic}</span>.
        </h1>
      </section>

      <section className="container-x pb-24">
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-3xl border border-border bg-background">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full px-6 py-6 text-left md:px-8"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-serif text-lg text-primary md:text-xl">{item.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-leaf-soft text-leaf">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </div>
                {isOpen && <p className="mt-3 max-w-2xl text-muted-foreground">{item.a}</p>}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
