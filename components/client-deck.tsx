"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { engagements } from "@/lib/engagements";

export default function ClientDeck() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const intendedIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  function updateActiveCard() {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const viewportLeft = viewport.getBoundingClientRect().left;
    const cards = Array.from(viewport.children);
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - viewportLeft,
      );
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    if (animationRef.current === null) {
      intendedIndexRef.current = nearestIndex;
      setActiveIndex(nearestIndex);
    }
  }

  function goToCard(index: number) {
    const viewport = viewportRef.current;
    const card = viewport?.children.item(index) as HTMLElement | null;
    if (!viewport || !card) return;
    intendedIndexRef.current = index;
    setActiveIndex(index);
    const track = viewport;

    const left =
      card.getBoundingClientRect().left -
      track.getBoundingClientRect().left +
      track.scrollLeft;
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.scrollLeft = left;
      animationRef.current = null;
      updateActiveCard();
      return;
    }

    const start = track.scrollLeft;
    const distance = left - start;
    const startTime = performance.now();
    const duration = 320;

    function animate(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      track.scrollLeft = start + distance * eased;
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        animationRef.current = null;
        updateActiveCard();
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }

  return (
    <div
      className="client-deck"
      aria-label="Selected client experience carousel"
    >
      <div className="client-deck-toolbar">
        <p>Swipe or scroll to browse</p>
        <div className="client-deck-controls">
          <span aria-live="polite" aria-atomic="true">
            {String(activeIndex + 1).padStart(2, "0")} <i>/</i>{" "}
            {String(engagements.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="Previous client"
            onClick={() => goToCard(Math.max(0, intendedIndexRef.current - 1))}
            disabled={activeIndex === 0}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next client"
            onClick={() =>
              goToCard(
                Math.min(engagements.length - 1, intendedIndexRef.current + 1),
              )
            }
            disabled={activeIndex === engagements.length - 1}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div
        className="client-deck-viewport"
        ref={viewportRef}
        onScroll={updateActiveCard}
      >
        {engagements.map((engagement, index) => (
          <Link
            className="client-deck-card"
            href={`/work/${engagement.slug}`}
            key={engagement.slug}
            aria-label={`View ${engagement.client} account brief`}
          >
            <span className="client-card-index">
              {String(index + 1).padStart(2, "0")}{" "}
              <i>/ {String(engagements.length).padStart(2, "0")}</i>
            </span>
            <span className="client-deck-employer">{engagement.employer}</span>
            <h3>{engagement.client}</h3>
            <span className="client-card-signal" aria-hidden="true">
              <i />
            </span>
          </Link>
        ))}
      </div>
      <div className="client-deck-progress" aria-hidden="true">
        <span
          style={{ width: `${((activeIndex + 1) / engagements.length) * 100}%` }}
        />
      </div>
      <p className="client-disclaimer">
        Organizations associated with professional engagements; no affiliation
        or endorsement implied.
      </p>
    </div>
  );
}
