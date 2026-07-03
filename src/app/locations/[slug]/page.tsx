import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/page-template";
import { getBySlug, locationPages, pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getBySlug(locationPages, slug);
  if (!page) return {};
  return pageMetadata(page, `/locations/${slug}`);
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const page = getBySlug(locationPages, slug);
  if (!page) notFound();
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Locations", href: "/locations/boksburg" },
        { label: page.title, href: `/locations/${page.slug}` },
      ]}
    />
  );
}
