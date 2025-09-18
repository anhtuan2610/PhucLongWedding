"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
} from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  start: boolean; // 👈 trigger
}

export function AnimatedNumber({
  value,
  suffix = "",
  start,
}: AnimatedNumberProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(rounded, "change", (latest) => setDisplay(latest));

  useEffect(() => {
    if (start) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [start, count, value]);

  return (
    <motion.span>
      {display}
      {suffix}
    </motion.span>
  );
}
