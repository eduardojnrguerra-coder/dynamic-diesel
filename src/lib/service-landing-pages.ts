import type { Metadata } from "next";
import {
  brandPositioning,
  business,
  quoteHref,
  siteUrl,
  type Faq,
  type LinkItem,
} from "@/lib/site";

export type ServiceLandingPageData = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  immediateAnswer: string;
  serviceExplanation: string;
  signs: string[];
  whyItMatters: string;
  approach: string[];
  relatedServices: LinkItem[];
  faqs: Faq[];
  image: string;
};

const brandLinks: LinkItem[] = [
  { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg", image: "/images/volvo-brand-truck.webp" },
  { label: "Scania Truck Repairs", href: "/scania-truck-repairs-boksburg", image: "/images/scania-brand-truck.webp" },
  { label: "Mercedes-Benz Truck Repairs", href: "/mercedes-truck-repairs-boksburg", image: "/images/mercedes-brand-truck.webp" },
];

const commonAreaFaq: Faq = {
  question: "Where is Dyna-Mic Diesel based?",
  answer:
    "Dyna-Mic Diesel is based in Anderbolt, Boksburg and supports truck owners and fleet operators across the East Rand and surrounding Gauteng areas.",
};

export const serviceLandingPages: ServiceLandingPageData[] = [
  {
    slug: "truck-repairs-boksburg",
    path: "/truck-repairs-boksburg",
    title: "Truck Repairs Boksburg",
    seoTitle: "Truck Repairs Boksburg | Commercial Truck Workshop",
    metaDescription:
      "Truck repairs in Boksburg from Dyna-Mic Diesel. Commercial truck repair support for confirmed truck brands with complimentary truck health inspections.",
    h1: "Truck Repairs in Boksburg",
    eyebrow: "Commercial truck repairs",
    intro:
      "Dyna-Mic Diesel provides commercial truck repair support from its workshop in Anderbolt, Boksburg for operators across the East Rand and surrounding Gauteng areas.",
    immediateAnswer:
      "If your truck has performance, braking, starting, warning light or running concerns, Dyna-Mic Diesel can inspect the vehicle, discuss the symptoms and help plan the correct repair path.",
    serviceExplanation:
      "Truck repairs can range from smaller workshop issues to fault investigation and more involved diesel repair work. The workshop focuses on practical diagnosis, clear repair scoping and experienced workmanship for commercial truck operators.",
    signs: [
      "Loss of power or poor fuel economy",
      "Warning lights or fault symptoms",
      "Starting problems",
      "Brake performance concerns",
      "Overheating or smoke",
      "Recurring maintenance issues",
    ],
    whyItMatters:
      "Repair delays can affect deliveries, routes and fleet availability. Addressing symptoms early helps operators make better maintenance decisions and reduce avoidable downtime.",
    approach: [
      "Discuss the truck brand, symptoms and repair history.",
      "Inspect the vehicle and carry out relevant diagnostic checks where needed.",
      "Explain the likely repair direction before work is approved.",
      "Include a complimentary truck health inspection with the workshop visit.",
    ],
    relatedServices: [
      { label: "Truck Servicing", href: "/truck-servicing-boksburg", image: "/images/service-truck-servicing-workshop.webp" },
      { label: "Diesel Diagnostics", href: "/diesel-diagnostics-boksburg", image: "/images/service-diesel-diagnostics-4k.webp" },
      { label: "Truck Brake Repairs", href: "/truck-brake-repairs-boksburg", image: "/images/service-truck-brake-repairs-4k.webp" },
      { label: "Request a Quote", href: quoteHref, image: "/images/service-request-quote-4k.webp" },
    ],
    faqs: [
      commonAreaFaq,
      {
        question: "Which truck brands does Dyna-Mic Diesel service and repair?",
        answer:
          brandPositioning,
      },
    ],
    image: "/images/service-truck-repairs-4k.webp",
  },
  {
    slug: "truck-servicing-boksburg",
    path: "/truck-servicing-boksburg",
    title: "Truck Servicing Boksburg",
    seoTitle: "Truck Servicing Boksburg | Minor & Major Truck Services",
    metaDescription:
      "Truck servicing in Boksburg including minor services, major services, routine maintenance and preventative maintenance support from Dyna-Mic Diesel.",
    h1: "Truck Servicing in Boksburg",
    eyebrow: "Truck servicing and maintenance",
    intro:
      "Dyna-Mic Diesel provides truck servicing and maintenance support for commercial vehicle operators from Anderbolt, Boksburg.",
    immediateAnswer:
      "The workshop can assist with minor services, major services, routine maintenance and preventative maintenance planning for confirmed commercial truck brands, with specialist experience in Volvo, Scania and Mercedes-Benz trucks.",
    serviceExplanation:
      "Regular truck servicing helps operators understand vehicle condition, identify maintenance needs and plan repairs before small issues become more disruptive.",
    signs: [
      "Service interval due",
      "Truck used in demanding routes or loads",
      "Recurring minor faults",
      "Fuel economy changes",
      "Driver reports unusual running behaviour",
      "Fleet maintenance planning requirements",
    ],
    whyItMatters:
      "Servicing is one of the most practical ways to manage truck condition and avoid letting maintenance concerns go unnoticed.",
    approach: [
      "Review the truck details, service history and operating conditions.",
      "Carry out the booked service or maintenance work.",
      "Note visible or detectable concerns from the complimentary health inspection.",
      "Help the customer understand follow-up maintenance priorities.",
    ],
    relatedServices: [
      { label: "Truck Brake Repairs", href: "/truck-brake-repairs-boksburg", image: "/images/service-truck-brake-repairs-4k.webp" },
      { label: "Preventative Maintenance", href: "/preventative-truck-maintenance-boksburg", image: "/images/service-fleet-maintenance-workshop.webp" },
      { label: "Fleet Maintenance", href: "/fleet-maintenance-boksburg", image: "/images/service-fleet-maintenance-workshop.webp" },
      { label: "Truck Health Inspection", href: "/truck-health-inspection-boksburg", image: "/images/service-truck-health-inspection-4k.webp" },
    ],
    faqs: [
      commonAreaFaq,
      {
        question: "Do minor and major services include a health inspection?",
        answer:
          "Yes. Every truck brought into Dyna-Mic Diesel receives a complimentary health inspection to help identify potential maintenance concerns.",
      },
    ],
    image: "/images/service-truck-servicing-workshop.webp",
  },
  {
    slug: "truck-brake-repairs-boksburg",
    path: "/truck-brake-repairs-boksburg",
    title: "Truck Brake Repairs Boksburg",
    seoTitle: "Truck Brake Repairs Boksburg | Commercial Truck Brake Services",
    metaDescription:
      "Truck brake repairs, inspections and maintenance in Boksburg from Dyna-Mic Diesel. Over 30 years of industry experience and a complimentary truck health inspection with workshop visits.",
    h1: "Truck Brake Repairs & Maintenance in Boksburg",
    eyebrow: "Truck brake services",
    intro:
      "Commercial truck braking systems are essential to vehicle safety, reliability and operation. Dyna-Mic Diesel provides truck brake inspection, repair and maintenance support from its workshop in Anderbolt, Boksburg.",
    immediateAnswer:
      "If your truck has reduced braking performance, unusual brake noises, warning lights or uneven braking behaviour, contact the workshop before the issue becomes more serious.",
    serviceExplanation:
      "Truck brake work should be handled by an experienced workshop. Dyna-Mic Diesel can inspect brake-related concerns, discuss repair requirements and support routine brake maintenance without giving unsafe DIY repair instructions.",
    signs: [
      "Reduced braking performance",
      "Unusual brake noises",
      "Warning lights",
      "Uneven braking behaviour",
      "Concerns identified during servicing",
      "Routine maintenance requirements",
    ],
    whyItMatters:
      "Brake concerns affect safety, vehicle operation and downtime risk. Early inspection gives operators clearer information before approving repair work.",
    approach: [
      "Listen to the driver or operator's brake concern and recent service context.",
      "Inspect the truck and identify brake maintenance or repair requirements.",
      "Avoid assumptions until the vehicle has been assessed by the workshop.",
      "Perform a complimentary general truck health inspection during the visit.",
    ],
    relatedServices: [
      { label: "Truck Servicing", href: "/truck-servicing-boksburg", image: "/images/service-truck-servicing-workshop.webp" },
      { label: "Preventative Maintenance", href: "/preventative-truck-maintenance-boksburg", image: "/images/service-fleet-maintenance-workshop.webp" },
      { label: "Fleet Maintenance", href: "/fleet-maintenance-boksburg", image: "/images/service-fleet-maintenance-workshop.webp" },
      { label: "Diesel Diagnostics", href: "/diesel-diagnostics-boksburg", image: "/images/service-diesel-diagnostics-4k.webp" },
      ...brandLinks,
      { label: "Request a Quote", href: quoteHref, image: "/images/service-request-quote-4k.webp" },
    ],
    faqs: [
      commonAreaFaq,
      {
        question: "Do you provide DIY truck brake repair instructions?",
        answer:
          "No. Commercial truck brake concerns should be assessed by an experienced workshop. This page explains when to contact Dyna-Mic Diesel for inspection and repair support.",
      },
      {
        question: "Is a health inspection included with brake work?",
        answer:
          "Yes. Even when a truck is booked in for brake work, Dyna-Mic Diesel also performs a complimentary general health inspection to help identify other potential maintenance concerns.",
      },
    ],
    image: "/images/service-truck-brake-repairs-4k.webp",
  },
  {
    slug: "diesel-diagnostics-boksburg",
    path: "/diesel-diagnostics-boksburg",
    title: "Diesel Diagnostics Boksburg",
    seoTitle: "Diesel Diagnostics Boksburg | Truck Engine Fault Finding",
    metaDescription:
      "Diesel diagnostics and engine diagnostics in Boksburg for truck operators. Dyna-Mic Diesel supports fault investigation and repair planning.",
    h1: "Diesel Diagnostics in Boksburg",
    eyebrow: "Diesel and engine diagnostics",
    intro:
      "Dyna-Mic Diesel provides diesel diagnostics and engine diagnostics for commercial trucks from Anderbolt, Boksburg.",
    immediateAnswer:
      "Diagnostics help investigate warning lights, performance problems, starting issues, smoke, fuel use and other running concerns before repair work is approved.",
    serviceExplanation:
      "Fault investigation gives the workshop and customer a clearer starting point. It supports better repair planning and helps avoid replacing parts based on guesswork.",
    signs: [
      "Engine warning lights",
      "Loss of power",
      "Hard starting",
      "Black, blue or excessive smoke",
      "Overheating",
      "Poor fuel economy",
    ],
    whyItMatters:
      "Diagnostics help truck owners make informed repair decisions and understand whether symptoms point to fuel, engine, service or other maintenance concerns.",
    approach: [
      "Record the symptoms, operating conditions and warning lights.",
      "Carry out relevant diagnostic and inspection work.",
      "Explain the likely repair path in practical workshop language.",
      "Include the complimentary truck health inspection during the visit.",
    ],
    relatedServices: [
      { label: "Truck Repairs", href: "/truck-repairs-boksburg", image: "/images/service-truck-repairs-4k.webp" },
      { label: "Diesel Pumps & Injectors", href: "/diesel-pumps-and-injectors-boksburg", image: "/images/service-diesel-pumps-injectors-4k.webp" },
      { label: "Engine Reconditioning", href: "/engine-reconditioning-boksburg", image: "/images/service-actros-engine-reconditioning-4k.webp" },
      { label: "Engine Dyno Testing", href: "/engine-dyno-testing-boksburg", image: "/images/service-engine-dyno-testing-4k.webp" },
    ],
    faqs: [
      commonAreaFaq,
      {
        question: "Can diagnostics identify every fault?",
        answer:
          "No diagnostic process should be described as finding every possible fault. Diagnostics help investigate symptoms and guide the repair path based on the information available.",
      },
    ],
    image: "/images/service-diesel-diagnostics-4k.webp",
  },
  {
    slug: "engine-reconditioning-boksburg",
    path: "/engine-reconditioning-boksburg",
    title: "Engine Reconditioning Boksburg",
    seoTitle: "Engine Reconditioning Boksburg | Diesel Truck Engine Repairs",
    metaDescription:
      "Diesel engine reconditioning in Boksburg from Dyna-Mic Diesel, including Mercedes Actros engine reconditioning enquiries and diagnostic support.",
    h1: "Diesel Engine Reconditioning in Boksburg",
    eyebrow: "Engine services",
    intro:
      "Dyna-Mic Diesel supports diesel engine reconditioning enquiries from its Anderbolt workshop, with strong focus on Mercedes Actros engine platforms.",
    immediateAnswer:
      "If a truck shows compression concerns, smoke, overheating, knocking, high oil consumption or loss of power, the workshop can discuss inspection and repair planning before reconditioning is scoped.",
    serviceExplanation:
      "Engine reconditioning should follow assessment rather than assumptions. Dyna-Mic Diesel focuses on diagnostics, inspection and practical repair scoping before customers approve major engine work.",
    signs: [
      "Loss of compression",
      "Excessive smoke",
      "High oil consumption",
      "Overheating",
      "Knocking sounds",
      "Loss of power",
      "Starting problems",
    ],
    whyItMatters:
      "Major engine work affects cost, downtime and fleet planning. A clear repair scope helps customers make informed decisions.",
    approach: [
      "Review the engine model, symptoms and service history.",
      "Discuss diagnostics or inspection before confirming repair scope.",
      "Connect Mercedes Actros enquiries to the relevant OM engine knowledge.",
      "Carry out a complimentary truck health inspection during the visit.",
    ],
    relatedServices: [
      { label: "Mercedes Actros Engine Reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg", image: "/images/service-actros-engine-reconditioning-4k.webp" },
      { label: "Diesel Diagnostics", href: "/diesel-diagnostics-boksburg", image: "/images/service-diesel-diagnostics-4k.webp" },
      { label: "Engine Dyno Testing", href: "/engine-dyno-testing-boksburg", image: "/images/service-engine-dyno-testing-4k.webp" },
      { label: "Diesel Pumps & Injectors", href: "/diesel-pumps-and-injectors-boksburg", image: "/images/service-diesel-pumps-injectors-4k.webp" },
    ],
    faqs: [
      commonAreaFaq,
      {
        question: "Do you guarantee engine reconditioning results?",
        answer:
          "No guaranteed-result claims are made. Repair scope and outcomes depend on inspection findings, engine condition, parts requirements and approved work.",
      },
    ],
    image: "/images/service-actros-engine-reconditioning-4k.webp",
  },
  {
    slug: "diesel-pumps-and-injectors-boksburg",
    path: "/diesel-pumps-and-injectors-boksburg",
    title: "Diesel Pumps and Injectors Boksburg",
    seoTitle: "Diesel Pumps and Injectors Boksburg | Truck Fuel System Support",
    metaDescription:
      "Diesel pump and injector support in Boksburg for truck starting, smoke, power and fuel economy concerns from Dyna-Mic Diesel.",
    h1: "Diesel Pumps & Injectors in Boksburg",
    eyebrow: "Diesel fuel system services",
    intro:
      "Dyna-Mic Diesel supports diesel pump and diesel injector enquiries for commercial truck operators from its workshop in Anderbolt, Boksburg.",
    immediateAnswer:
      "Fuel system concerns can affect starting, power, smoke and fuel economy. The workshop can inspect symptoms and advise on the correct repair direction.",
    serviceExplanation:
      "Diesel pumps and injectors are part of a wider engine and diagnostic picture. Dyna-Mic Diesel treats fuel system symptoms as part of practical fault investigation and repair planning.",
    signs: [
      "Hard starting",
      "Loss of power",
      "Excessive smoke",
      "Poor fuel economy",
      "Uneven running",
      "Performance concerns under load",
    ],
    whyItMatters:
      "Fuel system problems can affect operating cost, vehicle performance and downtime. Early inspection helps clarify whether pump, injector, diagnostic or service work is needed.",
    approach: [
      "Understand the symptoms and operating conditions.",
      "Inspect relevant fuel system concerns within the wider diagnostic context.",
      "Explain repair options before work is approved.",
      "Include a complimentary truck health inspection with the workshop visit.",
    ],
    relatedServices: [
      { label: "Diesel Diagnostics", href: "/diesel-diagnostics-boksburg", image: "/images/service-diesel-diagnostics-4k.webp" },
      { label: "Truck Repairs", href: "/truck-repairs-boksburg", image: "/images/service-truck-repairs-4k.webp" },
      { label: "Engine Reconditioning", href: "/engine-reconditioning-boksburg", image: "/images/service-actros-engine-reconditioning-4k.webp" },
      { label: "Truck Servicing", href: "/truck-servicing-boksburg", image: "/images/service-truck-servicing-workshop.webp" },
    ],
    faqs: [
      commonAreaFaq,
      {
        question: "Can pump or injector faults cause smoke?",
        answer:
          "Fuel system concerns can contribute to smoke and performance problems, but inspection and diagnostics are needed before repair decisions are made.",
      },
    ],
    image: "/images/service-diesel-pumps-injectors-4k.webp",
  },
  {
    slug: "engine-dyno-testing-boksburg",
    path: "/engine-dyno-testing-boksburg",
    title: "Engine Dyno Testing Boksburg",
    seoTitle: "Engine Dyno Testing Boksburg | Diesel Engine Testing",
    metaDescription:
      "Engine dyno testing in Boksburg for diesel truck engine repair, diagnostics and reconditioning support from Dyna-Mic Diesel.",
    h1: "Engine Dyno Testing in Boksburg",
    eyebrow: "Diesel engine testing",
    intro:
      "Dyna-Mic Diesel includes engine dyno testing as part of its diesel engine repair, diagnostic and reconditioning service architecture.",
    immediateAnswer:
      "Engine dyno testing can support engine-focused repair and reconditioning discussions by assessing engine behaviour under controlled conditions.",
    serviceExplanation:
      "Dyno testing may be relevant where engine performance, repair validation or reconditioning context needs controlled assessment. The workshop can advise whether it applies to the enquiry.",
    signs: [
      "Engine performance concerns",
      "Reconditioning assessment requirements",
      "Repair validation discussions",
      "Power delivery concerns",
      "Engine-focused diagnostic needs",
    ],
    whyItMatters:
      "Controlled testing can provide useful context for engine repair decisions and help customers understand engine behaviour after relevant work.",
    approach: [
      "Review the engine concern and repair context.",
      "Confirm whether dyno testing is relevant to the specific enquiry.",
      "Use the information to support repair or reconditioning discussions.",
      "Include a complimentary truck health inspection where the truck is brought into the workshop.",
    ],
    relatedServices: [
      { label: "Engine Reconditioning", href: "/engine-reconditioning-boksburg", image: "/images/service-actros-engine-reconditioning-4k.webp" },
      { label: "Diesel Diagnostics", href: "/diesel-diagnostics-boksburg", image: "/images/service-diesel-diagnostics-4k.webp" },
      { label: "Mercedes Actros Engine Reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg", image: "/images/service-actros-engine-reconditioning-4k.webp" },
    ],
    faqs: [
      commonAreaFaq,
      {
        question: "Is dyno testing needed for every truck?",
        answer:
          "No. Dyna-Mic Diesel can advise whether engine dyno testing is relevant based on the engine concern, repair scope and workshop requirements.",
      },
    ],
    image: "/images/service-engine-dyno-testing-4k.webp",
  },
  {
    slug: "fleet-maintenance-boksburg",
    path: "/fleet-maintenance-boksburg",
    title: "Fleet Maintenance Boksburg",
    seoTitle: "Fleet Maintenance Boksburg | Commercial Truck Maintenance",
    metaDescription:
      "Fleet maintenance in Boksburg for commercial truck operators. Dyna-Mic Diesel supports preventative maintenance, diagnostics and repair planning.",
    h1: "Fleet Maintenance in Boksburg",
    eyebrow: "Fleet services",
    intro:
      "Dyna-Mic Diesel provides fleet maintenance support for truck owners, transport businesses and commercial vehicle operators across Boksburg and the East Rand.",
    immediateAnswer:
      "Fleet operators can contact the workshop with vehicle counts, brands, service intervals, recurring faults and downtime priorities to plan maintenance support.",
    serviceExplanation:
      "Fleet maintenance is about keeping track of vehicle condition, service needs and repair priorities across more than one truck. Dyna-Mic Diesel supports practical planning from its Anderbolt workshop.",
    signs: [
      "Multiple trucks due for service",
      "Recurring faults across vehicles",
      "Downtime affecting operations",
      "Need for preventative maintenance planning",
      "Fleet repair prioritisation",
    ],
    whyItMatters:
      "A structured approach to fleet maintenance helps operators identify priorities, plan workshop time and reduce avoidable interruptions.",
    approach: [
      "Understand the vehicle list, brands and service intervals.",
      "Identify urgent repair concerns and preventative maintenance needs.",
      "Support diagnostics, servicing and repair planning.",
      "Use complimentary health inspections to add awareness of each truck's condition.",
    ],
    relatedServices: [
      { label: "Preventative Maintenance", href: "/preventative-truck-maintenance-boksburg", image: "/images/service-fleet-maintenance-workshop.webp" },
      { label: "Truck Servicing", href: "/truck-servicing-boksburg", image: "/images/service-truck-servicing-workshop.webp" },
      { label: "Truck Repairs", href: "/truck-repairs-boksburg", image: "/images/service-truck-repairs-4k.webp" },
      { label: "Truck Health Inspection", href: "/truck-health-inspection-boksburg", image: "/images/service-truck-health-inspection-4k.webp" },
    ],
    faqs: [
      commonAreaFaq,
      {
        question: "What information helps with a fleet maintenance enquiry?",
        answer:
          "Include the number of trucks, brands, service intervals, recurring faults and downtime priorities.",
      },
    ],
    image: "/images/service-fleet-maintenance-workshop.webp",
  },
  {
    slug: "preventative-truck-maintenance-boksburg",
    path: "/preventative-truck-maintenance-boksburg",
    title: "Preventative Truck Maintenance Boksburg",
    seoTitle: "Preventative Truck Maintenance Boksburg | Reduce Avoidable Downtime",
    metaDescription:
      "Preventative truck maintenance in Boksburg from Dyna-Mic Diesel. Practical maintenance planning, inspections and fleet support.",
    h1: "Preventative Truck Maintenance in Boksburg",
    eyebrow: "Preventative maintenance",
    intro:
      "Preventative truck maintenance helps operators identify service needs, visible concerns and developing problems before they become more disruptive.",
    immediateAnswer:
      "Dyna-Mic Diesel supports preventative maintenance planning through servicing, diagnostics, repair support and complimentary truck health inspections.",
    serviceExplanation:
      "Preventative maintenance is not a guarantee against breakdowns. It is a practical way to improve awareness of truck condition and plan maintenance decisions more effectively.",
    signs: [
      "Truck operating in demanding conditions",
      "Service history gaps",
      "Recurring smaller issues",
      "Fleet downtime concerns",
      "Need for scheduled maintenance planning",
    ],
    whyItMatters:
      "Understanding truck condition helps owners and fleet operators make better decisions about servicing, repairs and maintenance priorities.",
    approach: [
      "Review service history and operating requirements.",
      "Identify maintenance items that require attention.",
      "Connect preventative work to servicing, diagnostics and repair planning.",
      "Use the complimentary health inspection to add condition awareness.",
    ],
    relatedServices: [
      { label: "Truck Servicing", href: "/truck-servicing-boksburg", image: "/images/service-truck-servicing-workshop.webp" },
      { label: "Fleet Maintenance", href: "/fleet-maintenance-boksburg", image: "/images/service-fleet-maintenance-workshop.webp" },
      { label: "Truck Brake Repairs", href: "/truck-brake-repairs-boksburg", image: "/images/service-truck-brake-repairs-4k.webp" },
      { label: "Truck Health Inspection", href: "/truck-health-inspection-boksburg", image: "/images/service-truck-health-inspection-4k.webp" },
    ],
    faqs: [
      commonAreaFaq,
      {
        question: "Does preventative maintenance guarantee reliability?",
        answer:
          "No. Preventative maintenance helps identify potential concerns and supports informed decisions, but it does not guarantee reliability or prevent every breakdown.",
      },
    ],
    image: "/images/service-fleet-maintenance-workshop.webp",
  },
  {
    slug: "truck-health-inspection-boksburg",
    path: "/truck-health-inspection-boksburg",
    title: "Truck Health Inspection Boksburg",
    seoTitle: "Truck Health Inspection Boksburg | Complimentary Workshop Check",
    metaDescription:
      "Complimentary truck health inspections in Boksburg with workshop visits at Dyna-Mic Diesel, helping identify potential maintenance concerns.",
    h1: "Complimentary Truck Health Inspection in Boksburg",
    eyebrow: "Workshop health inspection",
    intro:
      "Every truck brought into Dyna-Mic Diesel receives a complimentary truck health inspection as part of the workshop visit.",
    immediateAnswer:
      "The inspection helps identify visible or detectable potential problems, maintenance concerns and areas requiring attention before they contribute to more serious repairs or avoidable downtime.",
    serviceExplanation:
      "The complimentary health inspection applies whether the truck arrives for a minor service, brake repair, routine maintenance, diagnostics or another workshop service.",
    signs: [
      "Truck booked for a minor or major service",
      "Brake repair visit",
      "Routine maintenance visit",
      "Diagnostic appointment",
      "Fleet maintenance visit",
      "Operator wants better awareness of truck condition",
    ],
    whyItMatters:
      "The inspection gives truck owners and fleet operators additional awareness of vehicle condition and helps them make informed maintenance decisions.",
    approach: [
      "Look beyond the job the truck was booked in for.",
      "Identify visible or detectable potential maintenance concerns.",
      "Communicate areas that may require attention.",
      "Avoid claiming that every fault will be detected or every breakdown prevented.",
    ],
    relatedServices: [
      { label: "Truck Servicing", href: "/truck-servicing-boksburg", image: "/images/service-truck-servicing-workshop.webp" },
      { label: "Truck Brake Repairs", href: "/truck-brake-repairs-boksburg", image: "/images/service-truck-brake-repairs-4k.webp" },
      { label: "Preventative Maintenance", href: "/preventative-truck-maintenance-boksburg", image: "/images/service-fleet-maintenance-workshop.webp" },
      { label: "Fleet Maintenance", href: "/fleet-maintenance-boksburg", image: "/images/service-fleet-maintenance-workshop.webp" },
    ],
    faqs: [
      commonAreaFaq,
      {
        question: "Does the inspection find every fault?",
        answer:
          "No. The complimentary health inspection helps identify visible or detectable potential concerns, but it does not guarantee detection of every fault.",
      },
      {
        question: "Do I need to book the health inspection separately?",
        answer:
          "No. It is included when a truck is brought into Dyna-Mic Diesel for a workshop service.",
      },
    ],
    image: "/images/service-truck-health-inspection-4k.webp",
  },
];

export const serviceLandingPathMap = new Map(
  serviceLandingPages.map((page) => [page.path, page]),
);

export function getServiceLandingPage(path: string) {
  const page = serviceLandingPathMap.get(path);
  if (!page) {
    throw new Error(`Missing service landing page data for ${path}`);
  }
  return page;
}

export function serviceLandingMetadata(page: ServiceLandingPageData): Metadata {
  return {
    title: { absolute: page.seoTitle },
    description: page.metaDescription,
    alternates: { canonical: page.path },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: `${siteUrl}${page.path}`,
      images: [{ url: page.image, width: 1600, height: 900 }],
    },
  };
}

export function serviceSchema(page: ServiceLandingPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription,
    areaServed: business.areaServed,
    provider: {
      "@type": "AutoRepair",
      name: business.name,
      telephone: business.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 7, The Avenues, 128 14th Ave",
        addressLocality: "Anderbolt, Boksburg",
        postalCode: "1459",
        addressCountry: "ZA",
      },
    },
  };
}
