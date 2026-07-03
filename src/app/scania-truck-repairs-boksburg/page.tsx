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
  title: "Scania Truck Repairs Boksburg | Scania Mechanic East Rand",
  description:
    "Scania truck repairs, diagnostics, servicing and diesel maintenance in Boksburg from Dyna-Mic Diesel. Helping fleet owners and truck operators across the East Rand.",
  alternates: { canonical: "/scania-truck-repairs-boksburg" },
  keywords: [
    "Scania truck repairs Boksburg",
    "Scania mechanic Boksburg",
    "Scania diesel diagnostics East Rand",
    "Scania truck service Gauteng",
    "commercial Scania truck repairs",
  ],
};

const breadcrumbs: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Scania Truck Repairs Boksburg", href: "/scania-truck-repairs-boksburg" },
];

const faq: Faq[] = [
  {
    question: "Does Dyna-Mic Diesel work on Scania trucks?",
    answer:
      "Yes. Dyna-Mic Diesel works on Scania truck repairs, diagnostics, servicing and diesel maintenance enquiries from its workshop in Anderbolt, Boksburg.",
  },
  {
    question: "Can you help with Scania diesel diagnostics in the East Rand?",
    answer:
      "Yes. The workshop handles Scania diesel diagnostics East Rand operators can use before approving repairs, servicing or fleet maintenance work.",
  },
  {
    question: "What Scania truck issues should I mention when requesting a quote?",
    answer:
      "Mention loss of power, starting problems, injector problems, diesel pump issues, engine warning lights, overheating, black smoke, poor fuel efficiency and recent repair history.",
  },
  {
    question: "Do you support fleet owners with Scania truck service planning?",
    answer:
      "Yes. Fleet owners can send vehicle counts, service intervals, symptoms and downtime priorities for Scania truck service Gauteng and maintenance planning.",
  },
];

const commonIssues = [
  "Loss of power",
  "Starting problems",
  "Injector problems",
  "Diesel pump issues",
  "Engine warning lights",
  "Overheating",
  "Black smoke",
  "Poor fuel efficiency",
];

const relatedServices: LinkItem[] = [
  { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
  { label: "Diesel Pumps and Injectors", href: "/services/diesel-pumps-and-injectors" },
  { label: "Engine Dyno Testing", href: "/services/engine-dyno-testing" },
  { label: "Fleet Maintenance", href: "/fleet-maintenance" },
  {
    label: "Truck Services, Maintenance and Repairs",
    href: "/services/truck-services-maintenance-and-repairs",
  },
];

export default function ScaniaTruckRepairsPage() {
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
        eyebrow="Scania truck repairs Boksburg"
        h1="Scania Truck Repairs & Diesel Diagnostics in Boksburg"
        summary="Scania truck repairs, diagnostics, servicing and diesel maintenance in Boksburg from Dyna-Mic Diesel, helping fleet owners and truck operators across the East Rand."
      />

      <section className="bg-panel py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <section className="rounded border border-line bg-background p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-diesel-red">
                Scania mechanic Boksburg
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">
                Scania truck repairs for commercial diesel vehicles
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Dyna-Mic Diesel works on Scania trucks and commercial diesel
                vehicles from its Anderbolt workshop in Boksburg. This page is
                built for operators searching for Scania truck repairs Boksburg,
                Scania mechanic Boksburg, Scania diesel diagnostics East Rand
                and commercial Scania truck repairs.
              </p>
              <p className="mt-4 leading-7 text-muted">
                The workshop keeps the repair process practical: understand the
                symptoms, run diagnostics where needed, discuss the repair scope
                clearly and support fleet owners with service and maintenance
                planning.
              </p>
            </section>

            <section className="mt-10">
              <div className="mb-5 flex items-center gap-3">
                <AlertTriangle className="text-diesel-red" size={24} aria-hidden="true" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Common Scania Truck Issues
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
              title="Scania Diagnostics"
              copy="Scania diesel diagnostics help narrow down warning lights, power loss, starting issues and running concerns before repairs are approved. For East Rand operators, diagnostics can turn symptoms into a clearer repair plan."
              points={[
                "Fault finding for warning lights and drivability problems",
                "Scania diesel diagnostics East Rand enquiries",
                "Useful context before repair or maintenance decisions",
              ]}
            />

            <ContentBlock
              icon={<Settings size={24} />}
              title="Diesel Pumps and Injectors"
              copy="Diesel pump and injector issues can affect starting, power, smoke and fuel efficiency. Dyna-Mic Diesel treats fuel system symptoms as part of a wider diagnostic process so Scania truck repair work is scoped properly."
              points={[
                "Injector problem symptoms",
                "Diesel pump issue assessment",
                "Repair enquiries supported by fault history",
              ]}
            />

            <ContentBlock
              icon={<Wrench size={24} />}
              title="Engine Repair and Maintenance"
              copy="Scania truck service Gauteng enquiries can include engine repair support, regular servicing and preventative maintenance for commercial diesel vehicles that need to stay productive."
              points={[
                "Engine repair and maintenance planning",
                "Preventative checks for repeat issues",
                "Truck services, maintenance and repairs",
              ]}
            />

            <ContentBlock
              icon={<Truck size={24} />}
              title="Fleet Maintenance"
              copy="Fleet owners can request commercial Scania truck repairs by sharing the number of vehicles, service intervals, fault notes and downtime priorities. This helps the workshop respond with useful next steps."
              points={[
                "Fleet maintenance quote requests",
                "Scania truck service planning",
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
              Book a Scania Truck Repair Enquiry
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Call or WhatsApp Dyna-Mic Diesel with the Scania model, symptoms,
              warning lights, recent repair history and whether the vehicle is
              part of a fleet.
            </p>
            <div className="mt-6">
              <ContactButtons compact />
            </div>
            <Link
              href="/request-a-quote"
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
              Need Scania truck repairs in Boksburg?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
              Contact {business.name} for Scania truck repairs, diesel
              diagnostics, servicing and diesel maintenance across Boksburg, the
              East Rand and Gauteng.
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
          <div
            key={point}
            className="rounded border border-line bg-panel p-4 text-sm font-semibold text-steel"
          >
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}
