import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";
import { GithubIcon } from "./BrandIcons";
import "./Projects.css";

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading index="04" eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        <div className="pr-grid">
          {p.items.map((item, i) => (
            <motion.article
              className={`pr-card ${item.featured ? "is-featured" : ""}`}
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pr-head">
                <span className="pr-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="pr-tagline">{item.tagline}</span>
                <div className="pr-links">
                  {item.links?.github && (
                    <a href={item.links.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={p.viewCode}>
                      <GithubIcon size={15} />
                    </a>
                  )}
                  {item.links?.live && (
                    <a href={item.links.live} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={p.viewLive}>
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="pr-title">{item.title}</h3>
              <p className="pr-desc">{item.description}</p>

              <ul className="pr-bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="pr-tech">
                {item.tech.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
