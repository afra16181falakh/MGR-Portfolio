import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/page-intro";
import { highlights, roles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Career | PMF Afzal",
  description:
    "Explore the career journey of P. M. F. Afzal, from software development to senior technology project leadership.",
};

export default function CareerPage() {
  return (
    <main className="route-page career-page">
      <PageIntro
        number="02"
        label="Career journey"
        title={
          <>
            A steady progression.
            <br />
            <em>One connected discipline.</em>
          </>
        }
        description="From hands-on development to leading complex delivery, each chapter has built on the last."
      />
      <section className="career-timeline-section section-pad">
        <div className="section-wrap">
          <div className="career-timeline-intro">
            <p className="route-kicker">
              <span />
              Four stages · Bengaluru, India
            </p>
            <p>
              Technical foundations. Client-facing consulting. Project
              execution. Enterprise delivery leadership.
            </p>
          </div>
          <div className="timeline career-timeline">
            {roles.map((role, index) => (
              <article
                className="timeline-entry"
                key={`${role.organization}-${role.title}`}
              >
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-date">{role.dates}</div>
                <div className="timeline-content">
                  <p className="timeline-company">{role.organization}</p>
                  <h3>{role.title}</h3>
                  <p className="timeline-location">{role.location}</p>
                  <p className="timeline-description">{role.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="career-highlights section-pad">
        <div className="section-wrap career-highlights-layout">
          <div>
            <p className="route-kicker">
              <span />
              Across the work
            </p>
            <h2>
              Delivery in
              <br />
              <em>practice.</em>
            </h2>
            <p className="route-section-copy">
              Experience highlights across planning, delivery, risk, reporting
              and collaboration.
            </p>
          </div>
          <ul className="highlight-list">
            {highlights.map((highlight, index) => (
              <li key={highlight}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{highlight}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="career-forward section-pad">
        <div className="section-wrap career-forward-layout">
          <div className="career-forward-copy">
            <p className="route-kicker">
              <span />
              Beyond the timeline
            </p>
            <h2>
              One career.
              <br />
              <em>Many delivery contexts.</em>
            </h2>
            <p>
              Explore the account briefs for the project scope, delivery role
              and systems behind each engagement.
            </p>
            <div className="career-forward-actions">
              <Link className="button button-dark" href="/work">
                Browse account briefs <ArrowRight size={17} />
              </Link>
              <Link
                className="resume-inline"
                href="/documents/afzal-resume.pdf"
                download
              >
                Download resume <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
          <Link
            className="career-forward-number"
            href="/work"
            aria-label="Explore 13 account briefs"
          >
            <span>13</span>
            <strong>
              account
              <br />
              briefs
            </strong>
            <i aria-hidden="true">
              <ArrowUpRight size={20} />
            </i>
          </Link>
        </div>
      </section>
    </main>
  );
}
