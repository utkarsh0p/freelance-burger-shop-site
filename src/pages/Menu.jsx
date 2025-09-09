import React from "react";
import {
  burger,
  sandwiches,
  fries,
  wraps,
  dessert,
  icecream,
  cardBackground,
  menu,
} from "../constants";

const Menu = () => {
  const renderSection = (title, items, image, reverse = false) => (
    <div className="mb-20">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl text-red-dark font-heading italic mb-10 text-center">
        {title}
      </h2>

      {/* Flex Layout */}
      <div
        className={`flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Items List */}
        <div
          className="flex-1 shadow-md p-6 rounded-2xl w-full"
          style={{
            backgroundImage: `url(${cardBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-300 py-4 hover:bg-white/70 transition"
            >
              <span className="font-sub text-gray-800">{item.name}</span>
              <div className="flex gap-6 font-bold text-red-dark">
                {item.prices.map((price, i) => (
                  <span key={i}>
                    {typeof price === "number" ? `₹${price}` : price}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section Image */}
        <div className="flex-1 max-w-md w-full">
          <img
            src={image}
            alt={title}
            className="rounded-2xl shadow-md w-full h-64 md:h-80 object-contain bg-white"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-[95vw] mx-auto px-6 py-16 bg-white">
      {/* Page Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-red-dark font-heading italic mb-4">
          Our Menu
        </h1>
        <p className="font-sub font-bold text-md md:text-lg text-gray-700 leading-relaxed">
          Delicious, affordable, and freshly made just for you. Explore our range
          of burgers, wraps, sandwiches, fries, desserts, and ice creams!
        </p>
      </div>

      {/* Sections (alternating layout) */}
      {renderSection("Crush Burgers", menu.burgers, burger, false)}
      {renderSection("Crush Wraps", menu.wraps, wraps, true)}
      {renderSection("Crush Sandwiches", menu.sandwiches, sandwiches, false)}
      {renderSection("Crush Fries", menu.fries, fries, true)}
      {renderSection("Crush Shakes", menu.shakes || [], dessert, false)}
      {renderSection("Crush Ice Cream", menu.softies || [], icecream, true)}

      {/* Bottom Note */}
      <div className="text-center mt-20 bg-offwhite shadow-md py-10 px-6 rounded-2xl">
        <h3 className="text-xl md:text-2xl text-red-dark font-heading italic mb-4">
          Fresh • Affordable • Made with Love ❤️
        </h3>
        <p className="font-sub text-gray-700">
          At CrushBurg, every bite is crafted to satisfy your cravings. Whether
          it’s a cheesy burger, crispy fries, or a chilled shake, we’ve got you
          covered!
        </p>
      </div>
    </section>
  );
};

export default Menu;


