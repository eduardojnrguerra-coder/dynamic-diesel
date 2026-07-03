import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageTemplate } from "@/components/page-template";
import { enginePages, getBySlug, pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return enginePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getBySlug(enginePages, slug);
  if (!page) return {};
  return pageMetadata(page, `/engines/${slug}`);
}

export default async function EnginePage({ params }: Props) {
  const { slug } = await params;
  const page = getBySlug(enginePages, slug);
  if (!page) notFound();
  return (
    <SeoPageTemplate
      page={page}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Engines", href: "/engines/mercedes-actros-om501-reconditioning" },
        { label: page.title, href: `/engines/${page.slug}` },
      ]}
    />
  );
}
