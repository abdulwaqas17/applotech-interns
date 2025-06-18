"use client";
import React, { useState, useRef } from 'react';
import { FaStar, FaHeart, FaEye, FaChevronLeft, FaChevronRight, FaExchangeAlt } from 'react-icons/fa';
import Image from 'next/image'; // Import Next.js Image
import Link from 'next/link'; // Import Next.js Link


// Product card component
const FeaturedProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.images[product.images.length - 1]);
  const imageRef = useRef(null);

  // Handle image change based on hover position
  const handleImageHover = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within the image
    const width = rect.width;
    const sectionWidth = width / product.images.length; // Divide image width into equal sections
    const imageIndex = Math.floor(x / sectionWidth); // Determine which section is hovered
    if (imageIndex >= 0 && imageIndex < product.images.length) {
      setCurrentImage(product.images[imageIndex]);
    }
  };

  return (
    <div className="px-3 group relative">
      <div className="relative bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Product image and badges */}
        <div className="relative">
          {product.sale && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {product.sale}
            </span>
          )}
          {product.badge && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {product.badge}
            </span>
          )}
          {/* Image with hover effect based on width sections */}
          <div className="relative overflow-hidden" onMouseMove={handleImageHover} ref={imageRef}>
            <Link href={product.url}>
              <Image
                src={currentImage}
                alt={product.title}
                width={500} // Specify width
                height={750} // Specify height
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '500/750' }}
              />
            </Link>
            {/* Image indicators */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                    currentImage === image ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Action buttons */}
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              href={`/wishlist?product_id=${product.id}`}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
              aria-label="Add to wishlist"
            >
              <FaHeart className="text-gray-600" />
            </Link>
            <Link
              href={`/${product.id}`}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
              aria-label="Quick view"
            >
              <FaEye className="text-gray-600" />
            </Link>
            <Link
              href={`?add-to-compare=${product.id}`}
              className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
              aria-label="Compare"
            >
              <FaExchangeAlt className="text-gray-600" />
            </Link>
          </div>
        </div>
        {/* Product details with extended hover area */}
        <div className="lg:absolute lg:bottom-[-30px] lg:left-[30px] lg:right-[30px] lg:bg-white lg:shadow-md p-1 md:p-4 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
          <div className="flex items-center mb-2">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-gray-600 text-sm ml-1">
              {product.reviews} review{product.reviews > 1 ? 's' : ''}
            </span>
          </div>
          <h3 className="text-base \ text-gray-900 mb-2 md:text-[1rem] text-[.7rem] font-light">
            <Link href={product.url} className="hover:text-blue-600">
              {product.title}
            </Link>
          </h3>
          <div className="flex items-center text-[.8rem]">
            {product.price.original && (
              <span className="text-gray-500 line-through mr-2">${product.price.original.toFixed(2)}</span>
            )}
            <span className="text-gray-900 font-semibold">${product.price.current.toFixed(2)}</span>
          </div>
          {product.price.original && (
            <span className="sr-only">
              Original price was: ${product.price.original.toFixed(2)}. Current price is: ${product.price.current.toFixed(2)}.
            </span>
          )}

          {product.type === 'variable' && (
            <span className="sr-only">This product has multiple variants. The options may be chosen on the product page</span>
          )}
        </div>
      </div>
      {/* Invisible hover area to keep card visible */}
      <div className="lg:h-20"></div>
    </div>
  );
};

export default FeaturedProductCard;