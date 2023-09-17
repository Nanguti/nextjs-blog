// components/Hero.js
import React from "react";

function Hero() {
  const heroStyle = {
    backgroundImage: `url("/hero-banner.svg")`, // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="bg-blue-400 text-white py-16 bg-gradient"
      style={heroStyle}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Developers Playground
        </h1>
        <p className="text-lg md:text-xl">
          Discover the latest articles on our blog and stay informed.
        </p>
        <button className="mt-6 bg-white text-blue-500 hover:bg-blue-500 text-lg px-6 py-2 rounded-full transition duration-300 ease-in-out">
          Explore
        </button>
      </div>
    </section>
  );
}

export default Hero;
