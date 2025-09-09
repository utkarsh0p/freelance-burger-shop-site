// AboutUs.jsx
import React from "react";
import SlideButton from "../components/SlideButton";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading italic text-red-dark mb-4">
          About Us
        </h2>
        <p className="text-lg font-sub text-gray-700 max-w-2xl mx-auto">
          At CrushBurg, we believe in serving more than just food – we serve experiences. 
          From fresh ingredients to bold flavors, every bite is crafted with love and passion.
        </p>
      </div>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-white shadow-md p-8">
        <div>
          <h3 className="text-2xl font-heading italic text-red-dark mb-4">
            Our Story
          </h3>
          <p className="text-gray-700 mb-6 font-sub">
            Starting as a small food joint, CrushBurg has grown into a place where 
            people come together to enjoy great food and great vibes. 
            Our mission is simple – deliver mouthwatering burgers, sandwiches, and more.
          </p>
          <SlideButton value="Explore Our Menu" url="/menu" />
        </div>
        <div className="w-full h-72 bg-offwhite shadow-md flex items-center justify-center">
          {/* Replace with image */}
          <span className="text-gray-400">Image Here</span>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-offwhite shadow-md p-8">
        <div className="w-full h-72 bg-white shadow-md flex items-center justify-center md:order-1 order-2">
          {/* Replace with image */}
          <span className="text-gray-400">Image Here</span>
        </div>
        <div className="md:order-2 order-1">
          <h3 className="text-2xl font-heading italic text-red-dark mb-4">
            What We Serve
          </h3>
          <p className="text-gray-700 mb-6 font-sub">
            From juicy burgers to crispy fries, and refreshing drinks – 
            every item on our menu is made to satisfy. 
            Whether dining in or ordering out, we bring the same quality to your table.
          </p>
          <SlideButton value="Find a Store" url="/store" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-white shadow-md p-8">
        <div>
          <h3 className="text-2xl font-heading italic text-red-dark mb-4">
            Our Promise
          </h3>
          <p className="text-gray-700 mb-6 font-sub">
            We are committed to freshness, taste, and service. 
            Every meal is made with high-quality ingredients and served with care. 
            Our goal is to give you an experience worth remembering.
          </p>
          <SlideButton value="Contact Us" url="/contact" />
        </div>
        <div className="w-full h-72 bg-offwhite shadow-md flex items-center justify-center">
          {/* Replace with image */}
          <span className="text-gray-400">Image Here</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;