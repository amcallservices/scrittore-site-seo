import type { MetadataRoute } from "next";
import { locales, siteUrl } from "../lib/site";
import { getResources } from "../lib/localized-resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/funzioni", "/prezzi", "/come-funziona", "/faq", "/privacy", "/termini"];
  // Le date vengono omesse finché non esiste una data editoriale reale per ciascuna pagina.
  // Dichiarare ogni URL appena modificato a ogni richiesta renderebbe la sitemap poco affidabile.
  const corePages = locales.flatMap((locale) => pages.map((page) => ({ url: `${siteUrl}/${locale}${page}`, changeFrequency: "weekly" as const, priority: page ? 0.7 : 1 })));
  const resourcePages = locales.flatMap((locale) => [
    { url: `${siteUrl}/${locale}/risorse`, changeFrequency: "weekly" as const, priority: 0.9 },
    // Le guide italiane sono le versioni editoriali complete. Le altre lingue restano
    // consultabili nel sito, ma non vengono ancora proposte come contenuti SEO autonomi.
    ...(locale === "it" ? getResources(locale).map((resource) => ({ url: `${siteUrl}/${locale}/risorse/${resource.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })) : []),
  ]);
  return [...corePages, ...resourcePages];
}
