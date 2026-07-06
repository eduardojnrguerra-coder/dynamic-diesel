import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
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
  title: "Mercedes Actros Engine Reconditioning Boksburg | OM501 OM502",
  description:
    "Mercedes Actros engine reconditioning in Boksburg for OM501, OM502, OM541 and OM542 diesel engines. Diagnostics, repairs and fleet support by Dyna-Mic Diesel.",
  alternates: { canonical: "/mercedes-actros-engine-reconditioning-boksburg" },
  keywords: [
    "Mercedes Actros engine reconditioning Boksburg",
    "Mercedes OM501 engine reconditioning",
    "Mercedes OM502 engine reconditioning",
    "Mercedes OM541 engine reconditioning",
    "Mercedes OM542 engine reconditioning",
    "Actros engine rebuild East Rand",
    "diesel engine reconditioning Boksburg",
  ],
};

const breadcrumbs: LinkItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Mercedes Actros Engine Reconditioning Boksburg",
    href: "/mercedes-actros-engine-reconditioning-boksburg",
  },
];

const faq: Faq[] = [
  {
    question: "Does Dyna-Mic Diesel provide Mercedes Actros engine reconditioning?",
    answer:
      "Yes. Dyna-Mic Diesel provides Mercedes Actros diesel engine reconditioning and repair support from its Anderbolt workshop in Boksburg.",
  },
  {
    question: "Which Mercedes Actros engines are covered on this page?",
    answer:
      "This page covers Mercedes Actros V6 OM501 engine reconditioning, Mercedes Actros V8 OM502 engine reconditioning, Mercedes OM541 engine reconditioning and Mercedes OM542 engine reconditioning enquiries.",
  },
  {
    question: "Should diagnostics happen before Actros engine reconditioning?",
    answer:
      "Yes. Diagnostics and inspection help confirm the symptoms, engine condition and repair scope before an Actros engine rebuild or reconditioning quote is discussed.",
  },
  {
    question: "Can fleet owners request Actros engine repair support?",
    answer:
      "Yes. Fleet owners can request support by sharing the Actros model, engine code, vehicle count, downtime priorities, service history and symptoms.",
  },
];

const engineTypes = [
  "Mercedes Actros V6 OM501 engine reconditioning",
  "Mercedes Actros V8 OM502 engine reconditioning",
  "Mercedes OM541 engine reconditioning",
  "Mercedes OM542 engine reconditioning",
];

const warningSigns = [
  "Loss of compression",
  "Excessive smoke",
  "High oil consumption",
  "Overheating",
  "Knocking sounds",
  "Loss of power",
  "Poor fuel economy",
  "Starting problems",
];

