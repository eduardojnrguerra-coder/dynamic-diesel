import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import { HealthInspectionSection } from "@/components/health-inspection-section";
import { Breadcrumbs, FaqSection, JsonLd, SeoSchemas } from "@/components/seo";
import { ContactButtons, LinkGrid, PageFrame } from "@/components/site-shell";
import {
  brandPositioning,
  business,
  localBusinessSchema,
  quoteHref,
  type LinkItem,
} from "@/lib/site";
import { serviceSchema, type ServiceLandingPageData } from "@/lib/service-landing-pages";

const brandLinks: LinkItem[] = [
  {
    label: "Volvo Truck Repairs",
    href: "/volvo-truck-repairs-boksburg",
    description: "Volvo truck repair and diagnostic support from Boksburg.",
    image: "/images/volvo-brand-truck.webp",
  },
  {
    label: "Scania Truck Repairs",
    href: "/scania-truck-repairs-boksburg",
    description: "Scania diesel diagnostics, servicing and repair support.",
    image: "/images/scania-brand-truck.webp",
  },
  {
    label: "Mercedes-Benz Truck Repairs",
    href: "/mercedes-truck-repairs-boksburg",
    description: "Mercedes-Benz and Mercedes Actros truck repair support.",
    image: "/images/mercedes-brand-truck.webp",
  },
];

export function ServiceLandingPage({ page }: { page: ServiceLandingPageData }) {
  const breadcrumbs: LinkItem[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: page.title, href: page.path },
  ];

  return (
    <PageFrame>
      <SeoSchemas faq={page.faqs} breadcrumbs={breadcrumbs} />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={serviceSchema(page)} />

      <div className="bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#111111] text-white">
        <Image
          src={page.image}
          alt={`${page.title} at Dyna-Mic Diesel`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/86 to-[#111111]/34" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/50" />
        <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-[1480px] items-center px-4 py-24 sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <p className="reveal-up inline-flex rounded border border-diesel-red/35 bg-diesel-red/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-diesel-red">
              {page.eyebrow}
            </p>
            <h1 className="reveal-up-delay mt-7 max-w-5xl text-balance text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              {page.h1}
            </h1>
            <p className="reveal-up-delay mt-7 max-w-3xl text-lg leading-8 text-white/76 sm:text-xl">
              {page.intro}
            </p>
            <div className="reveal-up-delay mt-9">
              <ContactButtons />
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-xl border border-white/10 bg-[#1b1b1b] p-7 premium-shadow">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Immediate Answer
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white">
              What this service helps with
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/68">{page.immediateAnswer}</p>
            <p className="mt-5 leading-7 text-white/62">{page.serviceExplanation}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-7 premium-shadow">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Common Signs
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white">
              When to speak to the workshop
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.signs.map((sign) => (
                <div key={sign} className="flex items-start gap-3 rounded border border-white/10 bg-[#111111]/55 px-4 py-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-diesel-red" />
                  <span className="text-sm font-bold leading-6 text-white/78">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1b1b] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Why It Matters
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white">
              Practical workshop support for commercial operators
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/66">{page.whyItMatters}</p>
          </div>
          <div className="grid gap-4">
            {page.approach.map((item, index) => (
              <div key={item} className="rounded-xl border border-white/10 bg-[#111111] p-5 premium-shadow">
                <p className="font-mono text-sm font-black text-diesel-red">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-bold leading-7 text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HealthInspectionSection compact />

      <section className="bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Related Services
            </p>
            <h2 className="mt-2 text-4xl font-black text-white">
              Useful next pages
            </h2>
          </div>
          <LinkGrid links={page.relatedServices} />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1b1b] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Truck Brand Support
            </p>
            <h2 className="mt-2 text-4xl font-black text-white">
              Specialist experience plus confirmed brand coverage
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/62">
              {brandPositioning} Volvo, Scania and Mercedes-Benz remain key
              specialist strengths, while the workshop also actively supports
              the full confirmed commercial truck range.
            </p>
          </div>
          <LinkGrid links={brandLinks} />
        </div>
      </section>

      <section className="section-dark py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Service Area
            </p>
            <h2 className="mt-2 text-4xl font-black text-white">
              Based in Anderbolt, Boksburg
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Dyna-Mic Diesel supports truck owners and fleet operators from
              Boksburg, Anderbolt, the East Rand, Ekurhuleni and surrounding
              Gauteng areas. The workshop does not claim physical locations
              outside Boksburg.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#1b1b1b] p-7 premium-shadow">
            <a className="flex gap-3 leading-7 text-white/72 hover:text-white" href={business.mapHref}>
              <MapPin size={20} className="mt-1 shrink-0 text-diesel-red" />
              {business.address}
            </a>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded bg-diesel-red px-5 text-sm font-black text-[#111111] transition hover:bg-safety"
              >
                <Phone size={17} /> Call the Workshop
              </a>
              <a
                href={business.whatsappHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded border border-diesel-red px-5 text-sm font-black text-diesel-red transition hover:bg-diesel-red hover:text-[#111111]"
              >
                <MessageCircle size={17} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faq={page.faqs} />

      <section className="relative overflow-hidden bg-[#111111] py-20 text-white">
        <Image
          src="/images/workshop-hero.jpg"
          alt="Dyna-Mic Diesel workshop booking"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#111111]/82" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-diesel-red">
              Speak to the Workshop
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight">
              Book your truck in or request a quote
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/62">
              Share the truck brand, model, symptoms, warning lights, service
              history and urgency so the workshop can respond with useful context.
            </p>
          </div>
          <div>
            <ContactButtons />
            <Link
              href={quoteHref}
              className="mt-4 inline-flex items-center gap-2 text-sm font-black text-diesel-red hover:text-white"
            >
              Request a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
