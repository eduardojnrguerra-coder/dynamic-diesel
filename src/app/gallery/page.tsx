import type { Metadata } from "next";
import Image from "next/image";
import { SeoPageTemplate } from "@/components/page-template";
import { commonFaq, type SeoPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Dyna-Mic Diesel Workshop Boksburg",
  description:
    "Dyna-Mic Diesel gallery page for diesel truck repair, diagnostics and engine reconditioning content in Boksburg.",
  alternates: { canonical: "/gallery" },
};

const page: SeoPage = {
  slug: "gallery",
  title: "Gallery",
  metaTitle: "Dyna-Mic Diesel Gallery",
  metaDescription: metadata.description as string,
  h1: "Dyna-Mic Diesel Gallery",
  summary:
    "A gallery page for workshop visuals, repair categories and future project photos from Dyna-Mic Diesel in Anderbolt, Boksburg.",
  keywords: ["diesel truck workshop Boksburg", "truck repair workshop Anderbolt"],
  bullets: ["Workshop visual content", "Service category gallery", "Future repair photo structure"],
  proof: ["Supports local trust signals", "Useful for brand and service SEO"],
  faq: commonFaq,
  internalLinks: [
    { label: "Services overview", href: "/services" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function GalleryPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery", href: "/gallery" }]}
    >
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {["Truck diagnostics", "Engine reconditioning", "Fleet servicing"].map((title) => (
          <div key={title} className="overflow-hidden rounded border border-line bg-background">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/diesel-workshop-hero.png"
                alt={`${title} at a diesel truck workshop`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-foreground">{title}</h2>
            </div>
          </div>
        ))}
      </div>
    </SeoPageTemplate>
  );
}
