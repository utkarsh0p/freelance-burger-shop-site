import React from "react";
import { shop1, shop2, shop3 } from "../constants";
import SlideButton from "../components/SlideButton";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-8 space-y-24">
      {/* Page Heading */}
      <div className="text-center mb-8">
        <h2 className="heading text-red-dark font-heading font-bold mb-6">
          About Us
        </h2>
        <p className="para font-sub text-gray-700 max-w-2xl mx-auto leading-relaxed">
          At CrushBurg, we believe in serving more than just food – we serve
          experiences. From fresh ingredients to bold flavors, every bite is
          crafted with love and passion.
        </p>
      </div>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-offwhite shadow-md rounded-2xl p-8">
        <div>
          <h3 className="heading text-red-dark font-heading font-semibold mb-4">
            Our Story
          </h3>
          <p className="para text-gray-700 mb-6 font-sub leading-relaxed">
            Starting as a small food joint, CrushBurg has grown into a place
            where people come together to enjoy great food and great vibes. Our
            mission is simple – deliver mouthwatering burgers, sandwiches, and
            more, all made with care.
          </p>
          <SlideButton value="Explore Our Menu" url="/menu" />
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            src={shop1}
            alt="Our Story"
            className="rounded-xl shadow-md w-full"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-white shadow-md rounded-2xl p-8">
        <div className="w-full flex items-center justify-center md:order-1 order-2">
          <img
            src={shop2}
            alt="What We Serve"
            className="rounded-xl shadow-md w-full"
          />
        </div>
        <div className="md:order-2 order-1">
          <h3 className="heading text-red-dark font-heading font-semibold mb-4">
            What We Serve
          </h3>
          <p className="para text-gray-700 mb-6 font-sub leading-relaxed">
            From juicy burgers to crispy fries and refreshing drinks – every
            item on our menu is made to satisfy. Whether you’re dining in or
            ordering out, we bring the same quality and flavor to your table.
          </p>
          <SlideButton value="Find a Store" url="/store" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-offwhite shadow-md rounded-2xl p-8">
        <div>
          <h3 className="heading text-red-dark font-heading font-semibold mb-4">
            Our Promise
          </h3>
          <p className="para text-gray-700 mb-6 font-sub leading-relaxed">
            We are committed to freshness, taste, and service. Every meal is
            made with high-quality ingredients and served with care. Our goal is
            to give you an experience worth remembering, every single time.
          </p>
          <SlideButton value="Contact Us" url="/contact" />
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            src={shop3}
            alt="Our Promise"
            className="rounded-xl shadow-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

