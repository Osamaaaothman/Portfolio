import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content } from "../content";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("language");
  if (stored === "en" || stored === "ar") return stored;
  return navigator.language?.toLowerCase().startsWith("ar") ? "ar" : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  const t = content[language];

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", t.dir);
    window.localStorage.setItem("language", language);
  }, [language, t.dir]);

  const toggleLanguage = () => setLanguage((l) => (l === "en" ? "ar" : "en"));

  const value = useMemo(
    () => ({ language, toggleLanguage, t, isRtl: t.dir === "rtl" }),
    [language, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
