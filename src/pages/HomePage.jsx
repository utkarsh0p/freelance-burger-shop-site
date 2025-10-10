import React from "react";
import {
  heroBanner,
  crusburgBrandingCard,
  shop,
  shop1,
  shop2,
  shop3,
  shop4,
  shopAiImage,
  shopAiImage2,
} from "../constants";
import ProductCarousel from "../components/ProductCarousel.jsx";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage primary-color">
      <div
        className="banner w-[100%] h-[23vh] md:h-[50vh] lg:h-[70vh] bg-red-dark bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      ></div>

      {/* section one */}
      <section className="padding-responsive flex flex-col md:flex-row h-auto mb-18">
        {/* left div */}
        <div className="w-[100%] md:w-[49%] h-auto">
          <h1 className="text-xl md:text-3xl text-black font-bold font-heading mt-8 mb-4">
            Welcome to CrushBurg
          </h1>
          <p>
            At CrushBurg, every bite is built to impress. From flame-kissed
            burgers and smoky chicken wraps to gooey grilled sandwiches and
            crunchy sides, our menu balances comfort with bold flavor.
          </p>
          <div>
            <h2 className="text-lg md:text-xl text-black font-medium font-heading my-4">
              Why People Love Us:
            </h2>
            <ul className="list-disc list-inside space-y-3 text-[14px] md:text-[16px]">
              <li>Juicy burgers stacked with fresh toppings</li>
              <li>Flavor-packed wraps and grilled sandwiches</li>
              <li>Perfect hangout spot for friends, late-night bites</li>
              <li>Quality ingredients sourced with care</li>
              <li>Exciting events & offers.</li>
            </ul>
          </div>
        </div>
        {/* right div */}
        <div className="w-full md:w-[49%] h-[40vh] md:h-[70vh]">
          <img
            src={shopAiImage}
            className="w-full h-full object-cover my-8"
            alt="Image-shop"
          />
        </div>
      </section>

      {/* menu section */}
      <section className="w-full padding-responsive py-8 bg-offwhite">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-xl md:text-3xl text-black font-bold font-heading">
            Our Menu
          </h1>
          <p>A menu crafted to satisfy every craving</p>
        </div>
        <ProductCarousel />
      </section>

      {/* shores section */}
      <section className="w-full pl-3 pr-3 py-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="heading text-black font-bold font-heading">
            Our Stores
          </h1>
          <p>Closer than you think</p>
        </div>
        <div className="grid grid-cols-[repeat(2,minmax(45vw,1fr))] md:grid-cols-[repeat(3,minmax(0,1fr))] gap-4">
          <div className="bg-red-600 h-auto md:hidden">
            <img
              src={shop4}
              alt="shop-picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-red-600 h-auto">
            <img
              src={shop2}
              alt="shop-picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-red-600 h-auto">
            <img
              src={shop1}
              alt="shop-picture"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="bg-red-600 h-auto">
            <img
              src={shop3}
              alt="shop-picture"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-red-dark text-white px-4 py-2 rounded-full mt-8 cursor-pointer para"
            onClick={() => navigate("/store")}
          >
            Locate nearby Stores
          </button>
        </div>

        <div className="mt-8 md:mt-24">
          <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1  overflow-hidden md:h-[80vh]">
            {/* Left Text Section */}
            <div className="bg-offwhite p-10 primary-color">
              <h1 className="mb-4 text-black text-xl md:text-3xl font-bold">
                From Our Grill to Your Plate
              </h1>
              <p className="mb-6">
                Join the Crushburg family and be a part of the fastest-growing
                burger & wraps brand.
              </p>
              <ul className="list-disc list-inside para space-y-2">
                <li>Freshly grilled burgers and wraps</li>
                <li>Easy franchise setup & full support</li>
                <li>Proven business growth model</li>
                <li>Strong marketing & brand presence</li>
              </ul>
              <button className="mt-6 bg-red-dark py-2 text-white px-6 md:py-3 rounded-full font-semibold w-fit cursor-pointer para">
                Apply For A Franchise
              </button>
            </div>
            {/* Right Image Section */}
            <div className="relative">
              <img
                src={shopAiImage2}
                alt="Crushburg Shop"
                className="w-full h-full object-fit"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
