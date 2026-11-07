import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/page-intro";
import { certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | PMF Afzal",
  description:
    "The professional story, education and certifications of P. M. F. Afzal, a technology delivery leader with 25+ years in IT.",
};

export default function AboutPage() {
  return (
    <main className="route-page about-page">
      <PageIntro
        number="01"
        label="About Afzal"
        title={
          <>
            A career built on
            <br />
            <em>technology, people and delivery.</em>
          </>
        }
        description="A professional journey that began in software development and grew into technical consulting, project management and enterprise delivery leadership."
      />
      <section className="about-story section-wrap">
        <div className="about-story-copy">
          <p className="route-kicker">
            <span />
            The long view
          </p>
          <p>
            My career in technology began in 1998, starting with software
            development and gradually progressing into technical consulting,
            project management and enterprise delivery leadership.
          </p>
          <p>
            Over the years, I have worked across different stages of the
            technology delivery lifecycle, from understanding business
            requirements and designing solutions to coordinating
            multidisciplinary teams, managing stakeholders and overseeing
            implementation.
          </p>
          <p>
            My experience has taught me that successful technology delivery goes
            beyond meeting timelines. It requires clear communication, effective
            planning, thoughtful risk management and an understanding of the
            business outcomes that technology is expected to support.
          </p>
          <p>
            I value collaboration, accountability and continuous improvement,
            and enjoy bringing people and technology together to solve complex
            business challenges.
          </p>
          <Link className="text-link" href="/leadership">
            How I lead <ArrowUpRight size={16} />
          </Link>
        </div>
        <figure className="about-image-frame">
          <Image
            src="/images/afzal-landscape.jpeg"
            alt="Misty hills and a green valley from Afzal's portrait"
            fill
            sizes="(max-width: 760px) 100vw, 48vw"
          />
          <figcaption>Perspective comes with the journey.</figcaption>
        </figure>
      </section>

      <section className="about-credentials section-pad">
        <div className="section-wrap about-credentials-grid">
          <div>
            <p className="route-kicker">
              <span />
              Education
            </p>
            <h2>
              Foundations in
              <br />
              <em>computer science.</em>
            </h2>
          </div>
          <div className="credential-lines">
            <article>
              <span>Completed</span>
              <h3>B.Sc. Computer Science</h3>
              <p>Bangalore University</p>
            </article>
            <article>
              <span>Studies · Not completed</span>
              <h3>MCA</h3>
              <p>Madurai Kamaraj University</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-certifications section-pad">
        <div className="section-wrap">
          <div className="route-section-heading">
            <div>
              <p className="route-kicker">
                <span />
                Professional development
              </p>
              <h2>
                Learning that
                <br />
                <em>keeps moving.</em>
              </h2>
            </div>
            <p>
              Still learning, 25 years in: agile practice and formal project
              management, kept current.
            </p>
          </div>
          <div className="credential-lines">
            {certifications.map((credential) => (
              <article key={credential.title}>
                <span>{credential.issuer}</span>
                <h3>{credential.title}</h3>
                <p>
                  {credential.date} · {credential.status}
                </p>
                <p>{credential.detail}</p>
              </article>
            ))}
          </div>
          <Link
            className="resume-inline"
            href="/documents/afzal-resume.pdf"
            download
          >
            Download the full resume <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
