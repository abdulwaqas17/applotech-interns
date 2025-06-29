// "use client";
// // import React, { useState, useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaStar, FaHeart, FaEye, FaChevronLeft, FaChevronRight, FaExchangeAlt } from 'react-icons/fa';
// import FeaturedProductCard from './FeaturedProductCard';
// // import Image from 'next/image'; // Import Next.js Image
// // import Link from 'next/link'; // Import Next.js Link

// // Product data
// const products = [
//   {
//     id: 271,
//     title: 'Basic Colored Sweatpants With Hems',
//     url: 'https://klbtheme.com/clotya/product/basic-colored-sweatpants-with-elastic-hems/',
//     images: [
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants2-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants3-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants4-500x750.jpeg',
//     ],
//     price: { original: 25.90, current: 19.90 },
//     sale: '24%',
//     reviews: 2,
//     sku: 'BE45VGRT',
//     type: 'variable',
//     inStock: true,
//   },
//   {
//     id: 279,
//     title: 'Basic High-Neck Puff Jacket',
//     url: 'https://klbtheme.com/clotya/product/basic-high-neck-puff-jacket/',
//     images: [
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic2-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic3-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic4-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic5-500x750.jpeg',
//     ],
//     price: { current: 89.00 },
//     badge: 'Trending',
//     reviews: 1,
//     sku: 'SUAJK74',
//     type: 'simple',
//     inStock: false,
//   },
//   {
//     id: 300,
//     title: 'Basic Relax Fit Leggings',
//     url: 'https://klbtheme.com/clotya/product/basic-relax-fit-leggings/',
//     images: [
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings1-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings2-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings3-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings4-500x750.jpeg',
//     ],
//     price: { original: 29.90, current: 24.90 },
//     sale: '17%',
//     reviews: 1,
//     sku: 'BE45O8T',
//     type: 'variable',
//     inStock: true,
//   },
//   {
//     id: 345,
//     title: 'Check Overshirt With Pocket Detail',
//     url: 'https://klbtheme.com/clotya/product/check-overshirt-with-pocket-detail/',
//     images: [
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt1-500x750.jpg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt2-500x750.jpg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt3-500x750.jpg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt4-500x750.jpg',
//     ],
//     price: { original: 129.00, current: 112.00 },
//     sale: '14%',
//     reviews: 1,
//     sku: 'BE45G8T',
//     type: 'variable',
//     inStock: true,
//   },
//   {
//     id: 515,
//     title: 'Rose Printed Hoodie',
//     url: 'https://klbtheme.com/clotya/product/rose-printed-hoodie/',
//     images: [
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh3-500x750.jpg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh4-500x750.jpg',
//     ],
//     price: { current: 110.99 },
//     reviews: 1,
//     sku: 'SRAK79',
//     type: 'variable',
//     inStock: true,
//   },
//   {
//     id: 632,
//     title: 'World Wide Cup Print T-Shirt',
//     url: 'https://klbtheme.com/clotya/product/world-wide-cup-print-t-shirt/',
//     images: [
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup1-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup2-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup3-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
//     ],
//     price: { original: 29.99, current: 23.99 },
//     sale: '21%',
//     reviews: 1,
//     sku: 'SO7JK51',
//     type: 'variable',
//     inStock: true,
//   },
//   {
//     id: 586,
//     title: 'Sleeveless Ribbed Short Dress Black',
//     url: 'https://klbtheme.com/clotya/product/sleeveless-ribbed-short-dress-black/',
//     images: [
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack3-500x750.jpeg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack4-500x750.jpeg',
//     ],
//     price: { original: 19.99, current: 14.99 },
//     sale: '26%',
//     reviews: 1,
//     sku: 'K8UOGRT',
//     type: 'variable',
//     inStock: true,
//   },
//   {
//     id: 591,
//     title: 'Slogan Hoodie With Label Detail',
//     url: 'https://klbtheme.com/clotya/product/slogan-hoodie-with-label-detail/',
//     images: [
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan1-500x750.jpg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan2-500x750.jpg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan3-500x750.jpg',
//       'https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan4-500x750.jpg',
//     ],
//     price: { original: 18.99, current: 11.99 },
//     sale: '37%',
//     reviews: 1,
//     sku: 'ZHAU8T',
//     type: 'variable',
//     inStock: true,
//   },
// ];

