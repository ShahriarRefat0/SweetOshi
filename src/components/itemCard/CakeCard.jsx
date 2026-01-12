"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CakeCard({
  image,
  name,
  price,
  offerPrice,
  discount,
  id
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative bg-white rounded-3xl shadow-lg overflow-hidden group"
    >
      {/* Discount Badge */}
      <div className="absolute top-4 right-4 z-10 bg-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
        {discount}% OFF
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {name}
        </h3>

        {/* Price */}
        <div className="mt-2 flex items-center gap-3">
          <span className="text-xl font-bold text-pink-600">
            ৳{offerPrice}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ৳{price}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <button onClick={} className="btn btn-ghost flex-1 border border-pink-500 text-pink-600 rounded-full py-2 text-sm font-medium hover:bg-pink-50 transition">
            Quick View
          </button>

          <button className="btn border-none flex-1 bg-pink-600 text-white rounded-full py-2 text-sm font-medium hover:bg-pink-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
