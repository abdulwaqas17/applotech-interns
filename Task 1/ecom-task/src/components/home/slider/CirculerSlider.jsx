// // // // "use client";

// // // // import { useState, useEffect, useRef } from "react";
// // // // import Image from "next/image";
// // // // import { DM_Serif_Display } from "next/font/google";

// // // // const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

// // // // const images = [
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup3-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
// // // // ];

// // // // export default function FashionCircularSlider() {
// // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // //   const [isDragging, setIsDragging] = useState(false);
// // // //   const sliderRef = useRef(null);
// // // //   const startXRef = useRef(0);
// // // //   const autoRotateTimeout = useRef(null);

// // // //   // Auto rotation effect
// // // //   useEffect(() => {
// // // //     if (!isDragging) {
// // // //       autoRotateTimeout.current = setTimeout(() => {
// // // //         setCurrentIndex((prev) => (prev + 1) % images.length);
// // // //       }, 3000);
// // // //     }
// // // //     return () => clearTimeout(autoRotateTimeout.current);
// // // //   }, [currentIndex, isDragging]);

// // // //   // Handle drag start
// // // //   const handleDragStart = (e) => {
// // // //     setIsDragging(true);
// // // //     startXRef.current = e.clientX || e.touches[0].clientX;
// // // //     clearTimeout(autoRotateTimeout.current);
// // // //   };

// // // //   // Handle drag move
// // // //   const handleDragMove = (e) => {
// // // //     if (!isDragging) return;
// // // //     const x = e.clientX || e.touches[0].clientX;
// // // //     const deltaX = x - startXRef.current;
    
// // // //     // Change slide if drag distance is significant
// // // //     if (Math.abs(deltaX) > 50) {
// // // //       const direction = deltaX > 0 ? -1 : 1;
// // // //       setCurrentIndex((prev) => (prev + direction + images.length) % images.length);
// // // //       startXRef.current = x;
// // // //     }
// // // //   };

// // // //   // Handle drag end
// // // //   const handleDragEnd = () => {
// // // //     setIsDragging(false);
// // // //   };

// // // //   // Get style for each card position
// // // //   const getCardStyle = (position) => {
// // // //     const styles = {
// // // //       0: { // First card (leftmost)
// // // //         transform: 'translateX(-60%) rotate(7deg) scale(0.8)',
// // // //         opacity: 0.5,
// // // //         zIndex: 1
// // // //       },
// // // //       1: { // Second card
// // // //         transform: 'translateX(-30%) rotate(3deg) scale(0.9)',
// // // //         opacity: 0.8,
// // // //         zIndex: 2
// // // //       },
// // // //       2: { // Center card
// // // //         transform: 'translateX(0) rotate(0deg) scale(1)',
// // // //         opacity: 1,
// // // //         zIndex: 3
// // // //       },
// // // //       3: { // Fourth card
// // // //         transform: 'translateX(30%) rotate(-3deg) scale(0.9)',
// // // //         opacity: 0.8,
// // // //         zIndex: 2
// // // //       },
// // // //       4: { // Fifth card (rightmost)
// // // //         transform: 'translateX(60%) rotate(-7deg) scale(0.8)',
// // // //         opacity: 0.5,
// // // //         zIndex: 1
// // // //       }
// // // //     };
// // // //     return styles[position];
// // // //   };

// // // //   // Get visible cards (5 cards centered around currentIndex)
// // // //   const getVisibleCards = () => {
// // // //     const cards = [];
// // // //     for (let i = -2; i <= 2; i++) {
// // // //       const index = (currentIndex + i + images.length) % images.length;
// // // //       cards.push({
// // // //         index,
// // // //         position: i + 2 // 0 to 4
// // // //       });
// // // //     }
// // // //     return cards;
// // // //   };

// // // //   return (
// // // //     <section className="hero-section bg-white overflow-hidden">
// // // //       <div className="flex flex-col items-center relative">
// // // //         {/* Heading */}
// // // //         <div className="bg-white pt-[30px] md:pt-[70px] text-center w-full">
// // // //           <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] mx-auto ${dmSerif.className}`}>
// // // //             Express Your Identity with Our Unique Style
// // // //           </h1>
// // // //         </div>

// // // //         {/* Rounded bottom container */}
// // // //         <div className="rounded-b-[40%] md:rounded-b-[100%] w-full h-[160px] bg-red-700 z-10">
// // // //           <p className="mt-6 text-center text-sm sm:text-base w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto">
// // // //             Showcase your true self with our distinctive footwear collection
// // // //             that blends style and individuality.
// // // //           </p>
// // // //         </div>

