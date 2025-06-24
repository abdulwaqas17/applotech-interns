"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });
console.log(dmSerif);

   let images = [
    'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg',
    'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup3-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
    ]

export default function HeroSection() {
  return (
    <section className="hero-section bg-white overflow-hidden">
      <div className="flex flex-col items-center relative">
        {/* Heading */}
        <div className="bg-white pt-[30px] md:pt-[70px] text-center w-full ">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] mx-auto ${dmSerif.className} font-bold` }
          >
            Express Your Identity with Our Unique Style
          </h1>
        </div>

        {/* Rounded bottom container */}
        <div className="rounded-b-[40%] md:rounded-b-[100%] w-full h-[160px] bg-white z-10">
          <p className="mt-6 text-center text-sm sm:text-base w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto">
            Showcase your true self with our distinctive footwear collection
            that blends style and individuality.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative w-full h-[300px] md:h-[400px] mt-[-60px] md:mt-[-80px]">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
            }}
          >
            {images.map((imgUrl,index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="w-[100%] sm:w-[100%] md:w-[100%] h-[350px] md:h-[700px] rounded-xl shadow-md">
                  <Image
                    src={imgUrl}
                    alt={`Slide ${index + 1}`}
                   fill
                    className="object-cover w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Content */}
        <div className="bg-white p-6 text-center md:rounded-t-[50%] rounded-t-[40%] h-[200px] shadow-lg w-full mt-[-40px] z-10">
          <p className="text-gray-600">10K+ Reviews from Satisfied Customers</p>
          <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
