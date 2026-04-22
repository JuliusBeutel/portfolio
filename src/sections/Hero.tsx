import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-5xl mx-auto w-full pt-16">
        <motion.p
          {...fadeUp(0.1)}
          className="text-accent text-sm font-mono tracking-widest uppercase mb-4"
        >
          Software Engineer
        </motion.p>
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-6"
        >
          Julius Beutel
        </motion.h1>
        <motion.p
          {...fadeUp(0.3)}
          className="text-text-secondary text-lg md:text-xl max-w-lg leading-relaxed mb-10"
        >
          I build mobile and embedded software — from iOS apps to BLE firmware and everything in between.
        </motion.p>
        <motion.div {...fadeUp(0.4)}>
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