// // // //         {/* Circular Slider */}
// // // //         <div 
// // // //           className="w-full h-[400px] flex items-center justify-center mt-[-50px]  relative overflow-x-hidden"
// // // //           ref={sliderRef}
// // // //           onMouseDown={handleDragStart}
// // // //           onMouseMove={handleDragMove}
// // // //           onMouseUp={handleDragEnd}
// // // //           onMouseLeave={handleDragEnd}
// // // //           onTouchStart={handleDragStart}
// // // //           onTouchMove={handleDragMove}
// // // //           onTouchEnd={handleDragEnd}
// // // //         >
// // // //           <div className="relative w-full h-full flex items-center gap-9 justify-center">
// // // //             {getVisibleCards().map((card) => (
// // // //               <div
// // // //                 key={card.index}
// // // //                 className="absolute w-[200px] h-[300px] transition-all duration-500 ease-out"
// // // //                 style={getCardStyle(card.position)}
// // // //               >
// // // //                 <div className="relative w-full h-full">
// // // //                   <Image
// // // //                     src={images[card.index]}
// // // //                     alt={`Fashion Item ${card.index + 1}`}
// // // //                     fill
// // // //                     className="object-cover rounded-lg shadow-xl"
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }







// // // // "use client";

// // // // import { useState, useEffect, useRef } from "react";
// // // // import Image from "next/image";
// // // // import { DM_Serif_Display } from "next/font/google";

// // // // const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

// // // // const images = [
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup3-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
// // // // ];

// // // // export default function CircularSlider() {
// // // //   const [currentIndex, setCurrentIndex] = useState(0);
// // // //   const [isDragging, setIsDragging] = useState(false);
// // // //   const sliderRef = useRef(null);
// // // //   const startXRef = useRef(0);
// // // //   const autoRotateTimeout = useRef(null);
// // // //   // const cardGap = 20; // Equal gap between cards in pixels

// // // //   // Auto rotation effect
// // // //   useEffect(() => {
// // // //     if (!isDragging) {
// // // //       autoRotateTimeout.current = setTimeout(() => {
// // // //         setCurrentIndex((prev) => (prev + 1) % images.length);
// // // //       }, 3000);
// // // //     }
// // // //     return () => clearTimeout(autoRotateTimeout.current);
// // // //   }, [currentIndex, isDragging]);

// // // //   // Handle drag start
// // // //   const handleDragStart = (e) => {
// // // //     setIsDragging(true);
// // // //     startXRef.current = e.clientX || e.touches[0].clientX;
// // // //     clearTimeout(autoRotateTimeout.current);
// // // //   };

// // // //   // Handle drag move
// // // //   const handleDragMove = (e) => {
// // // //     if (!isDragging) return;
// // // //     const x = e.clientX || e.touches[0].clientX;
// // // //     const deltaX = x - startXRef.current;
    
// // // //     if (Math.abs(deltaX) > 50) {
// // // //       const direction = deltaX > 0 ? -1 : 1;
// // // //       setCurrentIndex((prev) => (prev + direction + images.length) % images.length);
// // // //       startXRef.current = x;
// // // //     }
// // // //   };

// // // //   // Handle drag end
// // // //   const handleDragEnd = () => {
// // // //     setIsDragging(false);
// // // //   };

// // // //   // Calculate card positions with equal gaps
// // // //   const getCardStyle = (position) => {
// // // //     // const cardWidth = 200; // Base card width
// // // //     // const centerOffset = 2; // Center position index (for 5 cards: 0,1,2,3,4)
    
// // // //     // Calculate horizontal position with equal gaps
// // // //     // const distanceFromCenter = position - centerOffset;
// // // //     // const translateX = distanceFromCenter * (cardWidth + cardGap);
    
// // // //     // Apply different rotations based on position
// // // //     let rotation = 0;
// // // //     if (position === 0) rotation = 7;
// // // //     else if (position === 1) rotation = 3;
// // // //     else if (position === 3) rotation = -3;
// // // //     else if (position === 4) rotation = -7;

// // // //     return {
// // // //       transform: `rotate(${rotation}deg)`,
// // // //       // opacity: position === 2 ? 1 : position === 1 || position === 3 ? 0.8 : 0.5,
// // // //       // zIndex: position === 2 ? 3 : position === 1 || position === 3 ? 2 : 1,
// // // //       // width: `${cardWidth}px`,
// // // //       // left: `calc(50% - ${cardWidth/2}px)`,
// // // //     };
// // // //   };

