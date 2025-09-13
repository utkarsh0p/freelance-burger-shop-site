import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ProductCarousel = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500 }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          440: { slidesPerView: 2 }, // small devices
          1024: { slidesPerView: 3 }, // tablets & desktops
          1280: { slidesPerView: 4 }, // large screens
        }}
        className="w-full h-auto overflow-visible [&_.swiper-pagination-bullet-active]:!bg-red-600 [&_.swiper-pagination]:!relative [&_.swiper-pagination]:!bottom-[-6px]"
      >
        <SwiperSlide>
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Burger 1"
            className="w-full h-full object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            alt="Burger 2"
            className="w-full h-full object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            alt="Burger 3"
            className="w-full h-full object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            alt="Burger 4"
            className="w-full h-full object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            alt="Burger 5"
            className="w-full h-full object-cover rounded-xl"
          />
        </SwiperSlide>

        {/* Pagination bullets */}
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* Custom navigation buttons */}
      <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 bg-red-600 text-white p-3 rounded-full shadow-lg z-10">
        <MoveLeft/>
      </button>
      <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white p-3 rounded-full shadow-lg z-10">
        <MoveRight/>
      </button>
    </div>
  );
};

export default ProductCarousel;
