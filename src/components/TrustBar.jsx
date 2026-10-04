"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustPoints = [
  "No hidden fees",
  "Instant delivery",
  "Accessible everywhere",
];

export function TrustBar() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
      }}
      className="flex flex-wrap justify-start gap-x-8 gap-y-2 mt-2"
    >
      {trustPoints.map((point) => (
        <motion.div
          key={point}
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-1.5 text-sm text-white/70"
        >
          <Check className="w-3.5 h-3.5 text-white/50" strokeWidth={2.5} />
          <span>{point}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