// // // //   // Get visible cards (5 cards centered around currentIndex)
// // // //   const getVisibleCards = () => {
// // // //     const cards = [];
// // // //     for (let i = -2; i <= 2; i++) {
// // // //       const index = (currentIndex + i + images.length) % images.length;
// // // //       cards.push({
// // // //         index,
// // // //         position: i + 2 // positions: 0,1,2,3,4
// // // //       });
// // // //     }
// // // //     return cards;
// // // //   };

// // // //   return (
// // // //     <section className="hero-section bg-white overflow-hidden">
// // // //       <div className="flex flex-col items-center relative">
// // // //         {/* Heading */}
// // // //         <div className="bg-white pt-[30px] md:pt-[70px] text-center w-full">
// // // //           <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] mx-auto ${dmSerif.className}`}>
// // // //             Express Your Identity with Our Unique Style
// // // //           </h1>
// // // //         </div>

// // // //         {/* Rounded bottom container */}
// // // //         <div className="rounded-b-[40%] md:rounded-b-[100%] w-full h-[160px] bg-red-700 z-10">
// // // //           <p className="mt-6 text-center text-sm sm:text-base w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto">
// // // //             Showcase your true self with our distinctive footwear collection
// // // //             that blends style and individuality.
// // // //           </p>
// // // //         </div>

// // // //         {/* Full-width Circular Slider */}
// // // //         <div 
// // // //           className="w-full h-[400px] relative mt-[-50px] overflow-x-hidden"
// // // //           ref={sliderRef}
// // // //           onMouseDown={handleDragStart}
// // // //           onMouseMove={handleDragMove}
// // // //           onMouseUp={handleDragEnd}
// // // //           onMouseLeave={handleDragEnd}
// // // //           onTouchStart={handleDragStart}
// // // //           onTouchMove={handleDragMove}
// // // //           onTouchEnd={handleDragEnd}
// // // //         >
// // // //           <div className="absolute inset-0 flex items-center">
// // // //             {getVisibleCards().map((card) => (
// // // //               <div
// // // //                 key={card.index}
// // // //                 className="absolute h-[300px] transition-all duration-500 ease-out"
// // // //                 style={getCardStyle(card.position)}
// // // //               >
// // // //                 <div className="relative w-[300px] h-full">
// // // //                   <Image
// // // //                     src={images[card.index]}
// // // //                     alt={`Fashion Item ${card.index + 1}`}
// // // //                     fill
// // // //                     className="object-cover rounded-lg shadow-xl"
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }









// // // "use client";

// // // import { useState, useEffect, useRef } from "react";
// // // import Image from "next/image";
// // // import { DM_Serif_Display } from "next/font/google";

// // // const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

// // // const images = [
// // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg',
// // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup3-500x750.jpeg',
// // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg',
// // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
// // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
// // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
// // // ];

// // // export default function CircularSlider() {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isDragging, setIsDragging] = useState(false);
// // //   const sliderRef = useRef(null);
// // //   const startXRef = useRef(0);
// // //   const autoRotateTimeout = useRef(null);

// // //   // Card dimensions and spacing (you can adjust these)
// // //   const cardWidth = 200;
// // //   const cardHeight = 400;
// // //   const cardGap = 30;

// // //   // Auto rotation effect
// // //   useEffect(() => {
// // //     if (!isDragging) {
// // //       autoRotateTimeout.current = setTimeout(() => {
// // //         setCurrentIndex((prev) => (prev + 1) % images.length);
// // //       }, 3000);
// // //     }
// // //     return () => clearTimeout(autoRotateTimeout.current);
// // //   }, [currentIndex, isDragging]);

// // //   // Handle drag start
// // //   const handleDragStart = (e) => {
// // //     setIsDragging(true);
// // //     startXRef.current = e.clientX || e.touches[0].clientX;
// // //     clearTimeout(autoRotateTimeout.current);
// // //   };

// // //   // Handle drag move
// // //   const handleDragMove = (e) => {
// // //     if (!isDragging) return;
// // //     const x = e.clientX || e.touches[0].clientX;
// // //     const deltaX = x - startXRef.current;
    
// // //     if (Math.abs(deltaX) > 50) {
// // //       const direction = deltaX > 0 ? -1 : 1;
// // //       setCurrentIndex((prev) => (prev + direction + images.length) % images.length);
// // //       startXRef.current = x;
// // //     }
// // //   };

