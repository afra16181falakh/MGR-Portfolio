"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { engagements } from "@/lib/engagements";

const filters = [
  { id: "all", label: "All accounts" },
  { id: "itc", label: "ITC Infotech" },
  { id: "torry", label: "Torry Harris" },
  { id: "workflow", label: "Automated Workflow" },
] as const;

type FilterId = (typeof filters)[number]["id"];

function matchesFilter(filterId: FilterId, employer: string) {
  if (filterId === "all") return true;
  if (filterId === "itc") return employer.startsWith("ITC Infotech");
  if (filterId === "torry") return employer.startsWith("Torry Harris");
  return employer.startsWith("Automated Workflow");
}

export default function EngagementExplorer() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [activeSlug, setActiveSlug] = useState(engagements[0].slug);
  const visibleEngagements = engagements.filter((engagement) =>
    matchesFilter(activeFilter, engagement.employer),
  );
  const activeEngagement =
    visibleEngagements.find((engagement) => engagement.slug === activeSlug) ??
    visibleEngagements[0];
  const activeNumber =
    engagements.findIndex(
      (engagement) => engagement.slug === activeEngagement.slug,
    ) + 1;

  function selectFilter(filterId: FilterId) {
    setActiveFilter(filterId);
    const firstMatch = engagements.find((engagement) =>
      matchesFilter(filterId, engagement.employer),
    );
    if (firstMatch) setActiveSlug(firstMatch.slug);
  }

  return (
    <div className="engagement-explorer">
      <div
        className="engagement-filter-bar"
        role="group"
        aria-label="Filter accounts by employer"
      >
        {filters.map((filter) => {
          const count = engagements.filter((engagement) =>
            matchesFilter(filter.id, engagement.employer),
          ).length;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={activeFilter === filter.id}
              onClick={() => selectFilter(filter.id)}
            >
              {filter.label}
              <span>{String(count).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>
      <div className="engagement-explorer-layout">
        <nav className="engagement-account-list" aria-label="Accounts">
          {visibleEngagements.map((engagement) => {
            const number =
              engagements.findIndex((item) => item.slug === engagement.slug) +
              1;
            return (
              <button
                className={activeSlug === engagement.slug ? "is-active" : ""}
                key={engagement.slug}
                type="button"
                aria-pressed={activeSlug === engagement.slug}
                onPointerEnter={() => setActiveSlug(engagement.slug)}
                onFocus={() => setActiveSlug(engagement.slug)}
                onClick={() => setActiveSlug(engagement.slug)}
              >
                <span>{String(number).padStart(2, "0")}</span>
                <strong>{engagement.client}</strong>
                <i aria-hidden="true">
                  <ArrowUpRight size={15} />
                </i>
              </button>
            );
          })}
        </nav>
        <article
          className="engagement-live-preview"
          key={activeEngagement.slug}
        >
          <div className="engagement-preview-topline">
            <span>ACCOUNT BRIEF</span>
            <span>
              {String(activeNumber).padStart(2, "0")} /{" "}
              {String(engagements.length).padStart(2, "0")}
            </span>
          </div>
          <p className="engagement-preview-employer">
            {activeEngagement.employer}
          </p>
          <h2>{activeEngagement.client}</h2>
          <p className="engagement-preview-summary">
            {activeEngagement.summary}
          </p>
          <div className="engagement-preview-rule" />
          <p className="engagement-preview-context">
            {activeEngagement.context}
          </p>
          <div className="engagement-preview-activity">
            <span>DELIVERY ROLE</span>
            <p>{activeEngagement.role}</p>
          </div>
          <Link
            className="engagement-preview-link"
            href={`/work/${activeEngagement.slug}`}
          >
            Open full account brief <ArrowUpRight size={17} />
          </Link>
          <span className="engagement-preview-orbit" aria-hidden="true">
            <i />
          </span>
        </article>
      </div>
      <p className="engagement-disclaimer">
        Client names are listed for experience context only. No direct
        employment, affiliation or endorsement is implied unless explicitly
        stated in the brief.
      </p>
    </div>
  );
}
