import { ServiceLandingPage } from "@/components/service-landing-page";
import { getServiceLandingPage, serviceLandingMetadata } from "@/lib/service-landing-pages";

const page = getServiceLandingPage("/diesel-diagnostics-boksburg");

export const metadata = serviceLandingMetadata(page);

export default function DieselDiagnosticsBoksburgPage() {
  return <ServiceLandingPage page={page} />;
}