// // //   // Handle drag end
// // //   const handleDragEnd = () => {
// // //     setIsDragging(false);
// // //   };

// // //   // Calculate card positions with circular arrangement
// // //   const getCardStyle = (position) => {
// // //     const positions = {
// // //       0: { // First card (leftmost)
// // //         left: '10%',
// // //         top: '20%',
// // //         rotate: '7deg',
// // //         zIndex: 2,
// // //         width: '80%' // 80% visible
// // //       },
// // //       1: { // Second card
// // //         left: '25%',
// // //         top: '30%',
// // //         rotate: '3deg',
// // //         zIndex: 3
// // //       },
// // //       2: { // Center card
// // //         left: '50%',
// // //         top: '40%',
// // //         rotate: '0deg',
// // //         zIndex: 4
// // //       },
// // //       3: { // Fourth card
// // //         left: '75%',
// // //         top: '30%',
// // //         rotate: '-3deg',
// // //         zIndex: 3
// // //       },
// // //       4: { // Fifth card (rightmost)
// // //         left: '90%',
// // //         top: '20%',
// // //         rotate: '-7deg',
// // //         zIndex: 2,
// // //         width: '80%' // 80% visible
// // //       }
// // //     };
    
// // //     return {
// // //       transform: `translateX(-50%) rotate(${positions[position].rotate})`,
// // //       left: positions[position].left,
// // //       top: positions[position].top,
// // //       zIndex: positions[position].zIndex,
// // //       width: '200px',
// // //       height: `${cardHeight}px`,
// // //     };
// // //   };

// // //   // Get visible cards (5 cards centered around currentIndex)
// // //   const getVisibleCards = () => {
// // //     const cards = [];
// // //     for (let i = -2; i <= 2; i++) {
// // //       const index = (currentIndex + i + images.length) % images.length;
// // //       cards.push({
// // //         index,
// // //         position: i + 2 // positions: 0,1,2,3,4
// // //       });
// // //     }
// // //     return cards;
// // //   };

// // //   return (
// // //     <section className="hero-section bg-white overflow-hidden">
// // //       <div className="flex flex-col items-center relative">
// // //         {/* Heading */}
// // //         <div className="bg-white pt-[30px] md:pt-[70px] text-center w-full">
// // //           <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] mx-auto ${dmSerif.className}`}>
// // //             Express Your Identity with Our Unique Style
// // //           </h1>
// // //         </div>

// // //         {/* Rounded bottom container */}
// // //         <div className="rounded-b-[40%] md:rounded-b-[100%] w-full h-[160px] bg-red-700 z-10">
// // //           <p className="mt-6 text-center text-sm sm:text-base w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto">
// // //             Showcase your true self with our distinctive footwear collection
// // //             that blends style and individuality.
// // //           </p>
// // //         </div>

// // //         {/* Circular Slider */}
// // //         <div 
// // //           className="w-full h-[700px]  relative mt-[-50px] overflow-x-hidden"
// // //           ref={sliderRef}
// // //           onMouseDown={handleDragStart}
// // //           onMouseMove={handleDragMove}
// // //           onMouseUp={handleDragEnd}
// // //           onMouseLeave={handleDragEnd}
// // //           onTouchStart={handleDragStart}
// // //           onTouchMove={handleDragMove}
// // //           onTouchEnd={handleDragEnd}
// // //         >
// // //           <div className="relative w-full h-full">
// // //             {getVisibleCards().map((card) => (
// // //               <div
// // //                 key={card.index}
// // //                 className="absolute transition-all duration-500 ease-out"
// // //                 style={getCardStyle(card.position)}
// // //               >
// // //                 <div className="relative w-full h-full">
// // //                   <Image
// // //                     src={images[card.index]}
// // //                     alt={`Fashion Item ${card.index + 1}`}
// // //                     fill
// // //                     className="object-cover rounded-lg shadow-xl"
// // //                   />
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }




// // // "use client";

// // // import { useState, useEffect, useRef } from "react";
// // // import Image from "next/image";
// // // import { DM_Serif_Display } from "next/font/google";

// // // const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

// // // // const images = [
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup3-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
// // // //   'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
// // // // ];






// // // const carts = [
// // //   {
// // //     id: 271,
// // //     title: 'Basic Colored Sweatpants With Hems',
// // //     url: 'https://klbtheme.com/clotya/product/basic-colored-sweatpants-with-elastic-hems/',
   
