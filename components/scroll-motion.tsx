"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = document.querySelectorAll<HTMLElement>(
      "main > section:not(.hero)",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "visible";
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    sections.forEach((section) => {
      section.dataset.reveal = "waiting";
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}