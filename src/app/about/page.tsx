import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Target,
  Users,
} from "lucide-react";
import { HealthInspectionSection } from "@/components/health-inspection-section";
import { Breadcrumbs, FaqSection, JsonLd, SeoSchemas } from "@/components/seo";
import { ContactButtons, LinkGrid, PageFrame } from "@/components/site-shell";
import {
  brandPositioning,
  business,
  commonFaq,
  localBusinessSchema,
  quoteHref,
  supportedTruckBrandText,
  type LinkItem,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About Dyna-Mic Diesel | Truck Repair Specialists Boksburg" },
  description:
    "Learn about Dyna-Mic Diesel, a Boksburg diesel truck repair workshop with over 30 years of industry experience in diagnostics, engine reconditioning, maintenance and fleet support.",
  alternates: { canonical: "/about" },
  keywords: [
    "Dyna-Mic Diesel",
    "truck repairs Boksburg",
    "diesel workshop Boksburg",
    "truck maintenance East Rand",
    "commercial vehicle repairs",
    "diesel diagnostics",
    "engine reconditioning",
    "fleet maintenance",
    "Volvo truck repairs",
    "Scania truck repairs",
    "Mercedes-Benz truck repairs",
  ],
  openGraph: {
    title: "About Dyna-Mic Diesel | Truck Repair Specialists Boksburg",
    description:
      "Boksburg diesel truck repair workshop with over 30 years of industry experience in diagnostics, engine reconditioning, maintenance and fleet support.",
    url: "/about",
    images: [{ url: "/images/workshop-hero.jpg", width: 1600, height: 900 }],
  },
};

const breadcrumbs: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

const serviceCards: LinkItem[] = [
  {
    label: "Diesel Diagnostics",
    href: "/diesel-diagnostics-boksburg",
    description: "Fault finding for warning lights, starting issues, smoke, power loss and running concerns.",
    image: "/images/diagnostics.jpg",
  },
  {
    label: "Engine Reconditioning",
    href: "/engine-reconditioning-boksburg",
    description: "Engine repair and reconditioning enquiries where inspection shows deeper work is needed.",
    image: "/images/engine-reconditioning.jpg",
  },
  {
    label: "Diesel Pumps & Injectors",
    href: "/diesel-pumps-and-injectors-boksburg",
    description: "Support for fuel system symptoms affecting power, starting, smoke and fuel use.",
    image: "/images/diesel-injectors.jpg",
  },
  {
    label: "Engine Dyno Testing",
    href: "/engine-dyno-testing-boksburg",
    description: "Controlled engine testing support for repair and reconditioning discussions.",
    image: "/images/dyno-testing.jpg",
  },
  {
    label: "Truck Servicing & Repairs",
    href: "/truck-servicing-boksburg",
    description: "Truck servicing, maintenance and repair planning from the Anderbolt workshop.",
    image: "/images/truck-servicing.svg",
  },
  {
    label: "Preventative Maintenance",
    href: "/preventative-truck-maintenance-boksburg",
    description: "Maintenance planning that helps identify service needs and repeat faults earlier.",
    image: "/images/truck-health-inspection.svg",
  },
  {
    label: "Fleet Maintenance",
    href: "/fleet-maintenance-boksburg",
    description: "Workshop support for commercial fleets that need practical maintenance coordination.",
    image: "/images/fleet-maintenance.jpg",
  },
];

const brandCards: LinkItem[] = [
  {
    label: "Volvo Truck Repairs",
    href: "/volvo-truck-repairs-boksburg",
    description: "Volvo truck repair, diagnostic, servicing and diesel maintenance enquiries.",
    image: "/images/volvo-brand-truck.webp",
  },
  {
    label: "Scania Truck Repairs",
    href: "/scania-truck-repairs-boksburg",
    description: "Scania diesel diagnostics, truck repairs and maintenance planning.",
    image: "/images/scania-brand-truck.webp",
  },
  {
    label: "Mercedes-Benz & Actros Truck Repairs",
    href: "/mercedes-truck-repairs-boksburg",
    description: "Mercedes-Benz truck repairs, Actros diagnostics and truck tractor support.",
    image: "/images/mercedes-brand-truck.webp",
  },
];

const customerTypes = [
  "Individual truck owners",
  "Fleet operators",
  "Transport businesses",
  "Logistics companies",
  "Commercial vehicle operators",
  "Businesses that depend on reliable truck operations",
];

