import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LinkItem } from "@/lib/site";

export function RelatedArticles({ articles }: { articles: LinkItem[] }) {
  if (!articles.length) return null;

  return (
    <section className="mt-12 rounded-xl border border-white/10 bg-[#1b1b1b] p-7 premium-shadow">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
        Truck Advice
      </p>
      <h2 className="mt-2 text-3xl font-black text-white">
        Helpful Articles
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={`${article.label}-${article.href}`}
            href={article.href}
            className="group rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-diesel-red/50"
          >
            <span className="block text-lg font-black text-white">
              {article.label}
            </span>
            {article.description ? (
              <span className="mt-3 block text-sm leading-6 text-white/62">
                {article.description}
              </span>
            ) : null}
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-diesel-red">
              Read article
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
