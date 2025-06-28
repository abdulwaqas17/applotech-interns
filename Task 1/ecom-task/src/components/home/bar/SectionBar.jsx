'use client'

import { GoNorthStar } from "react-icons/go"


const SectionBar = (props) => {
  return (
    <div className="flex flex-wrap justify-between items-end mb-[50px] lg:mb-[70px]">
            {/* Section Title - Left Column */}
            <div className="w-full md:w-auto">
              <div
                className="text-center md:text-left"
                data-aos="fade-right"
                data-aos-delay="10"
                data-aos-duration="1000"
              >
                <div className="inline-flex items-center mb-2">
                  {/* <FaSparkles className="text-yellow-500 mr-2" /> */}
                  <GoNorthStar />
                  <span className=" font-semibold text-red-600 ml-2">
                    {props.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
                 {props.heading}
                </h2>
              </div>
            </div>
    
            {/* View All Button - Right Column */}
            <div className="w-full flex md:justify-end justify-center md:w-[50%] md:mt-0 mt-[30px] md:mb-0 mb-[50px] ">
              {props.option}
            </div>
          </div>
  )
}

export default SectionBar
