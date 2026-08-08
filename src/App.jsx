import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import GridBackdrop from "./components/GridBackdrop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function SkipLink() {
  const { language } = useLanguage();
  return (
    <a href="#main" className="skip-link">
      {language === "ar" ? "تخطَّ إلى المحتوى الرئيسي" : "Skip to main content"}
    </a>
  );
}

function Layout() {
  return (
    <>
      <SkipLink />
      <GridBackdrop />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout />
      </LanguageProvider>
    </ThemeProvider>
  );
}
