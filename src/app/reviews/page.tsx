import type { Metadata } from "next";
import { SeoPageTemplate } from "@/components/page-template";
import { commonFaq, type SeoPage } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Reviews | Dyna-Mic Diesel Boksburg" },
  description:
    "Dyna-Mic Diesel reviews page for diesel truck repair customers in Boksburg, the East Rand and Gauteng.",
  alternates: { canonical: "/reviews" },
};

const page: SeoPage = {
  slug: "reviews",
  title: "Reviews",
  metaTitle: "Dyna-Mic Diesel Reviews",
  metaDescription: metadata.description as string,
  h1: "Dyna-Mic Diesel Reviews",
  summary:
    "Customer feedback and workshop contact information for Dyna-Mic Diesel in Anderbolt, Boksburg.",
  keywords: ["Dyna-Mic Diesel reviews", "diesel truck repairs Boksburg"],
  bullets: ["Customer feedback section", "Local trust signals", "Clear contact path"],
  proof: ["Customer feedback can be added when supplied", "No unverified testimonials are invented"],
  faq: commonFaq,
  internalLinks: [
    { label: "Contact", href: "/contact" },
    { label: "Request a quote", href: "/request-a-quote" },
    { label: "About", href: "/about" },
  ],
};

export default function ReviewsPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }]}
    >
      <div className="mt-10 rounded border border-line bg-background p-6">
        <h2 className="text-2xl font-semibold text-foreground">Customer feedback</h2>
        <p className="mt-3 leading-7 text-muted">
          Verified customer reviews can be added here when supplied by the
          business. No review quotes have been invented.
        </p>
      </div>
    </SeoPageTemplate>
  );
}
