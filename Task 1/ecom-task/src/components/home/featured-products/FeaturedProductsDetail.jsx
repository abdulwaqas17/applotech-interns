import React from 'react';

const FeaturedProductsDetail = () => {
  return (
    
      <div className="w-full md:px-[60px] px-[30px] md:py-[50px] py-[30px]">
        <div className=" flex justify-between flex-col md:flex-row">
          <div className="flex justify-between flex-col md:flex-row">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:w-[65%] leading-relaxed ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default FeaturedProductsDetail;