import { useLanguage } from "../context/LanguageContext";
import { Card, Reveal, SectionHeader, Tags } from "./ui";

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;
  const c = t.credentials;

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} />
        <div className="skills-grid">
          {s.groups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 0.05}>
              <Card className="skill-card">
                <h3 className="skill-title">{g.title}</h3>
                <Tags items={g.items} />
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="creds">
          <p className="eyebrow">{c.eyebrow}</p>
          <div className="creds-grid">
            <div className="cred cred-degree">
              <h3>{c.degree.title}</h3>
              <p className="muted">{c.degree.school} · {c.degree.period}</p>
            </div>
            {c.items.map((it) => (
              <div className="cred" key={it.title}>
                <h3>{it.title}</h3>
                <p className="muted">{it.org} · {it.year}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
