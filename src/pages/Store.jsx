import React from "react";
import SlideButton from "../components/SlideButton";

const Store = () => {
  const stores = [
    {
      name: "CrushBurg Downtown",
      address: "123 Burger St, City Center",
      hours: "Mon-Sun: 10am - 10pm",
      img: "", // add your image url
      link: "https://www.instagram.com/",
    },
    {
      name: "CrushBurg Uptown",
      address: "456 Fries Ave, Uptown",
      hours: "Mon-Sun: 11am - 11pm",
      img: "", // add your image url
      link: "https://youtube.com/",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-responsive bg-white">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl mb-4 text-red-600 font-heading italic">
          Our Stores
        </h2>
        <p className="font-sub font-bold text-md md:text-lg leading-relaxed">
          From sizzling grills in downtown streets to cozy corners uptown, CrushBurg 
          is always nearby to serve you fresh, bold flavors. Find your nearest spot and 
          join the burger revolution!
        </p>
      </div>

      {/* Store sections */}
      <div className="space-y-16 mb-20">
        {stores.map((store, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={store.img}
                alt={store.name}
                className="w-full h-72 md:h-96 object-cover shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full bg-offwhite shadow-lg p-8">
              <h3 className="font-heading text-2xl md:text-3xl mb-4 italic text-red-600">
                {store.name}
              </h3>
              <p className="text-gray-700 mb-2">{store.address}</p>
              <p className="text-gray-700 mb-6">{store.hours}</p>
              <SlideButton value="Get Directions" url={store.link} />
            </div>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="relative w-full h-96 shadow-lg mb-20 overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.474044981623!2d81.0550897!3d26.888446600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be20a92400001%3A0xa97a979f8d9426af!2sCrown%20Mall%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1757293656044!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        ></iframe>
        <div className="absolute bottom-4 left-4">
          <SlideButton
            value="View Locations"
            url="https://www.google.com/maps/place/Crown+Mall,+Lucknow/"
          />
        </div>
      </div>

      {/* Visit Us */}
      <div className="text-center max-w-2xl mx-auto mb-20 bg-offwhite shadow-lg p-8">
        <h3 className="text-xl md:text-2xl mb-4 text-red-600 font-heading italic">
          Visit Us
        </h3>
        <p className="mb-2 font-sub font-semibold">
          Our friendly staff is ready to serve you at any of our locations.
        </p>
        <p className="text-gray-700">
          Open every day with delicious meals waiting for you!
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-offwhite shadow-lg p-10 text-center">
        <h3 className="text-2xl md:text-3xl mb-4 text-red-600 font-heading italic">
          Want CrushBurg in Your Area?
        </h3>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          We're expanding fast! Join our growing family of stores and bring the 
          CrushBurg experience to your community.
        </p>
        <SlideButton value="Franchise With Us" url="/contact" />
      </div>
    </section>
  );
};

export default Store;