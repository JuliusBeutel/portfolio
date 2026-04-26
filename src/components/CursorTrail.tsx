import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorTrail() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const x1 = useSpring(x, { stiffness: 600, damping: 32 });
  const y1 = useSpring(y, { stiffness: 600, damping: 32 });

  const x2 = useSpring(x, { stiffness: 200, damping: 22 });
  const y2 = useSpring(y, { stiffness: 200, damping: 22 });

  const x3 = useSpring(x, { stiffness: 70, damping: 18 });
  const y3 = useSpring(y, { stiffness: 70, damping: 18 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] hidden md:block">
      {/* Tightest – sharp glow */}
      <motion.div
        style={{ x: x1, y: y1, top: -10, left: -10 }}
        className="fixed w-5 h-5 rounded-full bg-accent/70 blur-md"
      />
      {/* Mid – softer halo */}
      <motion.div
        style={{ x: x2, y: y2, top: -16, left: -16 }}
        className="fixed w-8 h-8 rounded-full bg-accent/50 blur-lg"
      />
      {/* Slowest – large ambient glow */}
      <motion.div
        style={{ x: x3, y: y3, top: -28, left: -28 }}
        className="fixed w-14 h-14 rounded-full bg-accent/40 blur-xl"
      />
    </div>
  );
}
