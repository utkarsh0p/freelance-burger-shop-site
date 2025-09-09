// HomePage.jsx
import React from "react";
import SlideButton from "../components/SlideButton";
import ReviewCarousel from "../components/ReviewCarousel";
import {
  heroBanner,
  burger,
  sandwiches,
  fries,
  wraps,
  dessert,
  icecream,
  crusburgBrandingCard,
  cardBackground,
} from "../constants";

const HomePage = () => {
  const foodItems = [
    { name: "Burgers", img: burger },
    { name: "Sandwiches", img: sandwiches },
    { name: "Fries", img: fries },
    { name: "Wraps", img: wraps },
    { name: "Desserts", img: dessert },
    { name: "Ice Cream", img: icecream },
  ];

  return (
    <main className="bg-white text-responsive">
      {/* Hero / Banner Section */}
      <section className="w-full h-[25vh] md:h-[60vh] lg:h-[80vh]">
        <div className="banner bg-center w-full h-full bg-cover  flex flex-col justify-center items-center text-center text-white" style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className="butotn-container mt-28 md:mt-50 lg:mt-70">
            <SlideButton value="Explore Our Menu" url="" nav="/menu"/>
        </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-heading italic text-red-dark text-center mb-8">
          Popular Food Items
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {foodItems.map(({ name, img }) => (
            <div
              key={name}
              className="shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col items-center"
              style={{
                backgroundImage: `url(${cardBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-40 w-full flex items-center justify-center overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
              <div className="p-4 flex flex-col items-center text-center bg-white/80 w-full">
                <h3 className="text-xl font-heading mb-2">{name}</h3>
                <SlideButton value={`View ${name}`} nav="/menu" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* review Carousel */}
      <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-heading italic text-red-dark text-center mb-8">
         What Our Customers Say
      </h2>
  <ReviewCarousel />
</section>

      {/* How We Serve */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-heading italic text-red-dark text-center mb-8">
          How We Serve You
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center font-sub">
          {["1. Place an Order", "2. We Prepare Fresh", "3. Quick Delivery"].map(
            (step) => (
              <div
                key={step}
                className="p-6 shadow rounded-2xl hover:shadow-lg transition"
                style={{
                  backgroundImage: `url(${cardBackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-2xl font-bold mb-2">
                  {step.split(".")[0]}
                </h3>
                <p className="text-gray-800">{step.split(".")[1]}</p>
              </div>
            )
          )}
        </div>
      </section>

            {/* About + Stats */}
      <section className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-12 px-4">
        <div>
          <h2 className="text-3xl font-heading italic text-red-dark mb-4">
            About CrushBurg
          </h2>
          <p className="font-sub text-gray-700 leading-relaxed mb-6">
            As a rapidly growing QSR brand, we believe in serving food that’s
            not only delicious but crafted with love and care. Our journey
            started with one store, and today we’re spreading across the nation
            with the same passion and flavor.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { stat: "13+", label: "Total Outlets" },
            { stat: "153+", label: "Food Categories" },
            { stat: "2+", label: "Awards Won" },
            { stat: "Since 2022", label: "Foundation" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="shadow-md p-6 text-center rounded-2xl text-red-dark font-heading"
              style={{
                backgroundImage: `url(${cardBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl md:text-3xl">{item.stat}</h3>
              <p className="font-sub text-gray-800">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16 px-4"
        style={{
          backgroundImage: `url(${cardBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl font-heading italic text-red-dark mb-6">
          Want CrushBurg in Your Area?
        </h2>
        <p className="font-sub text-gray-800 mb-6 max-w-xl mx-auto bg-white/70 p-4 rounded-lg">
          Join our growing family of stores and bring the unbeatable taste of
          CrushBurg to your city. Partner with us and be a part of our
          flavorful journey.
        </p>
        <SlideButton value="Franchise With Us" nav="/contact" />
      </section>
    </main>
  );
};

export default HomePage;