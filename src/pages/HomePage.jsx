import React from "react";
import { heroBanner,crusburgBrandingCard } from "../constants";
import ProductCarousel from "../components/ProductCarousel.jsx";
const HomePage = () => {
  return (
    <div className="homepage primary-color font-body">
      <div
        className="banner w-[100%] h-[30vh] md:h-[50vh] lg:h-[70vh] bg-red-dark bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      ></div>

      {/* section one */}
      <section className="padding-responsive flex flex-col md:flex-row h-auto mb-18">
        {/* left div */}
        <div className="w-[100%] md:w-[49%] h-auto">
          <h1 className="text-2xl md:text-4xl text-black font-extrabold font-heading my-8">
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
            <h2 className="text-xl md:text-2xl text-black font-medium pb-4 font-heading my-4">
              Why People Love Us:
            </h2>
            <ul className="list-disc list-inside space-y-3 text-base md:text-lg">
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
    </div>
  );
};

export default HomePage;