// // //     price: { original: 25.90, current: 19.90 },
// // //     sale: '24%',
// // //     reviews: 2,
// // //     sku: 'BE45VGRT',
// // //     type: 'variable',
// // //     inStock: true,
// // //   },
// // //   {
// // //     id: 279,
// // //     title: 'Basic High-Neck Puff Jacket',
// // //     url: 'https://klbtheme.com/clotya/product/basic-high-neck-puff-jacket/',
// // //    //klbtheme.com/clotya/wp-content/uploads/2022/04/basic5-500x750.jpeg',
    
// // //     price: { current: 89.00 },
// // //     badge: 'Trending',
// // //     reviews: 1,
// // //     sku: 'SUAJK74',
// // //     type: 'simple',
// // //     inStock: false,
// // //   },
// // //   {
// // //     id: 300,
// // //     title: 'Basic Relax Fit Leggings',
// // //     url: 'https://klbtheme.com/clotya/product/basic-relax-fit-leggings/',
   
// // //     price: { original: 29.90, current: 24.90 },
// // //     sale: '17%',
// // //     reviews: 1,
// // //     sku: 'BE45O8T',
// // //     type: 'variable',
// // //     inStock: true,
// // //   },
// // //   {
// // //     id: 345,
// // //     title: 'Check Overshirt With Pocket Detail',
// // //     url: 'https://klbtheme.com/clotya/product/check-overshirt-with-pocket-detail/',
   
// // //     price: { original: 129.00, current: 112.00 },
// // //     sale: '14%',
// // //     reviews: 1,
// // //     sku: 'BE45G8T',
// // //     type: 'variable',
// // //     inStock: true,
// // //   },
// // //   {
// // //     id: 515,
// // //     title: 'Rose Printed Hoodie',
// // //     url: 'https://klbtheme.com/clotya/product/rose-printed-hoodie/',
   
// // //     price: { current: 110.99 },
// // //     reviews: 1,
// // //     sku: 'SRAK79',
// // //     type: 'variable',
// // //     inStock: true,
// // //   },
// // //   {
// // //     id: 632,
// // //     title: 'World Wide Cup Print T-Shirt',
// // //     url: 'https://klbtheme.com/clotya/product/world-wide-cup-print-t-shirt/',
   
// // //     price: { original: 29.99, current: 23.99 },
// // //     sale: '21%',
// // //     reviews: 1,
// // //     sku: 'SO7JK51',
// // //     type: 'variable',
// // //     inStock: true,
// // //   },
// // //   {
// // //     id: 586,
// // //     title: 'Sleeveless Ribbed Short Dress Black',
// // //     url: 'https://klbtheme.com/clotya/product/sleeveless-ribbed-short-dress-black/',
   
// // //     price: { original: 19.99, current: 14.99 },
// // //     sale: '26%',
// // //     reviews: 1,
// // //     sku: 'K8UOGRT',
// // //     type: 'variable',
// // //     inStock: true,
// // //   },
// // //   {
// // //     id: 591,
// // //     title: 'Slogan Hoodie With Label Detail',
// // //     url: 'https://klbtheme.com/clotya/product/slogan-hoodie-with-label-detail/',
   
// // //     price: { original: 18.99, current: 11.99 },
// // //     sale: '37%',
// // //     reviews: 1,
// // //     sku: 'ZHAU8T',
// // //     type: 'variable',
// // //     inStock: true,
// // //   },
// // // ];

// // // export default function CircularSlider() {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isDragging, setIsDragging] = useState(false);
// // //   const sliderRef = useRef(null);
// // //   const startXRef = useRef(0);
// // //   const autoRotateTimeout = useRef(null);

// // //   useEffect(() => {
// // //     if (!isDragging) {
// // //       autoRotateTimeout.current = setTimeout(() => {
// // //         setCurrentIndex((prev) => (prev + 1) % images.length);
// // //       }, 3000);
// // //     }
// // //     return () => clearTimeout(autoRotateTimeout.current);
// // //   }, [currentIndex, isDragging]);

// // //   const handleDragStart = (e) => {
// // //     setIsDragging(true);
// // //     startXRef.current = e.clientX || e.touches[0].clientX;
// // //     clearTimeout(autoRotateTimeout.current);
// // //   };

// // //   const handleDragMove = (e) => {
// // //     if (!isDragging) return;
// // //     const x = e.clientX || e.touches[0].clientX;
// // //     const deltaX = x - startXRef.current;

// // //     if (Math.abs(deltaX) > 50) {
// // //       const direction = deltaX > 0 ? -1 : 1;
// // //       setCurrentIndex((prev) => (prev + direction + images.length) % images.length);
// // //       startXRef.current = x;
// // //     }
// // //   };

