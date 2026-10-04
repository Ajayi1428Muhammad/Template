import { motion } from "framer-motion";
import Link from "next/link";

const orderMethods = [
  {
    label: "Delivery",
    time: "25-35 min",
    desc: "Delivered hot to your door across Lagos Mainland.",
  },
  {
    label: "Pickup",
    time: "15-20 min",
    desc: "Skip the wait — grab your order at the counter.",
  },
];

const Order = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="text-sm uppercase tracking-widest text-white/50">
          Get Started
        </span>
        <h2 className="text-4xl font-bold text-white mt-2 mb-4">
          Ready to Eat?
        </h2>
        <p className="text-white/70 max-w-lg mx-auto mb-12">
          Order online for delivery or pickup — fresh, fast, and made the moment
          you order.
        </p>

        {/* Delivery / Pickup cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10 text-left">
          {orderMethods.map((method, i) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-bold text-lg">{method.label}</h3>
                <span className="relative">
                  <span className="absolute inset-0 animate-ping bg-white/10  rounded-full text-xs duration-950 transition-all"></span>
                  <span className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded-full">
                    {method.time}
                  </span>
                </span>
              </div>
              <p className="text-white/60 text-sm mb-4">{method.desc}</p>
              <button
                onClick={() => console.log(`Order via ${method.label}`)}
                className="w-full bg-[#b98330] text-black font-bold py-3 rounded-full hover:scale-[1.02] transition active:scale-[0.98] cursor-pointer"
              >
                Order {method.label}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Alternate ordering platforms */}
        <div className="mb-8">
          <p className="text-xs text-white/40 mb-3">Or order via</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {["WhatsApp", "Chowdeck", "Glovo"].map((platform) => {
              const colorClass =
                platform === "WhatsApp"
                  ? "bg-green-500 hover:bg-green-600"
                  : platform === "Chowdeck"
                    ? "bg-amber-500 hover:bg-amber-600"
                    : "bg-yellow-300 hover:bg-yellow-400";

              const sharedClasses = `inline-block border border-white/20 text-white/80 text-sm px-5 py-2 rounded-full transition cursor-pointer ${colorClass}`;

              // 2. Render Link for WhatsApp, button for others
              return platform === "WhatsApp" ? (
                <Link
                  key={platform}
                  href="https://wa.me/+2348128214760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sharedClasses}
                >
                  {platform}
                </Link>
              ) : (
                <button key={platform} className={sharedClasses}>
                  {platform}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center gap-6 text-sm text-white/50 flex-wrap">
          <span>📍 Lagos Mainland</span>
          <span>🕐 Open till 11PM</span>
          <span>🛵 Min. order ₦1,000</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Order;
