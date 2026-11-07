import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { publicContact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer site-footer">
      <div className="section-wrap footer-inner">
        <div className="footer-identity">
          <p className="footer-name">P. M. F. Afzal</p>
          <p className="footer-role">
            Technology Delivery <span>·</span> Project Leadership
          </p>
        </div>
        <p className="footer-location">Bengaluru, India</p>
        <div className="footer-links">
          <a href={`mailto:${publicContact.email}`}>
            Email <ArrowUpRight size={14} />
          </a>
          <a href={`tel:${publicContact.phone.replaceAll(" ", "")}`}>
            Phone <ArrowUpRight size={14} />
          </a>
          <Link href="/career">
            Career <ArrowUpRight size={14} />
          </Link>
        </div>
        <p className="copyright">© 2026 P. M. F. Afzal. All rights reserved.</p>
      </div>
    </footer>
  );
}
