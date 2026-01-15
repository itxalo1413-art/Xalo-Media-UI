"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export const CountUp = ({
  value,
  direction = "up",
  delay = 0,
  className,
  suffix = "",
  prefix = ""
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in seconds
  suffix?: string;
  prefix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30, // Reduced damping for faster settle
    stiffness: 80, // Slightly less stiff
    duration: 2 // explicitly set duration if possible, but spring uses physics. Damping/stiffness control it.
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
        // Add a small delay if needed
        setTimeout(() => {
             motionValue.set(direction === "down" ? 0 : value);
        }, delay * 1000);
    }
  }, [motionValue, isInView, direction, value, delay]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });

    return () => springValue.clearListeners();
  }, [springValue, prefix, suffix]);

  return <span className={className} ref={ref} />;
};
