"use client";

import { useEffect, useState } from "react";
import type { Locale } from "./site";

export const demoLoadingText: Record<Locale, string> = {
  it: "Sto caricando la demo…", en: "Loading the demo…", es: "Cargando la demo…", fr: "Chargement de la démo…",
  de: "Demo wird geladen …", ro: "Se încarcă demo-ul…", ru: "Загрузка демо…", ar: "جارٍ تحميل العرض التجريبي…", zh: "正在加载演示…",
};

/**
 * Carica la demo (app Streamlit, molto pesante) solo dopo che la pagina è stata
 * mostrata, oppure subito se l'utente interagisce. Così testi, titoli e
 * immagini compaiono senza aspettare la demo.
 */
export function LazyDemoFrame({ src, title, loadingText }: { src: string; title: string; loadingText: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let started = false;
    const go = () => { if (!started) { started = true; setReady(true); } };
    const whenIdle = () => {
      const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
      if (w.requestIdleCallback) w.requestIdleCallback(go, { timeout: 2500 });
      else window.setTimeout(go, 1200);
    };
    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });
    window.addEventListener("pointerdown", go, { once: true, passive: true });
    window.addEventListener("keydown", go, { once: true });
    return () => {
      window.removeEventListener("load", whenIdle);
      window.removeEventListener("pointerdown", go);
      window.removeEventListener("keydown", go);
    };
  }, []);

  return (
    <>
      {ready ? (
        <iframe src={src} title={title} />
      ) : (
        <div className="demo-skeleton" role="status" aria-live="polite"><span aria-hidden="true" />{loadingText}</div>
      )}
      <noscript><iframe src={src} title={title} /></noscript>
    </>
  );
}