const relatedServices: LinkItem[] = [
  { label: "Mercedes-Benz Truck Repairs", href: "/mercedes-truck-repairs-boksburg" },
  { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
  { label: "Diesel Pumps and Injectors", href: "/services/diesel-pumps-and-injectors" },
  { label: "Engine Dyno Testing", href: "/services/engine-dyno-testing" },
  { label: "Fleet Maintenance", href: "/fleet-maintenance" },
];

export default function MercedesActrosEngineReconditioningPage() {
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
        eyebrow="Mercedes Actros engine reconditioning Boksburg"
        h1="Mercedes Actros Engine Reconditioning in Boksburg"
        summary="Mercedes Actros diesel engine reconditioning and repair support for OM501, OM502, OM541 and OM542 engine enquiries from Boksburg, the East Rand and Gauteng."
      />

      <section className="bg-panel py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
          <div>
            <section className="rounded border border-line bg-background p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-diesel-red">
                Actros engine rebuild East Rand
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">
                Actros diesel engine repair support
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Dyna-Mic Diesel provides Mercedes Actros diesel engine
                reconditioning and repair support from Unit 7, The Avenues in
                Anderbolt, Boksburg. The workshop supports operators looking
                for diesel engine reconditioning Boksburg, Actros engine rebuild
                East Rand and Mercedes Actros engine reconditioning Boksburg
                enquiries.
              </p>
              <p className="mt-4 leading-7 text-muted">
                The process is practical: understand the symptoms, inspect the
                engine condition, run diagnostics where needed, discuss the
                repair scope and support fleet owners with clear communication
                before work is approved.
              </p>
            </section>

            <section className="mt-10 rounded border border-line bg-background p-6">
              <div className="flex items-center gap-3 text-diesel-red">
                <Settings size={24} aria-hidden="true" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Mercedes Actros Engine Types
                </h2>
              </div>
              <p className="mt-4 leading-7 text-muted">
                Actros engine repair enquiries often start with confirming the
                engine code. Dyna-Mic Diesel can discuss Mercedes OM501 engine
                reconditioning, Mercedes OM502 engine reconditioning, Mercedes
                OM541 engine reconditioning and Mercedes OM542 engine
                reconditioning requirements before quoting.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {engineTypes.map((engine) => (
                  <div
                    key={engine}
                    className="flex items-center gap-3 rounded border border-line bg-panel p-4"
                  >
                    <CheckCircle2 className="shrink-0 text-diesel-red" size={20} />
                    <span className="font-semibold text-steel">{engine}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <div className="mb-5 flex items-center gap-3">
                <AlertTriangle className="text-diesel-red" size={24} aria-hidden="true" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Signs an Actros Engine May Need Reconditioning
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {warningSigns.map((sign) => (
                  <div
                    key={sign}
                    className="flex items-center gap-3 rounded border border-line bg-background p-4"
                  >
                    <CheckCircle2 className="shrink-0 text-diesel-red" size={20} />
                    <span className="font-semibold text-steel">{sign}</span>
                  </div>
                ))}
              </div>
            </section>

            <ContentBlock
              icon={<Gauge size={24} />}
              title="Diagnostics Before Reconditioning"
              copy="Diagnostics before reconditioning help separate fuel system faults, sensor issues, compression concerns, cooling problems and mechanical wear. That gives the workshop and the operator a clearer basis for the Actros repair conversation."
              points={[
                "Fault finding before repair approval",
                "Engine condition and symptom checks",
                "Practical quote information for fleet owners",
              ]}
            />

            <ContentBlock
              icon={<ClipboardCheck size={24} />}
              title="Reconditioning Process Overview"
              copy="A reconditioning enquiry can include inspection, strip-down assessment where required, parts and machining discussion, repair scope planning, assembly checks and workshop communication before the truck returns to service."
              points={[
                "Assess symptoms and engine history",
                "Confirm scope from inspection findings",
                "Discuss parts, timing and fleet priorities",
              ]}
            />

            <ContentBlock
              icon={<Settings size={24} />}
              title="Diesel Pumps and Injectors"
              copy="Diesel pumps and injectors can contribute to hard starting, smoke, loss of power and poor fuel economy. Fuel system checks are useful when assessing whether the Actros engine problem is mechanical, fuel-related or a combination of issues."
              points={[
                "Diesel pumps and injectors",
                "Injector fault symptoms",
                "Fuel system context before engine work",
              ]}
            />

            <ContentBlock
              icon={<Wrench size={24} />}
              title="Engine Dyno Testing"
              copy="Engine dyno testing is included as a related service for diesel engine reconditioning Boksburg enquiries. Ask Dyna-Mic Diesel about dyno testing when discussing Actros engine repair, performance concerns or post-repair assessment needs."
              points={[
                "Engine dyno testing enquiries",
                "Performance assessment support",
                "Useful for engine-focused repair planning",
              ]}
            />

            <ContentBlock
              icon={<Truck size={24} />}
              title="Fleet Owner Benefits"
              copy="Fleet owners need repair information they can act on. Dyna-Mic Diesel supports Actros engine enquiries with a clear route for calls, WhatsApp messages and quote requests that include vehicle count, engine codes and downtime priorities."
              points={[
                "Actros engine rebuild East Rand enquiries",
                "Fleet maintenance quote support",
                "Service history and downtime planning",
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
              Request an Actros Engine Reconditioning Quote
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Call or WhatsApp {business.name} with the Actros model, engine
              code, symptoms, warning lights, oil or coolant concerns, service
              history and fleet details.
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
              Need Mercedes Actros engine reconditioning in Boksburg?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
              Contact {business.name} for Mercedes Actros engine
              reconditioning, diesel diagnostics, diesel pumps and injectors,
              engine dyno testing and fleet support across Boksburg, the East
              Rand and Gauteng.
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
