import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";
import "./About.css";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading index="01" eyebrow={a.eyebrow} title={a.title} />

        <div className="about-layout">
          <motion.div
            className="panel about-bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="panel-bar">
              <span className="panel-dots">
                <span /><span /><span />
              </span>
              about.md
            </div>
            <div className="about-bio-body">
              {a.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="about-now">
                <span className="about-now-label">{a.currentlyLabel}</span>
                <span className="about-now-text">{a.currently}</span>
              </div>
            </div>
          </motion.div>

          <motion.dl
            className="about-facts"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {a.facts.map((f) => (
              <div className="about-fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
