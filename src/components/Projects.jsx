import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon } from "./BrandIcons";
import { Card, Reveal, SectionHeader, Tags } from "./ui";

function ProjectLinks({ links, labels }) {
  return (
    <div className="project-links">
      {links.live && (
        <a href={links.live} target="_blank" rel="noreferrer" className="link-chip">
          {labels.live} <ArrowUpRight size={14} />
        </a>
      )}
      {links.github && (
        <a href={links.github} target="_blank" rel="noreferrer" className="link-chip">
          <GithubIcon size={13} /> {labels.code}
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;
  const f = p.flagship;

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        <Reveal>
          <Card className="flagship">
            <div className="flagship-head">
              <div>
                <p className="flagship-label">
                  <span className="pill-accent">{p.flagshipLabel}</span>
                  <span className="muted">{f.status}</span>
                </p>
                <h3 className="flagship-title">{f.title}</h3>
                <p className="flagship-sub">{f.subtitle}</p>
              </div>
              <ProjectLinks links={f.links} labels={p} />
            </div>
            <p className="flagship-desc">{f.description}</p>
            <ul className="flagship-highlights">
              {f.highlights.map((h) => (
                <li key={h}><Check size={15} />{h}</li>
              ))}
            </ul>
            <Tags items={f.tech} />
          </Card>
        </Reveal>

        <div className="project-grid">
          {p.items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 2) * 0.06}>
              <Card className="project">
                <p className="project-tagline">{item.tagline}</p>
                <h3 className="project-title">{item.title}</h3>
                <p className="muted project-desc">{item.description}</p>
                <Tags items={item.tech} />
                <ProjectLinks links={item.links} labels={p} />
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="more">
          <h3 className="more-title">{p.moreTitle}</h3>
          <ul>
            {p.more.map((m) => (
              <li key={m.name}>
                <a href={m.url} target="_blank" rel="noreferrer">
                  <span className="more-name">{m.name}</span>
                  <span className="muted">{m.text}</span>
                  <ArrowUpRight size={15} className="more-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
