"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { tourContent, tourTargets } from "./tour-content";
import type { Locale } from "./site";

type Box = { top: number; left: number; width: number; height: number };
const SEEN_KEY = "scrittore-tour-seen";
const START_EVENT = "scrittore-tour-start";
const PAD = 8;

/** Pulsante da mettere ovunque (hero): avvia la visita guidata. */
export function TourStartButton({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(START_EVENT))}>
      <span aria-hidden="true">✦</span> {tourContent[locale].launch}
    </button>
  );
}

export function GuidedTour({ locale, dir }: { locale: Locale; dir: "ltr" | "rtl" }) {
  const t = tourContent[locale];
  const total = tourTargets.length;
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [box, setBox] = useState<Box | null>(null);
  const [fresh, setFresh] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const getTarget = (index: number) => document.querySelector<HTMLElement>(`[data-tour="${tourTargets[index]}"]`);

  const measure = useCallback(() => {
    const el = getTarget(step);
    if (!el) return setBox(null);
    const r = el.getBoundingClientRect();
    const vw = window.innerWidth, vh = window.innerHeight;
    const left = Math.max(r.left - PAD, 6), top = Math.max(r.top - PAD, 6);
    const right = Math.min(r.right + PAD, vw - 6), bottom = Math.min(r.bottom + PAD, vh - 6);
    setBox(bottom > top && right > left ? { top, left, width: right - left, height: bottom - top } : null);
  }, [step]);

  useEffect(() => {
    try { setFresh(!localStorage.getItem(SEEN_KEY)); } catch { setFresh(true); }
    const start = () => { returnFocus.current = document.activeElement as HTMLElement | null; setStep(0); setOpen(true); };
    window.addEventListener(START_EVENT, start);
    return () => window.removeEventListener(START_EVENT, start);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setFresh(false);
    try { localStorage.setItem(SEEN_KEY, "1"); } catch { /* storage non disponibile */ }
    returnFocus.current?.focus?.();
  }, []);

  useEffect(() => {
    if (!open) return;
    const el = getTarget(step);
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el?.scrollIntoView({ block: "start", behavior: calm ? "auto" : "smooth" });
    measure();
    const timer = window.setTimeout(measure, 450);
    const on = () => measure();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.clearTimeout(timer); window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, [open, step, measure]);

  useEffect(() => {
    if (!open) return;
    cardRef.current?.focus();
    const forward = dir === "rtl" ? "ArrowLeft" : "ArrowRight";
    const backward = dir === "rtl" ? "ArrowRight" : "ArrowLeft";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === forward) setStep((s) => Math.min(s + 1, total - 1));
      else if (e.key === backward) setStep((s) => Math.max(s - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dir, total, close]);

  const [title, text] = t.steps[step];
  const last = step === total - 1;

  return (
    <>
      {!open && (
        <button type="button" className={`tour-launcher${fresh ? " is-fresh" : ""}`} onClick={() => window.dispatchEvent(new Event(START_EVENT))}>
          <span aria-hidden="true">✦</span> {t.launch}
        </button>
      )}
      {open && (
        <div className="tour-layer" dir={dir}>
          {box && <div className="tour-spot" style={{ top: box.top, left: box.left, width: box.width, height: box.height }} aria-hidden="true" />}
          {!box && <div className="tour-dim" aria-hidden="true" />}
          <div ref={cardRef} className="tour-card" role="dialog" aria-modal="false" aria-labelledby="tour-title" aria-describedby="tour-text" tabIndex={-1}>
            <button type="button" className="tour-x" onClick={close} aria-label={t.close}>×</button>
            <p className="tour-count">{t.stepOf.replace("{n}", String(step + 1)).replace("{m}", String(total))}</p>
            <h2 id="tour-title">{title}</h2>
            <p id="tour-text" aria-live="polite">{text}</p>
            <div className="tour-dots" aria-hidden="true">{tourTargets.map((id, i) => <i key={id} className={i === step ? "on" : i < step ? "done" : ""} />)}</div>
            <div className="tour-actions">
              <button type="button" className="tour-ghost" onClick={close}>{t.skip}</button>
              <span className="tour-spacer" />
              {step > 0 && <button type="button" className="tour-ghost" onClick={() => setStep(step - 1)}>{t.back}</button>}
              <button type="button" className="tour-next" onClick={() => (last ? close() : setStep(step + 1))}>{last ? t.finish : t.next}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
