import { ArrowUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          <span>©</span> {new Date().getFullYear()} — {t.footer.text}
        </p>
        <button
          className="icon-btn"
          onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
          aria-label={t.footer.backToTop}
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
