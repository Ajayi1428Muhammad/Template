import React from 'react'

const Navbar = () => {
  return (
    <div className=" sticky top-4 h-full w-full bg-black/40 backdrop-blur-md border border-white/20 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] p-2 z-50 overflow-y-auto scrollbar-none">
      <div className="flex space-x-4 justify-between">
        <a
          href="/contact"
          className="px-5 py-3 text-sm font-medium text-white bg-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center hover:bg-white/20 backdrop-blur-xl font-gmono"
        >
          Contact
        </a>
        <a
          href="/order"
          className="px-5 py-3 text-sm font-medium text-white bg-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center hover:bg-white/20 backdrop-blur-xl font-gmono"
        >
          Order
        </a>
        <a
          href="/menu"
          className="px-5 py-3 text-sm font-medium text-white bg-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center hover:bg-white/20 backdrop-blur-xl font-gmono"
        >
          Menu
        </a>
        <a
          href="/reviews"
          className="px-5 py-3 text-sm font-medium text-white bg-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center hover:bg-white/20 backdrop-blur-xl font-gmono"
        >
          Reviews
        </a>
      </div>
    </div>
  );
}

export default Navbar
