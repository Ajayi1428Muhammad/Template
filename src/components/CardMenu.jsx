import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CardMenu = ({ menu, index, ImageSrc = "/Burger.jpg", price }) => {

  return (
    <motion.div
      className="break-inside-avoid mb-3 h-auto p-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="shadow-lg overflow-hidden flex flex-col cursor-pointer w-56 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-102">
        <div className="relative">
          <div className="w-full rounded-t-xl aspect-4/3 bg-slate-100 flex items-center justify-center overflow-hidden transition-transform duration-700 hover:scale-102">
            <img
              src={ImageSrc}
              className="w-full h-full object-cover"
              alt={menu.name}
            />
          </div> 
        </div>
        <div className="p-4 bg-white">
          <div className="flex flex-col items-start justify-between gap-2">
            <h2 className="text-xl font-bold text-black cursor-text">
              {menu.name}
            </h2>
            <p className="text-slate-600 mt-2 line-clamp-2 cursor-text ">
              {menu.description}
            </p>
            <p className="text-lg font-bold text-green-500 cursor-text">
              {price}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardMenu