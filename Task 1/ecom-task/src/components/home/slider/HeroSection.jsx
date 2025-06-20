// // 'use client';

// // import Image from 'next/image';
// // import { useEffect } from 'react';
// // import 'swiper/css';
// // import Swiper from 'swiper'; // Import Swiper

// // export default function HeroSection() {
// //   useEffect(() => {
// //     const swiper = new Swiper('.swiper-container', {
// //       slidesPerView: 3,
// //       spaceBetween: 10,
// //       centeredSlides: true,
// //       loop: true,
// //       autoplay: {
// //         delay: 3000,
// //         disableOnInteraction: false,
// //       },
// //       breakpoints: {
// //         640: {
// //           slidesPerView: 1,
// //           spaceBetween: 10,
// //         },
// //         768: {
// //           slidesPerView: 2,
// //           spaceBetween: 20,
// //         },
// //         1024: {
// //           slidesPerView: 3,
// //           spaceBetween: 30,
// //         },
// //       },
// //     });

// //     return () => swiper.destroy();
// //   }, []);

// //   return (
// //     <section className="hero-section bg-gray-100 overflow-hidden">
// //       <div className="">
// //         <div className="flex flex-col items-center">
// //           {/* Box 1: Heading and Paragraph */}
// //           <div className="bg-white pt-[50px] text-center shadow-lg  w-full z-10 overflow-hidden">
// //             <h1 className=" bg-white text-3xl w-[35%] mx-auto md:text-4xl font-bold text-gray-800">Express Your Identity with Our Unique Style</h1>
// //           </div>
// //             <div className='rounded-b-[100%] w-full z-10 h-[160px] text-center bg-white'>
// //                 <p className="mt-6 text-gray-600 w-[35%] mx-auto">Showcase your true self with our distinctive footwear collection that blends style and individuality.</p>
// //             </div>

// //           {/* Box 2: Slider */}
// //           <div className="relative w-full max-w-[1000px] h-[400px] mt-[-70px]">
// //             <div className="swiper-container">
// //               <div className="swiper-wrapper">
// //                 <div className="swiper-slide">
// //                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 1" width={400} height={600} className="w-full  object-cover" />
// //                 </div>
// //                 <div className="swiper-slide">
// //                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 2" width={400} height={600} className="w-full  object-cover" />
// //                 </div>
// //                 <div className="swiper-slide">
// //                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 3" width={400} height={600} className="w-full  object-cover" />
// //                 </div>
// //                 <div className="swiper-slide">
// //                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 4" width={400} height={600} className="w-full  object-cover" />
// //                 </div>
// //                 <div className="swiper-slide">
// //                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 5" width={400} height={600} className="w-full  object-cover" />
// //                 </div>
// //                 <div className="swiper-slide">
// //                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 6" width={400} height={600} className="w-full  object-cover" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Box 3: Content */}
// //           <div className="bg-white p-6 text-center rounded-t-[50%] h-[200px] shadow-lg w-full  mt-[-40px] z-10">
// //             <p className="text-gray-600">10K+ Reviews from Satisfied Customers</p>
// //             <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">Explore More</button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// 'use client';

// import Image from 'next/image';
// import { useEffect } from 'react';
// import 'swiper/css';
// // It's good practice to import core Swiper modules even if not directly used in JS,
// // as they might be needed for certain features or internal workings.
// // For autoplay, sometimes core/bundle or specific modules are useful if you run into issues.
// // For now, your 'swiper/css' import is the most critical for basic functionality.
// import Swiper from 'swiper'; // Import Swiper

// export default function HeroSection() {
//   useEffect(() => {
//     const swiper = new Swiper('.swiper-container', {
//       // General Swiper settings
//       slidesPerView: 3, // Default for very large screens or if no breakpoint matches
//       spaceBetween: 10,
//       centeredSlides: true,
//       loop: true,
//       autoplay: {
//         delay: 3000, // Autoplay interval (3 seconds)
//         disableOnInteraction: false, // Continue autoplay even after user interaction (swipe, click)
//         // Adjust this for smoother start if needed, though default is usually fine
//         // pauseOnMouseEnter: true, // Optional: pause autoplay when mouse hovers over the slider
//       },
//       // Breakpoints for responsive behavior
//       breakpoints: {
//         // Mobile (0px to 639px)
//         0: {
//           slidesPerView: 1.5, // 1 full slide + half of the next
//           spaceBetween: 10,
//         },
//         // Small Tablets (640px to 767px)
//         640: {
//           slidesPerView: 2, // 2 full slides
//           spaceBetween: 15,
//         },
//         // Medium Tablets (768px to 1023px)
//         768: {
//           slidesPerView: 2.5, // 2 full slides + half of the next
//           spaceBetween: 20,
//         },
//         // Laptops/Desktops (1024px and up)
//         1024: {
//           slidesPerView: 3.5, // 3 full slides + half of the next (original requirement)
//           spaceBetween: 30,
//         },
//       },
//     });

