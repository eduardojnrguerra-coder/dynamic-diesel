import { ServiceLandingPage } from "@/components/service-landing-page";
import { getServiceLandingPage, serviceLandingMetadata } from "@/lib/service-landing-pages";

const page = getServiceLandingPage("/truck-health-inspection-boksburg");

export const metadata = serviceLandingMetadata(page);

export default function TruckHealthInspectionBoksburgPage() {
  return <ServiceLandingPage page={page} />;
}
