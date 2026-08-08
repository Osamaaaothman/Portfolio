import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";
import "./Education.css";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Education() {
  const { t } = useLanguage();
  const ed = t.education;

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading index="05" eyebrow={ed.eyebrow} title={ed.title} />

        <div className="ed-layout">
          <motion.div className="ed-degree" {...up(0)}>
            <span className="ed-label">degree</span>
            <h3 className="ed-degree-title">{ed.degree.title}</h3>
            <p className="ed-school">{ed.degree.school}</p>
            <div className="ed-degree-meta">
              <span>{ed.degree.period}</span>
              <span>{ed.degree.location}</span>
            </div>
            <span className="tag tag-on ed-gpa">{ed.degree.gpa}</span>
          </motion.div>

          <motion.div className="ed-certs" {...up(0.08)}>
            <span className="ed-label">certifications</span>
            {ed.certifications.map((c) => (
              <div className="ed-cert" key={c.title}>
                <p className="ed-cert-title">{c.title}</p>
                <p className="ed-cert-meta">
                  {c.org} · {c.hours}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div className="ed-achievement" {...up(0.14)}>
            <span className="ed-label ed-label-accent">★ {ed.achievementTitle}</span>
            <p className="ed-achievement-text">{ed.achievement}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
