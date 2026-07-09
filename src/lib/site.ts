import type { Metadata } from "next";

export const siteUrl = "https://dyna-mic.co.za";
export const quoteHref = "/request-a-quote#quote-form";

export const business = {
  name: "Dyna-Mic Diesel",
  phone: "082 547 7899",
  phoneHref: "tel:+27825477899",
  whatsappHref:
    "https://wa.me/27825477899?text=Hi%20Dyna-Mic%20Diesel%2C%20I%20need%20help%20with%20a%20diesel%20truck%20repair%20or%20fleet%20maintenance%20quote.",
  email: "Info@dyna-mic.co.za",
  emailHref: "mailto:Info@dyna-mic.co.za",
  address: "Unit 7, The Avenues, 128 14th Ave, Anderbolt, Boksburg, 1459",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Unit%207%20The%20Avenues%20128%2014th%20Ave%20Anderbolt%20Boksburg%201459",
  experience: "30+ years",
  areaServed: ["Boksburg", "Anderbolt", "East Rand", "Gauteng"],
};

export const specialistTruckBrands = [
  "Volvo",
  "Scania",
  "Mercedes-Benz",
  "Mercedes Actros",
] as const;

export const supportedTruckBrands = [
  "Volvo",
  "Scania",
  "Mercedes-Benz",
  "MAN",
  "DAF",
  "Iveco",
  "Hino",
  "Isuzu",
  "UD Trucks",
  "FAW",
  "FUSO",
  "Renault Trucks",
] as const;

export const supportedTruckBrandText =
  "Volvo, Scania, Mercedes-Benz, MAN, DAF, Iveco, Hino, Isuzu, UD Trucks, FAW, FUSO and Renault Trucks";

export const brandPositioning =
  "Dyna-Mic Diesel services, maintains and repairs Volvo, Scania, Mercedes-Benz, MAN, DAF, Iveco, Hino, Isuzu, UD Trucks, FAW, FUSO and Renault Trucks, with particularly strong specialist experience in Volvo, Scania and Mercedes-Benz trucks.";

export type LinkItem = {
  label: string;
  href: string;
  description?: string;
  image?: string;
};
export type Faq = { question: string; answer: string };
export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow?: string;
  summary: string;
  keywords: string[];
  bullets: string[];
  proof: string[];
  faq: Faq[];
  internalLinks: LinkItem[];
  intro?: string;
  commonIssues?: string[];
  servicesOffered?: string[];
  relatedServices?: LinkItem[];
  fleetSupport?: string;
  article?: {
    datePublished: string;
    dateModified: string;
    author: string;
    sections: ArticleSection[];
    cta: string;
  };
  relatedArticles?: LinkItem[];
};

export const primaryLinks: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const footerPopularServiceLinks: LinkItem[] = [
  { label: "Engine Reconditioning", href: "/engine-reconditioning-boksburg" },
  { label: "Diesel Diagnostics", href: "/diesel-diagnostics-boksburg" },
  { label: "Diesel Pumps & Injectors", href: "/diesel-pumps-and-injectors-boksburg" },
  { label: "Fleet Maintenance", href: "/fleet-maintenance-boksburg" },
];

