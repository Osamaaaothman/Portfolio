import { motion } from "framer-motion";

export default function SectionHeading({ index, eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="sec-head"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="sec-meta">
        <span className="sec-index">{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="sec-title">{title}</h2>
      {subtitle && <p className="sec-sub">{subtitle}</p>}
    </motion.div>
  );
}
