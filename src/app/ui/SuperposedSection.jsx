"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SuperposedSection({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // La sección se mueve de 100px abajo a su posición original y se desvanece
  // Más desplazamiento y opacidad inicial baja
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity, position: "relative", zIndex: 10 }}
      className="will-change-transform"
    >
      {children}
    </motion.section>
  );
}