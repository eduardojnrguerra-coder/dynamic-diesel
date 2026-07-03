import type { Metadata } from "next";

export const siteUrl = "https://www.dyna-mic.co.za";

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

export type LinkItem = { label: string; href: string };
export type Faq = { question: string; answer: string };

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
};

export const primaryLinks: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Volvo", href: "/volvo-truck-repairs-boksburg" },
  { label: "Scania", href: "/scania-truck-repairs-boksburg" },
  { label: "Mercedes", href: "/mercedes-truck-repairs-boksburg" },
  { label: "Engine Reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg" },
  { label: "Services", href: "/services" },
  { label: "Fleet Maintenance", href: "/fleet-maintenance" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
  { label: "Volvo Truck Repairs", href: "/volvo-truck-repairs-boksburg" },
  { label: "Scania Truck Repairs", href: "/scania-truck-repairs-boksburg" },
  { label: "Mercedes-Benz Truck Repairs", href: "/mercedes-truck-repairs-boksburg" },
  { label: "Mercedes Actros Engine Reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg" },
  { label: "Diesel Diagnostics", href: "/services/diesel-engine-diagnostics" },
  { label: "Engine Reconditioning", href: "/mercedes-actros-engine-reconditioning-boksburg" },
  { label: "Diesel Pumps and Injectors", href: "/services/diesel-pumps-and-injectors" },
  { label: "Engine Dyno Testing", href: "/services/engine-dyno-testing" },
  { label: "Fleet Maintenance", href: "/fleet-maintenance" },
  { label: "Contact", href: "/contact" },
  { label: "Request Quote", href: "/request-a-quote" },
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
      { label: "Request a quote", href: "/request-a-quote" },
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
      "Dyna-Mic Diesel targets Mercedes Actros V6 OM501 engine reconditioning for truck operators that need a careful workshop assessment before repair decisions are made.",
    keywords: ["Mercedes Actros V6 OM501 engine reconditioning", "Mercedes OM541 engine reconditioning"],
    bullets: ["Actros V6 repair assessment", "OM501 engine reconditioning", "Engine diagnostics before repair scope"],
    proof: ["30+ years diesel experience", "Mercedes Actros engine-specific focus"],
    faq: [
      {
        question: "Do you recondition Mercedes Actros OM501 engines?",
        answer: "Yes. Mercedes Actros V6 OM501 engine reconditioning is listed as a core engine-specific service.",
      },
      {
        question: "Should diagnostics happen before reconditioning?",
        answer: "Yes. Diagnostics and inspection help define the correct repair scope before quoting.",
      },
    ],
    internalLinks: [
      { label: "Mercedes truck tractor repairs", href: "/brands/mercedes-truck-tractor-repairs" },
      { label: "Diesel engine diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Request a quote", href: "/request-a-quote" },
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
        answer: "Yes. Mercedes Actros V8 OM502 engine reconditioning is a core engine-specific page.",
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
        answer: "Yes. Mercedes OM541 engine reconditioning is included as an engine-specific SEO page.",
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
      "The OM542 page targets Mercedes diesel truck engine reconditioning searches for operators needing an experienced Boksburg workshop.",
    keywords: ["Mercedes OM542 engine reconditioning", "Mercedes Actros engine reconditioning"],
    bullets: ["OM542 repair assessment", "Actros diesel engine work", "Diagnostics-led quote planning"],
    proof: ["Engine-specific Mercedes focus", "East Rand and Gauteng service coverage"],
    faq: [
      {
        question: "Is OM542 included in your engine reconditioning focus?",
        answer: "Yes. Mercedes OM542 engine reconditioning is included as a core target page.",
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
    proof: ["Brand and engine-specific SEO coverage", "Workshop in Anderbolt"],
    faq: [
      {
        question: "Can I ask about Scania engine reconditioning?",
        answer: "Yes. Scania engine reconditioning is listed as an engine-specific page.",
      },
      {
        question: "Do you also cover Scania truck repairs?",
        answer: "Yes. The Scania brand page targets Scania truck repairs in the East Rand.",
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
      "This page targets Volvo truck engine diagnostics for operators who need a diesel workshop in Anderbolt, Boksburg with local East Rand coverage.",
    keywords: ["Volvo truck engine diagnostics", "Volvo truck diagnostics East Rand"],
    bullets: ["Volvo engine fault finding", "Truck diagnostics", "Repair scope recommendations"],
    proof: ["Diagnostics-led workflow", "Boksburg workshop base"],
    faq: [
      {
        question: "Do you offer Volvo truck engine diagnostics?",
        answer: "Yes. Volvo truck engine diagnostics is a key engine-specific keyword target.",
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
      "Dyna-Mic Diesel targets diesel truck engine reconditioning Boksburg searches for operators needing diagnostics, practical repair planning and quote support.",
    keywords: ["diesel truck engine reconditioning Boksburg", "commercial vehicle repairs Boksburg"],
    bullets: ["Engine diagnostics", "Reconditioning quote requests", "Brand-specific repair routing"],
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
      "Truck diagnostics in Boksburg for Volvo, Scania and Mercedes-Benz truck repair enquiries.",
    h1: "Truck Diagnostics for East Rand Operators",
    summary:
      "Truck diagnostics help identify fault causes before replacing parts, supporting more practical repair planning for fleets and owner-drivers.",
    keywords: ["truck diagnostics Boksburg", "Volvo truck diagnostics East Rand"],
    bullets: ["Brand-specific fault finding", "Engine and drivability symptoms", "Quote support for repairs"],
    proof: ["30+ years diesel experience", "Workshop in Anderbolt"],
    faq: [
      {
        question: "Which truck brands are targeted by this website?",
        answer: "The website prioritises confirmed Volvo, Scania, Mercedes-Benz and Mercedes Actros truck repair pages.",
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
      "Dyna-Mic Diesel serves Gauteng truck operators from its Anderbolt workshop, with SEO pages focused on brand, engine, service and local searches.",
    keywords: ["diesel truck repairs Gauteng", "fleet maintenance East Rand"],
    bullets: ["Gauteng service area", "Fleet maintenance quote requests", "Engine reconditioning enquiry paths"],
    proof: ["Based in Boksburg", "30+ years diesel workshop experience"],
    faq: commonFaq,
    internalLinks: defaultLinks,
  },
];

export const blogPosts: SeoPage[] = [
  {
    slug: "actros-om501-om502-reconditioning-guide",
    title: "Actros OM501 and OM502 Reconditioning Guide",
    metaTitle: "Mercedes Actros OM501 and OM502 Reconditioning Guide",
    metaDescription:
      "A practical guide for Mercedes Actros OM501 and OM502 engine reconditioning enquiries in Boksburg and the East Rand.",
    h1: "Mercedes Actros OM501 and OM502 Reconditioning: What to Prepare",
    summary:
      "Before requesting a reconditioning quote, operators should gather engine code, symptoms, service history, oil or coolant concerns and recent diagnostic results.",
    keywords: ["Mercedes Actros V6 OM501 engine reconditioning", "Mercedes Actros V8 OM502 engine reconditioning"],
    bullets: ["Confirm the exact engine code", "Describe symptoms clearly", "Share service and repair history"],
    proof: ["Mercedes Actros engine pages", "Quote form built for fleet details"],
    faq: commonFaq,
    internalLinks: [
      { label: "OM501 reconditioning", href: "/engines/mercedes-actros-om501-reconditioning" },
      { label: "OM502 reconditioning", href: "/engines/mercedes-actros-om502-reconditioning" },
      { label: "Request a quote", href: "/request-a-quote" },
    ],
  },
  {
    slug: "fleet-maintenance-boksburg-checklist",
    title: "Fleet Maintenance Checklist Boksburg",
    metaTitle: "Fleet Maintenance Checklist for Boksburg Truck Operators",
    metaDescription:
      "A practical fleet maintenance checklist for diesel truck operators in Boksburg, the East Rand and Gauteng.",
    h1: "Fleet Maintenance Checklist for Boksburg Truck Operators",
    summary:
      "Fleet quote requests are easier to plan when vehicle counts, service intervals, recurring faults and downtime priorities are documented upfront.",
    keywords: ["fleet maintenance Boksburg", "truck services Boksburg"],
    bullets: ["List each truck and brand", "Track recurring faults", "Prioritise downtime-critical vehicles"],
    proof: ["Fleet maintenance page", "Quote request workflow"],
    faq: commonFaq,
    internalLinks: [
      { label: "Fleet maintenance", href: "/fleet-maintenance" },
      { label: "Truck services", href: "/services/truck-services" },
      { label: "Request a quote", href: "/request-a-quote" },
    ],
  },
  {
    slug: "diesel-diagnostics-before-repairs",
    title: "Diesel Diagnostics Before Repairs",
    metaTitle: "Why Diesel Truck Diagnostics Should Come Before Repairs",
    metaDescription:
      "Why diesel engine diagnostics and truck diagnostics matter before approving diesel truck repairs in Boksburg.",
    h1: "Why Diagnostics Should Come Before Diesel Truck Repairs",
    summary:
      "Diagnostics help connect symptoms to likely causes so repair conversations can be more specific and better scoped.",
    keywords: ["diesel engine diagnostics Boksburg", "truck diagnostics East Rand"],
    bullets: ["Avoid guessing from symptoms alone", "Capture warning lights and running concerns", "Use findings to scope repairs"],
    proof: ["Dedicated diagnostics pages", "Brand-specific repair pathways"],
    faq: commonFaq,
    internalLinks: [
      { label: "Diesel engine diagnostics", href: "/services/diesel-engine-diagnostics" },
      { label: "Truck diagnostics", href: "/services/truck-diagnostics" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function getBySlug(pages: SeoPage[], slug: string) {
  return pages.find((page) => page.slug === slug);
}

export function pageMetadata(page: SeoPage, path: string): Metadata {
  return {
    title: page.metaTitle,
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
    url: siteUrl,
  };
}