//     // Cleanup function to destroy Swiper instance when component unmounts
//     return () => swiper.destroy();
//   }, []); // Empty dependency array ensures this effect runs only once after the initial render

//   return (
//     <section className="hero-section bg-gray-100 overflow-hidden">
//       <div className="">
//         <div className="flex flex-col items-center">
//           {/* Box 1: Heading and Paragraph */}
//           <div className="bg-white pt-[70px] text-center shadow-lg w-full z-10 overflow-hidden">
//             {/* Responsive Heading Width */}
//             <h1 className="bg-white text-3xl
//                            w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%]
//                            mx-auto md:text-4xl font-bold text-gray-800">
//               Express Your Identity with Our Unique Style
//             </h1>
//           </div>
//           <div className='rounded-b-[100%] w-full z-10 h-[150px] text-center bg-white'>
//             {/* Responsive Paragraph Width */}
//             <p className="mt-6 text-gray-600
//                           w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%]
//                           mx-auto">
//               Showcase your true self with our distinctive footwear collection that blends style and individuality.
//             </p>
//           </div>

//           {/* Box 2: Slider */}
//           {/* Adjusted max-w to be more flexible, h-[400px] can be responsive too if needed */}
//           <div className="relative w-full max-w-[1200px] h-[400px] mt-[-70px]">
//             <div className="swiper-container">
//               <div className="swiper-wrapper">
//                 {/* Ensure Next.js Image components are correctly sized within Swiper slides */}
//                 <div className="swiper-slide flex justify-center items-center">
//                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 1" width={400} height={600} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="swiper-slide flex justify-center items-center">
//                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 2" width={400} height={600} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="swiper-slide flex justify-center items-center">
//                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 3" width={400} height={600} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="swiper-slide flex justify-center items-center">
//                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 4" width={400} height={600} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="swiper-slide flex justify-center items-center">
//                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 5" width={400} height={600} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="swiper-slide flex justify-center items-center">
//                   <Image src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg" alt="Slide 6" width={400} height={600} className="w-full h-full object-cover" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Box 3: Content */}
//           <div className="bg-white p-6 text-center rounded-t-[50%] h-[200px] shadow-lg w-full mt-[-40px] z-10">
//             <p className="text-gray-600">10K+ Reviews from Satisfied Customers</p>
//             <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">Explore More</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function HeroSection() {
  return (
    <section className="hero-section bg-gray-100 overflow-hidden">
      <div className="flex flex-col items-center">

        {/* Heading */}
        <div className="bg-white pt-[70px] text-center shadow-lg w-full z-10 overflow-hidden">
          <h1 className="bg-white text-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto md:text-4xl font-bold text-gray-800">
            Express Your Identity with Our Unique Style
          </h1>
        </div>
        <div className='rounded-b-[100%] w-full z-10 h-[160px] text-center bg-white'>
          <p className="mt-6 text-gray-600 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto">
            Showcase your true self with our distinctive footwear collection that blends style and individuality.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative w-full md:h-[400px] md:mt-[-70px] ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
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
           <div className='h-[300px] md:h-full bg-amber-700'>
             {[...Array(6)].map((_, i) => (
              <SwiperSlide key={i} className="flex justify-center items-center">
                <Image
                  src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg"
                  alt={`Slide ${i + 1}`}
                  width={400}
                  height={600}
                  className="w-full  md:h-full object-cover"
                />
              </SwiperSlide>
            ))}
           </div>
          </Swiper>
        </div>

        {/* Bottom Content */}
        <div className="bg-white p-6 text-center rounded-t-[50%] h-[200px] shadow-lg w-full mt-[-40px] z-10">
          <p className="text-gray-600">10K+ Reviews from Satisfied Customers</p>
          <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
}
