"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

const carts = [
  {
    id: 271,
    title: 'Basic Colored Sweatpants With Hems',
    image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg',
    price: { original: 25.90, current: 19.90 },
  },
  {
    id: 279,
    title: 'Basic High-Neck Puff Jacket',
    image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic5-500x750.jpeg',
    price: { current: 89.00 },
  },
  {
    id: 300,
    title: 'Basic Relax Fit Leggings',
    image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg',
    price: { original: 29.90, current: 24.90 },
  },
  {
    id: 345,
    title: 'Check Overshirt With Pocket Detail',
    image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
    price: { original: 129.00, current: 112.00 },
  },
  {
    id: 515,
    title: 'Rose Printed Hoodie',
    image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
    price: { current: 110.99 },
  },
  {
    id: 632,
    title: 'World Wide Cup Print T-Shirt',
    image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
    price: { original: 29.99, current: 23.99 },
  },
  {
    id: 586,
    title: 'Sleeveless Ribbed Short Dress Black',
    image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
    price: { original: 19.99, current: 14.99 },
  },
  {
    id: 591,
    title: 'Slogan Hoodie With Label Detail',
    image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
    price: { original: 18.99, current: 11.99 },
  }
];

export default function CircularSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const startXRef = useRef(0);
  const autoRotateTimeout = useRef(null);

  useEffect(() => {
    if (!isDragging) {
      autoRotateTimeout.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carts.length);
      }, 3000);
    }
    return () => clearTimeout(autoRotateTimeout.current);
  }, [currentIndex, isDragging]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX || e.touches[0].clientX;
    clearTimeout(autoRotateTimeout.current);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX || e.touches[0].clientX;
    const deltaX = x - startXRef.current;

    if (Math.abs(deltaX) > 50) {
      const direction = deltaX > 0 ? -1 : 1;
      setCurrentIndex((prev) => (prev + direction + carts.length) % carts.length);
      startXRef.current = x;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const getCardStyle = (position) => {
    const verticalOffset = {
      0: 'mt-5',
      1: 'mt-16',
      2: 'mt-19',
      3: 'mt-16',
      4: 'mt-5',
    };

    const rotation = {
      0: 10,
      1: 5,
      2: 0,
      3: -5,
      4: -10,
    };

    return {
      transform: `rotate(${rotation[position]}deg)`,
      zIndex: position === 2 ? 10 : 5,
      transition: 'all 0.5s ease',
      className: verticalOffset[position],
    };
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + carts.length) % carts.length;
      cards.push({ index, position: i + 2 });
    }
    return cards;
  };

  return (
    <section className="hero-section bg-white overflow-hidden">
      <div className="flex flex-col items-center relative">
        <div className="bg-white pt-[30px] md:pt-[70px] text-center w-full">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] mx-auto ${dmSerif.className}`}>
            Express Your Identity with Our Unique Style
          </h1>
          <p className="mt-6 text-center text-sm sm:text-base w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto">
            Showcase your true self with our distinctive footwear collection that blends style and individuality.
          </p>
        </div>


        <div className="h-[160px] flex justify-center items-center w-full border-b-4 border-gray-700 rounded-[90%]">
          <button className="bg-green-600 px-[30px] rounded-2xl text-xl font-bold py-[12px] text-white">Shop Now</button>
        </div>

        
        

        <div
          className="w-[120%] h-[600px] relative mt-[-65px] overflow-x-hidden"
          ref={sliderRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className="absolute inset-0 flex justify-center items-start gap-[30px]">
            {getVisibleCards().map((card) => {
              const { index, position } = card;
              const style = getCardStyle(position);
              const product = carts[index];
              return (
                <div
                  key={product.id}
                  className={`relative w-[300px] h-[400px] mx-4 bg-white rounded-xl shadow-lg p-2 flex flex-col items-center justify-between ${style.className}`}
                  style={style}
                >
                  <div className="w-[22px] flex justify-center rounded-t-[3px] h-[30px] bg-green-600 absolute top-[-20px] left-[50%] z-100">
                    <div className="w-[8px] h-[8px] rounded-[100%] bg-white mt-1.5"></div>
                  </div>
                  <div className="relative w-full h-[80%]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="text-center mt-3">
                    <h3 className="text-base font-semibold text-gray-700 truncate w-[90%] mx-auto">
                      {product.title}
                    </h3>
                    <p className="text-sm text-red-600 font-bold">
                      ${product.price.current.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
// Sahi Slider




