// import React from 'react'
// import SectionBar from '../bar/SectionBar'
// import Arrows from '@/components/commons/arrows/Arrows'
// import TrendingProductCard from './TrendingProductCard'

// const TrendingProducts = () => {
//   return (
//     <div className='px-[20px] md:px-[30px]'>
//       <div className='container mx-auto'>

//         <SectionBar category="Trending Products" heading="What's Trending Now" option={<Arrows/>}/>

//         <div className="flex justify-between">
//           <TrendingProductCard/>
//           <TrendingProductCard/>
//           <TrendingProductCard/>
//           <TrendingProductCard/>
//         </div>
      
//     </div>
//     </div>
//   )
// }

// export default TrendingProducts


// components/trending-products/TrendingProducts.jsx
'use client';
import React, { useRef } from 'react';
import SectionBar from '../bar/SectionBar';
import Arrows from '@/components/commons/arrows/Arrows';
import TrendingProductCard from './TrendingProductCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const videoProducts = [
  {
    videoSrc: "https://lume-demo1.myshopify.com/cdn/shop/videos/c/vp/ff922f36ddba493f877582a724aa70f8/ff922f36ddba493f877582a724aa70f8.HD-720p-1.6Mbps-47878278.mp4?v=0",
    posterSrc: "https://lume-demo1.myshopify.com/cdn/shop/files/preview_images/ff922f36ddba493f877582a724aa70f8.thumbnail.0000000000_small.jpg?v=1747715562",
    productImage: "https://lume-demo1.myshopify.com/cdn/shop/files/pro-69.jpg?v=1744180043&width=200",
    title: "Knitted top",
    price: "$22.00",
    oldPrice: "$30.00",
    productLink: "/products/knitted-vest-top"
  },
  {
    videoSrc: "https://lume-demo1.myshopify.com/cdn/shop/videos/c/vp/09ba2f80d0724f99bfb645e50ea44ce5/09ba2f80d0724f99bfb645e50ea44ce5.HD-720p-2.1Mbps-47878640.mp4?v=0",
    posterSrc: "https://lume-demo1.myshopify.com/cdn/shop/files/preview_images/09ba2f80d0724f99bfb645e50ea44ce5.thumbnail.0000000000_small.jpg?v=1747716392",
    productImage: "https://lume-demo1.myshopify.com/cdn/shop/files/pro-13.jpg?v=1744180128&width=200",
    title: "Classic top",
    price: "$32.00",
    oldPrice: "$37.00",
    productLink: "/products/classic-top"
  },
  {
    videoSrc: "https://lume-demo1.myshopify.com/cdn/shop/videos/c/vp/aaba7b1f4a3f4ea19656e68029e34644/aaba7b1f4a3f4ea19656e68029e34644.HD-720p-1.6Mbps-47878281.mp4?v=0",
    posterSrc: "https://lume-demo1.myshopify.com/cdn/shop/files/preview_images/aaba7b1f4a3f4ea19656e68029e34644.thumbnail.0000000000_small.jpg?v=1747715556",
    productImage: "https://lume-demo1.myshopify.com/cdn/shop/files/pro-demo-5-33.jpg?v=1744179961&width=200",
    title: "Collar shirt",
    price: "$21.00",
    oldPrice: "$30.00",
    productLink: "/products/spread-collar-shirt"
  },
  {
    videoSrc: "https://lume-demo1.myshopify.com/cdn/shop/videos/c/vp/5aa29196ca1f4dce9275e9bfce7de2ed/5aa29196ca1f4dce9275e9bfce7de2ed.HD-720p-1.6Mbps-47878282.mp4?v=0",
    posterSrc: "https://lume-demo1.myshopify.com/cdn/shop/files/preview_images/5aa29196ca1f4dce9275e9bfce7de2ed.thumbnail.0000000000_small.jpg?v=1747715562",
    productImage: "https://lume-demo1.myshopify.com/cdn/shop/files/pro-demo-5-52.jpg?v=1744179924&width=200",
    title: "Jacket",
    price: "$33.00",
    oldPrice: "$40.00",
    productLink: "/products/standard-jacket"
  },
    {
    videoSrc: "https://lume-demo1.myshopify.com/cdn/shop/videos/c/vp/09ba2f80d0724f99bfb645e50ea44ce5/09ba2f80d0724f99bfb645e50ea44ce5.HD-720p-2.1Mbps-47878640.mp4?v=0",
    posterSrc: "https://lume-demo1.myshopify.com/cdn/shop/files/preview_images/09ba2f80d0724f99bfb645e50ea44ce5.thumbnail.0000000000_small.jpg?v=1747716392",
    productImage: "https://lume-demo1.myshopify.com/cdn/shop/files/pro-13.jpg?v=1744180128&width=200",
    title: "Classic top",
    price: "$32.00",
    oldPrice: "$37.00",
    productLink: "/products/classic-top"
  },
  // {
  //   videoSrc: "https://lume-demo1.myshopify.com/cdn/shop/videos/c/vp/b25a65052d5144c4aba2da96f861a8fa/b25a65052d5144c4aba2da96f861a8fa.HD-720p-1.6Mbps-47878879.mp4?v=0",
  //   posterSrc: "https://lume-demo1.myshopify.com/cdn/shop/files/preview_images/b25a65052d5144c4aba2da96f861a8fa.thumbnail.0000000000_small.jpg?v=1747716938",
  //   productImage: "https://lume-demo1.myshopify.com/cdn/shop/files/pro-63.jpg?v=1744180054&width=200",
  //   title: "Basic t-shirt",
  //   price: "$32.00",
  //   oldPrice: "$40.00",
  //   productLink: "/products/lyocell-resort-shirt"
  // },
  // {
  //   videoSrc: "https://lume-demo1.myshopify.com/cdn/shop/videos/c/vp/31e1835915394dcda306370e668ccaf1/31e1835915394dcda306370e668ccaf1.HD-720p-1.6Mbps-47878284.mp4?v=0",
  //   posterSrc: "https://lume-demo1.myshopify.com/cdn/shop/files/preview_images/31e1835915394dcda306370e668ccaf1.thumbnail.0000000000_small.jpg?v=1747715563",
  //   productImage: "https://lume-demo1.myshopify.com/cdn/shop/files/pro-7.jpg?v=1744180063&width=200",
  //   title: "Denim shorts",
  //   price: "$25.00",
  //   oldPrice: "$30.00",
  //   productLink: "/products/casual-shirt"
  // }
];

const TrendingProducts = () => {
  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className='px-[20px] md:px-[30px]'>
      <div className='container mx-auto w-full'>

        {/* section bar */}
        <SectionBar
          category="Trending Products"
          heading="What's Trending Now"
          option={<Arrows onPrev={goPrev} onNext={goNext} />}
        />

        {/* swiper slider  */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default: 1 slide per view on very small screens
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          // --- Key for showing 4 items ---
          breakpoints={{
            640: { // When screen width is >= 640px
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: { // When screen width is >= 768px
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: { // When screen width is >= 1024px
              slidesPerView: 4, // Show 4 slides
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          
         {videoProducts.map((product, index) => (
        <SwiperSlide key={index}>
          <TrendingProductCard product={product} />
        </SwiperSlide>
      ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingProducts;