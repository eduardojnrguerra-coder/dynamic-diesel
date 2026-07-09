import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { quoteHref } from "@/lib/site";

export function HealthInspectionSection({
  eyebrow = "Complimentary Truck Health Inspection",
  heading = "We Look Beyond the Job You Booked",
  copy,
  compact = false,
}: {
  eyebrow?: string;
  heading?: string;
  copy?: string;
  compact?: boolean;
}) {
  return (
    <section className="section-dark border-y border-white/10 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-diesel-red">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
            {heading}
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-8 text-white/66">
            <p>
              {copy ??
                "Whether your truck comes in for a minor service, brake repair, diagnostics or another workshop service, Dyna-Mic Diesel provides a complimentary truck health inspection."}
            </p>
            {!compact ? (
              <>
                <p>
                  Our team looks for potential maintenance concerns and developing
                  problems that may require attention, helping you gain a clearer
                  understanding of your truck&apos;s overall condition.
                </p>
                <p>
                  Because maintaining a commercial vehicle should be about more
                  than fixing today&apos;s problem. It should also be about making
                  informed decisions that support the truck&apos;s ongoing operation.
                </p>
              </>
            ) : null}
          </div>
          <Link
            href={quoteHref}
            className="mt-7 inline-flex items-center gap-2 rounded bg-diesel-red px-5 py-3 text-sm font-black text-[#111111] transition hover:bg-safety"
          >
            Book Your Truck In <ArrowRight size={17} />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] premium-shadow">
          <Image
            src="/images/workshop-hero.jpg"
            alt="Dyna-Mic Diesel complimentary truck health inspection"
            width={900}
            height={620}
            className="h-full min-h-[390px] w-full object-cover opacity-82"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/88 via-[#111111]/18 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-7">
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded border border-diesel-red/35 bg-diesel-red/10 text-diesel-red">
              <ShieldCheck size={24} aria-hidden="true" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Helps identify potential problems",
                "Adds awareness of truck condition",
                "Supports informed maintenance decisions",
                "Applies to workshop visits",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded border border-white/10 bg-black/25 px-3 py-2 text-sm font-bold text-white/82">
                  <CheckCircle2 size={16} className="shrink-0 text-diesel-red" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
