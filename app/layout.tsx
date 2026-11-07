import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Manrope } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollMotion from "@/components/scroll-motion";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "PMF Afzal | Senior IT Project Manager & Technology Delivery Leader",
  description:
    "Explore the professional journey, technology delivery experience and project leadership expertise of PMF Afzal, an IT professional with over 25 years of experience.",
  openGraph: {
    title: "PMF Afzal | Senior IT Project Manager & Technology Delivery Leader",
    description:
      "Technology delivery, project leadership and 25+ years of experience across the IT industry.",
    type: "website",
    locale: "en_IN",
    siteName: "P. M. F. Afzal",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "PMF Afzal | Technology Delivery & Project Leadership",
    description:
      "Explore the professional journey of P. M. F. Afzal, Senior Project Manager.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${inter.variable} ${serif.variable}`}
    >
      <body>
        <Navbar />
        <ScrollMotion />
        <div className="page-transition">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
