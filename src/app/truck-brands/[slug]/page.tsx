import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { HealthInspectionSection } from "@/components/health-inspection-section";
import { Breadcrumbs, JsonLd, SeoSchemas } from "@/components/seo";
import { ContactButtons, LinkGrid, PageFrame } from "@/components/site-shell";
import { commonFaq, localBusinessSchema, type LinkItem } from "@/lib/site";
import {
  additionalTruckBrandPages,
  brandServiceLinks,
  getTruckBrandPage,
  truckBrandMetadata,
  truckBrandServiceSchema,
} from "@/lib/truck-brand-pages";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return additionalTruckBrandPages.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const brand = getTruckBrandPage(slug);
  if (!brand) return {};
  return truckBrandMetadata(brand);
}

export default async function AdditionalTruckBrandPage({ params }: Params) {
  const { slug } = await params;
  const brand = getTruckBrandPage(slug);
  if (!brand) notFound();

  const breadcrumbs: LinkItem[] = [
    { label: "Home", href: "/" },
    { label: "Truck Brands", href: "/truck-brands" },
    { label: brand.title, href: brand.href },
  ];

  return (
    <PageFrame>
      <SeoSchemas faq={commonFaq} breadcrumbs={breadcrumbs} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={truckBrandServiceSchema(brand)} />
      <div className="bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#111111] text-white">
        <Image
          src={brand.image}
          alt={`${brand.title} at Dyna-Mic Diesel`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/82 to-[#111111]/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/45" />
        <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-[1480px] items-center px-4 py-24 sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <p className="inline-flex rounded border border-diesel-red/35 bg-diesel-red/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-diesel-red">
              Commercial truck brand support
            </p>
            <h1 className="mt-7 max-w-5xl text-balance text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              {brand.h1}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76 sm:text-xl">
              Dyna-Mic Diesel services, maintains and repairs {brand.name}
              trucks from its workshop in Anderbolt, Boksburg for truck owners,
              fleet operators and transport businesses across the East Rand and
              Gauteng.
            </p>
            <div className="mt-9">
              <ContactButtons />
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Workshop Support
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white">
              Service, maintenance and repair support for {brand.name} trucks
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Operators can contact Dyna-Mic Diesel for {brand.name} truck
              servicing, brake repair enquiries, diesel diagnostics, preventative
              maintenance and fleet maintenance support. The workshop also
              performs a complimentary truck health inspection with workshop
              visits to help identify potential maintenance concerns.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#1b1b1b] p-7 premium-shadow">
            <h3 className="text-2xl font-black text-white">Useful service links</h3>
            <div className="mt-6">
              <LinkGrid links={brandServiceLinks} />
            </div>
          </div>
        </div>
      </section>

      <HealthInspectionSection compact />
    </PageFrame>
  );
}
