import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";
import "./Experience.css";

export default function Experience() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading index="03" eyebrow={e.eyebrow} title={e.title} />

        <div className="xp-list">
          {e.items.map((item, i) => (
            <motion.article
              className={`xp-item ${item.current ? "is-current" : ""}`}
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="xp-side">
                <span className="xp-period">{item.period}</span>
                <span className="xp-location">{item.location}</span>
                {item.current && <span className="xp-live">● live</span>}
              </div>

              <div className="xp-main">
                <h3 className="xp-role">{item.role}</h3>
                <p className="xp-company">
                  <span>@</span>
                  {item.company}
                </p>
                <p className="xp-summary">{item.summary}</p>

                <ul className="xp-bullets">
                  {item.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>

                <div className="xp-tech">
                  {item.tech.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
