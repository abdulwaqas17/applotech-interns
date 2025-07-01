'use client'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Arrows({onPrev,onNext}) {
  return (
    <div 
      className="trending-product-arrows flex items-center justify-center gap-[40px] aos-init aos-animate"
      data-aos="fade-left" 
      data-aos-duration="1200"
    >
      {/* Previous Arrow */}
      <button 
      onClick={()=> onPrev()}
        className="prev slick-arrow relative w-[50px] h-[50px] border border-black rounded-full shadow-md flex items-center justify-center group cursor-pointer"
        aria-label="Previous"
      >
        {/* Black dot that expands to full circle */}
 
          <div className="absolute bottom-[5px] left-[0px] w-[10px] h-[10px] bg-black rounded-full group-hover:w-full group-hover:h-full group-hover:bottom-0 transition-all duration-300 ease-in-out">

          </div>
        
        <FaArrowLeftLong className="text-gray-700 text-lg relative z-10 group-hover:text-white transition-colors duration-200" />
      </button>
      
      {/* Next Arrow */}
     <button 
      onClick={()=> onNext()}
        className="prev slick-arrow relative w-[50px] h-[50px] border border-black rounded-full shadow-md flex items-center justify-center group cursor-pointer"
        aria-label="Previous"
      >
        {/* Black dot that expands to full circle */}
 
          <div className="absolute top-[5px] right-[0px] w-[10px] h-[10px] bg-black rounded-full group-hover:w-full group-hover:h-full group-hover:top-0 transition-all duration-300 ease-in-out">

          </div>
        
        <FaArrowRightLong   className="text-gray-700 text-lg relative z-10 group-hover:text-white transition-colors duration-200" />
      </button>
    </div>
  )
}