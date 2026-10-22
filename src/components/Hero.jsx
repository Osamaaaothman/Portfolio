import { ArrowRight, MapPin, BadgeCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { LINKS } from "../constants";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Hero() {
  const { t, isRtl } = useLanguage();
  const h = t.hero;

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <div className="rise">
          <a href="#now" className="status-pill">
            <span className="dot" />
            {h.status}
            <ArrowRight size={14} className={isRtl ? "flip" : ""} />
          </a>
        </div>

        <div className="rise" style={{ animationDelay: "0.05s" }}>
          <h1 className="hero-name">{h.name}</h1>
          <p className="hero-role">{h.role}</p>
        </div>

        <div className="rise" style={{ animationDelay: "0.1s" }}>
          <p className="hero-headline">{h.headline}</p>
          <p className="hero-desc">{h.description}</p>
        </div>

        <div className="rise hero-meta" style={{ animationDelay: "0.15s" }}>
          <span><MapPin size={14} />{h.location}</span>
          <span><BadgeCheck size={14} />{h.workStatus}</span>
        </div>

        <div className="rise hero-ctas" style={{ animationDelay: "0.2s" }}>
          <a href="#contact" className="btn btn-primary">
            {h.ctaPrimary}
            <ArrowRight size={16} className={isRtl ? "flip" : ""} />
          </a>
          <a href="#projects" className="btn btn-ghost">{h.ctaSecondary}</a>
          <div className="hero-socials">
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
              <GithubIcon size={17} />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
              <LinkedinIcon size={17} />
            </a>
          </div>
        </div>

        <div className="rise stats" style={{ animationDelay: "0.25s" }}>
          {h.stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
