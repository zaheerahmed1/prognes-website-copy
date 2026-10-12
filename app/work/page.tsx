import { Metadata } from "next";
import { workPage } from "@/content/work";
import { site } from "@/content/nav";
import { ShowcaseSection } from "@/components/work/ShowcaseSection";
import { FinalCTA } from "@/components/cta/FinalCTA";

export const metadata: Metadata = {
  title: `${workPage.title} — ${site.wordmark}`,
  description: "View our selected systems and operational leverage in production.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main">
      <ShowcaseSection />
      <FinalCTA />
    </main>
  );
}
