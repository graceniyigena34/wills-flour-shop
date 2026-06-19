import { createFileRoute } from "@tanstack/react-router";
import farmer from "@/assets/farmer.jpeg";
import peeling from "@/assets/peeling.jpg";
import bowl from "@/assets/flour-bowl.jpeg";
import drying from "@/assets/drying.jpeg";
import grinding from "@/assets/grinding.jpeg";
import team from "@/assets/team-packaging.jpg";

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
        content: "How Will's Cassava Flour is made — naturally, step by step.",
      },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  {
    n: "01",
    title: "Harvesting",
    img: farmer,
    text: "Mature cassava roots are hand-pulled from rich African soil. only when they’ve reached peak starch content. We work with smallholder farmers who share our commitment to quality",
  },
  {
    n: "02",
    title: "Peeling",
    img: peeling,
    text: "Within hours of harvest, each root is carefully peeled by hand. Removing the outer skin preserves the pure white flesh that makes our flour so silky.",
  },
  {
    n: "03",
    title: "Soaking",
    img: bowl,
    text: "Peeled cassava is submerged in clean spring water to gently draw out natural compounds — the traditional way to ensure a safe, mild flour.",
  },
  {
    n: "04",
    title: "Drying",
    img: drying,
    text: "Soaked cassava is spread on raised mesh racks and sun-dried until perfectly crisp. Slow drying locks in flavour and nutrients.",
  },
  {
    n: "05",
    title: "Grinding",
    img: grinding,
    text: "Dried cassava is milled in small batches, ensuring it stays fresh and consistent.",
  },
  {
    n: "06",
    title: "Packaging",
    img: team,
    text: "Flour is sealed in food-safe kraft bags inside a clean, hygienic facility. Each bag is sealed, labelled, and ready for your kitchen.",
  },
];

function ProcessPage() {
  return (
    <div>
      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">How it&rsquo;s made</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
          Six honest steps from <span className="italic text-accent">root to flour</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          No shortcuts. No chemicals. Just time-tested craft, careful hygiene, and a deep respect
          for the cassava root.
        </p>
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
                <p
                  className="mt-4 max-w-md text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: s.text }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
