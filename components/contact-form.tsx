"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm({
  enabled,
  fallbackEmail,
}: {
  enabled: boolean;
  fallbackEmail: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "drafted" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    if (!enabled) {
      const body = [
        values.message,
        "",
        `${values.name}${values.organization ? `, ${values.organization}` : ""}`,
        values.email,
      ].join("\n");
      window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(
        `Portfolio enquiry from ${values.name}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("drafted");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Message could not be sent");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <p className="form-heading">
        Send a note{" "}
        <span>
          {enabled
            ? "All fields except organization are required."
            : "Opens your email app with the note ready to send."}
        </span>
      </p>
      <label htmlFor="contact-name">Name</label>
      <input
        id="contact-name"
        name="name"
        type="text"
        autoComplete="name"
        maxLength={100}
        required
      />
      <label htmlFor="contact-email">Email</label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        maxLength={254}
        required
      />
      <label htmlFor="contact-organization">
        Organization <span>Optional</span>
      </label>
      <input
        id="contact-organization"
        name="organization"
        type="text"
        autoComplete="organization"
        maxLength={150}
      />
      <label htmlFor="contact-message">Message</label>
      <textarea
        id="contact-message"
        name="message"
        rows={4}
        maxLength={4000}
        required
      />
      <div className="form-trap" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <button
        className="button button-dark form-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <ArrowUpRight size={16} />
      </button>
      <p
        className={`form-feedback${status === "error" ? " is-error" : ""}`}
        aria-live="polite"
      >
        {status === "sent" && "Thank you. Your message has been sent."}
        {status === "drafted" &&
          `Your email app should now be open. If not, write to ${fallbackEmail}.`}
        {status === "error" &&
          "The message could not be sent. Please try again later."}
      </p>
    </form>
  );
}
