import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { engagements } from "@/lib/engagements";

export function generateStaticParams() {
  return engagements.map(({ slug }) => ({ slug }));
}

type EngagementPageProps = {
  params: Promise<{ slug: string }>;
};

function findEngagement(slug: string) {
  return engagements.find((item) => item.slug === slug);
}

export async function generateMetadata({
  params,
}: EngagementPageProps): Promise<Metadata> {
  const { slug } = await params;
  const engagement = findEngagement(slug);
  if (!engagement) return { title: "Engagement not found | PMF Afzal" };

  return {
    title: `${engagement.client} Engagement | PMF Afzal`,
    description: engagement.summary,
  };
}

export default async function EngagementPage({ params }: EngagementPageProps) {
  const { slug } = await params;
  const index = engagements.findIndex((item) => item.slug === slug);
  const engagement = engagements[index];
  if (!engagement) notFound();

  const previous =
    engagements[(index - 1 + engagements.length) % engagements.length];
  const next = engagements[(index + 1) % engagements.length];

  return (
    <main className="route-page engagement-detail-page">
      <header className="engagement-detail-intro section-wrap">
        <p className="route-index">
          {String(index + 1).padStart(2, "0")}{" "}
          <span>/ {String(engagements.length).padStart(2, "0")}</span>
        </p>
        <div className="engagement-detail-heading">
          <p className="route-kicker">
            <span />
            Account engagement · {engagement.employer}
          </p>
          <h1>{engagement.client}</h1>
          <p className="route-description">{engagement.summary}</p>
          <dl className="engagement-facts">
            {engagement.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Link className="engagement-back-link" href="/work">
          <ArrowLeft size={16} /> All engagements
        </Link>
      </header>

      <section className="engagement-context-section section-pad">
        <div className="section-wrap engagement-context-grid">
          <div className="engagement-section-marker">
            <span>01</span>
            <p>Context</p>
          </div>
          <div className="engagement-context-copy">
            <p className="route-kicker">
              <span />
              The account
            </p>
            <h2>
              Work shaped by
              <br />
              <em>the business context.</em>
            </h2>
            <p>{engagement.context}</p>
            {engagement.relationshipNote && (
              <p className="engagement-relationship-note">
                {engagement.relationshipNote}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="engagement-delivery-section section-pad">
        <div className="section-wrap">
          <div className="engagement-section-heading">
            <div className="engagement-section-marker">
              <span>02</span>
              <p>Delivery</p>
            </div>
            <div>
              <p className="route-kicker">
                <span />
                Role and activities
              </p>
              <h2>
                Where the work
                <br />
                <em>came together.</em>
              </h2>
            </div>
          </div>
          <div className="engagement-role-band">
            <span>Delivery role</span>
            <p>{engagement.role}</p>
          </div>
          <div className="engagement-activity-grid">
            {engagement.activities.map((activity, activityIndex) => (
              <article
                className="engagement-activity"
                key={activity.title}
                tabIndex={0}
              >
                <span>{String(activityIndex + 1).padStart(2, "0")}</span>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <i aria-hidden="true">
                  <ArrowUpRight size={16} />
                </i>
              </article>
            ))}
          </div>
        </div>
      </section>

      {engagement.technologies.length > 0 && (
        <section className="engagement-technology-section section-pad">
          <div className="section-wrap engagement-technology-inner">
            <div className="engagement-section-marker">
              <span>03</span>
              <p>Environment</p>
            </div>
            <div>
              <p className="route-kicker">
                <span />
                Technology environment
              </p>
              <h2>
                Tools within
                <br />
                <em>the engagement.</em>
              </h2>
            </div>
            <ul className="engagement-tech-list">
              {engagement.technologies.map((technology, technologyIndex) => (
                <li
                  key={technology}
                  style={
                    { "--tech-index": technologyIndex } as React.CSSProperties
                  }
                >
                  <span>{String(technologyIndex + 1).padStart(2, "0")}</span>
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <nav
        className="engagement-pagination section-wrap"
        aria-label="Browse account engagements"
      >
        <Link href={`/work/${previous.slug}`}>
          <span>
            <ArrowLeft size={16} /> Previous account
          </span>
          <strong>{previous.client}</strong>
        </Link>
        <Link className="engagement-pagination-all" href="/work">
          All 13 engagements
        </Link>
        <Link
          className="engagement-pagination-next"
          href={`/work/${next.slug}`}
        >
          <span>
            Next account <ArrowRight size={16} />
          </span>
          <strong>{next.client}</strong>
        </Link>
      </nav>
    </main>
  );
}
