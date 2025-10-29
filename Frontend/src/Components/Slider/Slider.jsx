import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sliderProducts = [
  {
    id: 1,
    name: "AirPods Pro",
    img: "https://via.placeholder.com/400x250?text=AirPods+Pro",
  },
  {
    id: 2,
    name: "iPhone 15",
    img: "https://via.placeholder.com/400x250?text=iPhone+15",
  },
  {
    id: 3,
    name: "Smart Watch",
    img: "https://via.placeholder.com/400x250?text=Smart+Watch",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    img: "https://via.placeholder.com/400x250?text=Wireless+Earbuds",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  // Auto-change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto py-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={sliderProducts[index].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden relative"
        >
          <img
            src={sliderProducts[index].img}
            alt={sliderProducts[index].name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md">
            {sliderProducts[index].name}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;