// // //   const handleDragEnd = () => {
// // //     setIsDragging(false);
// // //   };

// // //   const getCardStyle = (position) => {
// // //     const verticalOffset = {
// // //       0: 'mt-0',
// // //       1: 'mt-8',
// // //       2: 'mt-12',
// // //       3: 'mt-8',
// // //       4: 'mt-0',
// // //     };

// // //     const rotation = {
// // //       0: 10,
// // //       1: 5,
// // //       2: 0,
// // //       3: -5,
// // //       4: -10,
// // //     };

// // //     return {
// // //       transform: `rotate(${rotation[position]}deg)`,
// // //       // marginLeft: position === 0 || position === 4 ? "-60px" : "0px",
// // //       zIndex: position === 2 ? 10 : 5,
// // //       transition: 'all 0.5s ease',
// // //       className: verticalOffset[position],
// // //     };
// // //   };

// // //   const getVisibleCards = () => {
// // //     const cards = [];
// // //     for (let i = -2; i <= 2; i++) {
// // //       const index = (currentIndex + i + images.length) % images.length;
// // //       cards.push({ index, position: i + 2 });
// // //     }
// // //     return cards;
// // //   };

// // //   return (
// // //     <section className="hero-section bg-white overflow-hidden">
// // //       <div className="flex flex-col items-center relative">
// // //         {/* Heading */}
// // //         <div className="bg-white pt-[30px] md:pt-[70px] text-center w-full">
// // //           <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] mx-auto ${dmSerif.className}`}>
// // //             Express Your Identity with Our Unique Style
// // //           </h1>
// // //         </div>

// // //         {/* Rounded bottom container */}
// // //         <div className="rounded-b-[40%] md:rounded-b-[100%] w-full h-[160px] bg-white border-b-4 border-b-black z-10">
// // //           <p className="mt-6 text-center text-sm sm:text-base w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto">
// // //             Showcase your true self with our distinctive footwear collection that blends style and individuality.
// // //           </p>
// // //         </div>

// // //         {/* Circular Image Slider */}
// // //         <div
// // //           className="w-[120%] h-[600px] relative mt-[-50px] overflow-x-hidden"
// // //           ref={sliderRef}
// // //           onMouseDown={handleDragStart}
// // //           onMouseMove={handleDragMove}
// // //           onMouseUp={handleDragEnd}
// // //           onMouseLeave={handleDragEnd}
// // //           onTouchStart={handleDragStart}
// // //           onTouchMove={handleDragMove}
// // //           onTouchEnd={handleDragEnd}
// // //         >
// // //           <div className="absolute inset-0 flex justify-center items-start gap-[30px]">
// // //             {getVisibleCards().map((card) => {
// // //               const style = getCardStyle(card.position);
// // //               return (
// // //                 <div
// // //                   key={card.index}
// // //                   className={`relative w-[300px] h-[320px] mx-4 ${style.className}`}
// // //                   style={style}
// // //                 >
// // //                   <Image
// // //                     src={images[card.index]}
// // //                     alt={`Fashion Item ${card.index + 1}`}
// // //                     fill
// // //                     className="w-full h-[80%] rounded-lg shadow-xl"
// // //                   />

                
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import Image from "next/image";
// // import { DM_Serif_Display } from "next/font/google";

// // const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

// // const carts = [
// //   {
// //     id: 271,
// //     title: 'Basic Colored Sweatpants With Hems',
// //     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg',
// //     price: { original: 25.90, current: 19.90 },
// //   },
// //   {
// //     id: 279,
// //     title: 'Basic High-Neck Puff Jacket',
// //     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic5-500x750.jpeg',
// //     price: { current: 89.00 },
// //   },
// //   {
// //     id: 300,
// //     title: 'Basic Relax Fit Leggings',
// //     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg',
// //     price: { original: 29.90, current: 24.90 },
// //   },
// //   {
// //     id: 345,
// //     title: 'Check Overshirt With Pocket Detail',
// //     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
// //     price: { original: 129.00, current: 112.00 },
// //   },
// //   {
// //     id: 515,
// //     title: 'Rose Printed Hoodie',
// //     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
// //     price: { current: 110.99 },
// //   },
// //   {
// //     id: 632,
// //     title: 'World Wide Cup Print T-Shirt',
// //     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
// //     price: { original: 29.99, current: 23.99 },
// //   },
// //   {
// //     id: 586,
// //     title: 'Sleeveless Ribbed Short Dress Black',
// //     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
// //     price: { original: 19.99, current: 14.99 },
// //   },
// //   {
// //     id: 591,
// //     title: 'Slogan Hoodie With Label Detail',
// //     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
// //     price: { original: 18.99, current: 11.99 },
// //   }
// // ];

