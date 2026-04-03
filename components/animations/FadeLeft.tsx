"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function FadeLeft({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay },
      });
    }
  }, [isInView, controls, delay]);
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: 100 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
