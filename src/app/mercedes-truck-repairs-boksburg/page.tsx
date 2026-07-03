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
  title: "Mercedes Truck Repairs Boksburg | Mercedes Actros Repairs East Rand",
  description:
    "Mercedes-Benz truck repairs, Mercedes Actros diagnostics, servicing and diesel maintenance in Boksburg from Dyna-Mic Diesel.",
  alternates: { canonical: "/mercedes-truck-repairs-boksburg" },
  keywords: [
    "Mercedes truck repairs Boksburg",
    "Mercedes Actros repairs East Rand",
    "Mercedes truck tractor repair Boksburg",
    "Mercedes diesel diagnostics Gauteng",
    "Mercedes truck service Boksburg",
  ],
};

const breadcrumbs: LinkItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Mercedes-Benz Truck Repairs Boksburg",
    href: "/mercedes-truck-repairs-boksburg",
  },
];

const faq: Faq[] = [
  {
    question: "Does Dyna-Mic Diesel work on Mercedes-Benz trucks?",
    answer:
      "Yes. Dyna-Mic Diesel works on Mercedes-Benz truck repairs, Mercedes Actros diagnostics, servicing and diesel maintenance enquiries from its workshop in Anderbolt, Boksburg.",
  },
  {
    question: "Can you help with Mercedes Actros repairs in the East Rand?",
    answer:
      "Yes. The workshop handles Mercedes Actros repairs East Rand operators can discuss before approving diagnostics, servicing, maintenance or engine repair work.",
  },
  {
    question: "Do you support Mercedes truck tractor repair enquiries?",
    answer:
      "Yes. Dyna-Mic Diesel supports Mercedes truck tractor repair Boksburg enquiries, including diagnostics, diesel pumps and injectors, servicing and fleet maintenance planning.",
  },
  {
    question: "What should I include in a Mercedes truck repair quote request?",
    answer:
      "Include the Mercedes-Benz or Actros model, engine code if known, warning lights, symptoms, recent repairs, service history and whether the truck is part of a fleet.",
  },
];

const commonIssues = [
  "Engine performance problems",
  "Starting problems",
  "Injector faults",
  "Diesel pump issues",
  "Engine warning lights",
  "Overheating",
  "Excessive smoke",
  "Fuel consumption problems",
];

const relatedServices: LinkItem[] = [
  {
    label: "Mercedes Actros Engine Reconditioning",
    href: "/mercedes-actros-engine-reconditioning-boksburg",
  },
  { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
  { label: "Diesel Pumps and Injectors", href: "/services/diesel-pumps-and-injectors" },
  { label: "Engine Dyno Testing", href: "/services/engine-dyno-testing" },
  { label: "Fleet Maintenance", href: "/fleet-maintenance" },
  {
    label: "Truck Services, Maintenance and Repairs",
    href: "/services/truck-services-maintenance-and-repairs",
  },
];

export default function MercedesTruckRepairsPage() {
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
        eyebrow="Mercedes truck repairs Boksburg"
        h1="Mercedes-Benz Truck Repairs & Actros Diagnostics in Boksburg"
        summary="Mercedes-Benz truck repairs, Mercedes Actros diagnostics, servicing and diesel maintenance in Boksburg from Dyna-Mic Diesel for East Rand and Gauteng operators."
      />

      <section className="bg-panel py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <section className="rounded border border-line bg-background p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-diesel-red">
                Mercedes Actros repairs East Rand
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">
                Mercedes-Benz and Actros truck repairs
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Dyna-Mic Diesel works on Mercedes-Benz trucks, including
                Mercedes Actros models, from its Anderbolt workshop in Boksburg.
                This page is built for operators searching for Mercedes truck
                repairs Boksburg, Mercedes truck tractor repair Boksburg,
                Mercedes diesel diagnostics Gauteng and Mercedes truck service
                Boksburg.
              </p>
              <p className="mt-4 leading-7 text-muted">
                The workshop keeps the process practical: understand the
                symptoms, run diagnostics where needed, discuss the repair scope
                clearly and support fleet owners with service and preventative
                maintenance planning.
              </p>
            </section>

            <section className="mt-10">
              <div className="mb-5 flex items-center gap-3">
                <AlertTriangle className="text-diesel-red" size={24} aria-hidden="true" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Common Mercedes Truck Issues
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
              title="Mercedes Actros Diagnostics"
              copy="Mercedes Actros diagnostics help identify warning lights, engine performance problems, starting issues and running concerns before repair work is approved. For East Rand operators, diagnostics can turn symptoms into a clearer repair plan."
              points={[
                "Fault finding for Actros warning lights and drivability issues",
                "Mercedes diesel diagnostics Gauteng enquiries",
                "Useful context before repairs or maintenance decisions",
              ]}
            />

            <ContentBlock
              icon={<Truck size={24} />}
              title="Mercedes Truck Tractor Repairs"
              copy="Mercedes truck tractor repair Boksburg enquiries can include Actros repair concerns, engine performance symptoms, diesel maintenance and fleet downtime priorities."
              points={[
                "Mercedes truck tractor repair planning",
                "Actros repair and maintenance support",
                "Commercial truck repair enquiries",
              ]}
            />

            <ContentBlock
              icon={<Settings size={24} />}
              title="Diesel Pumps and Injectors"
              copy="Diesel pump and injector issues can affect starting, power, smoke and fuel consumption. Dyna-Mic Diesel treats fuel system symptoms as part of a wider diagnostic process so Mercedes-Benz truck repair work is scoped properly."
              points={[
                "Injector fault symptoms",
                "Diesel pump issue assessment",
                "Repair enquiries supported by service history",
              ]}
            />

            <ContentBlock
              icon={<Wrench size={24} />}
              title="Servicing and Preventative Maintenance"
              copy="Mercedes truck service Boksburg enquiries can include regular servicing, preventative checks and diesel maintenance for commercial vehicles that need to stay productive."
              points={[
                "Service and maintenance planning",
                "Preventative checks for repeat issues",
                "Truck services, maintenance and repairs",
              ]}
            />

            <ContentBlock
              icon={<ShieldCheck size={24} />}
              title="Fleet Owner Support"
              copy="Fleet owners can request Mercedes-Benz truck repair support by sharing the number of vehicles, service intervals, Actros model details, fault notes and downtime priorities."
              points={[
                "Fleet maintenance quote requests",
                "Mercedes-Benz and Actros service planning",
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
              Book a Mercedes-Benz Truck Repair Enquiry
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Call or WhatsApp Dyna-Mic Diesel with the Mercedes-Benz or Actros
              model, symptoms, warning lights, engine code if known, recent
              repair history and fleet details.
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
              Need Mercedes truck repairs in Boksburg?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
              Contact {business.name} for Mercedes-Benz truck repairs, Actros
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
