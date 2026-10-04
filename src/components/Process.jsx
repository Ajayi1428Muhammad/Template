import React from 'react'
import { Syne } from 'next/font/google';
import { easeOut, motion } from 'framer-motion';

  const syne = Syne({ subsets: ["latin"] });
  const process = [
    {
      step: 1,
      action: "Browse & Choose Meals",
      src: "/Choose.png",
      process:
        "Explore our curated menu and easily tweak ingredients to fit your dietary preferences or cravings.",
    },
    {
      step: 2,
      action: "Place Your Order",
      src: "/PlaceOrder.png",
      process:
        "Securely order online in seconds with instant order confirmation—no app downloads or sign-ups needed.",
    },
    {
      step: 3,
      action: "Fast Pickup or Delivery",
      src: "/Delivery.png",
      process:
        "Track your meal in real-time and enjoy fresh, piping-hot dishes delivered straight to your door or prepared for instant pickup.",
    },
  ];
const Process = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div className="mt-32 mb- p-4">
      <div className={`font-bold mb-4 ${syne.className} `}>
        <h2 className={`text-4xl font-bold text-white mb-4`}>
          Simple Steps to Satisfaction
        </h2>
        <p className="text-white/70">
          From craving to table in three effortless steps.
        </p>
      </div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {process.map((step) => (
          <motion.div
            className="p-4 font-display"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={step.step}
            transition={{ duration: 2, ease: easeOut }}
          >
            <div className="relative">
              <p className="absolute font-bold text-2xl text-center flex items-center justify-center top-0 left-0 w-8 h-8 bg-amber-300 rounded-full pb-2 text-black leading-0 z-1">
                {step.step}
              </p>
              <div className="p-2 -rotate-2">
                <img src={step.src} alt="" className="w-64 h-64 rounded-2xl " />
              </div>
              <div
                className="relative bg-linear-to-t from-transparent via-black/50 to-transparent p-6 pt-12 mask-[linear-gradient(to_right,transparent_0%,black_1%,black_99%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
              >
                <h3 className="text-xl font-bold text-white">{step.action}</h3>
                <p className="text-slate-100 text-xs mt-1">{step.process}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Process
