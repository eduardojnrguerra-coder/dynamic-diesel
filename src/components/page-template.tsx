import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { Breadcrumbs, FaqSection, SeoSchemas } from "@/components/seo";
import { ContactButtons, Hero, LinkGrid, PageFrame } from "@/components/site-shell";
import { business, type LinkItem, type SeoPage } from "@/lib/site";

export function SeoPageTemplate({
  page,
  breadcrumbs,
  children,
}: {
  page: SeoPage;
  breadcrumbs: LinkItem[];
  children?: React.ReactNode;
}) {
  return (
    <PageFrame>
      <SeoSchemas faq={page.faq} breadcrumbs={breadcrumbs} />
      <div className="bg-panel">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>
      <Hero eyebrow={page.eyebrow} h1={page.h1} summary={page.summary} />
      <section className="bg-panel py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.bullets.map((item) => (
                <div key={item} className="rounded border border-line bg-background p-5">
                  <CheckCircle2 className="text-diesel-red" size={22} aria-hidden="true" />
                  <p className="mt-3 font-semibold text-steel">{item}</p>
                </div>
              ))}
            </div>
            {children}
            <div className="mt-10 rounded border border-line bg-background p-6">
              <h2 className="text-2xl font-semibold text-foreground">Local Search Focus</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                This page is built around local diesel truck repair searches for{" "}
                {business.areaServed.join(", ")}.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[...page.keywords, ...business.areaServed].map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded border border-line bg-panel px-3 py-1 text-xs font-semibold text-steel"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-foreground">Related Pages</h2>
              <div className="mt-5">
                <LinkGrid links={page.internalLinks} />
              </div>
            </div>
          </div>
          <aside className="h-fit rounded border border-line bg-steel p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-safety">
              Workshop Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Speak to Dyna-Mic Diesel</h2>
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
              className="mt-4 inline-flex text-sm font-semibold text-safety hover:text-white"
            >
              View contact details
            </Link>
          </aside>
        </div>
      </section>
      <section className="border-y border-line bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-foreground">Why Operators Contact Us</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {page.proof.map((item) => (
              <div key={item} className="rounded border border-line bg-panel p-5 text-sm font-semibold text-steel">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection faq={page.faq} />
    </PageFrame>
  );
}
