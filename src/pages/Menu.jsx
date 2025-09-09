import React from "react";
import menu from "../constants"; // import the menu constant we made earlier

const Menu = () => {
  const renderSection = (title, items) => (
    <div className="mb-16">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl text-red-dark font-heading italic mb-6 text-center">
        {title}
      </h2>

      {/* Items List */}
      <div className="max-w-3xl mx-auto bg-offwhite shadow-md p-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-300 py-4 hover:bg-white transition"
          >
            <span className="font-sub text-gray-800">{item.name}</span>
            <div className="flex gap-6 font-bold text-red-dark">
              {item.prices.map((price, i) => (
                <span key={i}>₹{price}</span>
              ))}
            </div>
          </div>
        ))}
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
          Delicious, affordable, and freshly made just for you. Explore our range of burgers,
          wraps, shakes, and more!
        </p>
      </div>

      {/* Sections */}
      {renderSection("Crush Burgers", menu.burgers)}
      {renderSection("Crush Wraps", menu.wraps)}
      {renderSection("Crush Sandwiches", menu.sandwiches)}
      {renderSection("Crush Fries", menu.fries)}
      {renderSection("Crush Sides", menu.sides)}
      {renderSection("Crush Shakes", menu.shakes)}
      {renderSection("Crush Cold Coffee", menu.coldCoffee)}
      {renderSection("Crush Softies", menu.softies)}

      {/* Bottom Note */}
      <div className="text-center mt-20 bg-offwhite shadow-md py-10 px-6">
        <h3 className="text-xl md:text-2xl text-red-dark font-heading italic mb-4">
          Fresh • Affordable • Made with Love ❤️
        </h3>
        <p className="font-sub text-gray-700">
          At CrushBurg, every bite is crafted to satisfy your cravings. Whether it’s 
          a cheesy burger, crispy fries, or a chilled shake, we’ve got you covered!
        </p>
      </div>
    </section>
  );
};

export default Menu;