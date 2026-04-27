import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import { experience } from "../data/experience";
import ExperienceItem from "../components/features/ExperienceItem";
import type { ExperienceEntry, DatePoint } from "../types";

// ─── Timeline math ────────────────────────────────────────────────────────────

function toMonths(d: DatePoint): number {
  return d.year * 12 + d.month;
}

function prevMonth(d: DatePoint): DatePoint {
  return d.month === 1
    ? { month: 12, year: d.year - 1 }
    : { month: d.month - 1, year: d.year };
}

function nextMonth(d: DatePoint): DatePoint {
  return d.month === 12
    ? { month: 1, year: d.year + 1 }
    : { month: d.month + 1, year: d.year };
}

const TIMELINE_START: DatePoint = prevMonth(
  experience.reduce(
    (min, e) => (toMonths(e.startDate) < toMonths(min) ? e.startDate : min),
    experience[0].startDate,
  ),
);
const TIMELINE_END: DatePoint = nextMonth(
  experience.reduce(
    (max, e) => (toMonths(e.endDate) > toMonths(max) ? e.endDate : max),
    experience[0].endDate,
  ),
);
const TOTAL_MONTHS = toMonths(TIMELINE_END) - toMonths(TIMELINE_START);

const YEARS = Array.from(
  { length: TIMELINE_END.year - TIMELINE_START.year + 1 },
  (_, i) => TIMELINE_START.year + i,
);

function dateToFraction(d: DatePoint): number {
  return (toMonths(d) - toMonths(TIMELINE_START)) / TOTAL_MONTHS;
}

function midFraction(entry: ExperienceEntry): number {
  return (dateToFraction(entry.startDate) + dateToFraction(entry.endDate)) / 2;
}

