// // components/TestimonialSection.jsx

// "use client";

// import Image from "next/image";
// import { FaArrowLeftLong, FaArrowRightLong, FaStar } from "react-icons/fa6";
// import { GoNorthStar } from "react-icons/go";

// export default function TestimonialSection() {
//   return (
//     <section className="relative w-full h-[700px]">
//       {/* Background Image (70% width, full height) */}
//       <div className="h-full w-[50%] ">
//         <Image
//           src="https://html.pixelfit.agency/pesco/assets/images/testimonial/testimonial-img1.png"
//           alt="Testimonial BG"
//           width={800}
//           height={500}
//           className="w-full h-full object-cover rounded-tr-[60px] rounded-br-[60px] "
//         />
//       </div>

//       {/* Overlay Container */}
//       <div className="absolute  inset-0 flex items-center justify-end mr-[60px]">
//         <div className="w-[57%] bg-white rounded-[60px] p-6 md:px-[90px] md:py-[70px]">
//           {/* Section Heading */}
//           <div className="text-center mb-6">
//             <div className="flex items-center justify-center gap-2 mb-2 text-sm text-pink-600 font-semibold">
//               <span>
//                 <GoNorthStar className="text-black" />
//               </span>
//               <span className=" tracking-wider"> Testimonial</span>
//             </div>
//             <h2 className="text-2xl md:text-4xl font-bold">
//               What’s our clients say
//             </h2>
//           </div>

//           {/* Testimonial Card */}
//           <div className="bg-white relative flex flex-col justify-center items-center px-[70px] py-[40px] rounded-[50px] text-center border border-dashed border-gray-300">
//             <ul className="flex gap-1">
//               {[...Array(5)].map((_, i) => (
//                 <li>
                
//                   <FaStar key={i} className="text-pink-600 text-xs mr-1" />
//                 </li>
//               ))}
//             </ul>
//             <p className=" leading-[25px] my-[25px] text-gray-700">
//               I recently ordered a few items from Fashionista Boutique, and I
//               couldn't be happier with my purchase! The quality of the clothes
//               is outstanding, and the fit is perfect. My order arrived promptly,
//               beautifully packaged.
//             </p>
//             <div className="flex items-center gap-4">
//               <Image
//                 src="https://html.pixelfit.agency/pesco/assets/images/testimonial/author-2.png"
//                 alt="Author"
//                 width={100}
//                 height={100}
//                 className="rounded-full"
//               />
//               <div>
//                 <h5 className="font-semibold text-gray-800">Rhodes Jhon</h5>
//                 <span className="text-sm text-gray-500">Manager and CEO</span>
//               </div>
//             </div>

//             {/* Previous Arrow */}
//             <div className="absolute left-[-25px] z-10"><button
//               className="prev slick-arrow relative w-[50px] h-[50px] border bg-white border-black rounded-full shadow-md flex items-center justify-center group cursor-pointer"
//               aria-label="Previous"
//             >
//               {/* Black dot that expands to full circle */}

//               <div className="absolute bottom-[5px] left-[0px] w-[10px] h-[10px] bg-black rounded-full group-hover:w-full group-hover:h-full group-hover:bottom-0 transition-all duration-300 ease-in-out"></div>

//               <FaArrowLeftLong className="text-gray-700 text-lg relative z-10 group-hover:text-white transition-colors duration-200" />
//             </button></div>
//             {/* Next Arrow */}
//             <div  className="absolute right-[-25px] z-10">
//                 <button
//               className="prev slick-arrow relative w-[50px] h-[50px] bg-white border border-black rounded-full shadow-md flex items-center justify-center group cursor-pointer"
//               aria-label="Previous"
//             >
//               {/* Black dot that expands to full circle */}

//               <div className="absolute top-[5px] right-[0px] w-[10px] h-[10px] bg-black rounded-full group-hover:w-full group-hover:h-full group-hover:top-0 transition-all duration-300 ease-in-out"></div>

