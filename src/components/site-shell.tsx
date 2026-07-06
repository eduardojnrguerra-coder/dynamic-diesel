"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { business, primaryLinks, type LinkItem } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 text-white transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#111111]/96 shadow-2xl shadow-black/30 backdrop-blur-xl"
          : "border-b border-white/5 bg-[#111111]/72 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center" aria-label="Dyna-Mic Diesel home">
          <Image
            src="/images/dyna-mic-diesel-logo.png"
            alt="Dyna-Mic Diesel"
            width={260}
            height={72}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-5 text-xs font-black uppercase tracking-[0.1em] text-white/70 xl:flex">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-diesel-red">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            data-conversion="phone-click"
            className="hidden h-12 items-center gap-2 rounded border border-white/10 bg-white/5 px-4 text-sm font-black text-white transition hover:border-diesel-red hover:text-diesel-red lg:flex"
          >
            <Phone size={17} aria-hidden="true" />
            {business.phone}
          </a>
          <IconLink href={business.whatsappHref} label="WhatsApp Dyna-Mic Diesel">
            <MessageCircle size={18} />
          </IconLink>
          <Link
            href="/request-a-quote"
            className="hidden h-12 items-center gap-2 rounded bg-diesel-red px-5 text-sm font-black text-[#111111] shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-safety sm:flex"
          >
            Quote <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex size-12 items-center justify-center rounded border border-white/12 bg-white/5 text-white transition hover:border-diesel-red hover:text-diesel-red xl:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-[#111111] px-4 pb-5 pt-2 shadow-2xl xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-3 text-sm font-bold text-white/78 transition hover:bg-white/7 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href={business.phoneHref}
                data-conversion="phone-click"
                className="inline-flex h-12 items-center justify-center gap-2 rounded bg-diesel-red px-4 text-sm font-black text-[#111111]"
              >
                <Phone size={17} /> Call
              </a>
              <a
                href={business.whatsappHref}
                data-conversion="whatsapp-click"
                className="inline-flex h-12 items-center justify-center gap-2 rounded border border-diesel-red px-4 text-sm font-black text-diesel-red"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
            </div>
          </div>
        </nav>
      ) : null}
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
      data-conversion={href.includes("wa.me") ? "whatsapp-click" : "external-click"}
      className="flex size-12 items-center justify-center rounded border border-white/12 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-diesel-red hover:text-diesel-red"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b] text-white">
      <div className="mx-auto grid max-w-[1480px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-10">
        <div>
          <Image
            src="/images/dyna-mic-diesel-logo.png"
            alt="Dyna-Mic Diesel"
            width={280}
            height={78}
            className="h-14 w-auto"
          />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/62">
            Diesel truck repair workshop in Anderbolt, Boksburg serving the East
            Rand and Gauteng with {business.experience} of experience.
          </p>
          <div className="mt-7">
            <ContactButtons compact />
          </div>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
            Navigation
          </p>
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            {primaryLinks.slice(0, 7).map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
            Contact
          </p>
          <div className="mt-5 space-y-4 text-sm text-white/65">
            <a className="flex items-center gap-3 hover:text-white" href={business.phoneHref}>
              <Phone size={16} /> {business.phone}
            </a>
            <a className="flex items-center gap-3 hover:text-white" href={business.emailHref}>
              <Mail size={16} /> {business.email}
            </a>
            <a className="flex items-start gap-3 hover:text-white" href={business.mapHref}>
              <MapPin size={16} className="mt-1 shrink-0" /> {business.address}
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            {[Globe2, MessageCircle, Phone].map((Icon, index) => (
              <span
                key={index}
                className="flex size-10 items-center justify-center rounded border border-white/10 bg-white/5 text-white/70"
              >
                <Icon size={17} aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
            Service Areas
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {business.areaServed.map((area) => (
              <span
                key={area}
                className="rounded border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/68"
              >
                {area}
              </span>
            ))}
          </div>
          <a
            href={business.mapHref}
            className="mt-6 flex min-h-32 items-center justify-center rounded border border-white/10 bg-white/5 p-4 text-center text-sm font-bold text-white/68 transition hover:border-diesel-red hover:text-diesel-red"
          >
            Google Map
            <br />
            Unit 7, The Avenues
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/42">
        Copyright {new Date().getFullYear()} Dyna-Mic Diesel. Anderbolt, Boksburg.
      </div>
    </footer>
  );
}

export function ContactButtons({ compact = false }: { compact?: boolean }) {
  const base =
    "inline-flex h-13 min-h-12 items-center justify-center gap-2 rounded px-6 text-sm font-black transition duration-300";
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={business.phoneHref}
        data-conversion="phone-click"
        className={`${base} bg-diesel-red text-[#111111] shadow-lg shadow-black/25 hover:-translate-y-0.5 hover:bg-safety`}
      >
        <Phone size={18} aria-hidden="true" /> Call {compact ? "Now" : business.phone}
      </a>
      <a
        href={business.whatsappHref}
        data-conversion="whatsapp-click"
        className={`${base} border border-diesel-red/70 bg-white/5 text-diesel-red hover:-translate-y-0.5 hover:bg-diesel-red hover:text-[#111111]`}
      >
        <MessageCircle size={18} aria-hidden="true" /> WhatsApp
      </a>
      {!compact ? (
        <Link
          href="/request-a-quote"
          data-conversion="quote-click"
          className={`${base} border border-white/12 bg-white/8 text-white hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/12`}
        >
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
    <section className="relative flex min-h-[calc(100vh-88px)] overflow-hidden bg-[#111111] text-white">
      {image ? (
        <Image
          src="/images/workshop-hero.jpg"
          alt="Premium diesel truck workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-62"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/82 to-[#111111]/28" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(255,255,255,0.08),transparent_28rem)]" />
      <div className="relative mx-auto flex w-full max-w-[1480px] items-center px-4 py-24 sm:px-6 lg:px-10">
        <div className="max-w-5xl">
          <p className="reveal-up inline-flex rounded border border-diesel-red/35 bg-diesel-red/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-diesel-red">
            {eyebrow ?? "Diesel truck repairs in Boksburg"}
          </p>
          <h1 className="reveal-up-delay mt-7 max-w-6xl text-balance text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
            {h1}
          </h1>
          <p className="reveal-up-delay mt-7 max-w-3xl text-lg leading-8 text-white/76 sm:text-xl">
            {summary}
          </p>
          <div className="reveal-up-delay mt-9">
            <ContactButtons />
          </div>
          <p className="reveal-up-delay mt-4 max-w-2xl text-sm leading-6 text-white/56">
            Not driving Volvo, Scania or Mercedes? Contact us and we&apos;ll confirm if we can assist.
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-white/45 md:flex">
        Scroll
        <ChevronDown size={22} className="animate-bounce text-diesel-red" />
      </div>
    </section>
  );
}

export function LinkGrid({ links }: { links: LinkItem[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <Link
          key={`${link.label}-${link.href}`}
          href={link.href}
          className="group overflow-hidden rounded-xl border border-white/10 bg-[#1b1b1b] premium-shadow transition duration-500 hover:-translate-y-1 hover:border-diesel-red/50"
        >
          {link.image ? (
            <div className="relative aspect-[16/10] bg-[#111111]">
              <Image
                src={link.image}
                alt={link.label}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="image-hover object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/72 to-transparent" />
            </div>
          ) : null}
          <div className="flex min-h-32 items-center justify-between gap-4 p-6">
            <div>
              <span className="block text-lg font-black text-white">{link.label}</span>
              {link.description ? (
                <span className="mt-3 block text-sm leading-6 text-white/60">{link.description}</span>
              ) : null}
            </div>
            <ArrowRight
              size={22}
              className="shrink-0 text-diesel-red transition group-hover:translate-x-1"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 grid grid-cols-2 gap-3 sm:left-auto sm:right-5 sm:w-auto sm:grid-cols-1">
      <a
        href={business.phoneHref}
        data-conversion="phone-click"
        className="inline-flex h-13 items-center justify-center gap-2 rounded bg-diesel-red px-5 text-sm font-black text-[#111111] shadow-2xl shadow-black/35 transition hover:bg-safety"
      >
        <Phone size={18} /> Call
      </a>
      <a
        href={business.whatsappHref}
        data-conversion="whatsapp-click"
        className="inline-flex h-13 items-center justify-center gap-2 rounded border border-diesel-red bg-[#111111] px-5 text-sm font-black text-diesel-red shadow-2xl shadow-black/35 transition hover:bg-diesel-red hover:text-[#111111]"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
    </div>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}
