"use client";
import { FaArrowRight } from "react-icons/fa";
import { GoNorthStar } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

export default function CategorySection() {
  // Category data array with original image paths
  const categories = [
    {
      name: "Man Shirts",
      items: 10,
      image:
        "https://html.pixelfit.agency/pesco/assets/images/category/category-7.jpg",
      link: "/", // Assuming index.html translates to home page or specific category list
    },
    {
      name: "Denim Jeans",
      items: 45,
      image:
        "https://html.pixelfit.agency/pesco/assets/images/category/category-8.jpg",
      link: "/",
    },
    {
      name: "Casual Suit",
      items: 30,
      image:
        "https://html.pixelfit.agency/pesco/assets/images/category/category-9.jpg",
      link: "/",
    },
    {
      name: "Summer Dress",
      items: 36,
      image:
        "https://html.pixelfit.agency/pesco/assets/images/category/category-10.jpg",
      link: "/",
    },
    {
      name: "Sweaters",
      items: 24,
      image:
        "https://html.pixelfit.agency/pesco/assets/images/category/category-11.jpg",
      link: "/",
    },
    {
      name: "Jackets",
      items: 6,
      image:
        "https://html.pixelfit.agency/pesco/assets/images/category/category-12.jpg",
      link: "/",
    },
  ];

  return (
    <section className="pt-20 pb-5 md:pt-24 md:pb-5 lg:pt-32 lg:pb-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end mb-12">
          {/* Section Title - Left Column */}
          <div className="w-full md:w-8/12">
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
                  Categories
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                Browse Top Category
              </h2>
            </div>
          </div>

          {/* View All Button - Right Column */}
          <div className="w-full md:w-4/12 md:mt-0 mt-[30px] md:mb-0 mb-[50px] ">
            <div
              className="text-center md:text-right"
              data-aos="fade-left"
              data-aos-delay="15"
              data-aos-duration="1200"
            >
              <Link
                href="/shops"
                className="inline-block rounded-[25px] hover:bg-red-600 bg-black text-white font-medium py-[12px] px-[28px] transition duration-300"
              >
                View All <FaArrowRight className="inline ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div className="pt-10 md:pt-20">
          <div className="flex flex-wrap justify-center md:justify-between w-full">
            {categories.map((category) => (
              <div
                className="relative category-item group h-[190px] flex items-end justify-center pb-[20px]  mb-28 md:mb-28 lg:mb-32 xl:mb-44 aos-init aos-animate bg-white hover:bg-black transition-all duration-700 w-[80%] md:w-[30%] lg:w-[14%] "
                data-aos="fade-up"
                data-aos-delay="35"
                data-aos-duration="1800"
              >
                {/* Category Image */}
                <div className="category-img absolute top-[-90px] left-[10%] md:left-[7.5%] lg:left-0 w-[80%] md:w-[85%] lg:w-[100%] overflow-hidden rounded-[100%] border border-dashed border-gray-400">
                  <Image
                    src={category.image}
                    alt="Jackets"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Category Content */}
                <div className="category-content text-center">
                  <Link
                    href="/"
                    className="category-btn block text-lg font-semibold group-hover:text-white text-gray-800 mb-[2px] transition-colors"
                  >
                    {category.name}
                  </Link>
                  <span className="text-sm group-hover:text-white text-gray-500">
                    {category.items} items
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