//               <FaArrowRightLong className="text-gray-700 text-lg relative z-10 group-hover:text-white transition-colors duration-200" />
//             </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong, FaStar } from "react-icons/fa6";
import { GoNorthStar } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "I recently ordered a few items from Fashionista Boutique, and I couldn't be happier with my purchase! The quality of the clothes is outstanding, and the fit is perfect. My order arrived promptly, beautifully packaged.",
    author: "Rhodes Jhon",
    role: "Manager and CEO",
    image: "https://html.pixelfit.agency/pesco/assets/images/testimonial/author-2.png"
  },
  {
    id: 2,
    rating: 5,
    text: "The customer service at this store is exceptional. When I had an issue with my order, they resolved it immediately and went above and beyond to make sure I was satisfied. I'll definitely be shopping here again!",
    author: "Sarah Miller",
    role: "Marketing Director",
    image: "https://html.pixelfit.agency/pesco/assets/images/testimonial/author-2.png"
  },
  {
    id: 3,
    rating: 5,
    text: "As someone who's very particular about fabrics, I was pleasantly surprised by the high quality materials used in their clothing line. The designs are trendy yet timeless, and the prices are reasonable for the quality.",
    author: "Michael Chen",
    role: "Fashion Blogger",
    image: "https://html.pixelfit.agency/pesco/assets/images/testimonial/author-2.png"
  },
  {
    id: 4,
    rating: 5,
    text: "I've been a loyal customer for over two years now, and they never disappoint. Their seasonal collections are always on point, and I love that they offer petite and tall sizes for many of their items.",
    author: "Jessica Williams",
    role: "Interior Designer",
    image: "https://html.pixelfit.agency/pesco/assets/images/testimonial/author-2.png"
  }
];

export default function TestimonialSection() {
  return (
    <section className="relative w-full h-[700px] my-[60px] lg:my-[100px]">
      {/* Background Image (70% width, full height) */}
      <div className="h-full w-[50%] hidden lg:block">
        <Image
          src="https://html.pixelfit.agency/pesco/assets/images/testimonial/testimonial-img1.png"
          alt="Testimonial BG"
          width={800}
          height={500}
          className="w-full h-full object-cover rounded-tr-[60px] rounded-br-[60px]"
        />
      </div>

      {/* Overlay Container */}
      <div className="absolute inset-0 flex items-center justify-end lg:mr-[60px]">
        <div className="w-full lg:w-[57%] bg-white lg:rounded-[60px] px-[27px] py-[40px] md:px-[90px] md:py-[70px]">
          {/* Section Heading */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2 text-sm text-red-600 font-semibold">
              <span>
                <GoNorthStar className="text-black" />
              </span>
              <span className="tracking-wider">Testimonial</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold">
              What's our clients say
            </h2>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.testimonial-prev',
                nextEl: '.testimonial-next'
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              grabCursor={true}
              className="swiper-container"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white flex flex-col justify-center items-center px-[20px] md:px-[70px] py-[30px] md:py-[40px] rounded-[50px] text-center border border-dashed border-gray-300">
                    <ul className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <li key={i}>
                          <FaStar className="text-red-600 text-xs mr-1" />
                        </li>
                      ))}
                    </ul>
                    <p className="leading-[25px] my-[25px] text-[12px] md:text-[17px] text-gray-700">
                      {testimonial.text}
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div>
                        <h5 className="font-semibold text-gray-800">{testimonial.author}</h5>
                        <span className="text-sm text-gray-500">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <button className="testimonial-prev absolute left-[-25px] top-1/2 z-10 -translate-y-1/2">
              <div className="relative w-[50px] h-[50px] border bg-white border-black rounded-full shadow-md flex items-center justify-center group cursor-pointer">
                <div className="absolute bottom-[5px] left-[0px] w-[10px] h-[10px] bg-black rounded-full group-hover:w-full group-hover:h-full group-hover:bottom-0 transition-all duration-300 ease-in-out"></div>
                <FaArrowLeftLong className="text-gray-700 text-lg relative z-10 group-hover:text-white transition-colors duration-200" />
              </div>
            </button>
            <button className="testimonial-next absolute right-[-25px] top-1/2 z-10 -translate-y-1/2">
              <div className="relative w-[50px] h-[50px] bg-white border border-black rounded-full shadow-md flex items-center justify-center group cursor-pointer">
                <div className="absolute top-[5px] right-[0px] w-[10px] h-[10px] bg-black rounded-full group-hover:w-full group-hover:h-full group-hover:top-0 transition-all duration-300 ease-in-out"></div>
                <FaArrowRightLong className="text-gray-700 text-lg relative z-10 group-hover:text-white transition-colors duration-200" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}