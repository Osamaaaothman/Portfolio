import { useLanguage } from "../context/LanguageContext";
import { Reveal, SectionHeader, Tags } from "./ui";

export default function Experience() {
  const { t } = useLanguage();
  const x = t.experience;

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader eyebrow={x.eyebrow} title={x.title} />
        <ol className="timeline">
          {x.items.map((job) => (
            <Reveal as="li" key={job.id} className={`job ${job.current ? "job-current" : ""}`}>
              <div className="job-side">
                <span className="job-period">{job.period}</span>
                {job.current && <span className="badge-live"><span className="dot" />{x.present}</span>}
              </div>
              <div className="job-body">
                <h3 className="job-role">{job.role}</h3>
                <p className="job-company">
                  {job.company} <span className="muted">· {job.type}</span>
                </p>
                <ul className="job-bullets">
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <Tags items={job.tech} />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