function activeIndexForFraction(fraction: number): number {
  let best = 0;
  let bestDist = Infinity;
  experience.forEach((e, i) => {
    const dist = Math.abs(midFraction(e) - fraction);
    if (dist < bestDist) {
      bestDist = dist;
      best = i;
    }
  });
  return best;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STIHL_ORANGE = "#FF6600";

// Mobile vertical
const TIMELINE_H = 480;
const VIEWPORT_H = 220;
const CARD_HALF_V = 80;
const SPINE_CENTER_V = 35;

// Desktop horizontal
const SPINE_Y_H = 100;
const CARD_W = 288; // w-72
const ICON_HALF = 20;
const CONNECTOR_TOP = SPINE_Y_H + ICON_HALF + 4; // starts just below icon
const CONNECTOR_H = 20;
const CARD_TOP = CONNECTOR_TOP + CONNECTOR_H;
const CONTAINER_H = CARD_TOP + 230;

// ─── Shared components ────────────────────────────────────────────────────────

function StihlIcon({ active }: { active: boolean }) {
  return (
    <motion.div
      animate={{
        backgroundColor: active ? STIHL_ORANGE : "var(--color-bg-elevated)",
        borderColor: active ? STIHL_ORANGE : "var(--color-border)",
        scale: active ? 1.3 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
    >
      <span
        className="font-bold text-[10px] tracking-tight select-none"
        style={{
          color: active ? "#fff" : "var(--color-text-muted)",
          fontFamily: "sans-serif",
        }}
      >
        STIHL
      </span>
    </motion.div>
  );
}

// ─── Mobile: vertical viewport timeline ───────────────────────────────────────

function MobileTimeline({ fraction }: { fraction: number }) {
  const activeIndex = activeIndexForFraction(fraction);

  const cursorAbsY = Math.round(fraction * TIMELINE_H);
  const activeAbsY = Math.round(
    midFraction(experience[activeIndex]) * TIMELINE_H,
  );

  const viewportOffset = Math.max(
    0,
    Math.min(TIMELINE_H - VIEWPORT_H, cursorAbsY - VIEWPORT_H / 2),
  );

  const springOffset = useSpring(viewportOffset, {
    stiffness: 300,
    damping: 30,
  });
  const translateY = useTransform(springOffset, (v) => -v);

  useEffect(() => {
    springOffset.set(viewportOffset);
  }, [viewportOffset, springOffset]);

  const cursorViewportY = cursorAbsY - viewportOffset;
  const activeViewportY = Math.max(
    CARD_HALF_V,
    Math.min(VIEWPORT_H - CARD_HALF_V, activeAbsY - viewportOffset),
  );

  return (
    <div className="flex gap-4">
      {/* Year labels — clipped to viewport height */}
      <div
        className="relative shrink-0 overflow-hidden"
        style={{ width: 40, height: VIEWPORT_H }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{ height: TIMELINE_H, y: translateY }}
        >
          {YEARS.map((year) => {
            const yFrac = Math.max(0, dateToFraction({ month: 1, year }));
            return (
              <span
                key={year}
                className="absolute right-0 text-xs text-text-muted font-mono select-none"
                style={{
                  top: Math.round(yFrac * TIMELINE_H),
                  transform: "translateY(-50%)",
                }}
              >
                {year}
              </span>
            );
          })}
        </motion.div>
      </div>

      {/* Spine column — spine+ticks clipped, icons can overflow */}
      <div
        className="relative shrink-0"
        style={{ width: 72, height: VIEWPORT_H }}
      >
        {/* Clipped inner layer for spine line and ticks */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0"
            style={{ width: 72, height: TIMELINE_H, y: translateY }}
          >
            <div
              className="absolute top-0 bottom-0 bg-border"
              style={{ left: SPINE_CENTER_V, width: 1 }}
            />
            {Array.from({ length: TOTAL_MONTHS + 1 }, (_, i) => {
              const y = Math.round((i / TOTAL_MONTHS) * TIMELINE_H);
              const absMonth = toMonths(TIMELINE_START) + i;
              const month = absMonth % 12 || 12;
              const isJan = month === 1;
              const isQuarter = month % 3 === 1;
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: y,
                    left: isJan
                      ? SPINE_CENTER_V - 10
                      : isQuarter
                        ? SPINE_CENTER_V - 6
                        : SPINE_CENTER_V - 3,
                    width: isJan ? 20 : isQuarter ? 13 : 7,
                    height: 1,
                    backgroundColor: isJan
                      ? "var(--color-text-muted)"
                      : "var(--color-border)",
                  }}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Icon layer — same translateY but no overflow-hidden so scale doesn't clip */}
        <motion.div
          className="absolute top-0 left-0"
          style={{ width: 72, height: TIMELINE_H, y: translateY }}
        >
          {experience.map((entry, i) => (
            <div
              key={entry.id}
              className="absolute"
              style={{
                top: Math.round(midFraction(entry) * TIMELINE_H),
                left: SPINE_CENTER_V - 20,
                transform: "translateY(-50%)",
              }}
            >
              <StihlIcon active={i === activeIndex} />
            </div>
          ))}
        </motion.div>

        {/* Cursor dot — in viewport space (not translated) */}
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-accent z-20"
          animate={{ top: cursorViewportY }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          style={{ left: SPINE_CENTER_V - 5, marginTop: -5 }}
        />
      </div>

      {/* Connector + card */}
      <div className="relative flex-1" style={{ height: VIEWPORT_H }}>
        <motion.div
          className="absolute h-px bg-border"
          animate={{ top: activeViewportY }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ left: 0, width: 24 }}
        />
        <motion.div
          className="absolute"
          animate={{ top: activeViewportY }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ left: 24, transform: "translateY(-50%)" }}
        >
          <AnimatePresence mode="wait">
            <ExperienceItem
              key={experience[activeIndex].id}
              entry={experience[activeIndex]}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Desktop: horizontal timeline ─────────────────────────────────────────────

function HorizontalTimeline({ fraction }: { fraction: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(700);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setContainerW(entry.contentRect.width),
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const activeIndex = activeIndexForFraction(fraction);

  function fractionToX(f: number): number {
    return Math.round(f * containerW);
  }

  const cursorX = fractionToX(fraction);
  const activeX = fractionToX(midFraction(experience[activeIndex]));
  const cardX = Math.max(
    CARD_W / 2,
    Math.min(containerW - CARD_W / 2, activeX),
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: CONTAINER_H }}
    >
      {/* Year labels above spine */}
      {YEARS.map((year) => {
        const x = fractionToX(Math.max(0, dateToFraction({ month: 1, year })));
        return (
          <span
            key={year}
            className="absolute text-sm text-text-muted font-mono select-none"
            style={{
              left: x,
              top: SPINE_Y_H - 44,
              transform: "translateX(-50%)",
            }}
          >
            {year}
          </span>
        );
      })}

      {/* Spine */}
      <div
        className="absolute h-px bg-border"
        style={{ top: SPINE_Y_H, left: 0, right: 0 }}
      />

      {/* Month ticks — going downward from spine */}
      {Array.from({ length: TOTAL_MONTHS + 1 }, (_, i) => {
        const x = fractionToX(i / TOTAL_MONTHS);
        const absMonth = toMonths(TIMELINE_START) + i;
        const month = absMonth % 12 || 12;
        const isJan = month === 1;
        const isQuarter = month % 3 === 1;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: x,
              top: SPINE_Y_H,
              width: 1,
              height: isJan ? 20 : isQuarter ? 13 : 7,
              backgroundColor: isJan
                ? "var(--color-text-muted)"
                : "var(--color-border)",
            }}
          />
        );
      })}

      {/* Icons centered on spine */}
      {experience.map((entry, i) => (
        <div
          key={entry.id}
          className="absolute z-10"
          style={{
            left: fractionToX(midFraction(entry)),
            top: SPINE_Y_H,
            transform: "translate(-50%, -50%)",
          }}
        >
          <StihlIcon active={i === activeIndex} />
        </div>
      ))}

      {/* Cursor dot on spine */}
      <motion.div
        className="absolute w-2.5 h-2.5 rounded-full bg-accent z-20"
        animate={{ x: cursorX }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
        style={{ top: SPINE_Y_H - 5, left: -5 }}
      />

      {/* Vertical connector from below icon to card */}
      <motion.div
        className="absolute w-px bg-border"
        animate={{ x: activeX }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ top: CONNECTOR_TOP, height: CONNECTOR_H, left: 0 }}
      />

      {/* Card */}
      <motion.div
        className="absolute"
        animate={{ x: cardX - CARD_W / 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ top: CARD_TOP, left: 0 }}
      >
        <AnimatePresence mode="wait">
          <ExperienceItem
            key={experience[activeIndex].id}
            entry={experience[activeIndex]}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Experience() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [fraction, setFraction] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const maxScroll = el.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      setFraction(Math.max(0, Math.min(1, -rect.top / maxScroll)));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "500vh" }}>
      <div
        id="experience"
        className="sticky top-0 h-screen flex flex-col justify-center px-6"
      >
        <div className="relative text-center mb-12">
          <h2 className="text-3xl font-semibold text-text-primary">
            Experience
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
        </div>

        {/* Mobile: vertical viewport */}
        <div className="md:hidden">
          <MobileTimeline fraction={fraction} />
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden md:block max-w-4xl mx-auto w-full">
          <HorizontalTimeline fraction={fraction} />
        </div>
      </div>
    </div>
  );
}
