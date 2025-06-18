"use client";
// import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaHeart, FaEye, FaChevronLeft, FaChevronRight, FaExchangeAlt } from 'react-icons/fa';
import FeaturedProductCard from './FeaturedProductCard';
// import Image from 'next/image'; // Import Next.js Image
// import Link from 'next/link'; // Import Next.js Link

// Product data
const products = [
  {
    id: 271,
    title: 'Basic Colored Sweatpants With Hems',
    url: 'https://klbtheme.com/clotya/product/basic-colored-sweatpants-with-elastic-hems/',
    images: [
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants2-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants3-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/pants4-500x750.jpeg',
    ],
    price: { original: 25.90, current: 19.90 },
    sale: '24%',
    reviews: 2,
    sku: 'BE45VGRT',
    type: 'variable',
    inStock: true,
  },
  {
    id: 279,
    title: 'Basic High-Neck Puff Jacket',
    url: 'https://klbtheme.com/clotya/product/basic-high-neck-puff-jacket/',
    images: [
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic2-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic3-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic4-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic5-500x750.jpeg',
    ],
    price: { current: 89.00 },
    badge: 'Trending',
    reviews: 1,
    sku: 'SUAJK74',
    type: 'simple',
    inStock: false,
  },
  {
    id: 300,
    title: 'Basic Relax Fit Leggings',
    url: 'https://klbtheme.com/clotya/product/basic-relax-fit-leggings/',
    images: [
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings1-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings2-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings3-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/leggings4-500x750.jpeg',
    ],
    price: { original: 29.90, current: 24.90 },
    sale: '17%',
    reviews: 1,
    sku: 'BE45O8T',
    type: 'variable',
    inStock: true,
  },
  {
    id: 345,
    title: 'Check Overshirt With Pocket Detail',
    url: 'https://klbtheme.com/clotya/product/check-overshirt-with-pocket-detail/',
    images: [
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt1-500x750.jpg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt2-500x750.jpg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt3-500x750.jpg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/overshirt4-500x750.jpg',
    ],
    price: { original: 129.00, current: 112.00 },
    sale: '14%',
    reviews: 1,
    sku: 'BE45G8T',
    type: 'variable',
    inStock: true,
  },
  {
    id: 515,
    title: 'Rose Printed Hoodie',
    url: 'https://klbtheme.com/clotya/product/rose-printed-hoodie/',
    images: [
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh3-500x750.jpg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh4-500x750.jpg',
    ],
    price: { current: 110.99 },
    reviews: 1,
    sku: 'SRAK79',
    type: 'variable',
    inStock: true,
  },
  {
    id: 632,
    title: 'World Wide Cup Print T-Shirt',
    url: 'https://klbtheme.com/clotya/product/world-wide-cup-print-t-shirt/',
    images: [
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup1-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup2-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup3-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
    ],
    price: { original: 29.99, current: 23.99 },
    sale: '21%',
    reviews: 1,
    sku: 'SO7JK51',
    type: 'variable',
    inStock: true,
  },
  {
    id: 586,
    title: 'Sleeveless Ribbed Short Dress Black',
    url: 'https://klbtheme.com/clotya/product/sleeveless-ribbed-short-dress-black/',
    images: [
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack3-500x750.jpeg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack4-500x750.jpeg',
    ],
    price: { original: 19.99, current: 14.99 },
    sale: '26%',
    reviews: 1,
    sku: 'K8UOGRT',
    type: 'variable',
    inStock: true,
  },
  {
    id: 591,
    title: 'Slogan Hoodie With Label Detail',
    url: 'https://klbtheme.com/clotya/product/slogan-hoodie-with-label-detail/',
    images: [
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan1-500x750.jpg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan2-500x750.jpg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan3-500x750.jpg',
      'https://klbtheme.com/clotya/wp-content/uploads/2022/04/slogan4-500x750.jpg',
    ],
    price: { original: 18.99, current: 11.99 },
    sale: '37%',
    reviews: 1,
    sku: 'ZHAU8T',
    type: 'variable',
    inStock: true,
  },
];

// Custom arrow components for slider
const NextArrow = ({ className, onClick }) => (
  <div className={`${className} absolute top-1/2 -right-4 transform -translate-y-1/2 z-10`} onClick={onClick}>
    <FaChevronRight className="text-gray-600 text-xl" />
  </div>
);

const PrevArrow = ({ className, onClick }) => (
  <div className={`${className} absolute top-1/2 -left-4 transform -translate-y-1/2 z-10`} onClick={onClick}>
    <FaChevronLeft className="text-gray-600 text-xl" />
  </div>
);

