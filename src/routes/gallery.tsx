import { createFileRoute } from "@tanstack/react-router";
import field from "@/assets/cassava-field.jpeg";
import farmer from "@/assets/farmer.jpeg";
import peeling from "@/assets/peeling.jpeg";
import drying from "@/assets/drying.jpeg";
import grinding from "@/assets/grinding.jpeg";
import packagingProcess from "@/assets/packaging process.jpeg";
import people from "@/assets/people.jpeg";
import bowl from "@/assets/flour-bowl.jpeg";
import pastries from "@/assets/pastries.jpeg";
import family from "@/assets/family-kitchen.jpeg";
import hero from "@/assets/hero-flour.jpeg";
import willsLogo from "@/assets/Logo.jpeg";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Will's Cassava Flour" },
      {
        name: "description",
        content:
          "Production photos, team moments, farms and customer kitchens — a visual story of Will's Cassava Flour.",
      },
      { property: "og:title", content: "Gallery" },
      { property: "og:description", content: "Inside the world of Will's Cassava Flour." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useLanguage();
  const g = t.gallery;

  const images = [
    { src: field, alt: g.img1 },
    { src: farmer, alt: g.img2 },
    { src: peeling, alt: g.img3 },
    { src: bowl, alt: g.img4 },
    { src: drying, alt: g.img5 },
    { src: grinding, alt: g.img6 },
    { src: packagingProcess, alt: g.img7 },
    { src: people, alt: g.img8 },
    { src: pastries, alt: g.img9 },
    { src: family, alt: g.img10 },
    { src: hero, alt: g.img11 },
    { src: willsLogo, alt: g.img12 },
  ];

  return (
    <div>
      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">{g.eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
          {g.h1a} <span className="italic text-accent">{g.h1italic}</span> {g.h1end}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{g.intro}</p>
      </section>

      <section className="container-x pb-24">
        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
