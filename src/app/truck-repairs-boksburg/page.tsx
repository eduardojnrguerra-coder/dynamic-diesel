import { ServiceLandingPage } from "@/components/service-landing-page";
import { getServiceLandingPage, serviceLandingMetadata } from "@/lib/service-landing-pages";

const page = getServiceLandingPage("/truck-repairs-boksburg");

export const metadata = serviceLandingMetadata(page);

export default function TruckRepairsBoksburgPage() {
  return <ServiceLandingPage page={page} />;
}
