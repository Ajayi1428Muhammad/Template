"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrustBar } from "@/components/TrustBar";


const HeroPage = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
     const timer = setInterval(() => {
       setIndex((prev) => (prev + 1) % PHRASES.length);
     }, 3000);
     return () => clearInterval(timer);
    }, []);

    const PHRASES = [
      "the new dining era",
      "effortless meals",
      "great taste without hassle",
      "seamless food ordering",
    ];
  return (
    <div className="p-4 mt-16">
      <div className="absolute top-0 right-0  w-full h-full flex items-center justify-center pointer-events-none -z-10">
        <div className="absolute inset-0 bg-amber-500/15 rounded-full blur-3xl -z-10" />

        <img
          src="/Hero.webp"
          alt="Signature Dish"
          className="absolute  w-full h-full object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold text-white mb-4 min-h-30">
        Dine smarter. Eat better. <br /> Be part of{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={PHRASES[index]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="text-amber-300"
          >
            {PHRASES[index]}
          </motion.span>
        </AnimatePresence>
      </h1>
      <h2 className="text-[20px] font-cgar text-white ">
        No long waits, no dietary compromises. Just incredible meals made
        accessible to all, whenever hunger strikes.
      </h2>
      <div>
        <button className="mb-3 bg-white backdrop-blur-md text-[#1a1a1a] font-bold py-2 px-4 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] mt-4 hover:bg-white/60 transition-all duration-300 ease-in-out cursor-pointer">
          Explore Menu
        </button>
        <TrustBar />
      </div>
    </div>
  );
}

export default HeroPage
