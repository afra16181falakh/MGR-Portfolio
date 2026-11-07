import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/page-intro";
import { leadership } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership | PMF Afzal",
  description:
    "P. M. F. Afzal's approach to clarity in execution, people-first leadership, proactive risk management and stakeholder confidence.",
};

export default function LeadershipPage() {
  return (
    <main className="route-page leadership-page">
      <PageIntro
        number="05"
        label="Leadership approach"
        title={<>Technology is delivered<br /><em>by people.</em></>}
        description="Processes make work visible. People bring the judgment, communication and collaboration that move it forward."
      />
      <section className="leadership-statement section-pad">
        <div className="section-wrap leadership-statement-inner">
          <p className="route-kicker route-kicker-light"><span />A considered approach</p>
          <h2>Set clear goals. Then help people go the extra mile.</h2>
          <span className="statement-orbit statement-orbit-one" aria-hidden="true" />
          <span className="statement-orbit statement-orbit-two" aria-hidden="true" />
        </div>
      </section>
      <section className="leadership-principles section-pad">
        <div className="section-wrap">
          <div className="route-section-heading">
            <div><p className="route-kicker"><span />The principles</p><h2>How delivery<br /><em>earns confidence.</em></h2></div>
            <p>A practical approach built on clear expectations, accountability and open communication.</p>
          </div>
          <div className="principle-grid">
            {leadership.map((principle) => (
              <article className="principle-card" key={principle.number} tabIndex={0}>
                <span className="principle-number">{principle.number}</span>
                <span className="principle-spark" aria-hidden="true">✳</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="leadership-close section-pad">
        <div className="section-wrap leadership-close-inner">
          <p className="route-kicker"><span />A steady practice</p>
          <h2>Clear plans.<br /><em>People moving together.</em></h2>
          <Link className="text-link" href="/career">Explore the delivery journey <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}