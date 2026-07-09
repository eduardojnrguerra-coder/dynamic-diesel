import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Settings,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { Breadcrumbs, FaqSection, JsonLd, SeoSchemas } from "@/components/seo";
import { ContactButtons, Hero, LinkGrid, PageFrame } from "@/components/site-shell";
import { business, localBusinessSchema, type Faq, type LinkItem } from "@/lib/site";

export const metadata: Metadata = {
  title: "Volvo Truck Repairs Boksburg | Volvo Diesel Diagnostics East Rand",
  description:
    "Dyna-Mic Diesel provides Volvo truck repairs, diagnostics, servicing and diesel maintenance in Boksburg for fleet owners and commercial vehicle operators across the East Rand.",
  alternates: { canonical: "/volvo-truck-repairs-boksburg" },
  keywords: [
    "Volvo truck repairs Boksburg",
    "Volvo truck diagnostics East Rand",
    "Volvo diesel mechanic Boksburg",
    "Volvo truck service Boksburg",
    "commercial Volvo truck repairs Gauteng",
  ],
};

const breadcrumbs: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Volvo Truck Repairs Boksburg", href: "/volvo-truck-repairs-boksburg" },
];

const faq: Faq[] = [
  {
    question: "Does Dyna-Mic Diesel work on Volvo trucks?",
    answer:
      "Yes. Dyna-Mic Diesel works on Volvo truck repairs, diagnostics, servicing and diesel maintenance enquiries from its workshop in Anderbolt, Boksburg.",
  },
  {
    question: "Can you help with Volvo truck diagnostics in the East Rand?",
    answer:
      "Yes. The workshop handles Volvo truck diagnostics East Rand operators can use before approving repair work or fleet maintenance.",
  },
  {
    question: "What Volvo truck issues should I mention when requesting a quote?",
    answer:
      "Mention loss of power, starting problems, injector faults, diesel pump issues, warning lights, overheating, smoke, poor fuel economy and recent repair history.",
  },
  {
    question: "Do you support fleet owners with Volvo truck servicing?",
    answer:
      "Yes. Fleet owners can send vehicle counts, service intervals, symptoms and downtime priorities for Volvo truck service and maintenance planning.",
  },
];

const commonIssues = [
  "Loss of power",
  "Starting problems",
  "Injector faults",
  "Diesel pump issues",
  "Engine warning lights",
  "Overheating",
  "Excessive smoke",
  "Poor fuel economy",
];

const relatedServices: LinkItem[] = [
  { label: "Truck Repairs", href: "/truck-repairs-boksburg" },
  { label: "Truck Servicing", href: "/truck-servicing-boksburg" },
  { label: "Diesel Diagnostics", href: "/diesel-diagnostics-boksburg" },
  { label: "Diesel Pumps and Injectors", href: "/diesel-pumps-and-injectors-boksburg" },
  { label: "Engine Dyno Testing", href: "/engine-dyno-testing-boksburg" },
  { label: "Truck Health Inspection", href: "/truck-health-inspection-boksburg" },
  { label: "Fleet Maintenance", href: "/fleet-maintenance" },
  {
    label: "Truck Services, Maintenance and Repairs",
    href: "/truck-servicing-boksburg",
  },
];

