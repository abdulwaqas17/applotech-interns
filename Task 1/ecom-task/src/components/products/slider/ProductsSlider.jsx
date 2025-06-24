
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// "use client";

// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Controller } from "swiper/modules";
// import Image from "next/image";
// import "swiper/css";

// const products = [
//   {
//     id: 1,
//     title: "Basic Colored Sweatpants",
//     image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg",
//     price: 19.99,
//     oldPrice: 25.99,
//     discount: "23% OFF",
//   },
//   {
//     id: 2,
//     title: "Basic Colored Sweatpants",
//     image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants2-500x750.jpeg",
//     price: 19.99,
//     oldPrice: 25.99,
//     discount: "23% OFF",
//   },
//   {
//     id: 3,
//     title: "Basic Colored Sweatpants",
//     image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants3-500x750.jpeg",
//     price: 19.99,
//     oldPrice: 25.99,
//     discount: "23% OFF",
//   },
//   {
//     id: 4,
//     title: "Basic Colored Sweatpants",
//     image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants4-500x750.jpeg",
//     price: 19.99,
//     oldPrice: 25.99,
//     discount: "23% OFF",
//   },
//   {
//     id: 5,
//     title: "High-Neck Puff Jacket",
//     image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg",
//     price: 89.99,
//   },
//   {
//     id: 6,
//     title: "High-Neck Puff Jacket",
//     image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic2-500x750.jpeg",
//     price: 89.99,
//   },
// ];

// export default function ProductsSlider() {
//   const [mainSwiper, setMainSwiper] = useState(null);
//   const [thumbSwiper, setThumbSwiper] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="flex flex-col md:flex-row gap-6 px-4 md:px-10 py-10 items-center">
//       {/* Main horizontal slider - images right to left */}
//       <div className="w-full md:w-2/3 h-[500px] flex items-center">
//         <Swiper
//           modules={[Autoplay, Controller]}
//           dir="rtl"
//           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//           controller={{ control: thumbSwiper }}
//           onSwiper={setMainSwiper}
//           loop={true}
//           autoplay={{ 
//             delay: 3000,
//             disableOnInteraction: false
//           }}
//           slidesPerView={4}
//           spaceBetween={20}
//           centeredSlides={false}
//           className="h-full !flex !items-center"
//         >
//           {products.map((product, index) => {
//             // Calculate position relative to active index
//             const position = (index - activeIndex + products.length) % products.length;
            
//             // Size and opacity based on position
//             let height, opacity;
//             if (position === 0) { // Rightmost (largest)
//               height = 500;
//               opacity = 1;
//             } else if (position === 1) {
//               height = 400;
//               opacity = 0.7;
//             } else if (position === 2) {
//               height = 300;
//               opacity = 0.5;
//             } else {
//               height = 200;
//               opacity = 0.3;
//             }

//             return (
//               <SwiperSlide key={product.id} className="!flex !items-center">
//                 <div
//                   style={{
//                     height: `${height}px`,
//                     opacity,
//                     transition: 'all 0.5s ease',
//                   }}
//                   className="w-full flex justify-center items-center"
//                 >
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     width={300}
//                     height={500}
//                     className="w-full h-full"
                  
//                   />
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>

//       {/* Vertical cart slider - shows current rightmost product in center */}
//       <div className="w-full md:w-1/3 h-[500px] overflow-hidden">
//         <Swiper
//           modules={[Controller]}
//           direction="vertical"
//           slidesPerView={3}
//           spaceBetween={10}
//           centeredSlides={true}
//           initialSlide={1}
//           onSwiper={setThumbSwiper}
//           controller={{ control: mainSwiper }}
//           className="h-full"
//         >
//           {products.map((product, index) => {
//             const isActive = index === activeIndex;
//             return (
//               <SwiperSlide key={product.id}>
//                 <div className={`bg-white p-4 rounded-lg flex gap-4 items-center h-full transition-all ${
//                   isActive ? 'border border-gray-300 scale-105' : 'opacity-50 scale-95'
//                 }`}>
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     width={80}
//                     height={120}
//                     className="rounded object-cover"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-sm">{product.title}</h4>
//                     <p className="text-gray-600 text-sm">${product.price}</p>
//                     {product.oldPrice && (
//                       <p className="text-xs text-gray-400 line-through">${product.oldPrice}</p>
//                     )}
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay"; // Ensure this is imported for Autoplay
import "swiper/css/controller"; // Ensure this is imported for Controller

