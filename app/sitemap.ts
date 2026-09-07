import type { MetadataRoute } from "next";
import { locales, siteUrl } from "../lib/site";
import { getResources } from "../lib/localized-resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/funzioni", "/prezzi", "/come-funziona", "/faq", "/privacy", "/termini"];
  const corePages = locales.flatMap((locale) => pages.map((page) => ({ url: `${siteUrl}/${locale}${page}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: page ? 0.7 : 1 })));
  const resourcePages = locales.flatMap((locale) => [
    { url: `${siteUrl}/${locale}/risorse`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    ...getResources(locale).map((resource) => ({ url: `${siteUrl}/${locale}/risorse/${resource.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ]);
  return [...corePages, ...resourcePages];
}