export const footerBrandLinks: LinkItem[] = [
  { label: "All Truck Brands", href: "/truck-brands" },
  { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg" },
  { label: "Scania Truck Repairs", href: "/scania-truck-repairs-boksburg" },
  { label: "Mercedes-Benz Truck Repairs", href: "/mercedes-truck-repairs-boksburg" },
];

export const commonFaq: Faq[] = [
  {
    question: "Where is Dyna-Mic Diesel based?",
    answer:
      "Dyna-Mic Diesel is based at Unit 7, The Avenues, 128 14th Ave, Anderbolt, Boksburg, 1459.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "The workshop serves Boksburg, Anderbolt, the East Rand and customers across Gauteng.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Call 082 547 7899, send a WhatsApp enquiry, or use the request a quote page with the truck brand, symptoms and fleet details.",
  },
];

const defaultLinks: LinkItem[] = [
  { label: "Truck Brands", href: "/truck-brands" },
  { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg" },
  { label: "Scania Truck Repairs", href: "/scania-truck-repairs-boksburg" },
  { label: "Mercedes-Benz Truck Repairs", href: "/mercedes-truck-repairs-boksburg" },
  { label: "Mercedes Actros Engine Reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg" },
  { label: "Truck Repairs", href: "/truck-repairs-boksburg" },
  { label: "Truck Servicing", href: "/truck-servicing-boksburg" },
  { label: "Diesel Diagnostics", href: "/diesel-diagnostics-boksburg" },
  { label: "Engine Reconditioning", href: "/engine-reconditioning-boksburg" },
  { label: "Diesel Pumps and Injectors", href: "/diesel-pumps-and-injectors-boksburg" },
  { label: "Engine Dyno Testing", href: "/engine-dyno-testing-boksburg" },
  { label: "Fleet Maintenance", href: "/fleet-maintenance-boksburg" },
  { label: "Truck Health Inspection", href: "/truck-health-inspection-boksburg" },
  { label: "Contact", href: "/contact" },
  { label: "Request Quote", href: quoteHref },
];

export const brandPages: SeoPage[] = [
  {
    slug: "scania-truck-repairs",
    title: "Scania Truck Repairs",
    metaTitle: "Scania Mechanic Boksburg | Scania Truck Repairs East Rand",
    metaDescription:
      "Scania truck repairs in Boksburg and the East Rand from Dyna-Mic Diesel in Anderbolt. Diagnostics, servicing and diesel engine repair support.",
    h1: "Scania Mechanic in Boksburg for Truck Repairs",
    summary:
      "Dyna-Mic Diesel supports Scania truck repairs for operators in Boksburg, Anderbolt, the East Rand and Gauteng, with practical fault finding and workshop-based repair planning.",
    keywords: ["Scania mechanic Boksburg", "Scania truck repairs East Rand"],
    bullets: ["Scania truck diagnostics", "Diesel engine fault finding", "Fleet service planning"],
    proof: ["30+ years of diesel workshop experience", "Located in Anderbolt, close to Boksburg fleet routes"],
    faq: [
      {
        question: "Do you work on Scania trucks in Boksburg?",
        answer:
          "Yes. Dyna-Mic Diesel lists Scania truck repairs as a brand-specific service area for Boksburg and the East Rand.",
      },
      {
        question: "Can you diagnose Scania diesel engine faults?",
        answer:
          "The workshop offers diesel engine diagnostics and truck diagnostics for Scania repair enquiries.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "volvo-truck-repairs",
    title: "Volvo Truck Repairs",
    metaTitle: "Volvo Truck Diagnostics East Rand | Volvo Truck Repairs Boksburg",
    metaDescription:
      "Volvo truck repairs and diagnostics in Boksburg and the East Rand. Contact Dyna-Mic Diesel in Anderbolt for Volvo diesel fault finding.",
    h1: "Volvo Truck Diagnostics and Repairs in Boksburg",
    summary:
      "For Volvo truck diagnostics East Rand operators can bring vehicles to Dyna-Mic Diesel in Anderbolt for measured diagnostics, repair advice and service planning.",
    keywords: ["Volvo truck diagnostics East Rand", "Volvo truck repairs Boksburg"],
    bullets: ["Volvo truck diagnostics", "Diesel engine diagnostics", "Truck services and repairs"],
    proof: ["Workshop-based diagnostics", "Service area includes East Rand and Gauteng"],
    faq: [
      {
        question: "Can Dyna-Mic Diesel diagnose Volvo truck engine problems?",
        answer:
          "Yes. Volvo truck engine diagnostics and Volvo truck repairs are included in the site's brand and engine focus.",
      },
      {
        question: "Is the workshop near the East Rand industrial areas?",
        answer: "Yes. Dyna-Mic Diesel is based in Anderbolt, Boksburg.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "mercedes-truck-tractor-repairs",
    title: "Mercedes Truck Tractor Repairs",
    metaTitle: "Mercedes Truck Tractor Repair Boksburg | Actros Engine Reconditioning",
    metaDescription:
      "Mercedes truck tractor repair in Boksburg with Actros V6, V8, OM501, OM502, OM541 and OM542 engine reconditioning focus.",
    h1: "Mercedes Truck Tractor Repair in Boksburg",
    summary:
      "Dyna-Mic Diesel focuses strongly on Mercedes Actros truck tractor repair and engine reconditioning, including V6, V8, OM501, OM502, OM541 and OM542 engines.",
    keywords: ["Mercedes truck tractor repair Boksburg", "Mercedes Actros engine reconditioning"],
    bullets: ["Mercedes Actros V6 and V8 engine reconditioning", "OM501, OM502, OM541 and OM542 work", "Truck tractor repairs"],
    proof: ["30+ years diesel experience", "Engine-specific reconditioning pages for Mercedes Actros platforms"],
    faq: [
      {
        question: "Do you handle Mercedes Actros engine reconditioning?",
        answer:
          "Yes. Mercedes Actros V6, V8, OM501, OM502, OM541 and OM542 engine reconditioning are core service focuses.",
      },
      {
        question: "Can I request a Mercedes truck tractor quote online?",
        answer: "Yes. Use the quote page and include the Actros model, engine code and symptoms.",
      },
    ],
    internalLinks: [
      { label: "OM501 reconditioning", href: "/engines/mercedes-actros-om501-reconditioning" },
      { label: "OM502 reconditioning", href: "/engines/mercedes-actros-om502-reconditioning" },
      { label: "Request a quote", href: quoteHref },
    ],
  },
];

export const enginePages: SeoPage[] = [
  {
    slug: "mercedes-actros-om501-reconditioning",
    title: "Mercedes Actros OM501 Reconditioning",
    metaTitle: "Mercedes Actros V6 OM501 Engine Reconditioning Boksburg",
    metaDescription:
      "Mercedes Actros V6 OM501 engine reconditioning in Boksburg. Contact Dyna-Mic Diesel for Actros diesel engine repair assessment.",
    h1: "Mercedes Actros V6 OM501 Engine Reconditioning",
    summary:
      "Dyna-Mic Diesel supports Mercedes Actros V6 OM501 engine reconditioning enquiries for truck operators that need a careful workshop assessment before repair decisions are made.",
    keywords: ["Mercedes Actros V6 OM501 engine reconditioning", "Mercedes OM541 engine reconditioning"],
    bullets: ["Actros V6 repair assessment", "OM501 engine reconditioning", "Engine diagnostics before repair scope"],
    proof: ["30+ years diesel experience", "Mercedes Actros engine repair support"],
    faq: [
      {
        question: "Do you recondition Mercedes Actros OM501 engines?",
        answer: "Yes. Dyna-Mic Diesel can discuss Mercedes Actros V6 OM501 engine reconditioning enquiries from its Boksburg workshop.",
      },
      {
        question: "Should diagnostics happen before reconditioning?",
        answer: "Yes. Diagnostics and inspection help define the correct repair scope before quoting.",
      },
    ],
    internalLinks: [
      { label: "Mercedes truck tractor repairs", href: "/brands/mercedes-truck-tractor-repairs" },
      { label: "Diesel engine diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Request a quote", href: quoteHref },
    ],
  },
  {
    slug: "mercedes-actros-om502-reconditioning",
    title: "Mercedes Actros OM502 Reconditioning",
    metaTitle: "Mercedes Actros V8 OM502 Engine Reconditioning Boksburg",
    metaDescription:
      "Mercedes Actros V8 OM502 engine reconditioning in Boksburg from Dyna-Mic Diesel, serving the East Rand and Gauteng.",
    h1: "Mercedes Actros V8 OM502 Engine Reconditioning",
    summary:
      "For Mercedes Actros V8 OM502 engine reconditioning, Dyna-Mic Diesel provides a workshop-based route for diagnosis, repair planning and quote requests.",
    keywords: ["Mercedes Actros V8 OM502 engine reconditioning", "Mercedes OM542 engine reconditioning"],
    bullets: ["Actros V8 repair assessment", "OM502 engine reconditioning", "Truck tractor repair support"],
    proof: ["Anderbolt workshop location", "Mercedes Actros V8 focus"],
    faq: [
      {
        question: "Is OM502 engine reconditioning listed as a focus?",
        answer: "Yes. Mercedes Actros V8 OM502 engine reconditioning enquiries can be discussed with the workshop.",
      },
      {
        question: "Can I send photos or symptoms by WhatsApp?",
        answer: "Yes. Use the WhatsApp button and include the engine code, symptoms and vehicle details.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "mercedes-om541-reconditioning",
    title: "Mercedes OM541 Reconditioning",
    metaTitle: "Mercedes OM541 Engine Reconditioning | Dyna-Mic Diesel Boksburg",
    metaDescription:
      "Mercedes OM541 engine reconditioning enquiries in Boksburg, Anderbolt, East Rand and Gauteng.",
    h1: "Mercedes OM541 Engine Reconditioning",
    summary:
      "Dyna-Mic Diesel supports Mercedes OM541 engine reconditioning enquiries with diesel diagnostics, clear repair scoping and quote requests.",
    keywords: ["Mercedes OM541 engine reconditioning", "diesel truck engine reconditioning Boksburg"],
    bullets: ["OM541 diagnostics", "Engine reconditioning assessment", "Commercial truck repair planning"],
    proof: ["30+ years diesel experience", "Local Boksburg workshop"],
    faq: [
      {
        question: "Can I enquire about Mercedes OM541 reconditioning?",
        answer: "Yes. You can contact Dyna-Mic Diesel about Mercedes OM541 engine reconditioning requirements.",
      },
      {
        question: "Do you serve Gauteng fleets?",
        answer: "Yes. Dyna-Mic Diesel serves Boksburg, the East Rand and Gauteng.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "mercedes-om542-reconditioning",
    title: "Mercedes OM542 Reconditioning",
    metaTitle: "Mercedes OM542 Engine Reconditioning | Actros Diesel Repairs",
    metaDescription:
      "Mercedes OM542 engine reconditioning support from Dyna-Mic Diesel in Anderbolt, Boksburg. Actros diesel engine repair enquiries welcome.",
    h1: "Mercedes OM542 Engine Reconditioning",
    summary:
      "Dyna-Mic Diesel supports Mercedes OM542 engine reconditioning enquiries for operators needing an experienced Boksburg workshop.",
    keywords: ["Mercedes OM542 engine reconditioning", "Mercedes Actros engine reconditioning"],
    bullets: ["OM542 repair assessment", "Actros diesel engine work", "Diagnostics-led quote planning"],
    proof: ["Mercedes engine repair support", "East Rand and Gauteng service coverage"],
    faq: [
      {
        question: "Is OM542 included in your engine reconditioning focus?",
        answer: "Yes. Mercedes OM542 engine reconditioning enquiries can be discussed with Dyna-Mic Diesel.",
      },
      {
        question: "How do I book an assessment?",
        answer: "Call, WhatsApp or submit a quote request with the vehicle and engine details.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "scania-engine-reconditioning",
    title: "Scania Engine Reconditioning",
    metaTitle: "Scania Engine Reconditioning | Diesel Truck Repair Boksburg",
    metaDescription:
      "Scania engine reconditioning enquiries in Boksburg and the East Rand. Dyna-Mic Diesel supports diesel engine diagnostics and repair scoping.",
    h1: "Scania Engine Reconditioning",
    summary:
      "Dyna-Mic Diesel supports Scania engine reconditioning enquiries with diesel diagnostics and practical repair planning for Boksburg and East Rand operators.",
    keywords: ["Scania engine reconditioning", "Scania truck repairs East Rand"],
    bullets: ["Scania engine diagnostics", "Reconditioning assessment", "Fleet repair coordination"],
    proof: ["Scania engine repair enquiries", "Workshop in Anderbolt"],
    faq: [
      {
        question: "Can I ask about Scania engine reconditioning?",
        answer: "Yes. Scania engine reconditioning is listed as an engine-specific page.",
      },
      {
        question: "Do you also cover Scania truck repairs?",
        answer: "Yes. Dyna-Mic Diesel works on Scania truck repair enquiries for Boksburg and East Rand operators.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "volvo-truck-engine-diagnostics",
    title: "Volvo Truck Engine Diagnostics",
    metaTitle: "Volvo Truck Engine Diagnostics East Rand | Dyna-Mic Diesel",
    metaDescription:
      "Volvo truck engine diagnostics for Boksburg and East Rand operators. Contact Dyna-Mic Diesel for diesel fault finding.",
    h1: "Volvo Truck Engine Diagnostics",
    summary:
      "Volvo truck engine diagnostics are available for operators who need a diesel workshop in Anderbolt, Boksburg with local East Rand coverage.",
    keywords: ["Volvo truck engine diagnostics", "Volvo truck diagnostics East Rand"],
    bullets: ["Volvo engine fault finding", "Truck diagnostics", "Repair scope recommendations"],
    proof: ["Diagnostics-led workflow", "Boksburg workshop base"],
    faq: [
      {
        question: "Do you offer Volvo truck engine diagnostics?",
        answer: "Yes. Dyna-Mic Diesel can assist with Volvo truck engine diagnostics enquiries.",
      },
      {
        question: "Can diagnostics help before authorising repairs?",
        answer: "Yes. Diagnostics help establish symptoms and likely repair scope before work is quoted.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "diesel-truck-engine-reconditioning-boksburg",
    title: "Diesel Truck Engine Reconditioning Boksburg",
    metaTitle: "Diesel Truck Engine Reconditioning Boksburg | Dyna-Mic Diesel",
    metaDescription:
      "Diesel truck engine reconditioning in Boksburg for Mercedes Actros, Scania and commercial truck repair enquiries.",
    h1: "Diesel Truck Engine Reconditioning in Boksburg",
    summary:
      "Dyna-Mic Diesel supports diesel truck engine reconditioning enquiries for operators needing diagnostics, practical repair planning and quote support.",
    keywords: ["diesel truck engine reconditioning Boksburg", "commercial vehicle repairs Boksburg"],
    bullets: ["Engine diagnostics", "Reconditioning quote requests", "Truck repair planning"],
    proof: ["30+ years experience", "Anderbolt workshop serving Gauteng"],
    faq: [
      {
        question: "Which engines are highlighted on this website?",
        answer:
          "The site highlights Mercedes Actros V6 and V8, OM501, OM502, OM541, OM542, Scania engine reconditioning and Volvo truck engine diagnostics.",
      },
      {
        question: "Can I request a fleet engine repair quote?",
        answer: "Yes. Use the quote page and include the number of vehicles and the symptoms.",
      },
    ],
    internalLinks: defaultLinks,
  },
];

export const servicePages: SeoPage[] = [
  {
    slug: "diesel-engine-diagnostics",
    title: "Diesel Engine Diagnostics",
    metaTitle: "Diesel Engine Diagnostics Boksburg | Truck Diagnostics East Rand",
    metaDescription:
      "Diesel engine diagnostics and truck diagnostics in Anderbolt, Boksburg for East Rand and Gauteng commercial vehicle operators.",
    h1: "Diesel Engine Diagnostics in Boksburg",
    summary:
      "Dyna-Mic Diesel provides diesel engine diagnostics for trucks and commercial vehicles where clear fault finding is needed before repair decisions.",
    keywords: ["diesel engine diagnostics Boksburg", "truck diagnostics East Rand"],
    bullets: ["Fault finding for diesel performance issues", "Warning light and running concern assessment", "Repair scope support before quoting"],
    proof: ["Diagnostics-led workshop process", "Boksburg and East Rand focus"],
    faq: [
      {
        question: "What information helps with a diagnostics enquiry?",
        answer: "Share the truck brand, model, engine code, warning lights, symptoms and recent repair history.",
      },
      {
        question: "Do diagnostics confirm every repair immediately?",
        answer: "Diagnostics guide the repair path, but final quoting depends on inspection findings and parts requirements.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "truck-diagnostics",
    title: "Truck Diagnostics",
    metaTitle: "Truck Diagnostics Boksburg | Diesel Truck Fault Finding East Rand",
    metaDescription:
      "Truck diagnostics in Boksburg for confirmed commercial truck brands, with specialist support for Volvo, Scania and Mercedes-Benz repair enquiries.",
    h1: "Truck Diagnostics for East Rand Operators",
    summary:
      "Truck diagnostics help identify fault causes before replacing parts, supporting more practical repair planning for fleets and owner-drivers.",
    keywords: ["truck diagnostics Boksburg", "Volvo truck diagnostics East Rand"],
    bullets: ["Brand-specific fault finding", "Engine and drivability symptoms", "Quote support for repairs"],
    proof: ["30+ years diesel experience", "Workshop in Anderbolt"],
    faq: [
      {
        question: "Which truck brands does Dyna-Mic Diesel work on?",
        answer: brandPositioning,
      },
      {
        question: "Can diagnostics be part of fleet maintenance?",
        answer: "Yes. Diagnostics can support planned maintenance and recurring fleet repair decisions.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "diesel-pump-repairs",
    title: "Diesel Pump Repairs",
    metaTitle: "Diesel Pump Repairs Boksburg | Diesel Truck Workshop Anderbolt",
    metaDescription:
      "Diesel pump repair enquiries in Boksburg and the East Rand. Contact Dyna-Mic Diesel for diagnostics and repair assessment.",
    h1: "Diesel Pump Repairs in Boksburg",
    summary:
      "Dyna-Mic Diesel includes diesel pump repairs as a core service area for diesel truck operators needing fault diagnosis and workshop repair support.",
    keywords: ["diesel pump repairs Boksburg", "diesel truck repairs East Rand"],
    bullets: ["Diesel fuel system symptoms", "Pump repair enquiry routing", "Diagnostics before repair scope"],
    proof: ["Core diesel repair service", "Local workshop access"],
    faq: [
      {
        question: "Do you list diesel pump repairs as a service?",
        answer: "Yes. Diesel pump repairs are included as a core service.",
      },
      {
        question: "Should I include symptoms in my enquiry?",
        answer: "Yes. Include hard starting, smoke, power loss, fuel leaks or any recent repair details.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "diesel-injector-repairs",
    title: "Diesel Injector Repairs",
    metaTitle: "Diesel Injector Repairs Boksburg | Diesel Diagnostics East Rand",
    metaDescription:
      "Diesel injector repair enquiries in Boksburg from Dyna-Mic Diesel. Serving Anderbolt, the East Rand and Gauteng.",
    h1: "Diesel Injector Repairs in Boksburg",
    summary:
      "Diesel injector repairs are included as a core service area for truck operators dealing with performance, smoke, starting or fuel-related symptoms.",
    keywords: ["diesel injector repairs Boksburg", "diesel engine diagnostics Boksburg"],
    bullets: ["Injector-related fault symptoms", "Diesel diagnostics", "Repair quote enquiries"],
    proof: ["Diesel workshop experience", "East Rand service area"],
    faq: [
      {
        question: "Are diesel injector repairs included?",
        answer: "Yes. Diesel injector repairs are listed as a core service.",
      },
      {
        question: "Can injector issues affect performance?",
        answer: "Injector-related issues can contribute to starting, smoke, fuel economy or power concerns and should be diagnosed before repair decisions.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "engine-dyno-testing",
    title: "Engine Dyno Testing",
    metaTitle: "Engine Dyno Testing Boksburg | Diesel Engine Workshop East Rand",
    metaDescription:
      "Engine dyno testing is listed as a core Dyna-Mic Diesel service for diesel truck engine repair and reconditioning support.",
    h1: "Engine Dyno Testing for Diesel Truck Engines",
    summary:
      "Engine dyno testing is included in the core service set for diesel engine repair and reconditioning assessment work.",
    keywords: ["engine dyno testing Boksburg", "diesel truck engine reconditioning Boksburg"],
    bullets: ["Engine testing support", "Reconditioning validation enquiries", "Diesel performance assessment"],
    proof: ["Core service listing", "Engine-focused repair pages"],
    faq: [
      {
        question: "Is engine dyno testing listed as a core service?",
        answer: "Yes. Engine dyno testing is included in the core services for this website.",
      },
      {
        question: "When should I ask about dyno testing?",
        answer: "Ask about dyno testing when discussing engine reconditioning, performance concerns or repair validation needs.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "truck-services",
    title: "Truck Services",
    metaTitle: "Truck Services Boksburg | Diesel Truck Workshop Anderbolt",
    metaDescription:
      "Truck services in Anderbolt, Boksburg for commercial vehicle operators across the East Rand and Gauteng.",
    h1: "Truck Services in Boksburg",
    summary:
      "Dyna-Mic Diesel provides truck service enquiries for operators who need an experienced workshop in Anderbolt, Boksburg.",
    keywords: ["truck services Boksburg", "diesel truck repairs East Rand"],
    bullets: ["Truck service enquiries", "Fleet service planning", "Commercial vehicle repair support"],
    proof: ["30+ years diesel experience", "Anderbolt location"],
    faq: [
      {
        question: "Can I enquire about regular truck servicing?",
        answer: "Yes. Truck services are included as a core service area.",
      },
      {
        question: "Do you work with fleets?",
        answer: "Yes. Fleet maintenance quote requests are a main goal of the site.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "truck-tractor-repairs",
    title: "Truck Tractor Repairs",
    metaTitle: "Truck Tractor Repairs Boksburg | Mercedes Actros Repair Workshop",
    metaDescription:
      "Truck tractor repairs in Boksburg, including Mercedes Actros repair and diesel diagnostics from Dyna-Mic Diesel.",
    h1: "Truck Tractor Repairs in Boksburg",
    summary:
      "Truck tractor repairs are a core service focus, with strong coverage for Mercedes Actros and diesel diagnostic enquiries.",
    keywords: ["truck tractor repairs Boksburg", "Mercedes truck tractor repair Boksburg"],
    bullets: ["Truck tractor diagnostics", "Mercedes Actros repair focus", "Fleet and owner-driver enquiries"],
    proof: ["Mercedes-specific pages", "Boksburg workshop"],
    faq: [
      {
        question: "Are truck tractor repairs included?",
        answer: "Yes. Truck tractor repairs are included as a core service.",
      },
      {
        question: "Is Mercedes Actros repair a focus?",
        answer: "Yes. Mercedes Actros repair and engine reconditioning are strongly represented across the site.",
      },
    ],
    internalLinks: defaultLinks,
  },
  {
    slug: "commercial-vehicle-repairs",
    title: "Commercial Vehicle Repairs",
    metaTitle: "Commercial Vehicle Repairs Boksburg | East Rand Diesel Workshop",
    metaDescription:
      "Commercial vehicle repairs in Boksburg from Dyna-Mic Diesel, serving Anderbolt, the East Rand and Gauteng.",
    h1: "Commercial Vehicle Repairs in Boksburg",
    summary:
      "Dyna-Mic Diesel supports commercial vehicle repair enquiries for businesses and fleets needing a diesel workshop in the East Rand.",
    keywords: ["commercial vehicle repairs Boksburg", "diesel truck repair Gauteng"],
    bullets: ["Commercial truck repair support", "Diagnostics and service enquiries", "Fleet maintenance quote path"],
    proof: ["Area served: Boksburg, Anderbolt, East Rand and Gauteng", "30+ years diesel experience"],
    faq: [
      {
        question: "Do you handle commercial vehicle repair enquiries?",
        answer: "Yes. Commercial vehicle repairs are included as a core service area.",
      },
      {
        question: "Can businesses request quotes for multiple vehicles?",
        answer: "Yes. The request a quote page includes fleet details and vehicle count fields.",
      },
    ],
    internalLinks: defaultLinks,
  },
];

export const locationPages: SeoPage[] = [
  {
    slug: "boksburg",
    title: "Diesel Truck Repairs Boksburg",
    metaTitle: "Diesel Truck Repairs Boksburg | Dyna-Mic Diesel Anderbolt",
    metaDescription:
      "Diesel truck repairs in Boksburg from Dyna-Mic Diesel, focused on Volvo, Scania, Mercedes-Benz and Mercedes Actros enquiries.",
    h1: "Diesel Truck Repairs in Boksburg",
    summary:
      "Dyna-Mic Diesel is based in Anderbolt, Boksburg and serves local truck operators needing diagnostics, engine work, services and fleet maintenance quotes.",
    keywords: ["diesel truck repairs Boksburg", "truck diagnostics Boksburg"],
    bullets: ["Local Boksburg workshop", "Brand-specific repair pages", "Quote requests by call, WhatsApp or form"],
    proof: ["Address: Unit 7, The Avenues, 128 14th Ave", "30+ years experience"],
    faq: commonFaq,
    internalLinks: defaultLinks,
  },
  {
    slug: "anderbolt",
    title: "Truck Repair Workshop Anderbolt",
    metaTitle: "Truck Repair Workshop Anderbolt | Diesel Repairs Boksburg",
    metaDescription:
      "Truck repair workshop in Anderbolt, Boksburg. Dyna-Mic Diesel serves the East Rand and Gauteng.",
    h1: "Truck Repair Workshop in Anderbolt",
    summary:
      "From Unit 7, The Avenues in Anderbolt, Dyna-Mic Diesel provides a local workshop route for diesel truck repair and fleet maintenance enquiries.",
    keywords: ["truck repair workshop Anderbolt", "diesel mechanic Anderbolt"],
    bullets: ["Anderbolt workshop location", "Boksburg commercial vehicle support", "East Rand service coverage"],
    proof: ["Unit 7, The Avenues, 128 14th Ave", "Phone and WhatsApp enquiry paths"],
    faq: commonFaq,
    internalLinks: defaultLinks,
  },
  {
    slug: "east-rand",
    title: "Diesel Truck Repairs East Rand",
    metaTitle: "Diesel Truck Repairs East Rand | Truck Diagnostics Boksburg",
    metaDescription:
      "Diesel truck repairs for East Rand operators. Dyna-Mic Diesel in Anderbolt supports diagnostics, engine reconditioning and fleet maintenance enquiries.",
    h1: "Diesel Truck Repairs for the East Rand",
    summary:
      "East Rand truck operators can contact Dyna-Mic Diesel for diesel diagnostics, brand-specific repair enquiries and fleet maintenance quote requests.",
    keywords: ["diesel truck repairs East Rand", "Volvo truck diagnostics East Rand", "Scania truck repairs East Rand"],
    bullets: ["East Rand service area", "Brand and engine-specific pages", "Commercial fleet quote support"],
    proof: ["Workshop in Anderbolt, Boksburg", "Gauteng service coverage"],
    faq: commonFaq,
    internalLinks: defaultLinks,
  },
  {
    slug: "gauteng",
    title: "Diesel Truck Repairs Gauteng",
    metaTitle: "Diesel Truck Repairs Gauteng | Fleet Maintenance East Rand",
    metaDescription:
      "Diesel truck repairs for Gauteng operators from Dyna-Mic Diesel in Boksburg, focused on Volvo, Scania, Mercedes-Benz and fleet maintenance enquiries.",
    h1: "Diesel Truck Repairs for Gauteng Operators",
    summary:
      "Dyna-Mic Diesel serves Gauteng truck operators from its Anderbolt workshop, with support for brand-specific repairs, engine work, servicing and fleet maintenance.",
    keywords: ["diesel truck repairs Gauteng", "fleet maintenance East Rand"],
    bullets: ["Gauteng service area", "Fleet maintenance quote requests", "Engine reconditioning enquiry paths"],
    proof: ["Based in Boksburg", "30+ years diesel workshop experience"],
    faq: commonFaq,
    internalLinks: defaultLinks,
  },
];

export const blogPosts: SeoPage[] = [
  {
    slug: "why-is-my-diesel-truck-losing-power",
    title: "Why Is My Diesel Truck Losing Power?",
    metaTitle: "Why Is My Diesel Truck Losing Power? | Dyna-Mic Diesel",
    metaDescription:
      "Common causes of diesel truck power loss, from fuel delivery and injector issues to diagnostics and engine wear. Advice for Boksburg and East Rand operators.",
    h1: "Why Is My Diesel Truck Losing Power?",
    summary:
      "Power loss is usually a symptom, not a diagnosis. Fuel delivery, injector faults, turbo or air restriction, overheating, sensor faults and engine wear can all reduce diesel truck performance.",
    keywords: ["diesel truck losing power", "diesel diagnostics Boksburg", "diesel truck repairs Boksburg"],
    bullets: ["Fuel supply and injector concerns", "Warning lights or derate symptoms", "Diagnostics before replacing parts"],
    proof: ["Diagnostics-led repair planning", "Useful for Volvo, Scania and Mercedes-Benz enquiries"],
    faq: [
      {
        question: "Should I keep driving a diesel truck that is losing power?",
        answer:
          "If power loss is severe, linked to overheating, smoke or warning lights, contact the workshop before continuing to operate the truck.",
      },
      {
        question: "Can diagnostics help identify power loss?",
        answer:
          "Yes. Diagnostics can help narrow the repair path before fuel system, sensor or engine work is approved.",
      },
    ],
    internalLinks: [
      { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Diesel Pumps and Injectors", href: "/services/diesel-pumps-and-injectors" },
      { label: "Engine Reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg" },
      { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg" },
      { label: "Scania Truck Repairs", href: "/scania-truck-repairs-boksburg" },
      { label: "Mercedes Truck Repairs", href: "/mercedes-truck-repairs-boksburg" },
      { label: "Contact", href: "/contact" },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "A diesel truck that is losing power may have a fuel delivery problem, injector fault, blocked air flow, turbo-related issue, overheating concern, sensor fault or deeper engine wear. The right next step is to note the symptoms and run diagnostics before approving parts replacement.",
            "For confirmed commercial truck brands, with specialist depth in Volvo, Scania and Mercedes-Benz, Dyna-Mic Diesel uses the symptom history, warning lights and service background to guide a practical repair discussion.",
          ],
        },
        {
          heading: "Common Signs to Note",
          paragraphs: [
            "The detail around the power loss matters. A truck that loses power under load points to a different repair path from one that struggles to start, smokes heavily or goes into a warning-light derate.",
          ],
          bullets: [
            "Power loss under load or on hills",
            "Engine warning light or derate behaviour",
            "Black smoke, blue smoke or excessive smoke",
            "Hard starting or uneven idle",
            "High fuel consumption",
          ],
        },
        {
          heading: "What to Send the Workshop",
          paragraphs: [
            "When you contact Dyna-Mic Diesel, include the truck brand, model, engine code if known, warning lights, recent repairs, load conditions and whether the vehicle is part of a fleet.",
          ],
        },
      ],
      "Call or WhatsApp Dyna-Mic Diesel for diesel diagnostics in Boksburg before approving major repair work.",
    ),
  },
  {
    slug: "what-causes-black-smoke-from-a-diesel-truck",
    title: "What Causes Black Smoke From a Diesel Truck?",
    metaTitle: "What Causes Black Smoke From a Diesel Truck?",
    metaDescription:
      "Black smoke from a diesel truck can point to fuel, air, injector or engine issues. Learn what to check before booking repairs.",
    h1: "What Causes Black Smoke From a Diesel Truck?",
    summary:
      "Black smoke usually means the engine is not burning fuel cleanly. Injector issues, air restriction, turbo concerns, poor fuel delivery or engine condition can all be involved.",
    keywords: ["truck blowing black smoke", "diesel injector repairs Boksburg", "diesel diagnostics Boksburg"],
    bullets: ["Injector and fuel system symptoms", "Air flow or boost concerns", "Diagnostics before repair scope"],
    proof: ["Linked to diesel pumps and injectors", "Useful for commercial truck operators"],
    faq: [
      {
        question: "Is black smoke always an injector problem?",
        answer:
          "No. Injectors are one possibility, but air flow, turbo, pump, sensor or engine condition can also contribute.",
      },
      {
        question: "Should black smoke be diagnosed quickly?",
        answer:
          "Yes. Continued operation can increase fuel use and may point to faults that need workshop attention.",
      },
    ],
    internalLinks: [
      { label: "Diesel Pumps and Injectors", href: "/services/diesel-pumps-and-injectors" },
      { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Truck Services", href: "/services/truck-services-maintenance-and-repairs" },
      { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg" },
      { label: "Scania Truck Repairs", href: "/scania-truck-repairs-boksburg" },
      { label: "Mercedes Truck Repairs", href: "/mercedes-truck-repairs-boksburg" },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "Black smoke is commonly linked to excess fuel, poor air supply or incomplete combustion. On a working truck, it should be treated as a repair symptom rather than something to ignore.",
          ],
        },
        {
          heading: "Likely Areas to Check",
          paragraphs: [
            "The workshop will usually want to understand when the smoke appears: at start-up, idle, acceleration, under load or all the time.",
          ],
          bullets: [
            "Injector spray pattern or fuel delivery concerns",
            "Diesel pump issues",
            "Restricted air flow",
            "Boost or turbo-related symptoms",
            "Engine condition and service history",
          ],
        },
      ],
      "Contact Dyna-Mic Diesel with the smoke colour, when it happens and any warning lights so the workshop can advise on the next step.",
    ),
  },
  {
    slug: "what-causes-blue-smoke-from-a-diesel-engine",
    title: "What Causes Blue Smoke From a Diesel Engine?",
    metaTitle: "What Causes Blue Smoke From a Diesel Engine?",
    metaDescription:
      "Blue smoke from a diesel engine can point to oil burning, turbo concerns or engine wear. Practical guidance from Dyna-Mic Diesel.",
    h1: "What Causes Blue Smoke From a Diesel Engine?",
    summary:
      "Blue smoke often suggests oil is entering the combustion process. Turbo seal concerns, worn components or engine wear may need inspection.",
    keywords: ["truck blowing blue smoke", "diesel engine reconditioning Boksburg", "diesel diagnostics Boksburg"],
    bullets: ["Oil consumption context", "Engine condition checks", "Reconditioning enquiry route"],
    proof: ["Engine-focused workshop content", "Mercedes Actros reconditioning focus"],
    faq: [
      {
        question: "Does blue smoke mean the engine needs reconditioning?",
        answer:
          "Not always. It can be a sign of wear or oil-related faults, but inspection is needed before deciding on repair scope.",
      },
    ],
    internalLinks: [
      { label: "Diesel engine diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Mercedes Actros Engine Reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg" },
      { label: "Engine Dyno Testing", href: "/services/engine-dyno-testing" },
      { label: "Request a Quote", href: quoteHref },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "Blue smoke from a diesel engine is often linked to oil burning. That may come from turbo-related issues, internal wear, oil control problems or other mechanical concerns.",
            "Because the cause can range from a repairable component issue to deeper engine wear, diagnostics and inspection should happen before assuming the engine needs reconditioning.",
          ],
        },
      ],
      "Send Dyna-Mic Diesel the truck details, smoke symptoms and oil consumption history before requesting an engine repair quote.",
    ),
  },
  {
    slug: "signs-of-diesel-injector-problems-in-trucks",
    title: "Signs of Diesel Injector Problems in Trucks",
    metaTitle: "Signs of Diesel Injector Problems in Trucks",
    metaDescription:
      "Learn common diesel injector failure symptoms, including hard starting, smoke, rough running, power loss and fuel economy changes.",
    h1: "Signs of Diesel Injector Problems in Trucks",
    summary:
      "Injector problems can show up as smoke, rough running, hard starting, power loss and fuel economy changes. Diagnosis helps confirm whether the injector system is the real cause.",
    keywords: ["diesel injector failure symptoms", "diesel injector repairs Boksburg", "diesel diagnostics Boksburg"],
    bullets: ["Hard starting and rough idle", "Smoke and power loss", "Fuel economy changes"],
    proof: ["Diesel pumps and injectors service page", "Diagnostics-first repair planning"],
    faq: [
      {
        question: "Can injector faults cause power loss?",
        answer:
          "Yes. Injector faults can contribute to power loss, smoke, rough running and fuel consumption issues.",
      },
    ],
    internalLinks: [
      { label: "Diesel Pumps and Injectors", href: "/services/diesel-pumps-and-injectors" },
      { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg" },
      { label: "Scania Truck Repairs", href: "/scania-truck-repairs-boksburg" },
      { label: "Mercedes Truck Repairs", href: "/mercedes-truck-repairs-boksburg" },
      { label: "Contact", href: "/contact" },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "Common diesel injector problem signs include hard starting, uneven idle, black smoke, loss of power, higher fuel use and engine warning lights. Similar symptoms can also come from pump, air or engine issues, so diagnostics matter.",
          ],
          bullets: [
            "Rough running or misfire-like symptoms",
            "Smoke under acceleration",
            "Diesel smell or fuel economy change",
            "Engine warning light or fault codes",
          ],
        },
      ],
      "Contact Dyna-Mic Diesel for diesel injector repair enquiries in Boksburg and include the symptoms, truck brand and recent service history.",
    ),
  },
  {
    slug: "when-does-a-truck-engine-need-reconditioning",
    title: "When Does a Truck Engine Need Reconditioning?",
    metaTitle: "When Does a Truck Engine Need Reconditioning?",
    metaDescription:
      "Signs a diesel truck engine may need reconditioning, including compression loss, smoke, oil use, overheating and knocking.",
    h1: "When Does a Truck Engine Need Reconditioning?",
    summary:
      "Engine reconditioning becomes relevant when wear, compression loss, oil consumption, overheating or mechanical noise point beyond routine repairs.",
    keywords: ["when does a diesel engine need reconditioning", "engine reconditioning Boksburg", "diesel engine reconditioning Boksburg"],
    bullets: ["Compression and oil use symptoms", "Knocking or overheating", "Inspection before repair scope"],
    proof: ["Mercedes Actros OM501 and OM502 focus", "Engine reconditioning quote pathway"],
    faq: [
      {
        question: "Can diagnostics confirm reconditioning immediately?",
        answer:
          "Diagnostics and inspection guide the decision, but repair scope depends on actual engine condition and parts requirements.",
      },
    ],
    internalLinks: [
      { label: "Mercedes Actros Engine Reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg" },
      { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Engine Dyno Testing", href: "/services/engine-dyno-testing" },
      { label: "Fleet Maintenance", href: "/fleet-maintenance" },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "A truck engine may need reconditioning when symptoms suggest internal wear or mechanical damage rather than a simpler service item. Common signs include loss of compression, excessive smoke, high oil use, overheating, knocking sounds and poor fuel economy.",
          ],
        },
        {
          heading: "Why Inspection Comes First",
          paragraphs: [
            "Dyna-Mic Diesel does not need to guess from symptoms alone. For Mercedes Actros OM501, OM502, OM541 and OM542 enquiries, the workshop can discuss diagnostics and inspection before a reconditioning quote is scoped.",
          ],
        },
      ],
      "Request an engine reconditioning assessment with the engine code, symptoms and service history.",
    ),
  },
  {
    slug: "why-is-my-diesel-truck-overheating",
    title: "Why Is My Diesel Truck Overheating?",
    metaTitle: "Why Is My Diesel Truck Overheating?",
    metaDescription:
      "Diesel truck overheating can be caused by cooling system, load, engine or maintenance issues. Learn what to note before contacting the workshop.",
    h1: "Why Is My Diesel Truck Overheating?",
    summary:
      "Overheating can point to cooling system faults, engine load concerns, mechanical wear or maintenance issues. It should be investigated before major damage occurs.",
    keywords: ["diesel engine overheating", "diesel truck repairs Boksburg", "fleet maintenance East Rand"],
    bullets: ["Cooling symptoms", "Load and route context", "Preventative maintenance"],
    proof: ["Fleet maintenance support", "Truck services and repair pathways"],
    faq: [
      {
        question: "Should an overheating truck be driven to the workshop?",
        answer:
          "If the engine is overheating severely, call first and describe the symptoms before deciding whether to keep driving.",
      },
    ],
    internalLinks: [
      { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Fleet Maintenance", href: "/fleet-maintenance" },
      { label: "Truck Services", href: "/services/truck-services-maintenance-and-repairs" },
      { label: "Contact", href: "/contact" },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "A diesel truck can overheat because of cooling system faults, blocked flow, fan or belt issues, load conditions, poor maintenance or engine condition. The safest first step is to stop treating it as normal and record when the temperature climbs.",
          ],
        },
      ],
      "Call Dyna-Mic Diesel with the overheating pattern, warning lights and vehicle details before authorising repairs.",
    ),
  },
  {
    slug: "diesel-truck-hard-to-start-common-causes",
    title: "Diesel Truck Hard to Start: Common Causes",
    metaTitle: "Diesel Truck Hard to Start: Common Causes",
    metaDescription:
      "Hard starting diesel truck symptoms can involve batteries, fuel delivery, injectors, pumps, compression or engine condition.",
    h1: "Diesel Truck Hard to Start: Common Causes",
    summary:
      "Hard starting can come from electrical, fuel, injector, pump, compression or engine condition issues. Note whether it happens hot, cold or after standing.",
    keywords: ["diesel truck hard starting", "diesel pump repairs Boksburg", "diesel injector repairs Boksburg"],
    bullets: ["Hot or cold starting context", "Fuel delivery and injector symptoms", "Diagnostics before repair"],
    proof: ["Fuel system service links", "Workshop quote checklist"],
    faq: [
      {
        question: "What details help with a hard-start enquiry?",
        answer:
          "Mention whether the truck is hard to start cold, hot or after standing, and include smoke, warning lights and recent repair history.",
      },
    ],
    internalLinks: [
      { label: "Diesel Pumps and Injectors", href: "/services/diesel-pumps-and-injectors" },
      { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Truck Services", href: "/services/truck-services-maintenance-and-repairs" },
      { label: "Request a Quote", href: quoteHref },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "A hard-starting diesel truck may have battery or starter issues, fuel supply problems, diesel pump concerns, injector faults, compression loss or sensor-related faults. The timing of the issue gives useful diagnostic context.",
          ],
        },
      ],
      "Send a WhatsApp enquiry with the truck brand, starting pattern and symptoms.",
    ),
  },
  {
    slug: "what-does-diesel-engine-dyno-testing-tell-you",
    title: "What Does Diesel Engine Dyno Testing Tell You?",
    metaTitle: "What Does Diesel Engine Dyno Testing Tell You?",
    metaDescription:
      "Engine dyno testing can support diesel engine repair and reconditioning assessment by giving controlled performance and load information.",
    h1: "What Does Diesel Engine Dyno Testing Tell You?",
    summary:
      "Engine dyno testing gives controlled performance context for engine-focused repair and reconditioning discussions.",
    keywords: ["engine dyno testing Boksburg", "diesel engine dyno testing", "diesel engine reconditioning Boksburg"],
    bullets: ["Controlled engine assessment", "Performance information", "Reconditioning support"],
    proof: ["Engine dyno testing service page", "Engine reconditioning pathway"],
    faq: [
      {
        question: "Is dyno testing useful after engine work?",
        answer:
          "It can be useful in engine-focused repair or reconditioning discussions where performance assessment is required.",
      },
    ],
    internalLinks: [
      { label: "Engine Dyno Testing", href: "/services/engine-dyno-testing" },
      { label: "Engine Reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg" },
      { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "Diesel engine dyno testing helps assess engine behaviour under controlled load. It can support engine repair, reconditioning and performance discussions when workshop assessment is required.",
          ],
        },
      ],
      "Ask Dyna-Mic Diesel whether dyno testing is relevant to your engine repair or reconditioning enquiry.",
    ),
  },
  {
    slug: "how-preventative-maintenance-reduces-fleet-downtime",
    title: "How Preventative Maintenance Reduces Fleet Downtime",
    metaTitle: "How Preventative Maintenance Reduces Fleet Downtime",
    metaDescription:
      "Preventative fleet maintenance helps truck operators plan servicing, catch repeat faults and reduce avoidable downtime.",
    h1: "How Preventative Maintenance Reduces Fleet Downtime",
    summary:
      "Preventative maintenance helps fleet operators plan services, track recurring faults and reduce avoidable interruptions.",
    keywords: ["preventative truck maintenance", "reduce fleet downtime", "truck fleet maintenance Gauteng"],
    bullets: ["Service interval planning", "Repeat fault tracking", "Fleet quote preparation"],
    proof: ["Fleet maintenance page", "B2B conversion pathway"],
    faq: [
      {
        question: "What should a fleet maintenance enquiry include?",
        answer:
          "Include vehicle count, brands, service intervals, recurring faults and downtime priorities.",
      },
    ],
    internalLinks: [
      { label: "Fleet Maintenance", href: "/fleet-maintenance" },
      { label: "Truck Services", href: "/services/truck-services-maintenance-and-repairs" },
      { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg" },
      { label: "Scania Truck Repairs", href: "/scania-truck-repairs-boksburg" },
      { label: "Mercedes Truck Repairs", href: "/mercedes-truck-repairs-boksburg" },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "Preventative maintenance reduces downtime by catching service needs and repeat faults before they become urgent breakdowns. For fleets, the benefit is planning: knowing which trucks need attention, which symptoms are repeating and which vehicles are downtime-critical.",
          ],
        },
      ],
      "Request a fleet maintenance quote with vehicle counts, service intervals and downtime priorities.",
    ),
  },
  {
    slug: "engine-reconditioning-vs-engine-replacement",
    title: "Engine Reconditioning vs Engine Replacement",
    metaTitle: "Engine Reconditioning vs Engine Replacement",
    metaDescription:
      "Understand the practical differences between diesel engine reconditioning and engine replacement before requesting a truck repair quote.",
    h1: "Engine Reconditioning vs Engine Replacement",
    summary:
      "Engine reconditioning and replacement are different repair paths. The right choice depends on condition, parts, budget, downtime and inspection findings.",
    keywords: ["engine reconditioning vs engine replacement", "diesel engine reconditioning Boksburg", "Actros engine rebuild East Rand"],
    bullets: ["Repair scope depends on inspection", "Downtime and parts planning", "Mercedes Actros engine focus"],
    proof: ["Mercedes Actros engine reconditioning page", "No guaranteed-result claims"],
    faq: [
      {
        question: "Is reconditioning always better than replacement?",
        answer:
          "No. The right decision depends on engine condition, parts, budget, downtime and the workshop assessment.",
      },
    ],
    internalLinks: [
      { label: "Mercedes Actros Engine Reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg" },
      { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Engine Dyno Testing", href: "/services/engine-dyno-testing" },
      { label: "Request a Quote", href: quoteHref },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "Engine reconditioning focuses on rebuilding or restoring the existing engine to an agreed repair scope. Replacement involves fitting another engine. Neither option should be chosen from symptoms alone.",
            "Dyna-Mic Diesel can discuss diesel engine reconditioning enquiries after reviewing the engine type, symptoms, history and inspection requirements.",
          ],
        },
      ],
      "Contact the workshop with the engine code and symptoms before deciding between reconditioning and replacement.",
    ),
  },
  {
    slug: "common-causes-of-high-fuel-consumption-in-diesel-trucks",
    title: "Common Causes of High Fuel Consumption in Diesel Trucks",
    metaTitle: "Common Causes of High Fuel Consumption in Diesel Trucks",
    metaDescription:
      "High diesel consumption can be linked to injectors, pumps, servicing, load conditions, diagnostics or engine performance issues.",
    h1: "Common Causes of High Fuel Consumption in Diesel Trucks",
    summary:
      "High fuel consumption can come from fuel system problems, servicing gaps, driving load, diagnostics faults or engine condition.",
    keywords: ["truck using too much fuel", "diesel injector repairs Boksburg", "fleet maintenance East Rand"],
    bullets: ["Fuel system checks", "Service history review", "Fleet maintenance planning"],
    proof: ["Fuel system and fleet service links", "Useful for B2B operators"],
    faq: [
      {
        question: "Can injector faults increase fuel consumption?",
        answer:
          "Yes. Injector and fuel system issues can contribute to higher diesel use, but diagnosis is needed before repair decisions.",
      },
    ],
    internalLinks: [
      { label: "Diesel Pumps and Injectors", href: "/services/diesel-pumps-and-injectors" },
      { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Fleet Maintenance", href: "/fleet-maintenance" },
      { label: "Truck Services", href: "/services/truck-services-maintenance-and-repairs" },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "A diesel truck using too much fuel may have injector or pump issues, air or boost problems, maintenance gaps, load changes, tyre or driveline issues, or deeper engine performance concerns. Fleet operators should track the change rather than relying on a single tank.",
          ],
        },
      ],
      "Ask Dyna-Mic Diesel about diagnostics and maintenance planning for high fuel consumption concerns.",
    ),
  },
  {
    slug: "what-to-do-when-a-truck-engine-warning-light-comes-on",
    title: "What to Do When a Truck Engine Warning Light Comes On",
    metaTitle: "What to Do When a Truck Engine Warning Light Comes On",
    metaDescription:
      "Practical steps for truck operators when a diesel engine warning light appears, including what information to share with the workshop.",
    h1: "What to Do When a Truck Engine Warning Light Comes On",
    summary:
      "A warning light should be recorded and assessed. Note the truck behaviour, load, smoke, temperature and whether power is reduced.",
    keywords: ["truck engine warning light", "truck diagnostics Boksburg", "Volvo truck diagnostics East Rand"],
    bullets: ["Record symptoms and light behaviour", "Avoid guessing from the dashboard alone", "Book diagnostics if the issue persists"],
    proof: ["Truck diagnostics page", "Brand-specific diagnostics pathways"],
    faq: [
      {
        question: "Can I ignore a truck warning light if it still drives?",
        answer:
          "It is better to record the symptoms and contact the workshop, especially if power, temperature, smoke or starting changes.",
      },
    ],
    internalLinks: [
      { label: "Truck Diagnostics", href: "/services/truck-diagnostics" },
      { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg" },
      { label: "Scania Truck Repairs", href: "/scania-truck-repairs-boksburg" },
      { label: "Mercedes Truck Repairs", href: "/mercedes-truck-repairs-boksburg" },
      { label: "Contact", href: "/contact" },
    ],
    article: article(
      [
        {
          heading: "The Short Answer",
          paragraphs: [
            "When a truck engine warning light comes on, note what changed: power, smoke, temperature, noise, starting, fuel use and whether the warning remains active. If the truck enters derate or shows overheating, contact the workshop before continuing operation.",
          ],
        },
      ],
      "Call or WhatsApp Dyna-Mic Diesel with the warning light details, truck brand and symptoms.",
    ),
  },
];

function article(sections: ArticleSection[], cta: string) {
  return {
    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    author: business.name,
    sections,
    cta,
  };
}

export function getRelatedArticlesForPage(page: SeoPage, limit = 3): LinkItem[] {
  if (page.relatedArticles?.length) return page.relatedArticles.slice(0, limit);
  const text = `${page.slug} ${page.title} ${page.keywords.join(" ")}`.toLowerCase();
  const scored = blogPosts
    .filter((post) => post.slug !== page.slug)
    .map((post) => {
      const postText = `${post.slug} ${post.title} ${post.keywords.join(" ")}`.toLowerCase();
      const score = page.keywords.reduce(
        (total, keyword) => total + (postText.includes(keyword.toLowerCase().split(" ")[0]) ? 1 : 0),
        0,
      ) + (text.includes("injector") && postText.includes("injector") ? 3 : 0)
        + (text.includes("fleet") && postText.includes("fleet") ? 3 : 0)
        + (text.includes("engine") && postText.includes("engine") ? 2 : 0)
        + (text.includes("diagnostic") && postText.includes("warning") ? 2 : 0);
      return { post, score };
    })
    .sort((a, b) => b.score - a.score || a.post.title.localeCompare(b.post.title));

  return scored.slice(0, limit).map(({ post }) => ({
    label: post.title,
    href: `/blog/${post.slug}`,
    description: post.summary,
  }));
}

export function getBySlug(pages: SeoPage[], slug: string) {
  return pages.find((page) => page.slug === slug);
}

export function pageMetadata(page: SeoPage, path: string): Metadata {
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: path },
    keywords: [...page.keywords, ...business.areaServed],
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteUrl}${path}`,
      images: [{ url: "/images/diesel-workshop-hero.png", width: 1536, height: 1024 }],
    },
  };
}

export function faqSchema(faq: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: LinkItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: business.name,
    image: `${siteUrl}/images/diesel-workshop-hero.png`,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 7, The Avenues, 128 14th Ave",
      addressLocality: "Anderbolt, Boksburg",
      postalCode: "1459",
      addressCountry: "ZA",
    },
    areaServed: business.areaServed,
    knowsAbout: [
      "Diesel truck repairs",
      "Truck servicing",
      "Diesel diagnostics",
      "Engine reconditioning",
      "Fleet maintenance",
      ...supportedTruckBrands,
    ],
    url: siteUrl,
  };
}

export function articleSchema(page: SeoPage, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.metaDescription,
    author: {
      "@type": "Organization",
      name: page.article?.author ?? business.name,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/dyna-mic-diesel-logo.png`,
      },
    },
    datePublished: page.article?.datePublished,
    dateModified: page.article?.dateModified,
    mainEntityOfPage: `${siteUrl}${path}`,
    image: `${siteUrl}/images/workshop-hero.jpg`,
  };
}
