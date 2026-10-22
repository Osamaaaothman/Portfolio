import { useState } from "react";
import { ArrowUp, Copy, Check, Mail, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { LINKS } from "../constants";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./BrandIcons";
import { Reveal } from "./ui";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(c.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${c.email}`;
    }
  };

  return (
    <>
      <section className="section contact" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="container contact-inner">
          <Reveal>
            <p className="eyebrow">{c.eyebrow}</p>
            <h2 className="contact-title">{c.title}</h2>
            <p className="section-subtitle">{c.subtitle}</p>
          </Reveal>

          <Reveal delay={0.08} className="contact-email">
            <a href={`mailto:${c.email}`} className="btn btn-primary">
              <Mail size={16} /> {c.emailCta}
            </a>
            <button className="btn btn-ghost" onClick={copy}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span dir="ltr">{copied ? c.copied : c.email}</span>
            </button>
          </Reveal>

          <Reveal delay={0.12} className="contact-links">
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer"><WhatsappIcon size={16} />{c.whatsapp}</a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={16} />{c.linkedin}</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer"><GithubIcon size={16} />{c.github}</a>
            <a href={LINKS.phone}><Phone size={16} /><span dir="ltr">{c.phone}</span></a>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} · {t.footer.text}</span>
          <a href="#top">{t.footer.backToTop} <ArrowUp size={14} /></a>
        </div>
      </footer>
    </>
  );
}
