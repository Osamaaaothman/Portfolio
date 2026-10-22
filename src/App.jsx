import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Now from "./components/Now";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function Layout() {
  const { language } = useLanguage();
  return (
    <>
      <a href="#main" className="skip-link">
        {language === "ar" ? "تخطَّ إلى المحتوى" : "Skip to content"}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Now />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  );
}
