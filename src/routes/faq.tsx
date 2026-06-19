import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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

const faqs = [
  {
    q: "Is the flour gluten free?",
    a: "Yes. Cassava flour is naturally gluten free, making it a great option for people with gluten intolerance or celiac disease.",
  },
  {
    q: "How should it be stored?",
    a: "Keep the bag tightly sealed in a cool, dry place away from direct sunlight. For longer storage, transfer to an airtight container.",
  },
  {
    q: "Is it chemical free?",
    a: "Absolutely. We use only clean water and traditional processing methods — no bleaching agents, preservatives or additives.",
  },

  {
    q: "What foods can be made with it?",
    a: "Ugali, pastries, rolls, pancakes, bread, dumplings, and as a natural thickener for stews and sauces.",
  },
  {
    q: "Where can we find Will's Cassava Flour?",
    a: "In partner supermarkets and shops across Kigali, and directly from us via WhatsApp or our contact page.",
  },

  {
    q: "How can I become a Will's Cassava Flour distributor?",
    a: "Fill out the distributor inquiry form on our Contact page or message us directly — we love working with new partners.",
  },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">FAQ</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
          Your questions, <span className="italic text-accent">answered</span>.
        </h1>
      </section>

      <section className="container-x pb-24">
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-3xl border border-border bg-background">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full px-6 py-6 text-left md:px-8"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-serif text-lg text-primary md:text-xl">{f.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-leaf-soft text-leaf">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </div>
                {isOpen && <p className="mt-3 max-w-2xl text-muted-foreground">{f.a}</p>}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
