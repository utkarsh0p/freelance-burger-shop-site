import React from "react";
import SlideButton from "../components/SlideButton";
import { shop1, shop4 } from "../constants";

const Store = () => {
  const stores = [
    {
      name: "CrushBurg - Antas Mall",
      address:
        "Antas Shopping Mall & Multiplex, 1/23, Vardan Khand, Sector 1, Gomti Nagar, Makhdoom Pur, Lucknow, Uttar Pradesh 226010",
      hours: "Mon-Sun: 10am - 10pm",
      img: shop4,
      link: "https://maps.app.goo.gl/F8Yws6k11H64R5Qi9",
      embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1165454419606!2d81.0020255!3d26.836245200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be31dba0ac875%3A0xf19bf79fa8163041!2sCrushBurg!5e0!3m2!1sen!2sin!4v1758106580789!5m2!1sen!2sin",
    },
    {
      name: "CrushBurg - Indira Nagar",
      address:
        "UGF, Bhawani, Meena Market, Liberty Colony Park, Indira Nagar, Lucknow, Uttar Pradesh 226016",
      hours: "Mon-Sun: 11am - 11pm",
      img: shop1,
      link: "https://maps.app.goo.gl/mNM34hANXA2bq9u37",
      embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8171785023615!2d80.9763033!3d26.877548999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4044cd7bd7%3A0x93a6f8c769605264!2sCrushBurg!5e0!3m2!1sen!2sin!4v1758106333320!5m2!1sen!2sin",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-responsive bg-white font-body">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold md:text-4xl mb-4 text-red-600 font-heading">
          Our Stores
        </h2>
        <p className="para text-md md:text-lg leading-relaxed">
          From sizzling grills in downtown streets to cozy corners uptown,
          CrushBurg is always nearby to serve you fresh, bold flavors. Find your
          nearest spot and join the burger revolution!
        </p>
      </div>

      {/* Store sections */}
      <div className="space-y-20 mb-20">
        {stores.map((store, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-10 items-start ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={store.img}
                alt={store.name}
                className="w-full h-80 md:h-[420px] object-cover shadow-lg rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full bg-offwhite shadow-lg p-8 rounded-xl flex flex-col">
              <h3 className="font-heading text-2xl md:text-3xl mb-4 text-red-600">
                {store.name}
              </h3>
              <p className="text-gray-700 mb-2">{store.address}</p>
              <p className="text-gray-700 mb-6">{store.hours}</p>
              <SlideButton value="Get Directions" url={store.link} />

              {/* Embedded map */}
              <div className="mt-6 w-full h-64 shadow-md">
                <iframe
                  src={store.embed}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Visit Us */}
      <div className="text-center max-w-2xl mx-auto mb-20 bg-offwhite shadow-lg p-8 rounded-xl">
        <h3 className="text-xl md:text-2xl mb-4 text-red-600 font-heading">
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
      <div className="bg-offwhite shadow-lg p-10 text-center rounded-xl">
        <h3 className="text-2xl md:text-3xl mb-4 text-red-600 font-heading">
          Want CrushBurg in Your Area?
        </h3>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          We're expanding fast! Join our growing family of stores and bring the
          CrushBurg experience to your community.
        </p>
        <SlideButton value="Franchise With Us" url="/franchise" />
      </div>
    </section>
  );
};

export default Store;

