import { useEffect, useState } from "react";
import { Languages, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import ResumeMenu from "./ResumeMenu";
import Logo from "./Logo";

export default function Navbar() {
  const { t, toggleLanguage, isRtl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = t.nav.links.map((l) => l.id);
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const line = window.innerHeight * 0.4;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [t]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = t.nav.links.map((l) => (
    <a
      key={l.id}
      href={`#${l.id}`}
      className={active === l.id ? "is-active" : ""}
      onClick={() => setOpen(false)}
    >
      {l.label}
    </a>
  ));

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-logo" aria-label="Osama Othman">
          <Logo />
          <span className="logo-text">Osama Othman</span>
        </a>

        <nav className="nav-links" aria-label="Primary">{links}</nav>

        <div className="nav-actions">
          <ResumeMenu className="hide-sm" />
          <button
            className="icon-btn"
            onClick={toggleLanguage}
            aria-label={isRtl ? "Switch to English" : "التبديل إلى العربية"}
            title={t.langSwitchLabel}
          >
            <Languages size={16} />
            <span className="lang-label">{t.langSwitchLabel}</span>
          </button>
          <button
            className="icon-btn nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile">
          <nav aria-label="Mobile">{links}</nav>
          <ResumeMenu />
        </div>
      )}
    </header>
  );
}
