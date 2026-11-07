import type { MetadataRoute } from "next";
import { engagements } from "@/lib/engagements";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  const routes = [
    "",
    "/about",
    "/career",
    "/work",
    ...engagements.map(({ slug }) => `/work/${slug}`),
    "/expertise",
    "/leadership",
    "/contact",
  ];
  return routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7,
    }));
}
