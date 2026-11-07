"use client";

import { useState } from "react";
import { expertise } from "@/lib/content";

const shortTitles = [
  "Plan & govern",
  "Design & integrate",
  "Align stakeholders",
  "Enable teams",
];

export default function ExpertiseExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = expertise[activeIndex];

  return (
    <div className="expertise-explorer">
      <div className="capability-orbit" role="group" aria-label="Explore delivery capabilities">
        <span className="orbit-track orbit-track-one" aria-hidden="true" />
        <span className="orbit-track orbit-track-two" aria-hidden="true" />
        <div className="orbit-center" aria-hidden="true">
          <span>TECH</span>
          <strong>DELIVERY</strong>
          <i />
        </div>
        {expertise.map((group, index) => (
          <button
            className={`orbit-node orbit-node-${index + 1}${activeIndex === index ? " is-active" : ""}`}
            key={group.number}
            type="button"
            aria-pressed={activeIndex === index}
            aria-controls="capability-details"
            onPointerEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            <span className="orbit-node-number">{group.number}</span>
            <span className="orbit-node-title">{shortTitles[index]}</span>
            <span className="orbit-node-dot" aria-hidden="true" />
          </button>
        ))}
      </div>
      <section className="capability-details" id="capability-details" aria-live="polite" aria-atomic="true">
        <p className="route-kicker"><span />Capability {activeGroup.number}</p>
        <h2>{activeGroup.title}</h2>
        <p className="capability-summary">
          {[
            "Structure the work, keep scope and schedule visible, and surface risks and change early.",
            "Connect technical understanding to system design, integration and migration needs.",
            "Keep client, stakeholder and vendor conversations connected to requirements and cost decisions.",
            "Bring capacity, mentoring and cross-functional collaboration together around delivery goals.",
          ][activeIndex]}
        </p>
        <ul className="capability-skill-list">
          {activeGroup.skills.map((skill, index) => (
            <li key={skill} style={{ "--skill-index": index } as React.CSSProperties}>
              <span>{String(index + 1).padStart(2, "0")}</span>{skill}
            </li>
          ))}
        </ul>
        <p className="capability-hint">Point, focus or tap a node to explore.</p>
      </section>
    </div>
  );
}
