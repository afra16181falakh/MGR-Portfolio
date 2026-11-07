import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { clients, publicContact } from "@/lib/content";

export const metadata: Metadata = {
  title: "PMF Afzal | Technology Delivery & Project Leadership",
  description:
    "P. M. F. Afzal is a senior project manager with 25+ years of experience across technology delivery, consulting and enterprise project leadership.",
};

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "P. M. F. Afzal",
    jobTitle: "Senior Project Manager",
    email: publicContact.email,
    telephone: publicContact.phone,
    worksFor: { "@type": "Organization", name: "ITC Infotech" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "IN",
    },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Bangalore University" },
  };

  return (
    <main className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <section className="home-hero section-wrap">
        <div className="home-copy">
          <p className="home-kicker">
            <span />
            Senior IT Project Manager <i /> Bengaluru, India
          </p>
          <h1>
            Technology delivery
            <br />
            <em>with perspective.</em>
          </h1>
          <p className="home-lede">
            25+ years bringing technical understanding, disciplined execution
            and business priorities into the same room.
          </p>
          <div className="home-hero-actions">
            <Link className="button button-dark" href="/career">
              Explore the career <MoveUpRight size={17} />
            </Link>
            <a
              className="text-link"
              href="/documents/afzal-resume.pdf"
              download
            >
              Download resume <ArrowDown size={16} />
            </a>
          </div>
          <div className="home-proofline">
            <div>
              <strong>25+</strong>
              <span>years in IT</span>
            </div>
            <div>
              <strong>{clients.length}</strong>
              <span>client organisations</span>
            </div>
            <div>
              <strong>9</strong>
              <span>countries</span>
            </div>
          </div>
        </div>
        <figure className="home-portrait-wrap">
          <div className="home-portrait-frame">
            <Image
              className="hero-photo"
              src="/images/afzal-portrait.jpeg"
              alt="P. M. F. Afzal on a hillside in a green mountain landscape"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 42vw"
            />
            <span className="portrait-label">
              Delivery leadership · Bengaluru
            </span>
          </div>
          <figcaption className="home-photo-caption">
            <strong>P. M. F. Afzal</strong>
            <span>Senior Project Manager · ITC Infotech</span>
          </figcaption>
        </figure>
        <Link
          className="hero-scroll-link"
          href="/about"
          aria-label="Read about Afzal"
        >
          <span>Explore the profile</span>
          <ArrowDown size={15} />
        </Link>
      </section>

      <section
        className="home-pathways section-wrap"
        aria-labelledby="pathways-title"
      >
        <div className="home-section-heading">
          <div>
            <p className="route-kicker">
              <span />A career in context
            </p>
            <h2 id="pathways-title">
              The work, the people,
              <br />
              <em>the way forward.</em>
            </h2>
          </div>
          <p>
            Technical roots. Delivery leadership. A steady focus on people and
            outcomes.
          </p>
        </div>
        <div className="pathway-grid">
          <Link className="pathway pathway-career" href="/career">
            <span className="pathway-number">01 / CAREER</span>
            <span className="pathway-title">
              From developer
              <br />
              to delivery leader.
            </span>
            <span className="pathway-bottom">
              Four roles. One continuous career.
              <ArrowUpRight size={18} />
            </span>
            <span className="pathway-orbit" aria-hidden="true">
              25+
            </span>
          </Link>
          <Link className="pathway pathway-expertise" href="/expertise">
            <span className="pathway-number">02 / EXPERTISE</span>
            <span className="pathway-title">Connect the moving parts.</span>
            <span className="pathway-bottom">
              Explore delivery capabilities.
              <ArrowUpRight size={18} />
            </span>
            <span className="pathway-orbit" aria-hidden="true">
              →
            </span>
          </Link>
          <Link className="pathway pathway-leadership" href="/leadership">
            <span className="pathway-number">03 / LEADERSHIP</span>
            <span className="pathway-title">
              Good delivery
              <br />
              starts with people.
            </span>
            <span className="pathway-bottom">
              A considered approach to leading.
              <ArrowUpRight size={18} />
            </span>
            <span className="pathway-orbit" aria-hidden="true">
              ✳
            </span>
          </Link>
        </div>
      </section>

      <section className="home-career-band">
        <div className="section-wrap home-career-inner">
          <div>
            <p className="route-kicker route-kicker-light">
              <span />
              Career, at a glance
            </p>
            <h2>25 years of growing with the work.</h2>
          </div>
          <div className="career-steps" aria-label="Career progression">
            <div>
              <span>1998</span>
              <strong>Developer</strong>
            </div>
            <i />
            <div>
              <span>2000</span>
              <strong>Technical Consultant</strong>
            </div>
            <i />
            <div>
              <span>2005</span>
              <strong>Project Manager</strong>
            </div>
            <i />
            <div>
              <span>2013</span>
              <strong>Senior Project Manager</strong>
            </div>
          </div>
          <Link className="text-link light-link" href="/career">
            View career history <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="home-clients section-wrap">
        <div className="home-clients-heading">
          <p className="route-kicker">
            <span />
            Selected client experience
          </p>
          <div className="home-clients-actions">
            <span>
              <strong>{clients.length}</strong> organizations
            </span>
            <Link href="/work">
              Browse all <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="home-client-marquee">
          <div className="home-client-track">
            {[0, 1].map((run) => (
              <ul
                className="home-client-run"
                key={run}
                aria-hidden={run === 1}
                aria-label={
                  run === 0 ? "Selected client organizations" : undefined
                }
              >
                {clients.map((client, index) => (
                  <li key={client}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{client}</strong>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <p className="client-disclaimer">
          Organizations associated with professional engagements; no affiliation
          or endorsement implied.
        </p>
      </section>

      <section className="home-contact section-wrap">
        <div>
          <p className="route-kicker">
            <span />
            The next conversation
          </p>
          <h2>
            Bring experience
            <br />
            <em>to the table.</em>
          </h2>
        </div>
        <div className="home-contact-action">
          <p>
            For senior technology delivery, project management and leadership
            opportunities.
          </p>
          <Link className="button button-dark" href="/contact">
            Get in touch <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
