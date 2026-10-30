import { MotionConfig } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { EmailProvider } from "./components/EmailButton";
import { useSpotlight } from "./useSpotlight";

export default function App() {
  useSpotlight();

  return (
    <MotionConfig reducedMotion="user">
      <EmailProvider>
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </EmailProvider>
    </MotionConfig>
  );
}
