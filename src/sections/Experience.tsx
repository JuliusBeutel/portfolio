import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data/experience';
import type { ExperienceEntry, DatePoint } from '../types';

const TIMELINE_START: DatePoint = { month: 1, year: 2022 };
const TIMELINE_END: DatePoint = { month: 12, year: 2024 };

function toMonths(d: DatePoint): number {
  return d.year * 12 + d.month;
}

const TOTAL_MONTHS = toMonths(TIMELINE_END) - toMonths(TIMELINE_START);

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
    if (dist < bestDist) { bestDist = dist; best = i; }
  });
  return best;
}

const YEARS = Array.from(
  { length: TIMELINE_END.year - TIMELINE_START.year + 1 },
  (_, i) => TIMELINE_START.year + i,
);

const STIHL_ORANGE = '#FF6600';
const TIMELINE_H = 380;

function fractionToY(f: number) {
  return Math.round(f * TIMELINE_H);
}


function StihlIcon({ active }: { active: boolean }) {
  return (
    <motion.div
      animate={{
        backgroundColor: active ? STIHL_ORANGE : 'var(--color-bg-elevated)',
        borderColor: active ? STIHL_ORANGE : 'var(--color-border)',
        scale: active ? 1.3 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
    >
      <span
        className="font-bold text-[10px] tracking-tight select-none"
        style={{ color: active ? '#fff' : 'var(--color-text-muted)', fontFamily: 'sans-serif' }}
      >
        STIHL
      </span>
    </motion.div>
  );
}

function DetailCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-bg-surface border border-border rounded-2xl p-5 w-72"
    >
      <div className="flex flex-col gap-0.5 mb-1">
        <span className="font-semibold text-text-primary text-sm leading-snug">{entry.role}</span>
        <span className="text-text-muted text-xs">{entry.period}</span>
      </div>
      <div className="text-accent text-xs font-medium mb-3">{entry.company}</div>
      <ul className="space-y-1 mb-3">
        {entry.description.map((item, i) => (
          <li key={i} className="text-text-secondary text-xs leading-relaxed flex gap-2">
            <span className="text-text-muted shrink-0">–</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1">
        {entry.technologies.map((tech) => (
          <span key={tech} className="bg-bg-elevated text-text-secondary text-[11px] px-2 py-0.5 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  // Outer wrapper provides scroll distance; inner section is sticky
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [fraction, setFraction] = useState(0);
  const activeIndex = activeIndexForFraction(fraction);

  // Derive fraction from native scroll position — no event interception
  useEffect(() => {
    function onScroll() {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const maxScroll = el.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      setFraction(Math.max(0, Math.min(1, -rect.top / maxScroll)));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeY = fractionToY(midFraction(experience[activeIndex]));
  const cursorY = fractionToY(fraction);

  return (
    // Tall wrapper creates the scroll distance the sticky section consumes
    <div ref={wrapperRef} style={{ height: '500vh' }}>
      <div
        id="experience"
        className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center px-6"
      >
        {/* Section header */}
        <div className="relative text-center mb-20">
          <h2 className="text-3xl font-semibold text-text-primary">Experience</h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-3" />
        </div>

        <div className="relative max-w-3xl mx-auto w-full">
          <div className="flex gap-6">
            {/* Year labels */}
            <div className="relative shrink-0" style={{ width: 34, height: TIMELINE_H }}>
              {YEARS.map(year => {
                const yFrac = (year - TIMELINE_START.year) / (TIMELINE_END.year - TIMELINE_START.year + 1);
                return (
                  <span
                    key={year}
                    className="absolute right-0 text-[11px] text-text-muted font-mono select-none"
                    style={{ top: fractionToY(yFrac), transform: 'translateY(-50%)' }}
                  >
                    {year}
                  </span>
                );
              })}
            </div>

            {/* Timeline spine + icons + cursor */}
            <div className="relative shrink-0" style={{ width: 40, height: TIMELINE_H }}>
              {/* Vertical spine */}
              <div className="absolute top-0 bottom-0 bg-border" style={{ left: 19, width: 1 }} />

              {/* Month ticks */}
              {Array.from({ length: TOTAL_MONTHS + 1 }, (_, i) => {
                const y = fractionToY(i / TOTAL_MONTHS);
                const absMonth = toMonths(TIMELINE_START) + i;
                const month = absMonth % 12 || 12;
                const isQuarter = month % 3 === 1;
                return (
                  <div
                    key={i}
                    className="absolute bg-border"
                    style={{ top: y, left: isQuarter ? 12 : 15, width: isQuarter ? 15 : 8, height: 1 }}
                  />
                );
              })}

              {/* Experience icons at their timeline midpoint */}
              {experience.map((entry, i) => (
                <div
                  key={entry.id}
                  className="absolute"
                  style={{ top: fractionToY(midFraction(entry)), left: 0, transform: 'translateY(-50%)' }}
                >
                  <StihlIcon active={i === activeIndex} />
                </div>
              ))}

              {/* Scroll position cursor dot */}
              <motion.div
                className="absolute w-2.5 h-2.5 rounded-full bg-accent z-20"
                animate={{ top: cursorY }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                style={{ left: 14, marginTop: -5 }}
              />
            </div>

            {/* Connector + detail card */}
            <div className="relative flex-1" style={{ height: TIMELINE_H }}>
              {/* Horizontal connector */}
              <motion.div
                className="absolute h-px bg-border"
                animate={{ top: activeY }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{ left: 0, width: 24 }}
              />

              {/* Detail card — spring-follows active entry's Y */}
              <motion.div
                className="absolute"
                animate={{ top: activeY }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{ left: 24, transform: 'translateY(-50%)' }}
              >
                <AnimatePresence mode="wait">
                  <DetailCard key={experience[activeIndex].id} entry={experience[activeIndex]} />
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll hint shown only at the start */}
        <AnimatePresence>
          {fraction === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative text-center text-text-muted text-xs font-mono mt-10 select-none"
            >
              scroll to navigate timeline ↓
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
