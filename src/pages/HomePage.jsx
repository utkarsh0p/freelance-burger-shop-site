import React from "react";
import { heroBanner,crusburgBrandingCard } from "../constants";
import ProductCarousel from "../components/ProductCarousel.jsx";
const HomePage = () => {
  return (
    <div className="homepage primary-color font-body">
      <div
        className="banner w-[100%] h-[20vh] md:h-[50vh] lg:h-[70vh] bg-red-dark bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      ></div>

      {/* section one */}
      <section className="padding-responsive flex flex-col md:flex-row h-auto mb-18">
        {/* left div */}
        <div className="w-[100%] md:w-[49%] h-auto">
          <h1 className="text-2xl md:text-4xl text-black font-bold font-heading my-8">
            Welcome to CrushBurg — Where Cravings Get Crushed
          </h1>
          <p>
            At CrushBurg, every bite is built to impress. From flame-kissed
            burgers and smoky chicken wraps to gooey grilled sandwiches and
            crunchy sides, our menu balances comfort with bold flavor. Drop in
            for a quick lunch, a late-night feast, or a chilled hangout — we’ll
            bring the taste, you bring the appetite.
          </p>
          <div>
            <h2 className="text-xl md:text-2xl text-black font-medium font-heading my-4">
              Why People Love Us:
            </h2>
            <ul className="list-disc list-inside space-y-3 text-[14px] md:text-lg">
              <li>Juicy burgers stacked with fresh toppings</li>
              <li>Flavor-packed wraps and grilled sandwiches</li>
              <li>Perfect hangout spot for friends, late-night bites</li>
              <li>Quality ingredients sourced with care</li>
              <li>Events & offers that bring the community together</li>
            </ul>
          </div>
        </div>
        {/* right div */}
        <div className="w-full md:w-[49%] h-[30vh] md:h-[70vh]">
          <img src={crusburgBrandingCard} className="w-full h-full object-cover my-8"  alt=""/>
        </div>
      </section>
      
      {/* menu section */}
      <section className="w-full padding-responsive py-8 bg-offwhite">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl text-black font-bold font-heading">Our Menu</h1>
          <p>A menu crafted to satisfy every craving</p>
        </div>
         <ProductCarousel/>
      </section>

      <section className="w-full padding-responsive py-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl text-black font-bold font-heading">Our Stores</h1>
          <p>Closer than you think, may be nearer than you know</p>
        </div>
        <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-4">
          <div className="bg-red-600 h-50"></div>
          <div className="bg-red-600 h-50"></div>
          <div className="bg-red-600 h-50"></div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-red-dark text-white px-4 py-2 rounded-full mt-8 cursor-pointer">Locate nearby Stores</button>
        </div>

        <div className="my-8">
          <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 rounded-2xl overflow-hidden md:h-[80vh]">
            {/* Left Text Section */}
            <div className="bg-offwhite p-10 primary-color">
              <h1 className="mb-4 text-black text-2xl font-bold">
                From Our Grill to Your Plate
              </h1>
              <p className="mb-6 text-lg">
                Join the Crushburg family and be a part of the fastest-growing burger & wraps brand. 
                We serve more than food — we serve love, taste, and an experience worth coming back for.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Freshly grilled burgers & handcrafted wraps</li>
                <li>Easy franchise setup & full training support</li>
                <li>Proven business growth model</li>
                <li>Strong marketing & brand presence</li>
              </ul>
              <button className="mt-6 bg-red-dark text-white px-6 py-3 rounded-full font-semibold w-fit cursor-pointer">
                Apply For A Franchise
              </button>
            </div>
            {/* Right Image Section */}
            <div className="relative">
              <img 
                src={crusburgBrandingCard}
                alt="Crushburg Shop" 
                className="w-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
