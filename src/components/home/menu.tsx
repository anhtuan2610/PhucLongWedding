"use client";

import { useState } from "react";
import { MenuIcon, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "./services";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false); // mobile
  const [showDesktopServices, setShowDesktopServices] = useState(false); // desktop

  return (
    <header className="max-w-[1180px] mx-auto flex items-center justify-between p-4 relative z-50">
      {/* Logo */}
      <div className="relative w-14 h-14 xl:w-22 xl:h-22">
        <Image
          src="/images/logo.png"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* ----- Menu chữ cho màn lớn (desktop) ----- */}
      <nav className="hidden xl:flex items-center gap-8 text-lg font-semibold text-[#3D6350]">
        <a href="#trang-chu" className="hover:text-[#D1B483] transition-colors">
          Trang chủ
        </a>
        <a
          href="#gioi-thieu"
          className="hover:text-[#D1B483] transition-colors"
        >
          Giới thiệu
        </a>

        {/* Dịch vụ dropdown – giữ menu mở khi hover cả button lẫn box */}
        <div
          className="relative"
          onMouseEnter={() => setShowDesktopServices(true)}
          onMouseLeave={() => setShowDesktopServices(false)}
        >
          <button className="flex items-center gap-1 hover:text-[#D1B483] transition-colors">
            Dịch vụ
            {showDesktopServices ? (
              <ChevronUp size={18} className="transition-transform" />
            ) : (
              <ChevronDown size={18} className="transition-transform" />
            )}
          </button>

          <AnimatePresence>
            {showDesktopServices && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg
                           border border-gray-200 text-gray-700"
              >
                {services.map((service) => (
                  <a
                    key={service.id}
                    href="#dich-vu"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-[#3D6350]"
                  >
                    {service.title}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="#blog" className="hover:text-[#D1B483] transition-colors">
          Blog
        </a>
        <a href="#lien-he" className="hover:text-[#D1B483] transition-colors">
          Liên hệ
        </a>
      </nav>

      {/* ----- Nút mở menu Drawer cho mobile (< xl) ----- */}
      <button
        onClick={() => setOpen(true)}
        className="xl:hidden text-gray-800 hover:text-gray-600 transition-colors"
      >
        <MenuIcon size={30} />
      </button>

      {/* ----- Drawer cho mobile ----- */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer bên trái */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.35 }}
              className="xl:hidden fixed top-0 left-0 h-full w-72 bg-[#3D6350] text-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <h2 className="text-2xl font-extrabold tracking-wide">Menu</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X size={32} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6 space-y-6 text-lg font-semibold">
                <a
                  href="#trang-chu"
                  className="block hover:text-yellow-300 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Trang chủ
                </a>
                <a
                  href="#gioi-thieu"
                  className="block hover:text-yellow-300 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Giới thiệu
                </a>

                {/* Dịch vụ có dropdown trong Drawer */}
                <div>
                  <button
                    onClick={() => setShowServices((prev) => !prev)}
                    className="w-full flex items-center justify-between hover:text-yellow-300 transition-colors"
                  >
                    <span>Dịch vụ</span>
                    {showServices ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {showServices && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 ml-4 space-y-2 overflow-hidden"
                      >
                        {services.map((service) => (
                          <a
                            key={service.id}
                            href="#dich-vu"
                            className="block text-white/90 hover:text-yellow-300 transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            {service.title}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="#blog"
                  className="block hover:text-yellow-300 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </a>
                <a
                  href="#lien-he"
                  className="block hover:text-yellow-300 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Liên hệ
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Menu;
