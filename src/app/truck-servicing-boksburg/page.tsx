import { ServiceLandingPage } from "@/components/service-landing-page";
import { getServiceLandingPage, serviceLandingMetadata } from "@/lib/service-landing-pages";

const page = getServiceLandingPage("/truck-servicing-boksburg");

export const metadata = serviceLandingMetadata(page);

export default function TruckServicingBoksburgPage() {
  return <ServiceLandingPage page={page} />;
}
