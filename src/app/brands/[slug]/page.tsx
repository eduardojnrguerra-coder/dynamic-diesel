import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/page-template";
import { brandPages, getBySlug, pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const confirmedBrandSlugs = new Set([
  "scania-truck-repairs",
  "volvo-truck-repairs",
  "mercedes-truck-tractor-repairs",
]);

const confirmedBrandPages = brandPages.filter((page) =>
  confirmedBrandSlugs.has(page.slug),
);

export function generateStaticParams() {
  return confirmedBrandPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getBySlug(confirmedBrandPages, slug);
  if (!page) return {};
  return pageMetadata(page, `/brands/${slug}`);
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const page = getBySlug(confirmedBrandPages, slug);
  if (!page) notFound();
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Brands", href: "/brands/scania-truck-repairs" },
        { label: page.title, href: `/brands/${page.slug}` },
      ]}
    />
  );
}
