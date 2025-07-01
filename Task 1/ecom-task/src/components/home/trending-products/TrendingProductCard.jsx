// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { FiShoppingBag } from "react-icons/fi";
// import { useState } from "react";

// export default function TrendingProductCard() {
//   const [isAddingToCart, setIsAddingToCart] = useState(false);

//   const handleAddToCart = () => {
//     setIsAddingToCart(true);
//     // Simulate API call
//     setTimeout(() => setIsAddingToCart(false), 1000);
//   };
//   return (
//     <div className="reel-video relative">
//       {/* Video Section */}
//       <div className="reel-video-wrapper mb-4">
//         <video
//           playsInline
//           autoPlay
//           loop
//           muted
//           preload="metadata"
//           poster="https://lume-demo1.myshopify.com/cdn/shop/files/preview_images/aaba7b1f4a3f4ea19656e68029e34644.thumbnail.0000000000_small.jpg?v=1747715556"
//           className="w-full h-auto rounded-lg"
//         >
//           <source
//             src="https://lume-demo1.myshopify.com/cdn/shop/videos/c/vp/aaba7b1f4a3f4ea19656e68029e34644/aaba7b1f4a3f4ea19656e68029e34644.HD-720p-1.6Mbps-47878281.mp4?v=0"
//             type="video/mp4"
//           />
//         </video>
//       </div>

//       <div className="product-content absolute inset-0 pb-[30px] px-[15px] lg:px-[30px] flex flex-col justify-end items-center">
//         <div className="flex items-center w-full">
//           {/* Left Side - Image (Hidden on larger screens) */}
//           <div className="w-[80px] lg:w-[80px] md:w-[60px] md:h-[60px] h-[80px] lg:h-[80px]">
//             <Image
//               src="https://lume-demo1.myshopify.com/cdn/shop/files/pro-13.jpg?v=1744180128&width=200"
//               alt="Classic top"
//               width={200}
//               height={200}
//               className="w-full h-full rounded"
//               loading="lazy"
//             />
//           </div>

//           {/* Right Side - Details */}
//           <div className=" ml-[15px]">
//             <h6 className="mb-1">
//               <Link
//                 href="/products/classic-top"
//                 className="text-white font-bold hover:text-blue-500 md:text-[20px] text-[25px]"
//               >
//                 Classic Top
//               </Link>
//             </h6>

//             {/* Price */}
//             <div className="price-box lg:text-xl font-bold">
//               <span className="new-price text-gray-600 mr-2">
//                 $32.00
//               </span>
//               <span className="old-price text-gray-400 line-through text-sm">
//                 $37.00
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Add to Cart Button */}
//         <div className="product-action w-full mt-[20px] ">
//           <button
//             onClick={handleAddToCart}
//             disabled={isAddingToCart}
//             className="quick-add-btn w-full bg-black text-white py-2 px-3 rounded-[20px] hover:bg-gray-800 transition-colors cursor-pointer"
//           >
//             {isAddingToCart ? (
//               <span className="spinner-border animate-spin border-2 border-white border-t-transparent rounded-full flex"></span>
//             ) : (
//               <>
               
//                 <span className="title">Add to cart</span>
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { useState } from "react";

export default function TrendingProductCard({ product }) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    // Simulate API call
    setTimeout(() => setIsAddingToCart(false), 1000);
  };

  return (
    <div className="reel-video relative">
      {/* Video Section */}
      <div className="reel-video-wrapper mb-4">
        <video
          playsInline
          autoPlay
          loop
          muted
          preload="metadata"
          poster={product.posterSrc}
          className="w-full h-auto rounded-lg"
        >
          <source
            src={product.videoSrc}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="product-content absolute inset-0 pb-[30px] px-[15px] lg:px-[30px] flex flex-col justify-end items-center">
        <div className="flex items-center w-full cursor-pointer">
          {/* Left Side - Image */}
          <div className="w-[80px] lg:w-[80px] md:w-[60px] md:h-[60px] h-[80px] lg:h-[80px] ">
            <Image
              src={product.productImage}
              alt={product.title}
              width={200}
              height={200}
              className="w-full h-full rounded hover:shadow-gray-600 hover:shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* Right Side - Details */}
          <div className="ml-[15px]">
            <h6 className="mb-1">
              <Link
                href={product.productLink}
                className="text-white font-bold hover:text-blue-500 md:text-[20px] text-[25px]"
              >
                {product.title}
              </Link>
            </h6>

            {/* Price */}
            <div className="price-box lg:text-xl font-bold">
              <span className="new-price text-gray-600 mr-2">
                {product.price}
              </span>
              <span className="old-price text-gray-400 line-through text-sm">
                {product.oldPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="product-action w-full mt-[20px]">
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className="quick-add-btn w-full bg-black text-white py-2 px-3 rounded-[20px] hover:bg-white hover:text-black  transition-colors cursor-pointer"
          >
            {isAddingToCart ? (
              <span className="spinner-border animate-spin border-2 border-white border-t-transparent rounded-full flex"></span>
            ) : (
              <>
                <span className="title">Add to cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}