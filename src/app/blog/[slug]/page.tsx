import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/page-template";
import { blogPosts, getBySlug, pageMetadata } from "@/lib/site";

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
      <div className="mt-10 rounded border border-line bg-background p-6">
        <h2 className="text-2xl font-semibold text-foreground">Practical next step</h2>
        <p className="mt-3 leading-7 text-muted">
          If the issue affects a working truck or fleet schedule, send the brand,
          model, engine code and symptoms before approving repair work.
        </p>
      </div>
    </SeoPageTemplate>
  );
}
