import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CursorTrail from "./components/CursorTrail";
import BackgroundLayer from "./components/background/BackgroundLayer";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import { Analytics } from "@vercel/analytics/next";
export default function App() {
  return (
    <LanguageProvider>
      <Analytics />
      <div className="min-h-screen text-text-primary">
        <BackgroundLayer />
        <CursorTrail />
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
