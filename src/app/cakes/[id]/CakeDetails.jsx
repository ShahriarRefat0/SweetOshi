"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CakeDetailsModal({ isOpen, onClose, cake }) {
  if (!cake) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-pink-600 text-xl"
              >
                ✕
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative h-80 md:h-full">
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {cake.discount}% OFF
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {cake.name}
                  </h2>

                  <p className="mt-4 text-gray-600">
                    {cake.description ||
                      "This delicious cake is freshly baked with premium ingredients and perfect for any celebration."}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-center gap-4">
                    <span className="text-3xl font-bold text-pink-600">
                      ৳{cake.offerPrice}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ৳{cake.price}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex gap-4">
                    <button className="flex-1 bg-pink-600 text-white py-3 rounded-full font-medium hover:bg-pink-700 transition">
                      Add to Cart 🛒
                    </button>

                    <button
                      onClick={onClose}
                      className="flex-1 border border-gray-300 py-3 rounded-full font-medium hover:bg-gray-100 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
