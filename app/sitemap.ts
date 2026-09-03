import type { MetadataRoute } from "next";
import { locales, siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/funzioni", "/prezzi", "/come-funziona", "/faq", "/privacy", "/termini"];
  return locales.flatMap((locale) => pages.map((page) => ({ url: `${siteUrl}/${locale}${page}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: page ? 0.7 : 1 })));
}
