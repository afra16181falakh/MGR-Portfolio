import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/contact-form";
import PageIntro from "@/components/page-intro";
import { publicContact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | PMF Afzal",
  description:
    "Contact P. M. F. Afzal about senior technology delivery, project management and leadership opportunities.",
};

export default function ContactPage() {
  return (
    <main className="route-page contact-page">
      <PageIntro
        number="06"
        label="Start a conversation"
        title={<>Bring experience<br /><em>to the table.</em></>}
        description="I am open to conversations about senior technology delivery, project management and leadership opportunities where experience, structured execution and collaboration can make a meaningful difference."
      />
      <section className="contact-route-content section-pad">
        <div className="section-wrap contact-route-grid">
          <div className="contact-route-details">
            <p className="route-kicker"><span />Direct contact</p>
            <h2>Let’s connect.</h2>
            <a className="contact-channel" href={`mailto:${publicContact.email}`}>
              <span className="contact-channel-label">Email</span>
              <strong>{publicContact.email}</strong>
              <ArrowUpRight size={17} />
            </a>
            <a className="contact-channel" href={`tel:${publicContact.phone.replaceAll(" ", "")}`}>
              <span className="contact-channel-label">Phone</span>
              <strong>{publicContact.phone}</strong>
              <ArrowUpRight size={17} />
            </a>
            <div className="contact-channel contact-channel-static">
              <span className="contact-channel-label">Location</span>
              <strong>Bengaluru, India</strong>
            </div>
            {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
              <a className="contact-channel" href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noreferrer">
                <span className="contact-channel-label">LinkedIn</span>
                <strong>View professional profile</strong>
                <ArrowUpRight size={17} />
              </a>
            )}
            <a className="button button-outline contact-resume" href="/documents/afzal-resume.pdf" download>
              Download resume <ArrowDown size={16} />
            </a>
          </div>
          <div className="contact-form-panel">
            <ContactForm
              enabled={Boolean(
                process.env.RESEND_API_KEY &&
                  process.env.CONTACT_EMAIL &&
                  process.env.CONTACT_FROM,
              )}
              fallbackEmail={publicContact.email}
            />
          </div>
        </div>
      </section>
    </main>
  );
}