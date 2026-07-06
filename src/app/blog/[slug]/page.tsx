import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedArticles } from "@/components/related-articles";
import { JsonLd } from "@/components/seo";
import { SeoPageTemplate } from "@/components/page-template";
import {
  articleSchema,
  blogPosts,
  getBySlug,
  getRelatedArticlesForPage,
  pageMetadata,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getBySlug(blogPosts, slug);
  if (!page) return {};
  return pageMetadata(page, `/blog/${slug}`);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const page = getBySlug(blogPosts, slug);
  if (!page) notFound();
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: page.title, href: `/blog/${page.slug}` },
      ]}
    >
      <JsonLd data={articleSchema(page, `/blog/${page.slug}`)} />
      <article className="mt-10 rounded-xl border border-white/10 bg-[#1b1b1b] p-7 text-white premium-shadow">
        <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.14em] text-white/50">
          <span>By {page.article?.author ?? "Dyna-Mic Diesel"}</span>
          {page.article?.dateModified ? <span>Updated {page.article.dateModified}</span> : null}
        </div>
        <div className="mt-8 space-y-10">
          {page.article?.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-black text-white">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-white/70">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets?.length ? (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm font-bold text-white/74"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-diesel-red/35 bg-diesel-red/10 p-6">
          <h2 className="text-2xl font-black text-white">Practical Next Step</h2>
          <p className="mt-3 leading-7 text-white/74">
            {page.article?.cta ??
              "If the issue affects a working truck or fleet schedule, send the brand, model, engine code and symptoms before approving repair work."}
          </p>
        </div>
      </article>

      <RelatedArticles articles={getRelatedArticlesForPage(page)} />
    </SeoPageTemplate>
  );
}
