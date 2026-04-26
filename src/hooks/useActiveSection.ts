import { useState, useEffect } from 'react';

/**
 * Returns the id of the section currently centered in the viewport.
 * Pass a stable (module-level) array of section ids.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        // Section is "active" when it occupies the middle 30% of the viewport
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []); // ids is a stable module-level constant in the caller

  return active;
}
