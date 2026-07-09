import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  FileImage,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Truck,
} from "lucide-react";
import { business, supportedTruckBrands } from "@/lib/site";

const serviceOptions = [
  "Diagnostics",
  "Engine reconditioning",
  "Diesel pumps and injectors",
  "Engine dyno testing",
  "Truck service and maintenance",
  "Fleet maintenance",
  "Commercial truck repair enquiry",
];

const truckBrandOptions = [...supportedTruckBrands];

const urgencyOptions = [
  "Urgent - truck is down",
  "This week",
  "Planned maintenance",
  "Fleet quote planning",
];

const contactOptions = ["Phone", "WhatsApp", "Email"];

const quoteDetails = [
  "Truck brand, model and engine model if known",
  "Warning lights, smoke, starting issues or power loss",
  "Recent service or repair history",
  "Whether the truck is drivable or part of a fleet",
];

export function QuoteRequestForm() {
  return (
    <section id="quote-form" className="scroll-mt-28 bg-[#111111] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
            Workshop Quote Request
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-white lg:text-5xl">
            Tell us what the truck is doing and what support you need.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/64">
            Share the truck details, symptoms and urgency so Dyna-Mic Diesel can
            respond with the right workshop context.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_390px]">
          <form
            className="rounded-2xl border border-white/10 bg-[#1b1b1b] p-5 premium-shadow sm:p-8"
            data-conversion="quote-form"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="fullName" required />
              <Field label="Company name" name="companyName" />
              <Field label="Phone number" name="phone" type="tel" required />
              <Field label="Email address" name="email" type="email" />
              <SelectField
                label="Truck brand"
                name="truckBrand"
                options={truckBrandOptions}
                placeholder="Select truck brand"
                required
              />
              <Field label="Truck model" name="truckModel" />
              <Field label="Engine model if known" name="engineModel" placeholder="OM501, OM502, FH, R-series..." />
              <SelectField
                label="Service required"
                name="serviceRequired"
                options={serviceOptions}
                placeholder="Select service"
                required
              />
              <SelectField
                label="Is the truck drivable?"
                name="isDrivable"
                options={["Yes", "No"]}
                placeholder="Select yes or no"
              />
              <Field label="Number of trucks if fleet enquiry" name="fleetCount" type="number" min="1" />
              <SelectField
                label="Urgency level"
                name="urgency"
                options={urgencyOptions}
                placeholder="Select urgency"
              />
              <SelectField
                label="Preferred contact method"
                name="preferredContact"
                options={contactOptions}
                placeholder="Select contact method"
              />
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-white">
              Describe the problem or symptoms
              <textarea
                name="symptoms"
                rows={6}
                className="rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm font-normal leading-6 text-white outline-none transition placeholder:text-white/35 focus:border-diesel-red"
                placeholder="Tell us about warning lights, smoke, hard starting, loss of power, overheating, recent repairs or fleet maintenance requirements."
              />
            </label>

            <label className="mt-5 block rounded-xl border border-dashed border-white/18 bg-white/[0.035] p-5 text-white transition hover:border-diesel-red/60">
              <span className="flex items-center gap-3 text-sm font-black">
                <FileImage className="text-diesel-red" size={22} aria-hidden="true" />
                Upload photos option
              </span>
              <span className="mt-2 block text-sm leading-6 text-white/58">
                Photos of the truck, dashboard warnings, engine area or visible
                fault symptoms can help with the initial enquiry.
              </span>
              <input
                name="photos"
                type="file"
                accept="image/*"
                multiple
                className="mt-4 w-full rounded-lg border border-white/10 bg-[#111111] px-3 py-3 text-sm text-white file:mr-4 file:rounded file:border-0 file:bg-diesel-red file:px-4 file:py-2 file:text-sm file:font-black file:text-[#111111]"
              />
            </label>

            <button
              type="submit"
              data-conversion="quote-form-submit"
              className="mt-7 inline-flex h-14 w-full items-center justify-center gap-3 rounded bg-diesel-red px-7 text-sm font-black uppercase tracking-[0.08em] text-[#111111] shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-safety sm:w-auto"
            >
              Request My Quote <ArrowRight size={18} aria-hidden="true" />
            </button>
          </form>

          <aside className="h-fit rounded-2xl border border-white/10 bg-[#1b1b1b] p-6 text-white premium-shadow lg:sticky lg:top-28">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-diesel-red">
              Prefer to speak now?
            </p>
            <h2 className="mt-3 text-3xl font-black">Contact the workshop</h2>
            <div className="mt-6 grid gap-3">
              <a
                href={business.phoneHref}
                data-conversion="phone-click"
                className="flex min-h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 font-black transition hover:border-diesel-red hover:text-diesel-red"
              >
                <Phone size={19} aria-hidden="true" />
                Call {business.phone}
              </a>
              <a
                href={business.whatsappHref}
                data-conversion="whatsapp-click"
                className="flex min-h-14 items-center gap-3 rounded-xl bg-diesel-red px-4 py-3 font-black text-[#111111] transition hover:bg-safety"
              >
                <MessageCircle size={19} aria-hidden="true" />
                WhatsApp button
              </a>
              <a
                href={business.emailHref}
                data-conversion="email-click"
                className="flex min-h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 font-black transition hover:border-diesel-red hover:text-diesel-red"
              >
                <Mail size={19} aria-hidden="true" />
                {business.email}
              </a>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <div className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-diesel-red" size={20} aria-hidden="true" />
                <div>
                  <h3 className="font-black">Workshop address</h3>
                  <p className="mt-2 text-sm leading-6 text-white/66">{business.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <Truck className="text-diesel-red" size={20} aria-hidden="true" />
                <h3 className="font-black">What details to include</h3>
              </div>
              <div className="mt-4 grid gap-3">
                {quoteDetails.map((detail) => (
                  <div key={detail} className="flex gap-3 text-sm leading-6 text-white/66">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-diesel-red" size={17} />
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-center gap-3">
                <Clock className="text-diesel-red" size={20} aria-hidden="true" />
                <h3 className="font-black">Response expectation</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/66">
                Response time placeholder: the workshop will confirm the best
                response process and timing for quote enquiries.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-3 rounded-xl border border-white/10 bg-[#111111] p-5">
              <Building2 className="shrink-0 text-diesel-red" size={22} aria-hidden="true" />
              <p className="text-sm leading-6 text-white/66">
                For fleet enquiries, include the number of trucks and the most
                urgent vehicles first.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-white">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        min={min}
        className="h-12 rounded-xl border border-white/10 bg-[#111111] px-4 text-sm font-normal text-white outline-none transition placeholder:text-white/35 focus:border-diesel-red"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-white">
      {label}
      <select
        name={name}
        required={required}
        className="h-12 rounded-xl border border-white/10 bg-[#111111] px-4 text-sm font-normal text-white outline-none transition focus:border-diesel-red"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
