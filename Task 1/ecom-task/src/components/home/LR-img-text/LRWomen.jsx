
// import Image from 'next/image';

// const LRWomen = () => {
//   return (
//     <section className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 h-[520px] overflow-hidden">
//       <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8">
//         {/* Left Content Area */}
//         <div className="flex-1 w-[300px] flex flex-col items-center justify-center text-center lg:text-left pl-[50px] pr-[170px] py-[130px]">
//           <h2 className="text-4xl sm:text-5xl font-bold mb-2">
//             BEAUTIFUL SHORT 
//           </h2>
//             <h3 className="font-serif italic text-center text-3xl sm:text-4xl">Summer Dress</h3>
//           <p className="text-base sm:text-lg lg:text-xl mt-5 mb-8 text-center leading-relaxed">
//             Elegantly breezy, this short summer dress a canvas of effortless charm under the sun's golden embrace.
//           </p>
//           <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out">
//             SHOP NOW
//           </button>
//         </div>

//         {/* Right Image Gallery and Main Image */}
//         <div className="relative flex-1 flex flex-col items-center lg:items-end w-full lg:w-auto">
//           {/* Main Image */}
//           <div className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[100px] xl:w-[100px] mb-8 lg:mb-0">
//             <Image
//               src="/images/women.jpeg"
//               alt="Beautiful Short Summer Dress"
//               width={80}
//               height={100}
//               layout="responsive"
//               className="object-cover w-[400px] rounded-lg shadow-lg absolute top-[-110px] left-[100px]"
//             />
//           </div>

//           {/* Smaller Images - positioned absolutely and rotated on larger screens */}
//           <div className="flex justify-center w-full lg:w-auto">
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-[260px] lg:left-[40px] lg:translate-x-0  lg:-translate-y-8 xl:-translate-y-12 rotate-[-5deg] shadow-lg border-8 border-white w-32 h-32 sm:w-40 sm:h-30">
//               <Image
//                 src="/images/women1.jpeg"
//                 alt="Dress detail 1"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-[100px] lg:left-[-70px] lg:translate-x-0  lg:-translate-y-8 xl:-translate-y-12 rotate-[-5deg] shadow-lg border-8 border-white w-32 h-32 sm:w-40 sm:h-30">
//               <Image
//                 src="/images/women.jpeg"
//                 alt="Dress detail 2"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-[370px] lg:left-[-150px] lg:translate-x-0  lg:-translate-y-8 xl:-translate-y-12 rotate-[-5deg] shadow-lg border-8 border-white w-32 h-32 sm:w-40 sm:h-30">
//               <Image
//                 src="/images/women.jpeg"
//                 alt="Dress detail 3"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LRWomen;



import Image from 'next/image';

const LRWomen = () => {
  return (
    <section className="bg-[#1f2328] text-white px-4 sm:px-6 lg:px-8 h-auto lg:h-[520px] overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start md:gap-8">
        {/* Left Content Area - unchanged for laptop */}
        <div className="flex-1 w-full lg:w-[300px] flex flex-col items-center text-center lg:text-left lg:pl-[50px] lg:pr-[170px] py-12 lg:py-[130px]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            BEAUTIFUL SHORT 
          </h2>
          <h3 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">
            Summer Dress
          </h3>
          <p className="text-base sm:text-lg lg:text-xl mt-5 mb-8 text-center leading-relaxed max-w-md md:w-[55%] lg:w-[70%] mx-auto lg:mx-0">
            Elegantly breezy, this short summer dress
            a canvas of effortless charm under the sun's
            golden embrace.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out">
            SHOP NOW
          </button>
        </div>

        {/* Right Image Gallery - unchanged layout for laptop */}
        <div className="flex-1 relative w-full h-[300px] sm:h-[400px] lg:h-auto">
          {/* Main Image */}
          <div className="lg:w-[400px] lg:absolute lg:top-[-70px] lg:left-[150px] h-full lg:h-[800px]">
            <Image
              src="/images/rightwomen.png"
              alt="Beautiful Short Summer Dress"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Smaller Images - shown only on tablet and desktop */}
          <div className="hidden sm:flex justify-center w-full lg:w-auto">
            <div className="absolute top-[25%] left-[15%] sm:top-[-50px] sm:left-[24%] lg:top-[50px] lg:left-[-190px] w-20 h-20 sm:w-38 sm:h-28 lg:w-46 lg:h-36 rotate-[-5deg] shadow-lg border-4 lg:border-8 border-white">
              <Image
                src="/images/women4.jpeg"
                alt="Dress detail 2"
                layout="fill"
                 className="object-cover object-top"
              />
            </div>
            <div className="absolute top-[55%] left-[5%] sm:top-[-320px] sm:left-[0%] lg:top-[220px] lg:left-[-50px] w-24 h-24 sm:w-38 sm:h-32 lg:w-45 lg:h-35 rotate-[-5deg] shadow-lg border-4 lg:border-8 border-white">
              <Image
                src="/images/women3.jpeg"
                alt="Dress detail 1"
                layout="fill"
                  className="object-cover object-top"
              />
            </div>
            <div className="absolute bottom-[5%] right-[5%] sm:bottom-[100px] sm:right-[-50px] lg:top-[350px] lg:left-[-270px] w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-34 lg:rotate-[-5deg] rotate-[5deg] shadow-lg border-4 lg:border-8 border-white">
              <Image
                src="/images/women2.jpeg"
                alt="Dress detail 3"
                layout="fill"
                 className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LRWomen;