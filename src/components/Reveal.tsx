import { motion } from "motion/react";
import type { ReactNode } from "react";

// Muncul dari bawah 24px saat masuk layar, dengan jeda bertingkat
export default function Reveal({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.07 }}
    >
      {children}
    </motion.div>
  );
}
