import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { RelatedArticles } from "@/components/related-articles";
import { Breadcrumbs, FaqSection, JsonLd, SeoSchemas } from "@/components/seo";
import { ContactButtons, Hero, LinkGrid, PageFrame } from "@/components/site-shell";
import {
  business,
  getRelatedArticlesForPage,
  localBusinessSchema,
  type LinkItem,
  type SeoPage,
} from "@/lib/site";

export function SeoPageTemplate({
  page,
  breadcrumbs,
  children,
}: {
  page: SeoPage;
  breadcrumbs: LinkItem[];
  children?: React.ReactNode;
}) {
  const image = imageForPage(page);

  return (
    <PageFrame>
      <SeoSchemas faq={page.faq} breadcrumbs={breadcrumbs} />
      <JsonLd data={localBusinessSchema()} />
      <div className="bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>
      <Hero eyebrow={page.eyebrow} h1={page.h1} summary={page.summary} />
      <section className="section-dark py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
          <div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] premium-shadow">
              <div className="relative aspect-[21/9] min-h-64 bg-steel">
                <Image
                  src={image}
                  alt={`${page.title} at Dyna-Mic Diesel`}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel/75 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-safety">
                    Dyna-Mic Diesel
                  </p>
                  <h2 className="mt-2 text-3xl font-black">{page.title}</h2>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {page.bullets.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] p-6 premium-shadow">
                  <CheckCircle2 className="text-diesel-red" size={22} aria-hidden="true" />
                  <p className="mt-3 font-bold text-white">{item}</p>
                </div>
              ))}
            </div>

            {children}

            <div className="mt-12 rounded-xl border border-white/10 bg-[#1b1b1b] p-7 premium-shadow">
              <h2 className="text-3xl font-black text-white">Workshop Coverage</h2>
              <p className="mt-3 leading-7 text-white/62">
                Dyna-Mic Diesel is based in Anderbolt, Boksburg and assists truck
                operators across {business.areaServed.join(", ")}.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {business.areaServed.map((area) => (
                  <span
                    key={area}
                    className="rounded border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/72"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-3xl font-black text-white">Related Pages</h2>
              <div className="mt-5">
                <LinkGrid links={page.internalLinks} />
              </div>
            </div>

            <RelatedArticles articles={getRelatedArticlesForPage(page)} />
          </div>

          <aside className="h-fit overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] text-white premium-shadow">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/workshop-hero.jpg"
                alt="Dyna-Mic Diesel workshop contact"
                fill
                sizes="380px"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel to-transparent" />
            </div>
            <div className="p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-safety">
                Workshop Contact
              </p>
              <h2 className="mt-3 text-3xl font-black">Speak to Dyna-Mic Diesel</h2>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Call, WhatsApp or request a quote with the truck brand, engine code,
                symptoms and fleet details.
              </p>
              <div className="mt-5 text-sm text-white/80">
                <p className="flex gap-2">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-safety" />
                  {business.address}
                </p>
              </div>
              <div className="mt-6">
                <ContactButtons compact />
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-safety hover:text-white"
              >
                View contact details
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1b1b] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white">Why Operators Contact Us</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {page.proof.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] p-6 text-sm font-bold text-white/78">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faq={page.faq} />

      <section className="relative overflow-hidden bg-[#111111] py-20 text-white">
        <Image
          src="/images/workshop-hero.jpg"
          alt="Dyna-Mic Diesel workshop"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#111111]/82" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-diesel-red">
              Workshop Enquiries
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight">
              Need diesel truck repair support from an experienced workshop?
            </h2>
          </div>
          <div>
            <ContactButtons />
            <Link
              href="/request-a-quote"
              className="mt-4 inline-flex items-center gap-2 text-sm font-black text-diesel-red hover:text-white"
            >
              Request a detailed quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

function imageForPage(page: SeoPage) {
  const text = `${page.slug} ${page.title}`.toLowerCase();
  if (text.includes("volvo")) return "/images/volvo-truck.jpg";
  if (text.includes("scania")) return "/images/scania-truck.jpg";
  if (text.includes("mercedes") || text.includes("actros")) return "/images/mercedes-actros.jpg";
  if (text.includes("injector") || text.includes("pump")) return "/images/diesel-injectors.jpg";
  if (text.includes("dyno")) return "/images/dyno-testing.jpg";
  if (text.includes("diagnostic")) return "/images/diagnostics.jpg";
  if (text.includes("fleet")) return "/images/fleet-maintenance.jpg";
  if (text.includes("engine")) return "/images/engine-reconditioning.jpg";
  return "/images/workshop-hero.jpg";
}
