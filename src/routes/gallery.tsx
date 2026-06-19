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

const images = [
  { src: field, alt: "Cassava fields", span: "md:col-span-2 md:row-span-2" },
  { src: farmer, alt: "Harvesting" },
  { src: peeling, alt: "Peeling" },
  { src: bowl, alt: "Flour bowl" },
  { src: drying, alt: "Drying", span: "md:col-span-2" },
  { src: grinding, alt: "Grinding" },
  { src: packagingProcess, alt: "Packaging process" },
  { src: people, alt: "Team members" },
  { src: pastries, alt: "Baked pastries", span: "md:col-span-2" },
  { src: family, alt: "Family kitchen" },
  { src: hero, alt: "Cassava flour", span: "md:col-span-2" },
  { src: willsLogo, alt: "Will's Cassava Flour brand logo" },
];

function GalleryPage() {
  return (
    <div>
      <section className="container-x py-20 md:py-28">
        <span className="eyebrow">Gallery</span>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
          A look <span className="italic text-accent">inside</span> our world.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Farms, faces, kitchens and craft — the moments that shape every bag we make.
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-2xl ${img.span ?? ""}`}>
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
