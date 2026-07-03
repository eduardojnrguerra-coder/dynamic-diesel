import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/page-template";
import { getBySlug, pageMetadata, servicePages } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getBySlug(servicePages, slug);
  if (!page) return {};
  return pageMetadata(page, `/services/${slug}`);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getBySlug(servicePages, slug);
  if (!page) notFound();
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: page.title, href: `/services/${page.slug}` },
      ]}
    />
  );
}