export default function VolvoTruckRepairsPage() {
  return (
    <PageFrame>
      <SeoSchemas faq={faq} breadcrumbs={breadcrumbs} />
      <JsonLd data={localBusinessSchema()} />
      <div className="bg-panel">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>
      <Hero
        eyebrow="Volvo truck repairs Boksburg"
        h1="Volvo Truck Repairs & Diagnostics in Boksburg"
        summary="Dyna-Mic Diesel provides Volvo truck repairs, Volvo diesel diagnostics, servicing and diesel maintenance in Boksburg for fleet owners and commercial vehicle operators across the East Rand."
      />

      <section className="bg-panel py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <section className="rounded border border-line bg-background p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-diesel-red">
                Volvo diesel mechanic Boksburg
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">
                Volvo truck repairs for commercial vehicles
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Dyna-Mic Diesel works on Volvo trucks and commercial vehicles
                from its Anderbolt workshop in Boksburg. Operators can contact
                the workshop for Volvo truck repairs Boksburg, Volvo truck
                diagnostics East Rand, Volvo truck service Boksburg and
                commercial Volvo truck repairs Gauteng enquiries.
              </p>
              <p className="mt-4 leading-7 text-muted">
                The approach is practical: confirm symptoms, run diagnostics
                where needed, discuss repair scope clearly and support fleet
                owners with maintenance planning.
              </p>
            </section>

            <section className="mt-10">
              <div className="mb-5 flex items-center gap-3">
                <AlertTriangle className="text-diesel-red" size={24} aria-hidden="true" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Common Volvo Truck Issues
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {commonIssues.map((issue) => (
                  <div
                    key={issue}
                    className="flex items-center gap-3 rounded border border-line bg-background p-4"
                  >
                    <CheckCircle2 className="shrink-0 text-diesel-red" size={20} />
                    <span className="font-semibold text-steel">{issue}</span>
                  </div>
                ))}
              </div>
            </section>

            <ContentBlock
              icon={<Gauge size={24} />}
              title="Volvo Diagnostics"
              copy="Volvo truck diagnostics help narrow down warning lights, derate concerns, loss of power and running issues before repair work is approved. For East Rand operators, diagnostics can give a clearer route from symptoms to repair scope."
              points={[
                "Fault finding for warning lights and drivability problems",
                "Diagnostics before diesel maintenance or parts replacement",
                "Useful context for fleet maintenance decisions",
              ]}
            />

            <ContentBlock
              icon={<Settings size={24} />}
              title="Diesel Pumps and Injectors"
              copy="Diesel pumps and injectors can affect power, starting, smoke and fuel economy. Dyna-Mic Diesel treats fuel system symptoms as part of a wider diagnostic process so Volvo truck repair work is scoped properly."
              points={[
                "Injector fault symptoms and fuel delivery concerns",
                "Diesel pump issue assessment",
                "Repair enquiries supported by symptom history",
              ]}
            />

            <ContentBlock
              icon={<Wrench size={24} />}
              title="Servicing and Preventative Maintenance"
              copy="Volvo truck service Boksburg enquiries can include regular servicing, preventative checks and maintenance planning for commercial vehicles that need to stay productive."
              points={[
                "Service and maintenance planning",
                "Preventative checks for repeat issues",
                "Truck services, maintenance and repairs for operators",
              ]}
            />

            <ContentBlock
              icon={<Truck size={24} />}
              title="Fleet Owner Support"
              copy="Fleet owners can request Volvo truck repair support by sharing the number of vehicles, service intervals, fault notes and downtime priorities. This helps the workshop respond with useful next steps."
              points={[
                "Fleet maintenance quote requests",
                "Commercial Volvo truck repairs Gauteng support",
                "Clear route to call, WhatsApp or request a quote",
              ]}
            />

            <section className="mt-10">
              <h2 className="text-2xl font-semibold text-foreground">
                Related Services
              </h2>
              <div className="mt-5">
                <LinkGrid links={relatedServices} />
              </div>
            </section>
          </div>

          <aside className="h-fit rounded border border-line bg-steel p-6 text-white">
            <ShieldCheck className="text-safety" size={28} aria-hidden="true" />
            <h2 className="mt-3 text-2xl font-semibold">
              Book a Volvo Truck Repair Enquiry
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Call or WhatsApp Dyna-Mic Diesel with the Volvo model, symptoms,
              warning lights, recent repair history and whether the vehicle is
              part of a fleet.
            </p>
            <div className="mt-6">
              <ContactButtons compact />
            </div>
            <Link
              href="/request-a-quote#quote-form"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-safety hover:text-white"
            >
              Request a quote <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </section>

      <FaqSection faq={faq} />

      <section className="bg-steel py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-safety">
              Final CTA
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Need Volvo truck repairs in Boksburg?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
              Contact {business.name} for Volvo truck repairs, diagnostics,
              servicing and diesel maintenance across Boksburg, the East Rand
              and Gauteng.
            </p>
          </div>
          <ContactButtons />
        </div>
      </section>
    </PageFrame>
  );
}

function ContentBlock({
  icon,
  title,
  copy,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
  points: string[];
}) {
  return (
    <section className="mt-10 rounded border border-line bg-background p-6">
      <div className="flex items-center gap-3 text-diesel-red">
        {icon}
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      </div>
      <p className="mt-4 leading-7 text-muted">{copy}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {points.map((point) => (
          <div key={point} className="rounded border border-line bg-panel p-4 text-sm font-semibold text-steel">
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}
