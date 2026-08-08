import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";
import "./Skills.css";

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading index="02" eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        <div className="skills-table">
          {s.categories.map((cat, i) => (
            <motion.div
              className="skills-row"
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="skills-row-head">
                <span className="skills-row-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="skills-row-title">{cat.title}</h3>
              </div>
              <div className="skills-row-items">
                {cat.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
