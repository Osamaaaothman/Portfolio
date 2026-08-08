import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Languages, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { RESUME_FILE } from "../constants";
import "./Navbar.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage, isRtl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = t.nav.links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [t]);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner container">
        <a
          href="#top"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            go("top");
          }}
        >
          <i>~/</i>osama-othman
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {t.nav.links.map((link, i) => (
            <button
              key={link.id}
              className={`navbar-link ${active === link.id ? "is-active" : ""}`}
              onClick={() => go(link.id)}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href={RESUME_FILE} download className="btn btn-ghost navbar-resume">
            <Download size={15} />
            {t.nav.resume}
          </a>

          <button
            className="icon-btn"
            onClick={toggleLanguage}
            aria-label={isRtl ? "التبديل إلى الإنجليزية" : "Switch to Arabic"}
            title={t.langSwitchLabel}
          >
            <Languages size={17} />
          </button>

          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            className="icon-btn navbar-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="navbar-mobile-inner">
              {t.nav.links.map((link, i) => (
                <button
                  key={link.id}
                  className={`navbar-mobile-link ${active === link.id ? "is-active" : ""}`}
                  onClick={() => go(link.id)}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
