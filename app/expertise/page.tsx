import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ExpertiseExplorer from "@/components/expertise-explorer";
import PageIntro from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Expertise | PMF Afzal",
  description:
    "Explore P. M. F. Afzal's experience across project leadership, technology delivery, stakeholder management and operational leadership.",
};

export default function ExpertisePage() {
  return (
    <main className="route-page expertise-page">
      <PageIntro
        number="04"
        label="Areas of expertise"
        title={
          <>
            Connect the
            <br />
            <em>moving parts.</em>
          </>
        }
        description="Successful delivery depends on clear plans, sound technical understanding, aligned stakeholders and teams equipped to do their best work."
      />
      <section className="expertise-explorer-section section-pad">
        <div className="section-wrap">
          <div className="route-section-heading explorer-heading">
            <div>
              <p className="route-kicker">
                <span />A delivery system
              </p>
              <h2>
                Explore the
                <br />
                <em>capabilities.</em>
              </h2>
            </div>
            <p>
              Each discipline connects to the next. Select one to see how it
              contributes to project delivery.
            </p>
          </div>
          <ExpertiseExplorer />
        </div>
      </section>
      <section className="expertise-context section-pad">
        <div className="section-wrap expertise-context-inner">
          <p className="route-kicker">
            <span />
            In practice
          </p>
          <h2>
            Technical fluency.
            <br />
            <em>Business focus.</em>
          </h2>
          <div>
            <p>
              Experience spans the delivery lifecycle, from requirements
              understanding and solution design through planning, execution,
              monitoring, change management and closure.
            </p>
            <Link className="text-link" href="/career">
              See the career behind the work <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
