import { ServiceLandingPage } from "@/components/service-landing-page";
import { getServiceLandingPage, serviceLandingMetadata } from "@/lib/service-landing-pages";

const page = getServiceLandingPage("/preventative-truck-maintenance-boksburg");

export const metadata = serviceLandingMetadata(page);

export default function PreventativeTruckMaintenanceBoksburgPage() {
  return <ServiceLandingPage page={page} />;
}
