import React from "react";
import {
  // Burgers
  kingFusionBurger,
  crunchyVegBurger,
  crunchyTandooriBurger,
  makhniBurger,
  liteBurger,
  delightBurger,
  crunchyCheeseBurger,

  // Wraps
  contWrap,
  paneerWrap,
  vegWrap,

  // Sandwiches
  royalSandwich,
  cornAndCheeseSandwich,

  // Section Icons
  burger,
  wraps,
  sandwiches,
  fries,
  dessert,
  icecream,
  cardBackground,
  menu,
} from "../constants";

const Menu = () => {
  // ✅ Map product names to images
  const imageMap = {
    // Burgers
    "Lite Burger": liteBurger,
    "Delight Burger": delightBurger,
    "Makhani Burger": makhniBurger,
    "Crunchy Veg Burger": crunchyVegBurger,
    "Crunchy Cheese Burger": crunchyCheeseBurger,
    "Crunchy Tandoori Burger": crunchyTandooriBurger,
    "King Fusion Burger": kingFusionBurger,

    // Wraps
    "Veg Wrap": vegWrap,
    "Corn Wrap": contWrap,
    "Paneer Wrap": paneerWrap,

    // Sandwiches
    "Royal Sandwich": royalSandwich,
    "Corn Sandwich": cornAndCheeseSandwich,
    "Cheese Corn Sandwich": cornAndCheeseSandwich,
  };

  // ✅ Render reusable card grid for a category
  const renderCards = (title, items, icon) => (
    <div className="mb-16">
      {/* Section title */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        <h2 className="text-2xl md:text-3xl font-heading text-red-dark font-bold">
          {title}
        </h2>
      </div>

      {/* Card Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => {
          const img = imageMap[item.name];
          if (!img) return null; // skip if no image available

          return (
            <div
              key={idx}
              className="bg-white shadow-md overflow-hidden hover:shadow-lg transition"
              style={{
                backgroundImage: `url(${cardBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={img}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-md md:text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="w-[95vw] mx-auto px-6 py-16">
      {/* Page header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-red-dark font-heading font-bold mb-4">
          Our Menu
        </h1>
        <p className="font-sub text-md md:text-lg text-gray-700 leading-relaxed">
          Explore our delicious range of burgers, wraps, and sandwiches. Freshly
          prepared and packed with flavor.
        </p>
      </div>

      {/* Render Sections */}
      {renderCards("Crush Burgers", menu.burgers, burger)}
      {renderCards("Crush Wraps", menu.wraps, wraps)}
      {renderCards("Crush Sandwiches", menu.sandwiches, sandwiches)}

      {/* Bottom Note */}
      <div className="text-center mt-20 bg-offwhite shadow-md py-10 px-6">
        <h3 className="text-xl md:text-2xl text-red-dark font-heading font-bold mb-4">
          Fresh • Affordable • Made with Love ❤️
        </h3>
        <p className="font-sub text-gray-700">
          At CrushBurg, every bite is crafted to satisfy your cravings. Whether
          it’s a cheesy burger, a crisp wrap, or a royal sandwich, we’ve got you
          covered!
        </p>
      </div>
    </section>
  );
};

export default Menu;

