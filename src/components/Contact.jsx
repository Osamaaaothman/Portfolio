import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./BrandIcons";
import { WHATSAPP_URL } from "../constants";
import "./Contact.css";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(c.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading index="06" eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

        <motion.div
          className="ct-main"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="prompt ct-cmd">
            <i>$</i> mail -s &quot;hello&quot;
          </p>
          <div className="ct-email-row">
            <a href={`mailto:${c.email}`} className="ct-email">
              {c.email}
            </a>
            <button className="icon-btn" onClick={handleCopy} aria-label={copied ? c.copied : c.copy}>
              {copied ? <Check size={17} /> : <Copy size={17} />}
            </button>
          </div>
          <a href={`mailto:${c.email}`} className="btn btn-primary ct-cta">
            {c.ctaEmail}
            <ArrowRight size={17} className="flip-rtl" />
          </a>
        </motion.div>

        <motion.div
          className="ct-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ct-tile ct-tile-wa">
            <span className="ct-tile-label">{c.whatsappLabel}</span>
            <span className="ct-tile-value">
              <WhatsappIcon size={16} />
              {c.phone}
            </span>
          </a>
          <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="ct-tile">
            <span className="ct-tile-label">{c.phoneLabel}</span>
            <span className="ct-tile-value">{c.phone}</span>
          </a>
          <div className="ct-tile">
            <span className="ct-tile-label">{c.locationLabel}</span>
            <span className="ct-tile-value">{c.location}</span>
          </div>
          <div className="ct-tile ct-social">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="icon-btn icon-btn-wa" aria-label="WhatsApp">
              <WhatsappIcon size={18} />
            </a>
            <a href="https://github.com/Osamaaaothman" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/osamaaothman/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
