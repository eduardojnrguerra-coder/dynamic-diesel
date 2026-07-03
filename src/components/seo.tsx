import Link from "next/link";
import { breadcrumbSchema, faqSchema, type Faq, type LinkItem } from "@/lib/site";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SeoSchemas({
  faq,
  breadcrumbs,
}: {
  faq: Faq[];
  breadcrumbs: LinkItem[];
}) {
  return (
    <>
      <JsonLd data={faqSchema(faq)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
    </>
  );
}

export function Breadcrumbs({ items }: { items: LinkItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 ? <span className="mx-2 text-line">/</span> : null}
          {index === items.length - 1 ? (
            <span className="font-medium text-foreground">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-diesel-red">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export function FaqSection({ faq }: { faq: Faq[] }) {
  return (
    <section className="border-t border-line bg-panel py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-diesel-red">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">
            Common Questions
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded border border-line bg-background p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-foreground">
                {item.question}
                <span className="float-right ml-4 text-diesel-red group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
