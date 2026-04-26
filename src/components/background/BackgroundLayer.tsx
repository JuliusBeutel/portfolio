import { useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';

// ─── Particle positions (deterministic, generated once at module load) ────────

function sr(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const PARTICLE_COUNT = 55;

const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  x: sr(i * 2.3571 + 0.1) * 96 + 2,  // 2%–98% to avoid hard edges
  y: sr(i * 3.7139 + 0.2) * 96 + 2,
}));

// ─── Section config ───────────────────────────────────────────────────────────

const SECTION_IDS = ['hero', 'experience', 'projects', 'skills', 'education'] as const;
type SectionId = typeof SECTION_IDS[number];
type ShapeType = 'dot' | 'dash' | 'code' | 'diamond' | 'cap';

interface SectionConfig {
  shape: ShapeType;
  opacity: number;
}

const CONFIG: Record<SectionId, SectionConfig> = {
  hero:       { shape: 'dot',     opacity: 0.14 },
  experience: { shape: 'dash',    opacity: 0.11 },
  projects:   { shape: 'code',    opacity: 0.12 },
  skills:     { shape: 'diamond', opacity: 0.13 },
  education:  { shape: 'cap',     opacity: 0.12 },
};

// ─── Shape renderers ──────────────────────────────────────────────────────────

function CodeShape() {
  return (
    <svg
      width="12" height="12" viewBox="0 0 16 16"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <polyline points="5,3 1,8 5,13" />
      <polyline points="11,3 15,8 11,13" />
    </svg>
  );
}

function CapShape() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12,4 2,9.5 12,15 22,9.5" />
      <path d="M7,12 v5 Q12,20.5 17,17 v-5" fillOpacity="0.7" />
    </svg>
  );
}

function Shape({ type }: { type: ShapeType }) {
  switch (type) {
    case 'dot':
      return <div className="w-1.5 h-1.5 rounded-full bg-current" />;
    case 'dash':
      return <div style={{ width: 14, height: 1.5 }} className="rounded-full bg-current" />;
    case 'code':
      return <CodeShape />;
    case 'diamond':
      return <div className="w-1.5 h-1.5 bg-current" style={{ transform: 'rotate(45deg)' }} />;
    case 'cap':
      return <CapShape />;
  }
}

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  visible: { transition: { staggerChildren: 0.006 } },
  hidden:  { transition: { staggerChildren: 0.003, staggerDirection: -1 as const } },
};

const itemVariants = {
  visible: { opacity: 1, scale: 1,   transition: { duration: 0.45 } },
  hidden:  { opacity: 0, scale: 0.3, transition: { duration: 0.25 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function BackgroundLayer() {
  const section = useActiveSection(SECTION_IDS);
  const config = CONFIG[section as SectionId] ?? CONFIG.hero;

  // Global mouse parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  const rawX = useTransform(mouseX, [0, 1], [-20, 20]);
  const rawY = useTransform(mouseY, [0, 1], [-14, 14]);
  const bgX  = useSpring(rawX, { stiffness: 40, damping: 25 });
  const bgY  = useSpring(rawY, { stiffness: 40, damping: 25 });

  return (
    <motion.div
      className="fixed inset-0 -z-10 pointer-events-none text-text-primary overflow-hidden"
      style={{ x: bgX, y: bgY }}
    >
      <AnimatePresence>
        <motion.div
          key={section}
          className="absolute inset-0"
          style={{ opacity: config.opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {PARTICLES.map(p => (
            <motion.div
              key={p.id}
              className="absolute"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              variants={itemVariants}
            >
              <Shape type={config.shape} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
