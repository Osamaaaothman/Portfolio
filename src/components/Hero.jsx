import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./BrandIcons";
import { RESUME_FILE, WHATSAPP_URL } from "../constants";
import "./Hero.css";

const RESUME_LABEL = "Osama_Othman_DotNet.pdf";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <motion.p className="prompt hero-cmd" {...up(0)}>
          <i>$</i> whoami
        </motion.p>

        <motion.h1 className="hero-name" {...up(0.06)}>
          {h.name}
          <span className="cursor" />
        </motion.h1>

        <motion.p className="hero-role" {...up(0.12)}>
          {h.eyebrow}
        </motion.p>

        <motion.div className="hero-meta" {...up(0.18)}>
          <span className="tag tag-on">● {h.badges[1]}</span>
          <span className="tag">{h.location}</span>
          <span className="tag">{h.badges[0]}</span>
        </motion.div>

        <motion.p className="hero-desc" {...up(0.24)}>
          {h.description}
        </motion.p>

        <motion.div className="hero-cta" {...up(0.3)}>
          <button className="btn btn-primary" onClick={() => scrollTo("contact")}>
            {h.ctaPrimary}
            <ArrowRight size={17} className="flip-rtl" />
          </button>
          <a href={RESUME_FILE} download className="btn btn-ghost">
            <Download size={16} />
            {h.ctaSecondary}
          </a>
          <div className="hero-social">
            <a className="icon-btn icon-btn-wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsappIcon size={17} />
            </a>
            <a className="icon-btn" href="mailto:osamaammarothman@gmail.com" aria-label="Email">
              <Mail size={17} />
            </a>
            <a className="icon-btn" href="https://github.com/Osamaaaothman" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={17} />
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/osamaaothman/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={17} />
            </a>
          </div>
        </motion.div>

        <motion.p className="hero-file prompt" {...up(0.34)}>
          <i>&gt;</i> {RESUME_LABEL}
        </motion.p>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {h.stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