const trustPoints = [
  "Over 30 Years of Industry Experience",
  "Diesel Truck Repair Knowledge",
  "Volvo, Scania & Mercedes-Benz Focus",
  "Engine Reconditioning",
  "Diesel Diagnostics",
  "Diesel Pumps & Injectors",
  "Engine Dyno Testing",
  "Fleet Maintenance Support",
];

const values = [
  {
    title: "Integrity",
    copy: "We believe in transparent and ethical business practices and in building lasting relationships with our customers.",
  },
  {
    title: "Quality",
    copy: "We remain committed to quality-focused workmanship and providing services based on the requirements of each job.",
  },
  {
    title: "Experience",
    copy: "More than 30 years in the industry has shaped our practical approach to diesel truck repairs, maintenance and problem-solving.",
  },
  {
    title: "Continuous Improvement",
    copy: "We believe in continued learning and adapting as commercial vehicles, diagnostic systems and diesel technology evolve.",
  },
  {
    title: "Teamwork",
    copy: "Effective workshop operations depend on collaboration, shared knowledge and people working together toward the right outcome.",
  },
  {
    title: "Responsibility",
    copy: "We aim to operate responsibly toward our customers, employees, community and environment.",
  },
];

export default function AboutPage() {
  return (
    <PageFrame>
      <SeoSchemas faq={commonFaq} breadcrumbs={breadcrumbs} />
      <JsonLd data={localBusinessSchema()} />

      <div className="bg-[#0b0b0b]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#111111] text-white">
        <Image
          src="/images/workshop-hero.jpg"
          alt="Dyna-Mic Diesel workshop in Boksburg"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/86 to-[#111111]/34" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/50" />
        <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-[1480px] items-center px-4 py-24 sm:px-6 lg:px-10">
          <div className="max-w-5xl">
            <p className="reveal-up inline-flex rounded border border-diesel-red/35 bg-diesel-red/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-diesel-red">
              Over 30 Years of Diesel Industry Experience
            </p>
            <h1 className="reveal-up-delay mt-7 max-w-5xl text-balance text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Keeping Trucks Working. Keeping Businesses Moving.
            </h1>
            <p className="reveal-up-delay mt-7 max-w-3xl text-lg leading-8 text-white/76 sm:text-xl">
              For over 30 years, Dyna-Mic Diesel has provided truck owners,
              fleet operators and commercial vehicle businesses with experienced
              diesel repair, maintenance and engine support.
            </p>
            <p className="reveal-up-delay mt-5 max-w-3xl text-base leading-7 text-white/64">
              Based in Anderbolt, Boksburg, our workshop provides practical
              truck repair solutions for customers across the East Rand and
              surrounding Gauteng areas. The workshop services, maintains and
              repairs {supportedTruckBrandText}, with particularly strong
              experience in Volvo, Scania and Mercedes-Benz trucks, including
              Mercedes Actros models.
            </p>
            <div className="reveal-up-delay mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex h-13 items-center justify-center gap-2 rounded bg-diesel-red px-6 text-sm font-black text-[#111111] shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-safety"
              >
                Explore Our Services <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center gap-2 rounded border border-white/15 bg-white/8 px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-diesel-red hover:text-diesel-red"
              >
                Contact the Workshop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] premium-shadow">
            <Image
              src="/images/workshop-hero.jpg"
              alt="Diesel truck workshop support"
              width={900}
              height={680}
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
                Anderbolt, Boksburg
              </p>
              <p className="mt-2 max-w-sm text-2xl font-black text-white">
                Practical workshop support for truck owners and fleets.
              </p>
            </div>
          </div>
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
              Built on More Than 30 Years of Experience
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/68">
              <p>
                Dyna-Mic Diesel has built its experience through more than three
                decades in the truck service and repair industry.
              </p>
              <p>
                Throughout that time, commercial vehicles, diesel technology
                and diagnostic systems have continued to evolve. What has
                remained constant is the importance of experienced workmanship,
                practical problem-solving and dependable support for the people
                and businesses that rely on their trucks.
              </p>
              <p>
                Today, Dyna-Mic Diesel continues to provide diesel truck
                repairs, servicing, diagnostics, engine reconditioning and
                fleet maintenance support from its workshop in Anderbolt,
                Boksburg.
              </p>
              <p>
                Our goal is straightforward: understand the problem, identify
                the right course of action and help customers keep their
                commercial vehicles operating reliably.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1b1b] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <SectionLabel>More Than a Single Repair</SectionLabel>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
              Building Relationships Through Better Truck Care
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-white/68">
            <p>
              Dyna-Mic Diesel aims to build lasting relationships with truck
              owners, transport businesses and fleet operators.
            </p>
            <p>
              Our approach goes beyond completing the individual job a truck was
              booked in for.
            </p>
            <p>
              By combining experienced repairs, preventative maintenance and a
              complimentary truck health inspection with workshop visits, we aim
              to help customers better understand the condition of their vehicles
              and identify maintenance concerns requiring attention.
            </p>
            <p>
              The objective is simple: provide practical workshop support
              customers can return to as their trucks and businesses continue
              moving forward.
            </p>
          </div>
        </div>
      </section>

      <HealthInspectionSection compact />

      <section className="border-y border-white/10 bg-[#1b1b1b] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>What We Do</SectionLabel>
          <div className="mt-3 max-w-4xl">
            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              Diesel Truck Repair & Maintenance Expertise
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Commercial trucks work hard, and downtime can quickly affect
              schedules, deliveries and business operations. Dyna-Mic Diesel
              provides a comprehensive range of workshop services designed
              around the repair, maintenance and performance requirements of
              trucks and commercial vehicles.
            </p>
          </div>
          <div className="mt-10">
            <LinkGrid links={serviceCards} />
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Truck Brand Experience</SectionLabel>
          <div className="mt-3 max-w-4xl">
            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              Specialist Support for Volvo, Scania & Mercedes-Benz Trucks
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Dyna-Mic Diesel has particularly strong specialist experience
              with Volvo, Scania and Mercedes-Benz commercial vehicles. Our
              workshop provides repair, diagnostic, maintenance and engine
              support based on the requirements of the vehicle and the work
              needed. For Mercedes-Benz operators, our services also include
              support relating to Mercedes Actros trucks and engine
              reconditioning requirements.
            </p>
          </div>
          <div className="mt-10">
            <LinkGrid links={brandCards} />
          </div>
          <div className="mt-10 rounded-xl border border-white/10 bg-[#1b1b1b] p-7 premium-shadow">
            <h3 className="text-3xl font-black text-white">
              Commercial Truck Brands Serviced
            </h3>
            <p className="mt-4 max-w-4xl leading-7 text-white/64">
              {brandPositioning} This gives truck owners, fleet operators and
              transport businesses a practical workshop route for servicing,
              diagnostics, maintenance and repairs across the confirmed brand
              range.
            </p>
            <Link
              href="/truck-brands"
              className="mt-6 inline-flex items-center gap-2 rounded bg-diesel-red px-5 py-3 text-sm font-black text-[#111111] transition hover:bg-safety"
            >
              View Truck Brands <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1b1b] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div>
            <SectionLabel>Who We Work With</SectionLabel>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
              Supporting Truck Owners & Commercial Vehicle Businesses
            </h2>
            <div className="mt-6 space-y-5 leading-8 text-white/66">
              <p>
                Whether the requirement involves a single commercial vehicle or
                ongoing fleet maintenance support, Dyna-Mic Diesel focuses on
                understanding the work required and providing practical workshop
                support.
              </p>
              <p>
                We recognise that commercial vehicle downtime affects more than
                the truck itself. It can affect deliveries, schedules, customers
                and business operations.
              </p>
              <p>
                That is why effective diagnostics, preventative maintenance and
                experienced repair support remain central to the services we
                provide.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {customerTypes.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] p-6 premium-shadow">
                <Users className="text-diesel-red" size={24} aria-hidden="true" />
                <p className="mt-4 text-lg font-black text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <div>
            <SectionLabel>Why Dyna-Mic Diesel</SectionLabel>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
              Experience That Keeps Commercial Vehicles Moving
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              The work is practical: diagnose the issue, understand the vehicle
              and its operating requirements, then plan the repair or
              maintenance path properly. Dyna-Mic Diesel combines diesel truck
              repair knowledge with workshop services that support individual
              operators and fleet maintenance teams.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded border border-white/10 bg-white/[0.035] px-4 py-3">
                  <CheckCircle2 size={18} className="shrink-0 text-diesel-red" />
                  <span className="text-sm font-bold text-white/78">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] premium-shadow">
            <Image
              src="/images/engine-reconditioning.jpg"
              alt="Engine reconditioning support at Dyna-Mic Diesel"
              width={900}
              height={680}
              className="h-full min-h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/84 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
                Diagnostics. Reconditioning. Fleet Support.
              </p>
              <p className="mt-2 max-w-md text-2xl font-black text-white">
                Built around the trucks and operators that keep work moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1b1b] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <Target className="text-diesel-red" size={34} aria-hidden="true" />
            <h2 className="mt-4 text-4xl font-black text-white">Our Mission</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-white/68">
            <p>
              Our mission is to provide experienced, high-quality truck repair
              and maintenance services that help our customers operate their
              commercial vehicles with confidence.
            </p>
            <p>
              We aim to build lasting customer relationships through practical
              service, clear communication, quality-focused workmanship and a
              commitment to continuously developing our knowledge and
              capabilities.
            </p>
            <p>
              As diesel technology and the commercial vehicle industry continue
              to evolve, Dyna-Mic Diesel remains committed to learning, adapting
              and providing services that meet the changing needs of truck
              owners and fleet operators.
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">
            What Drives Dyna-Mic Diesel
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="rounded-xl border border-white/10 bg-[#1b1b1b] p-7 premium-shadow">
                <p className="font-mono text-sm font-black text-diesel-red">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-2xl font-black uppercase text-white">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#1b1b1b] py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <SectionLabel>Location & Service Area</SectionLabel>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
              Truck Repair Support in Boksburg & the East Rand
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Dyna-Mic Diesel operates from Anderbolt, Boksburg, providing
              diesel truck repair, maintenance and fleet support to customers
              across the East Rand and surrounding Gauteng areas.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Our location allows us to support truck owners, transport
              businesses, fleet operators and commercial vehicle businesses
              looking for experienced diesel workshop services in the region.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {business.areaServed.map((area) => (
                <span
                  key={area}
                  className="rounded border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/72"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#111111] p-7 premium-shadow">
            <h3 className="text-2xl font-black text-white">Workshop Details</h3>
            <div className="mt-6 space-y-5 text-sm leading-6 text-white/68">
              <a className="flex gap-3 transition hover:text-white" href={business.mapHref}>
                <MapPin className="mt-0.5 shrink-0 text-diesel-red" size={19} />
                {business.address}
              </a>
              <a className="flex gap-3 transition hover:text-white" href={business.phoneHref}>
                <Phone className="mt-0.5 shrink-0 text-diesel-red" size={19} />
                {business.phone}
              </a>
              <a className="flex gap-3 transition hover:text-white" href={business.whatsappHref}>
                <MessageCircle className="mt-0.5 shrink-0 text-diesel-red" size={19} />
                WhatsApp the workshop
              </a>
              <a className="flex gap-3 transition hover:text-white" href={business.emailHref}>
                <Mail className="mt-0.5 shrink-0 text-diesel-red" size={19} />
                {business.email}
              </a>
            </div>
            <a
              href={business.mapHref}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded bg-diesel-red px-5 py-3 text-sm font-black text-[#111111] transition hover:bg-safety"
            >
              Get Directions <MapPin size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111111] py-24 text-white">
        <Image
          src="/images/workshop-hero.jpg"
          alt="Dyna-Mic Diesel workshop final enquiry"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-32"
        />
        <div className="absolute inset-0 bg-[#111111]/82" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <SectionLabel>Workshop Enquiries</SectionLabel>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
              Need Experienced Support for Your Truck or Fleet?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              Whether you need diagnostics, repairs, engine reconditioning,
              maintenance or support with a commercial truck problem, contact
              Dyna-Mic Diesel and tell us what is happening with your vehicle.
            </p>
          </div>
          <div className="mt-9">
            <ContactButtons />
          </div>
          <Link
            href={quoteHref}
            className="mt-4 inline-flex items-center gap-2 text-sm font-black text-diesel-red hover:text-white"
          >
            Request a Quote <ArrowRight size={18} />
          </Link>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/56">
            Dyna-Mic Diesel services, maintains and repairs {supportedTruckBrandText}.
          </p>
        </div>
      </section>

      <FaqSection faq={commonFaq} />
    </PageFrame>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-black uppercase tracking-[0.18em] text-diesel-red">
      {children}
    </p>
  );
}
