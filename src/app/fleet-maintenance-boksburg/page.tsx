import { ServiceLandingPage } from "@/components/service-landing-page";
import { getServiceLandingPage, serviceLandingMetadata } from "@/lib/service-landing-pages";

const page = getServiceLandingPage("/fleet-maintenance-boksburg");

export const metadata = serviceLandingMetadata(page);

export default function FleetMaintenanceBoksburgPage() {
  return <ServiceLandingPage page={page} />;
}
