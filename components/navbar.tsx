"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/lib/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link
          className="wordmark"
          href="/"
          aria-label="P. M. F. Afzal, home"
          aria-current={pathname === "/" ? "page" : undefined}
          onClick={() => setMenuOpen(false)}
        >
          <span>P. M. F. Afzal</span>
          <span className="wordmark-sub">TECHNOLOGY & DELIVERY</span>
        </Link>
        <nav
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="nav-resume" href="/documents/afzal-resume.pdf" download>
          Resume <span>↓</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
