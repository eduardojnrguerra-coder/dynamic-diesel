import { ServiceLandingPage } from "@/components/service-landing-page";
import { getServiceLandingPage, serviceLandingMetadata } from "@/lib/service-landing-pages";

const page = getServiceLandingPage("/diesel-pumps-and-injectors-boksburg");

export const metadata = serviceLandingMetadata(page);

export default function DieselPumpsAndInjectorsBoksburgPage() {
  return <ServiceLandingPage page={page} />;
}
