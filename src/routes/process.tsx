import { createFileRoute } from "@tanstack/react-router";
import farmer from "@/assets/farmer.jpeg";
import peeling from "@/assets/peeling.jpeg";
import bowl from "@/assets/flour-bowl.jpeg";
import drying from "@/assets/drying.jpeg";
import grinding from "@/assets/grinding.jpeg";
import packaging from "@/assets/packaging process.jpeg";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Will's Cassava Flour" },
      {
        name: "description",
        content:
          "From harvesting to packaging: the six honest steps that turn fresh cassava roots into Will's premium flour.",
      },
      { property: "og:title", content: "Our Process" },
      {
        property: "og:description",
        content: "How Will's Cassava Flour is made naturally, step by step.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  const { t } = useLanguage();
  const p = t.process;
  const h = t.home;

  const steps = [
    { n: "01", title: h.step1Title, img: farmer, text: h.step1Text },
    { n: "02", title: h.step2Title, img: peeling, text: h.step2Text },
    { n: "03", title: h.step3Title, img: bowl, text: h.step3Text },
    { n: "04", title: h.step4Title, img: drying, text: h.step4Text },
    { n: "05", title: h.step5Title, img: grinding, text: h.step5Text },
    { n: "06", title: h.step6Title, img: packaging, text: h.step6Text },
  ];

  return (
    <div>
      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">{p.eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
          {p.h1a} <span className="italic text-accent">{p.h1italic}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{p.intro}</p>
      </section>

      <section className="container-x pb-24">
        <div className="space-y-16 md:space-y-28">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
              <div>
                <p className="font-serif text-7xl text-cassava-deep md:text-8xl">{s.n}</p>
                <h2 className="mt-2 text-4xl md:text-5xl">{s.title}</h2>
                <p className="mt-4 max-w-md text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
