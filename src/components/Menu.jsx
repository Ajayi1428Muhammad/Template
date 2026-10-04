"use client"
import { motion, } from "framer-motion";
import CardMenu from "@/components/CardMenu";

const Menu = () => {
  const featuredMenu = [
    {
      id: 1,
      name: "Burger Deluxe",
      description: "Burger Deluxe is a mouthwatering creation that combines a juicy beef patty, melted cheese, fresh lettuce, ripe tomatoes, and a special sauce, all nestled between a soft, toasted bun. It's the ultimate indulgence for burger enthusiasts.",
      price: "₦3000",
      src: "DeluxeBurger.jpg",
    },
    { id: 2, name: "Chicken Burger", description: "A delicious chicken burger with a crispy coating, tender meat, and fresh vegetables.", price: "₦2500", src: "/ChickenBurger.avif" },
    { id: 3, name: "Veggie Delight", description: "A healthy and delicious vegetarian option with fresh vegetables and a savory sauce.", price: "₦3500", src: "VeggieDelight.avif" },
  ];
  return (
    <div className="p-5 mb-5">
      <h2 className="text-2xl font-bold text-white mb-4 font-syne">
        Today's Menu
      </h2>
      <button className="px-5 py-3 text-sm font-medium text-white bg-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-200 flex items-center justify-center hover:bg-white/20 backdrop-blur-xl font-gmono cursor-pointer mb-2">
        View All
      </button>
      <motion.div className="relative flex gap-3 mx-auto sm:w-auto mb-8 scrollbar-none overflow-y-hidden">
        {featuredMenu.map((menu, index) => (
          <CardMenu
            key={menu.id}
            menu={menu}
            index={index}
            ImageSrc={menu.src}
            price={menu.price}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Menu
