import { Metadata } from "next";
import { site } from "@/content/nav";
import { WorkGatewaySection } from "@/components/home/WorkGatewaySection";
import { FinalCTA } from "@/components/cta/FinalCTA";

export const metadata: Metadata = {
  title: `Our Work — ${site.wordmark}`,
  description:
    "Explore the intelligent automation systems we engineer and the creative campaigns we produce.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main">
      <WorkGatewaySection />
      <FinalCTA />
    </main>
  );
}