// // export default function CircularSlider() {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isDragging, setIsDragging] = useState(false);
// //   const sliderRef = useRef(null);
// //   const startXRef = useRef(0);
// //   const autoRotateTimeout = useRef(null);

// //   useEffect(() => {
// //     if (!isDragging) {
// //       autoRotateTimeout.current = setTimeout(() => {
// //         setCurrentIndex((prev) => (prev + 1) % carts.length);
// //       }, 3000);
// //     }
// //     return () => clearTimeout(autoRotateTimeout.current);
// //   }, [currentIndex, isDragging]);

// //   const handleDragStart = (e) => {
// //     setIsDragging(true);
// //     startXRef.current = e.clientX || e.touches[0].clientX;
// //     clearTimeout(autoRotateTimeout.current);
// //   };

// //   const handleDragMove = (e) => {
// //     if (!isDragging) return;
// //     const x = e.clientX || e.touches[0].clientX;
// //     const deltaX = x - startXRef.current;

// //     if (Math.abs(deltaX) > 50) {
// //       const direction = deltaX > 0 ? -1 : 1;
// //       setCurrentIndex((prev) => (prev + direction + carts.length) % carts.length);
// //       startXRef.current = x;
// //     }
// //   };

// //   const handleDragEnd = () => {
// //     setIsDragging(false);
// //   };

// //   const getCardStyle = (position) => {
// //     const verticalOffset = {
// //       0: 'mt-0',
// //       1: 'mt-8',
// //       2: 'mt-12',
// //       3: 'mt-8',
// //       4: 'mt-0',
// //     };

// //     const rotation = {
// //       0: 10,
// //       1: 5,
// //       2: 0,
// //       3: -5,
// //       4: -10,
// //     };

// //     return {
// //       transform: `rotate(${rotation[position]}deg)`,
// //       zIndex: position === 2 ? 10 : 5,
// //       transition: 'all 0.5s ease',
// //       className: verticalOffset[position],
// //     };
// //   };

// //   const getVisibleCards = () => {
// //     const cards = [];
// //     for (let i = -2; i <= 2; i++) {
// //       const index = (currentIndex + i + carts.length) % carts.length;
// //       cards.push({ index, position: i + 2 });
// //     }
// //     return cards;
// //   };

// //   return (
// //     <section className="hero-section bg-white overflow-hidden">
// //       <div className="flex flex-col items-center relative">
// //         <div className="bg-white pt-[30px] md:pt-[70px] text-center w-full">
// //           <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] mx-auto ${dmSerif.className}`}>
// //             Express Your Identity with Our Unique Style
// //           </h1>
// //         </div>

// //         <div className="rounded-b-[40%] md:rounded-b-[100%] w-full h-[160px] bg-white border-b-4 border-b-black z-10">
// //           <p className="mt-6 text-center text-sm sm:text-base w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto">
// //             Showcase your true self with our distinctive footwear collection that blends style and individuality.
// //           </p>
// //         </div>

// //         <div
// //           className="w-[120%] h-[600px] relative mt-[-50px] overflow-x-hidden"
// //           ref={sliderRef}
// //           onMouseDown={handleDragStart}
// //           onMouseMove={handleDragMove}
// //           onMouseUp={handleDragEnd}
// //           onMouseLeave={handleDragEnd}
// //           onTouchStart={handleDragStart}
// //           onTouchMove={handleDragMove}
// //           onTouchEnd={handleDragEnd}
// //         >
// //           <div className="absolute inset-0 flex justify-center items-start gap-[30px]">
// //             {getVisibleCards().map((card) => {
// //               const { index, position } = card;
// //               const style = getCardStyle(position);
// //               const product = carts[index];
// //               return (
// //                 <div
// //                   key={product.id}
// //                   className={`relative w-[300px] h-[400px] mx-4 bg-white rounded-xl shadow-lg p-2 flex flex-col items-center justify-between ${style.className}`}
// //                   style={style}
// //                 >
// //                   <div className="relative w-full h-[80%]">
// //                     <Image
// //                       src={product.image}
// //                       alt={product.title}
// //                       fill
// //                       className="object-cover rounded-md"
// //                     />
// //                   </div>
// //                   <div className="text-center mt-3">
// //                     <h3 className="text-base font-semibold text-gray-700 truncate w-[90%] mx-auto">
// //                       {product.title}
// //                     </h3>
// //                     <p className="text-sm text-red-600 font-bold">
// //                       ${product.price.current.toFixed(2)}
// //                     </p>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { DM_Serif_Display } from "next/font/google";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { EffectCoverflow, Autoplay } from "swiper/modules";