// // Custom arrow components for slider
// const NextArrow = ({ className, onClick }) => (
//   <div className={`${className} absolute top-1/2 -right-4 transform -translate-y-1/2 z-10`} onClick={onClick}>
//     <FaChevronRight className="text-gray-600 text-xl" />
//   </div>
// );

// const PrevArrow = ({ className, onClick }) => (
//   <div className={`${className} absolute top-1/2 -left-4 transform -translate-y-1/2 z-10`} onClick={onClick}>
//     <FaChevronLeft className="text-gray-600 text-xl" />
//   </div>
// );

// // Main featured products section
// const FeaturedProductsSection = () => {
//   // Slider settings with limited dots
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     arrows: true,
//     appendDots: (dots) => (
//       <div>
//         <ul className="flex justify-center">
//           {dots.slice(0, 4).map((dot, index) => (
//             <li key={index} className={dot.props.className}>
//               {dot.props.children}
//             </li>
//           ))}
//         </ul>
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           appendDots: (dots) => (
//             <div>
//               <ul className="flex justify-center">
//                 {dots.slice(0, 4).map((dot, index) => (
//                   <li key={index} className={dot.props.className}>
//                     {dot.props.children}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ),
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           appendDots: (dots) => (
//             <div>
//               <ul className="flex justify-center">
//                 {dots.slice(0, 3).map((dot, index) => (
//                   <li key={index} className={dot.props.className}>
//                     {dot.props.children}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ),
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           appendDots: (dots) => (
//             <div>
//               <ul className="flex justify-center">
//                 {dots.slice(0, 3).map((dot, index) => (
//                   <li key={index} className={dot.props.className}>
//                     {dot.props.children}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ),
//         },
//       },
//     ],
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <section className="py-8 px-4 sm:px-6 lg:px-8">
//       <div className="container mx-auto max-w-7xl">
//         <div className="w-full">
//           <Slider {...settings}>
//             {products.map((product) => (
//               <FeaturedProductCard key={product.id} product={product} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProductsSection;
"use client";

import { useState } from "react";
import { GoNorthStar } from "react-icons/go";
import ProductCard from "./FeaturedProductCard";
import SectionBar from "../bar/SectionBar";

const FeaturedProductsSection = () => {
  const [activeTab, setActiveTab] = useState("cat1");
  return (
    <div className="px-[20px] md:px-[30px] mt-[60px] mb-[20px] lg:mt-[100px] lg:mb-[60px]">

     <div className="container mx-auto">
       {/* Section Bar  */}
      <SectionBar category="Feature Products" heading="Our Feature Products" option={
         <ul
            className="nav nav-tabs w-[100%] lg:w-[65%] flex justify-center border rounded-[25px] p-[6px] border-black"
            role="tablist"
          >
            <li className="mr-1">
              <button
                className={`nav-link px-4 py-2 text-[13px] lg:text-[16px] ${
                  activeTab === "cat1"
                    ? "rounded-[25px] text-white bg-black "
                    : "border-transparent text-black"
                }`}
                onClick={() => setActiveTab("cat1")}
                role="tab"
                aria-selected={activeTab === "cat1"}
              >
                Best Sellers
              </button>
            </li>
            <li className="mr-1">
              <button
                className={`nav-link px-4 py-2 text-[13px] lg:text-[16px] ${
                  activeTab === "cat2"
                    ? "rounded-[25px] text-white bg-black"
                    : "border-transparent text-black"
                }`}
                onClick={() => setActiveTab("cat2")}
                role="tab"
                aria-selected={activeTab === "cat2"}
              >
                New Products
              </button>
            </li>
            <li className="mr-1">
              <button
                className={`nav-link px-4 py-2 text-[13px] lg:text-[16px] ${
                  activeTab === "cat3"
                    ? "rounded-[25px] text-white bg-black"
                    : "border-transparent text-black"
                }`}
                onClick={() => setActiveTab("cat3")}
                role="tab"
                aria-selected={activeTab === "cat3"}
              >
                Sale Products
              </button>
            </li>
           
          </ul>
      }/>

      <div className="flex flex-wrap justify-between">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
     
      </div>
     </div>

    </div>
  );
};

export default FeaturedProductsSection;
