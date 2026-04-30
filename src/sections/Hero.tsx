import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import Button from "../components/ui/Button";
import IntroAnimation from "../components/IntroAnimation";
import MagneticWrapper from "../components/MagneticWrapper";
import portrait from "../assets/portrait.png";

export default function Hero() {
  const [introComplete, setIntroComplete] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = introComplete ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [introComplete]);

  return (
    <>
      <AnimatePresence>
        {!introComplete && (
          <IntroAnimation onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      <section id="hero" className="min-h-screen flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full pt-16">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
            {/* Left: text content */}
            <div className="flex-1 text-center md:text-left">
              {introComplete && (
                <>
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.3 }}
                    className="text-accent text-sm font-mono tracking-widest uppercase mb-4"
                  >
                    <span key={lang}>{t.hero.role}</span>
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-6"
                  >
                    Julius Beutel
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.35 }}
                    className="text-text-secondary text-lg md:text-xl max-w-lg leading-relaxed mb-10 mx-auto md:mx-0"
                  >
                    <span key={lang}>{t.hero.tagline}</span>
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.45 }}
                    className="flex flex-wrap gap-3 justify-center md:justify-start"
                  >
                    <MagneticWrapper>
                      <Button
                        href="mailto:beutel.julius@gmx.de"
                        variant="primary"
                        icon={<Mail size={16} />}
                      >
                        {t.hero.contact}
                      </Button>
                    </MagneticWrapper>
                    <MagneticWrapper>
                      <Button
                        href="https://github.com/JuliusBeutel"
                        variant="ghost"
                        icon={<GithubIcon />}
                      >
                        GitHub
                      </Button>
                    </MagneticWrapper>
                    <MagneticWrapper>
                      <Button
                        href="https://www.linkedin.com/in/julius-beutel/"
                        variant="ghost"
                        icon={<LinkedinIcon />}
                      >
                        LinkedIn
                      </Button>
                    </MagneticWrapper>
                  </motion.div>
                </>
              )}
            </div>

            {/* Right: portrait */}
            {introComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.15 }}
                className="shrink-0 mt-8 md:mt-0"
              >
                {/* Float wrapper — x and y on different periods for organic motion */}
                <motion.div
                  animate={{ x: [-14, 14], y: [0, -10] }}
                  transition={{
                    x: {
                      duration: 7,
                      repeat: Infinity,
                      repeatType: "mirror" as const,
                      ease: "easeInOut" as const,
                    },
                    y: {
                      duration: 4.5,
                      repeat: Infinity,
                      repeatType: "mirror" as const,
                      ease: "easeInOut" as const,
                    },
                  }}
                >
                  {/* isolation: isolate keeps -z-10 glow within this stacking context */}
                  <div
                    className="w-56 md:w-96 relative"
                    style={{ isolation: "isolate" }}
                  >
                    {/* Glow behind portrait */}
                    <div className="absolute inset-0 -z-10 rounded-full bg-accent/25 blur-[80px] scale-90" />
                    {/* Portrait with magnetic hover wobble */}
                    <MagneticWrapper strength={0.08}>
                      <img
                        src={portrait}
                        alt="Julius Beutel"
                        className="w-full h-auto"
                      />
                    </MagneticWrapper>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
