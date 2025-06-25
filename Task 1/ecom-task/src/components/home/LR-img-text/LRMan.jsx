import Image from 'next/image';

const LRMan = () => {
  return (
    <section className="bg-[#d3e6fd] text-black px-4 sm:px-6 lg:px-8 h-auto lg:h-[520px] overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start md:gap-8">
        {/* Left Image Gallery - mirrored position */}
        <div className="flex-1 relative w-full h-[300px] sm:h-[400px] lg:h-auto">
          {/* Main Image */}
          <div className="lg:w-[800px] lg:absolute lg:top-[-70px] lg:right-[90px] h-full lg:h-[800px]">
            <Image
              src="/images/man1-removebg-preview.png"
              alt="Beautiful Short Summer Dress"
              layout="fill"
              objectFit="cover"
              className="rounded-lg ml-[20px]"
            />
          </div>

          {/* Smaller Images - mirrored positions */}
          <div className="hidden sm:flex justify-center w-full lg:w-auto">
            <div className="absolute top-[25%] right-[15%] sm:top-[-170px] sm:right-[0%] lg:top-[50px] lg:right-[-100px] w-20 h-20 sm:w-38 sm:h-28 lg:w-48 lg:h-38 lg:rotate-[-5deg] sm:rotate-[5deg] shadow-lg border-4 lg:border-8 border-white overflow-hidden ">
              <Image
                src="/images/images-removebg-preview.png"
                alt="Dress detail 2"
                layout="fill"
                className="object-cover object-center scale-200 md:ml-[50px]"
              />
            </div>
            <div className="absolute top-[55%] right-[5%] sm:top-[-320px] sm:right-[20%] lg:top-[210px] lg:right-[-230px] w-24 h-24 sm:w-38 sm:h-32 lg:w-43 lg:h-33 rotate-[-5deg] shadow-lg border-4 lg:border-8 border-white overflow-hidden">
              <Image
                src="/images/images-removebg-preview (1).png"
                alt="Dress detail 1"
                layout="fill"
                className="object-cover object-top scale-200 md:ml-[50px]"
              />
            </div>
            <div className="absolute bottom-[5%] left-[5%] sm:bottom-[100px] sm:left-[-50px] lg:top-[330px] lg:left-[70%] w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-38 lg:rotate-[-5deg] rotate-[-5deg] shadow-lg border-4 lg:border-8 border-white overflow-hidden">
              <Image
                src="/images/images-removebg-preview (3).png"
                alt="Dress detail 3"
                layout="fill"
                className="object-cover  scale-200 md:ml-[50px]"
              />
            </div>
          </div>
        </div>

        {/* Right Content Area - mirrored */}
        <div className="flex-1 w-full lg:w-[300px] flex flex-col items-center text-center  lg:pr-[50px] lg:pl-[170px] py-12 lg:py-[130px]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            DASHING DENIM
          </h2>
          <h3 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-center lg:text-right">
            Summer Dress
          </h3>
          <p className="text-base sm:text-lg lg:text-xl mt-5 mb-8 text-center  leading-relaxed max-w-md md:w-[55%] lg:w-[70%] mx-auto lg:mx-0">
            Elegantly breezy, this short summer dress
            a canvas of effortless charm under the sun's
            golden embrace.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default LRMan;

