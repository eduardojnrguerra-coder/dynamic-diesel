import type { Metadata } from "next";
import { SeoPageTemplate } from "@/components/page-template";
import { LinkGrid } from "@/components/site-shell";
import { blogPosts, commonFaq, type SeoPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | Diesel Truck Repair Advice Boksburg",
  description:
    "Dyna-Mic Diesel blog covering diesel diagnostics, fleet maintenance and engine reconditioning topics for Boksburg and East Rand truck operators.",
  alternates: { canonical: "/blog" },
};

const page: SeoPage = {
  slug: "blog",
  title: "Blog",
  metaTitle: "Diesel Truck Repair Blog Boksburg",
  metaDescription: metadata.description as string,
  h1: "Diesel Truck Repair Blog",
  summary:
    "Practical articles about diesel diagnostics, Mercedes Actros engine reconditioning and fleet maintenance for truck operators.",
  keywords: ["diesel truck repair blog Boksburg", "diesel diagnostics East Rand"],
  bullets: ["Engine reconditioning topics", "Fleet maintenance planning", "Diagnostics before repair decisions"],
  proof: ["Articles link to relevant workshop services", "Topics are written for truck operators and fleet owners"],
  faq: commonFaq,
  internalLinks: [
    { label: "Services overview", href: "/services" },
    { label: "Mercedes Actros engine reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg" },
    { label: "Request a quote", href: "/request-a-quote#quote-form" },
  ],
};

export default function BlogPage() {
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]}
    >
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Latest Articles</h2>
        <div className="mt-5">
          <LinkGrid
            links={blogPosts.map((post) => ({
              label: post.title,
              href: `/blog/${post.slug}`,
            }))}
          />
        </div>
      </div>
    </SeoPageTemplate>
  );
}
