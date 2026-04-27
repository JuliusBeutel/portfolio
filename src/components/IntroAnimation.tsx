import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TITLES = ["Software Engineer", "Embedded Developer", "Mobile Developer"];

function TypewriterText({
  text,
  onComplete,
}: {
  text: string;
  onComplete: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        setTimeout(() => onCompleteRef.current(), 320);
      }
    }, 38);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      <span
        className={`inline-block w-px h-[0.9em] bg-accent ml-0.5 align-middle transition-opacity duration-150 ${
          done ? "opacity-0" : "opacity-100 animate-pulse"
        }`}
      />
    </span>
  );
}

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [showName, setShowName] = useState(false);
  const completedRef = useRef(false);

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  };

  const handleTitleComplete = () => {
    if (titleIndex < TITLES.length - 1) {
      setTimeout(() => setTitleIndex((i) => i + 1), 80);
    } else {
      setTimeout(() => setShowName(true), 120);
      setTimeout(finish, 950);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg"
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
    >
      <button
        onClick={finish}
        className="absolute top-6 right-8 text-text-muted text-sm hover:text-text-secondary transition-colors font-mono"
      >
        skip →
      </button>

      <AnimatePresence mode="wait">
        {!showName ? (
          <motion.div
            key={titleIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl font-mono text-text-secondary text-center px-6"
          >
            <TypewriterText
              key={titleIndex}
              text={TITLES[titleIndex]}
              onComplete={handleTitleComplete}
            />
          </motion.div>
        ) : (
          <motion.div
            key="name"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-text-primary text-center px-6"
          >
            Julius Beutel
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