// // Product card component
// const ProductCard = ({ product }) => {
//   const [currentImage, setCurrentImage] = useState(product.images[product.images.length - 1]);
//   const imageRef = useRef(null);

//   // Handle image change based on hover position
//   const handleImageHover = (e) => {
//     const rect = imageRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left; // X position within the image
//     const width = rect.width;
//     const sectionWidth = width / product.images.length; // Divide image width into equal sections
//     const imageIndex = Math.floor(x / sectionWidth); // Determine which section is hovered
//     if (imageIndex >= 0 && imageIndex < product.images.length) {
//       setCurrentImage(product.images[imageIndex]);
//     }
//   };

//   return (
//     <div className="px-3 group relative">
//       <div className="relative bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
//         {/* Product image and badges */}
//         <div className="relative">
//           {product.sale && (
//             <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
//               {product.sale}
//             </span>
//           )}
//           {product.badge && (
//             <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
//               {product.badge}
//             </span>
//           )}
//           {/* Image with hover effect based on width sections */}
//           <div className="relative overflow-hidden" onMouseMove={handleImageHover} ref={imageRef}>
//             <Link href={product.url}>
//               <Image
//                 src={currentImage}
//                 alt={product.title}
//                 width={500} // Specify width
//                 height={750} // Specify height
//                 className="w-full h-auto object-cover"
//                 style={{ aspectRatio: '500/750' }}
//               />
//             </Link>
//             {/* Image indicators */}
//             <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
//               {product.images.map((image, index) => (
//                 <div
//                   key={index}
//                   className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
//                     currentImage === image ? 'bg-gray-800' : 'bg-gray-400'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Action buttons */}
//           <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <Link
//               href={`/wishlist?product_id=${product.id}`}
//               className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
//               aria-label="Add to wishlist"
//             >
//               <FaHeart className="text-gray-600" />
//             </Link>
//             <Link
//               href={`/${product.id}`}
//               className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
//               aria-label="Quick view"
//             >
//               <FaEye className="text-gray-600" />
//             </Link>
//             <Link
//               href={`?add-to-compare=${product.id}`}
//               className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
//               aria-label="Compare"
//             >
//               <FaExchangeAlt className="text-gray-600" />
//             </Link>
//           </div>
//         </div>
//         {/* Product details with extended hover area */}
//         <div className="lg:absolute lg:bottom-[-30px] lg:left-[30px] lg:right-[30px] lg:bg-white lg:shadow-md p-1 md:p-4 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
//           <div className="flex items-center mb-2">
//             <FaStar className="text-yellow-400 text-sm" />
//             <span className="text-gray-600 text-sm ml-1">
//               {product.reviews} review{product.reviews > 1 ? 's' : ''}
//             </span>
//           </div>
//           <h3 className="text-base \ text-gray-900 mb-2 md:text-[1rem] text-[.7rem] font-light">
//             <Link href={product.url} className="hover:text-blue-600">
//               {product.title}
//             </Link>
//           </h3>
//           <div className="flex items-center text-[.8rem]">
//             {product.price.original && (
//               <span className="text-gray-500 line-through mr-2">${product.price.original.toFixed(2)}</span>
//             )}
//             <span className="text-gray-900 font-semibold">${product.price.current.toFixed(2)}</span>
//           </div>
//           {product.price.original && (
//             <span className="sr-only">
//               Original price was: ${product.price.original.toFixed(2)}. Current price is: ${product.price.current.toFixed(2)}.
//             </span>
//           )}

//           {product.type === 'variable' && (
//             <span className="sr-only">This product has multiple variants. The options may be chosen on the product page</span>
//           )}
//         </div>
//       </div>
//       {/* Invisible hover area to keep card visible */}
//       <div className="lg:h-20"></div>
//     </div>
//   );
// };

// Main featured products section
const FeaturedProductsSection = () => {
  // Slider settings with limited dots
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center">
          {dots.slice(0, 4).map((dot, index) => (
            <li key={index} className={dot.props.className}>
              {dot.props.children}
            </li>
          ))}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div>
              <ul className="flex justify-center">
                {dots.slice(0, 4).map((dot, index) => (
                  <li key={index} className={dot.props.className}>
                    {dot.props.children}
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div>
              <ul className="flex justify-center">
                {dots.slice(0, 3).map((dot, index) => (
                  <li key={index} className={dot.props.className}>
                    {dot.props.children}
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div>
              <ul className="flex justify-center">
                {dots.slice(0, 3).map((dot, index) => (
                  <li key={index} className={dot.props.className}>
                    {dot.props.children}
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="w-full">
          <Slider {...settings}>
            {products.map((product) => (
              <FeaturedProductCard key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;