import React from "react";
import Slider from "../Components/Slider/Slider";



const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16 text-center shadow-md">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Auralis</h1>
        <p className="text-lg font-light mb-6">
          Discover premium gadgets — AirPods, phones, and accessories designed for luxury and performance.
        </p>
      </section>

      {/* Slider */}
      <Slider />

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto py-14 px-6">
        {/* Your featured products grid here */}
      </section>
    </div>
  );
};

export default Home;



