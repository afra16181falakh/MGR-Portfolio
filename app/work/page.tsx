import type { Metadata } from "next";
import EngagementExplorer from "@/components/engagement-explorer";
import PageIntro from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Engagement Archive | PMF Afzal",
  description:
    "Project and solution delivery experience across selected client engagements in retail, banking, insurance and manufacturing.",
};

export default function EngagementsPage() {
  return (
    <main className="route-page engagements-page">
      <PageIntro
        number="03"
        total="06"
        label="Engagement archive"
        title={
          <>
            Delivery,
            <br />
            <em>account by account.</em>
          </>
        }
        description="Explore the accounts, project contexts and delivery responsibilities described in the career history. Select an organization to preview its work."
      />
      <section className="engagement-directory section-pad">
        <div className="section-wrap">
          <EngagementExplorer />
        </div>
      </section>
    </main>
  );
}
