"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const [loaded, setLoaded] = useState(false);

  const images = [
    "/images/gallery/img1.jpg",
    "/images/gallery/img2.jpg",
    "/images/gallery/img3.jpg",
    "/images/gallery/img4.jpg",
    "/images/gallery/img5.jpg",
    "/images/gallery/img6.jpg",
    "/images/gallery/img7.jpg",
    "/images/gallery/img8.jpg",
    "/images/gallery/img9.jpg",
    "/images/gallery/img10.jpg",
  ];

  return (
    <main>
      {/* Mobile: 2 cột, Tablet: 3, Desktop: 4 */}
      <motion.div
        className="columns-2 lg:columns-4 gap-4 [column-fill:_balance]"
        layout
      >
        {images.map((src, idx) => {
          return (
            <motion.div
              key={idx}
              className="mb-4 relative group overflow-hidden rounded-xl break-inside-avoid"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              layout
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* hiệu ứng fade-in khi ảnh load xong */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={loaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={src}
                  alt={`Ảnh ${idx + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover block"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onLoadingComplete={() => setLoaded(true)}
                />
              </motion.div>

              {/* Overlay hover */}
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <motion.span
                  className="text-white text-lg font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Ảnh {idx + 1}
                </motion.span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </main>
  );
}
