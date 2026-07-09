import { ServiceLandingPage } from "@/components/service-landing-page";
import { getServiceLandingPage, serviceLandingMetadata } from "@/lib/service-landing-pages";

const page = getServiceLandingPage("/truck-brake-repairs-boksburg");

export const metadata = serviceLandingMetadata(page);

export default function TruckBrakeRepairsBoksburgPage() {
  return <ServiceLandingPage page={page} />;
}
