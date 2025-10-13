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

  // Shakes
  oreoShake,
  burbournShake,
  chocolateShake,
  mangoShake,
  hazelnutShake,
  classicShake,

  // Section Icons
  burger,
  wraps,
  sandwiches,
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

    // Shakes
    "Oreo Shake": oreoShake,
    "Burbourn Shake": burbournShake,
    "Chocolate Shake": chocolateShake,
    "Mango Shake": mangoShake,
    "Hazelnut Cold Coffee": hazelnutShake,
    "Classic Cold Coffee": classicShake,
  };

  //Map product names to prices
  const priceMap = {
    // Burgers
    "Lite Burger": "₹49",
    "Delight Burger": "₹59",
    "Makhani Burger": "₹89",
    "Crunchy Veg Burger": "₹99",
    "Crunchy Cheese Burger": "₹129",
    "Crunchy Tandoori Burger": "₹149",
    "King Fusion Burger": "₹179",

    // Wraps
    "Veg Wrap": "₹99",
    "Corn Wrap": "₹139",
    "Paneer Wrap": "₹179",

    // Sandwiches
    "Royal Sandwich": "₹189",
    "Corn Sandwich": "₹119",
    "Cheese Corn Sandwich": "₹149",

    // Shakes (high-end prices)
    "Vanilla Shake": "₹119",
    "Mango Shake": "₹139",
    "Chocolate Shake": "₹159",
    "Oreo Shake": "₹169",
    "Burbourn Shake": "₹179",

    // Cold Coffees (optional shakes section too)
    "Classic Cold Coffee": "₹119",
    "Hazelnut Cold Coffee": "₹139",
  };

  // ✅ Reusable section rendering function
  const renderCards = (title, items, icon) => (
    <div className="mb-16">
      {/* Section title */}
      <div className="flex items-center justify-center gap-3 mb-4 md:mb-8">
        <h2 className="font-heading text-red-dark font-bold heading">
          {title}
        </h2>
      </div>

      {/* Card grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => {
          const img = imageMap[item.name];
          const price = priceMap[item.name];
          if (!img) return null;

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
                <h3 className="font-semibold text-gray-800 para">
                  {item.name}
                </h3>
                <p className="text-red-dark font-bold mt-1">{price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="w-[95vw] mx-auto px-8 mt-8">
      {/* Page Header */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-red-dark font-heading font-bold mb-2 heading">
          Our Menu
        </h1>
        <p className="font-sub text-md md:text-lg text-gray-700 leading-relaxed para">
          Explore our delicious range of burgers, wraps, sandwiches, and shakes.
          Freshly prepared and packed with flavor.
        </p>
      </div>

      {/* Menu Sections */}
      {renderCards("Crush Burgers", menu.burgers, burger)}
      {renderCards("Crush Wraps", menu.wraps, wraps)}
      {renderCards("Crush Sandwiches", menu.sandwiches, sandwiches)}
      {renderCards("Crush Shakes", menu.shakes, burger)}

      {/* Bottom Note */}
      <div className="text-center mt-20 bg-offwhite shadow-md py-10 px-6">
        <h3 className="text-red-dark font-heading font-bold mb-4 heading">
          Fresh • Affordable • Made with Love ❤️
        </h3>
        <p className="font-sub text-gray-700 para">
          At CrushBurg, every bite and sip is crafted to satisfy your cravings.
          From juicy burgers to creamy shakes — we’ve got your taste buds
          covered!
        </p>
      </div>
    </section>
  );
};

export default Menu;
