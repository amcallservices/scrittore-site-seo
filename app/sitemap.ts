import type { MetadataRoute } from "next";
import { locales, siteUrl } from "../lib/site";
import { resources } from "../lib/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/funzioni", "/prezzi", "/come-funziona", "/faq", "/privacy", "/termini"];
  const corePages = locales.flatMap((locale) => pages.map((page) => ({ url: `${siteUrl}/${locale}${page}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: page ? 0.7 : 1 })));
  const resourcePages = [
    { url: `${siteUrl}/it/risorse`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    ...resources.map((resource) => ({ url: `${siteUrl}/it/risorse/${resource.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
  return [...corePages, ...resourcePages];
}
