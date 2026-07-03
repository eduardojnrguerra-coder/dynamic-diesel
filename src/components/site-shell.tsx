import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Wrench,
} from "lucide-react";
import { business, primaryLinks, type LinkItem } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Dyna-Mic Diesel home">
          <span className="flex size-10 items-center justify-center rounded bg-steel text-safety">
            <Wrench size={21} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-black uppercase leading-none">
              Dyna-Mic
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-diesel-red">
              Diesel
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-4 text-xs font-semibold text-steel xl:flex xl:gap-5 xl:text-sm">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-diesel-red">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <IconLink href={business.phoneHref} label="Call Dyna-Mic Diesel">
            <Phone size={18} />
          </IconLink>
          <IconLink href={business.whatsappHref} label="WhatsApp Dyna-Mic Diesel">
            <MessageCircle size={18} />
          </IconLink>
          <Link
            href="/request-a-quote"
            className="hidden h-10 items-center gap-2 rounded bg-diesel-red px-4 text-sm font-bold text-white hover:bg-steel sm:flex"
          >
            Quote <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded border border-line text-steel lg:hidden"
            aria-label="Open navigation"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="border-t border-line bg-steel px-4 py-2 text-center text-xs font-semibold text-white sm:text-sm">
        {business.address} | {business.phone} | Serving Boksburg, Anderbolt, East Rand and Gauteng
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-line bg-background px-4 py-3 text-xs font-semibold text-steel xl:hidden">
        {primaryLinks.map((link) => (
          <Link key={link.href} href={link.href} className="shrink-0 hover:text-diesel-red">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="flex size-10 items-center justify-center rounded border border-line bg-panel text-steel hover:border-diesel-red hover:text-diesel-red"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-steel text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-black uppercase">Dyna-Mic Diesel</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
            Diesel truck repair workshop in Anderbolt, Boksburg serving the East
            Rand and Gauteng with {business.experience} of experience.
          </p>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-white/75">
            <a className="flex items-center gap-2 hover:text-white" href={business.phoneHref}>
              <Phone size={16} /> {business.phone}
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={business.emailHref}>
              <Mail size={16} /> {business.email}
            </a>
            <a className="flex items-start gap-2 hover:text-white" href={business.mapHref}>
              <MapPin size={16} className="mt-1 shrink-0" /> {business.address}
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold">Key Pages</p>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <Link href="/volvo-truck-repairs-boksburg" className="hover:text-white">Volvo truck repairs</Link>
            <Link href="/scania-truck-repairs-boksburg" className="hover:text-white">Scania truck repairs</Link>
            <Link href="/mercedes-truck-repairs-boksburg" className="hover:text-white">Mercedes truck repairs</Link>
            <Link href="/mercedes-actros-engine-reconditioning-boksburg" className="hover:text-white">
              Engine reconditioning
            </Link>
            <Link href="/fleet-maintenance" className="hover:text-white">Fleet maintenance</Link>
            <Link href="/request-a-quote" className="hover:text-white">Request a quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ContactButtons({ compact = false }: { compact?: boolean }) {
  const base =
    "inline-flex h-12 items-center justify-center gap-2 rounded px-5 text-sm font-bold transition";
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a href={business.phoneHref} className={`${base} bg-diesel-red text-white hover:bg-steel`}>
        <Phone size={18} aria-hidden="true" /> Call {compact ? "Now" : business.phone}
      </a>
      <a href={business.whatsappHref} className={`${base} border border-steel bg-panel text-steel hover:border-diesel-red hover:text-diesel-red`}>
        <MessageCircle size={18} aria-hidden="true" /> WhatsApp
      </a>
      {!compact ? (
        <Link href="/request-a-quote" className={`${base} bg-steel text-white hover:bg-diesel-red`}>
          Fleet Quote <ArrowRight size={18} aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

export function Hero({
  eyebrow,
  h1,
  summary,
  image = true,
}: {
  eyebrow?: string;
  h1: string;
  summary: string;
  image?: boolean;
}) {
  return (
    <section className="industrial-grid border-b border-line bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-14">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-diesel-red">
            {eyebrow ?? "Diesel truck repairs in Boksburg"}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {summary}
          </p>
          <div className="mt-7">
            <ContactButtons />
          </div>
        </div>
        {image ? (
          <div className="relative min-h-[320px] overflow-hidden rounded border border-line bg-steel">
            <Image
              src="/images/diesel-workshop-hero.png"
              alt="Diesel truck repair workshop with a commercial truck under service"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-steel/90 p-4 text-white">
              <p className="text-sm font-semibold">
                {business.experience} diesel experience | Anderbolt, Boksburg
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function LinkGrid({ links }: { links: LinkItem[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex min-h-20 items-center justify-between rounded border border-line bg-panel p-4 font-semibold text-steel hover:border-diesel-red"
        >
          <span>{link.label}</span>
          <ArrowRight size={18} className="text-diesel-red transition group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
