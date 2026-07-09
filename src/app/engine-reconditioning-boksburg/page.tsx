import { ServiceLandingPage } from "@/components/service-landing-page";
import { getServiceLandingPage, serviceLandingMetadata } from "@/lib/service-landing-pages";

const page = getServiceLandingPage("/engine-reconditioning-boksburg");

export const metadata = serviceLandingMetadata(page);

export default function EngineReconditioningBoksburgPage() {
  return <ServiceLandingPage page={page} />;
}
