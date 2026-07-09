import { ServiceLandingPage } from "@/components/service-landing-page";
import { getServiceLandingPage, serviceLandingMetadata } from "@/lib/service-landing-pages";

const page = getServiceLandingPage("/engine-dyno-testing-boksburg");

export const metadata = serviceLandingMetadata(page);

export default function EngineDynoTestingBoksburgPage() {
  return <ServiceLandingPage page={page} />;
}