// const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

// const carts = [
//   {
//     id: 271,
//     title: 'Basic Colored Sweatpants With Hems',
//     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg',
//     price: { original: 25.90, current: 19.90 },
//   },
//   {
//     id: 279,
//     title: 'Basic High-Neck Puff Jacket',
//     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/basic5-500x750.jpeg',
//     price: { current: 89.00 },
//   },
//   {
//     id: 300,
//     title: 'Basic Relax Fit Leggings',
//     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg',
//     price: { original: 29.90, current: 24.90 },
//   },
//   {
//     id: 345,
//     title: 'Check Overshirt With Pocket Detail',
//     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
//     price: { original: 129.00, current: 112.00 },
//   },
//   {
//     id: 515,
//     title: 'Rose Printed Hoodie',
//     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
//     price: { current: 110.99 },
//   },
//   {
//     id: 632,
//     title: 'World Wide Cup Print T-Shirt',
//     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg',
//     price: { original: 29.99, current: 23.99 },
//   },
//   {
//     id: 586,
//     title: 'Sleeveless Ribbed Short Dress Black',
//     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg',
//     price: { original: 19.99, current: 14.99 },
//   },
//   {
//     id: 591,
//     title: 'Slogan Hoodie With Label Detail',
//     image: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg',
//     price: { original: 18.99, current: 11.99 },
//   }
// ];

// export default function CircularSlider() {
//   return (
//     <section className="hero-section bg-white overflow-hidden">
//       <div className="flex flex-col items-center relative">
//         <div className="bg-white pt-[30px] md:pt-[70px] text-center w-full">
//           <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] mx-auto ${dmSerif.className}`}>
//             Express Your Identity with Our Unique Style
//           </h1>
//         </div>

//         <div className="rounded-b-[40%] md:rounded-b-[100%] w-full h-[160px] bg-white border-b-4 border-b-black z-10">
//           <p className="mt-6 text-center text-sm sm:text-base w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto">
//             Showcase your true self with our distinctive footwear collection that blends style and individuality.
//           </p>
//         </div>

//         <div className="w-full mt-[-30px] px-4">
//           <Swiper
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={3}
//             spaceBetween={30}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 100,
//               modifier: 2.5,
//               slideShadows: false,
//             }}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             modules={[EffectCoverflow, Autoplay]}
//             className="mySwiper"
//           >
//             {carts.map((product) => (
//               <SwiperSlide key={product.id}>
//                 <div className="w-[300px] h-[400px] bg-white rounded-xl shadow-lg p-2 flex flex-col items-center justify-between">
//                   <div className="relative w-full h-[80%]">
//                     <Image
//                       src={product.image}
//                       alt={product.title}
//                       fill
//                       className="object-cover rounded-md"
//                     />
//                   </div>
//                   <div className="text-center mt-3">
//                     <h3 className="text-base font-semibold text-gray-700 truncate w-[90%] mx-auto">
//                       {product.title}
//                     </h3>
//                     <p className="text-sm text-red-600 font-bold">
//                       ${product.price.current.toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";

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
  const marginTopMap = {
    0: "mt-0",
    1: "mt-8",
    2: "mt-12",
    3: "mt-8",
    4: "mt-0",
  };

  return (
    <section className="hero-section bg-white overflow-hidden">
      <div className="flex flex-col items-center relative">
        <div className="bg-white pt-[30px] md:pt-[70px] text-center w-full">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] mx-auto ${dmSerif.className}`}>
            Express Your Identity with Our Unique Style
          </h1>
        </div>

        <div className="rounded-b-[40%] md:rounded-b-[100%] w-full h-[160px] bg-white border-b-4 border-b-black z-10">
          <p className="mt-6 text-center text-sm sm:text-base w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto">
            Showcase your true self with our distinctive footwear collection that blends style and individuality.
          </p>
        </div>

        <div className="w-full mt-[-30px] px-4">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={5}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {carts.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div className={`w-[300px] h-[400px] bg-white rounded-xl shadow-lg p-2 flex flex-col items-center justify-between ${marginTopMap[index % 5]}`}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
