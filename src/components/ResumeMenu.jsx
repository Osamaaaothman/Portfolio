import { useEffect, useRef, useState } from "react";
import { ChevronDown, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ResumeMenu({ className = "" }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={`resume-menu ${className}`} ref={ref}>
      <button
        className="btn btn-ghost btn-sm"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <FileText size={15} />
        {t.nav.resume}
        <ChevronDown size={14} className={open ? "rot" : ""} />
      </button>
      {open && (
        <div className="resume-pop" role="menu">
          {t.nav.resumeOptions.map((o) => (
            <a key={o.id} href={o.file} target="_blank" rel="noreferrer" role="menuitem" onClick={() => setOpen(false)}>
              <FileText size={15} />
              <span>{o.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
