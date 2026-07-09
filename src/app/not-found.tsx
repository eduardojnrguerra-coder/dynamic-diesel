import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactButtons, PageFrame } from "@/components/site-shell";
import { supportedTruckBrandText } from "@/lib/site";

export default function NotFound() {
  return (
    <PageFrame>
      <section className="section-dark min-h-[70vh] py-28 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-diesel-red">
            Page Not Found
          </p>
          <h1 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">
            This workshop page could not be found.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            The page may have moved, but you can still contact Dyna-Mic Diesel
            for truck repair enquiries in Boksburg and the East Rand. The
            workshop services and repairs {supportedTruckBrandText}.
          </p>
          <div className="mt-8">
            <ContactButtons />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-black text-diesel-red hover:text-white"
            >
              View services <ArrowRight size={17} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-black text-diesel-red hover:text-white"
            >
              Contact the workshop <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
