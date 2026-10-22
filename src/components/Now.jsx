import { useLanguage } from "../context/LanguageContext";
import { Card, Reveal, SectionHeader, Tags } from "./ui";

export default function Now() {
  const { t } = useLanguage();
  const n = t.now;

  return (
    <section className="section" id="now">
      <div className="container">
        <SectionHeader eyebrow={n.eyebrow} title={n.title} />
        <div className="now-grid">
          {n.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <Card className={`now-card ${i === 0 ? "now-card-primary" : ""}`}>
                <p className="now-kind">
                  <span className="dot" />
                  {item.kind}
                </p>
                <h3 className="now-org">{item.org}</h3>
                <p className="muted">{item.text}</p>
                <Tags items={item.tags} />
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