const products = [
  {
    id: 1,
    title: "Basic Colored Sweatpants",
    image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg",
    price: 19.99,
    oldPrice: 25.99,
    discount: "23% OFF",
  },
  {
    id: 2,
    title: "Basic Colored Sweatpants",
    image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants2-500x750.jpeg",
    price: 19.99,
    oldPrice: 25.99,
    discount: "23% OFF",
  },
  {
    id: 3,
    title: "Basic Colored Sweatpants",
    image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants3-500x750.jpeg",
    price: 19.99,
    oldPrice: 25.99,
    discount: "23% OFF",
  },
  {
    id: 4,
    title: "Basic Colored Sweatpants",
    image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants4-500x750.jpeg",
    price: 19.99,
    oldPrice: 25.99,
    discount: "23% OFF",
  },
  {
    id: 5,
    title: "High-Neck Puff Jacket",
    image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg",
    price: 89.99,
  },
  {
    id: 6,
    title: "High-Neck Puff Jacket",
    image: "https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic2-500x750.jpeg",
    price: 89.99,
  },
];

export default function ProductsSlider() {
  const [mainSwiper, setMainSwiper] = useState(null);
  // We no longer need thumbSwiper state if it's just a display area
  // const [thumbSwiper, setThumbSwiper] = useState(null); 
  const [activeIndex, setActiveIndex] = useState(0);

  // Get the product currently designated as 'active' for display on the right side
  const activeProduct = products[activeIndex];

  return (
    <section className="flex flex-col md:flex-row gap-6 px-4 md:px-10 py-10 justify-between items-center">
      {/* Main horizontal slider - images right to left */}
      <div className="w-full md:w-[68%] h-[500px] flex items-center">
        <Swiper
          modules={[Autoplay, Controller]} // Still use Controller to track its index
          dir="rtl"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          // No need to control thumbSwiper here anymore, as it's not a Swiper
          // controller={{ control: thumbSwiper }} 
          onSwiper={setMainSwiper}
          loop={true}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: false
          }}
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={false}
          className="h-full !flex !items-center"
        >
          {products.map((product, index) => {
            // Calculate position relative to active index
            const position = (index - activeIndex + products.length) % products.length;
            
            // Size and opacity based on position (your original design)
            let height, opacity;
            if (position === 0) { // Rightmost (largest)
              height = 500;
              opacity = 1;
            } else if (position === 1) {
              height = 400;
              opacity = 0.7;
            } else if (position === 2) {
              height = 300;
              opacity = 0.5;
            } else {
              height = 200;
              opacity = 0.3;
            }

            return (
              <SwiperSlide key={product.id} className="!flex !items-center">
                <div
                  style={{
                    height: `${height}px`,
                    opacity,
                    transition: 'all 0.5s ease',
                  }}
                  className="w-[400px]"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={500}
                    className="w-full h-full"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Right-side display area for the active product's card */}
      <div className="w-full md:w-[350px] h-[400px] overflow-hidden flex items-center justify-center p-4">
  {activeProduct && ( // Ensure activeProduct exists before rendering
    <div
      key={activeProduct.id} // Key ensures React re-renders/transitions when activeProduct changes
      className={`bg-white rounded-lg shadow-md overflow-hidden
                  flex flex-col items-center text-center
                  w-full max-w-xs sm:max-w-sm
                    ease-in-out opacity-100
                  transform hover:scale-105 transition-transform duration-300`}
    >
      {/* Card Image - TOP */}
      <div className="relative w-full h-48 sm:h-64 bg-gray-50 flex items-center justify-center overflow-hidden">
        <Image
          src={activeProduct.image}
          alt={activeProduct.title}
          width={250} // Adjust width for card image
          height={350} // Adjust height for card image
          className="object-contain w-full h-full"
          priority // Prioritize loading for the main displayed product
        />
        {activeProduct.discount && (
          <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {activeProduct.discount}
          </span>
        )}
      </div>

      {/* Card Content - BELOW IMAGE */}
      <div className="p-4 w-full flex flex-col items-center">
        <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-1.5 truncate w-full px-2">
          {activeProduct.title}
        </h3>
        <div className="flex items-baseline mb-3">
          <p className="text-gray-900 font-bold text-xl sm:text-2xl mr-2">
            ${activeProduct.price.toFixed(2)}
          </p>
          {activeProduct.oldPrice && (
            <p className="text-gray-500 line-through text-sm sm:text-base">
              ${activeProduct.oldPrice.toFixed(2)}
            </p>
          )}
        </div>

        <button
          className="mt-2 w-full bg-gray-700 text-white py-2.5 px-6 rounded-md
                     hover:bg-gray-800 transition-colors duration-300
                     text-base font-medium shadow-sm"
        >
          View Details
        </button>
      </div>
    </div>
  )}
</div>
    </section>
  );
}