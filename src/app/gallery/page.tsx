import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SeoPageTemplate } from "@/components/page-template";
import { commonFaq, supportedTruckBrandText, type SeoPage } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Workshop & Services | Dyna-Mic Diesel Boksburg" },
  description:
    "View Dyna-Mic Diesel workshop service areas including diesel diagnostics, engine reconditioning, pumps, injectors and fleet maintenance in Boksburg.",
  alternates: { canonical: "/gallery" },
};

const page: SeoPage = {
  slug: "gallery",
  title: "Workshop & Services",
  metaTitle: "Dyna-Mic Diesel Workshop & Services",
  metaDescription: metadata.description as string,
  h1: "Workshop & Services",
  summary:
    "A closer look at the diesel truck repair services available from Dyna-Mic Diesel in Anderbolt, Boksburg.",
  keywords: ["diesel truck workshop Boksburg", "truck repair workshop Anderbolt"],
  bullets: [
    "Diesel diagnostics and fault finding",
    "Engine reconditioning support",
    "Fleet servicing and maintenance",
  ],
  proof: [
    "Workshop based in Anderbolt, Boksburg",
    `Support for ${supportedTruckBrandText}`,
    "Call, WhatsApp and quote request options available",
  ],
  faq: commonFaq,
  internalLinks: [
    { label: "Services overview", href: "/services" },
    { label: "Fleet maintenance", href: "/fleet-maintenance" },
    { label: "Contact", href: "/contact" },
  ],
};

const serviceAreas = [
  {
    title: "Diesel Diagnostics",
    image: "/images/diagnostics.jpg",
    copy: "Fault finding for warning lights, starting issues, power loss, smoke and running concerns before repair work is approved.",
    points: ["Truck diagnostics", "Engine fault checks", "Repair scope advice"],
  },
  {
    title: "Engine Reconditioning",
    image: "/images/engine-reconditioning.jpg",
    copy: "Workshop support for diesel engine reconditioning enquiries, including Mercedes Actros OM501, OM502, OM541 and OM542 engines.",
    points: ["Actros engine assessment", "Compression concerns", "Engine repair planning"],
  },
  {
    title: "Diesel Pumps and Injectors",
    image: "/images/diesel-injectors.jpg",
    copy: "Fuel system checks for injector faults, diesel pump issues, hard starting, poor fuel economy and excessive smoke.",
    points: ["Injector symptoms", "Diesel pump concerns", "Fuel delivery checks"],
  },
  {
    title: "Fleet Maintenance",
    image: "/images/fleet-maintenance.jpg",
    copy: "Service and maintenance support for commercial vehicle operators who need practical planning and clear workshop communication.",
    points: ["Service intervals", "Recurring faults", "Downtime priorities"],
  },
];

export default function GalleryPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Workshop & Services", href: "/gallery" }]}
    >
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {serviceAreas.map((area) => (
          <section key={area.title} className="overflow-hidden rounded border border-line bg-panel premium-shadow">
            <div className="relative aspect-[16/9]">
              <Image
                src={area.image}
                alt={`${area.title} at Dyna-Mic Diesel workshop`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel/70 to-transparent" />
              <h2 className="absolute bottom-5 left-5 text-2xl font-black text-white">
                {area.title}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-sm leading-6 text-muted">{area.copy}</p>
              <div className="mt-4 grid gap-2">
                {area.points.map((point) => (
                  <p key={point} className="flex items-center gap-2 text-sm font-bold text-steel">
                    <CheckCircle2 className="text-diesel-red" size={18} aria-hidden="true" />
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </SeoPageTemplate>
  );
}
