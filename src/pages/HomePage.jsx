// HomePage.jsx
import React from "react";
import SlideButton from "../components/SlideButton";
import { heroBanner } from "../constants";

const HomePage = () => {
  return (
    <main className="bg-white text-responsive">
      {/* Hero / Banner Section */}
      <section className="w-full h-[22vh] md:h-[60vh] lg:h-[80vh]">
        <div className="banner bg-center w-full h-full bg-cover  flex flex-col justify-center items-center text-center text-white" style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className="butotn-container mt-33 md:mt-70">
          <div className="[&>a]:bg-white [&>a]:text-red-dark  [&>a>span:last-child]:bg-yellow-500">
            <SlideButton value="Explore Our Menu" url="/menu" />
          </div>
        </div>
        </div>
      </section>

      {/* About + Stats */}
      <section className="max-w-6xl mx-auto py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-heading italic text-red-dark mb-4">About CrushBurg</h2>
          <p className="font-sub text-gray-700 leading-relaxed mb-6">
            As a rapidly growing QSR brand, ...
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-offwhite shadow-md p-6 text-center hover:bg-yellow-50 transition">
            <h3 className="text-3xl font-heading text-red-dark">13+</h3>
            <p className="font-sub">Total Outlets</p>
          </div>
          <div className="bg-offwhite shadow-md p-6 text-center hover:bg-yellow-50 transition">
            <h3 className="text-3xl font-heading text-red-dark">153+</h3>
            <p className="font-sub">Food Categories</p>
          </div>
          <div className="bg-offwhite shadow-md p-6 text-center hover:bg-yellow-50 transition">
            <h3 className="text-3xl font-heading text-red-dark">2+</h3>
            <p className="font-sub">Awards Won</p>
          </div>
          <div className="bg-offwhite shadow-md p-6 text-center hover:bg-yellow-50 transition">
            <h3 className="text-3xl font-heading text-red-dark">Since 2022</h3>
            <p className="font-sub">Foundation</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-heading italic text-red-dark mb-8">Why Choose Us</h2>
        <p className="font-sub text-gray-700 leading-relaxed">
          Super quality food, trusted reputation, ...
        </p>
      </section>

      {/* Popular Items */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-heading italic text-red-dark text-center mb-8">Popular Food Items</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Burgers", "Sandwiches", "Fries", "Sides", "Wraps", "Desserts", "Shakes", "Cold Drinks"].map((cat) => (
            <div key={cat} className="bg-offwhite shadow-md p-6 text-center hover:bg-yellow-50 transition">
              {/* image slot */}
              <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-400">{cat} Image</span>
              </div>
              <h3 className="text-xl font-heading mb-2">{cat}</h3>
              <SlideButton value={`View ${cat}`} url={`/menu`} />
            </div>
          ))}
        </div>
      </section>

      {/* How We Serve */}
      <section className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-heading italic text-red-dark text-center mb-8">How We Serve You</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center font-sub">
          {["1. Place an Order", "2. We Prepare Fresh", "3. Quick Delivery"].map((step) => (
            <div key={step} className="p-6">
              <h3 className="text-2xl font-bold mb-2">{step.split(".")[0]}</h3>
              <p className="text-gray-700">{step.split(".")[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto py-16 bg-offwhite shadow-md p-8 mb-16">
        <h2 className="text-3xl font-heading italic text-red-dark text-center mb-8">What Our Customers Say</h2>
        <div className="space-y-6">
          {["CrushBurg’s burgers are a must-try...", "Absolutely delicious burgers!...", "CrushBurg makes the best burgers!..."].map((t, idx) => (
            <blockquote key={idx} className="italic font-sub text-gray-700 text-center">“{t}”</blockquote>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-heading italic text-red-dark mb-6">Want CrushBurg in Your Area?</h2>
        <p className="font-sub text-gray-700 mb-6">Join our growing family of stores...</p>
        <SlideButton value="Franchise With Us" url="/contact" />
      </section>
    </main>
  );
};

export default HomePage;