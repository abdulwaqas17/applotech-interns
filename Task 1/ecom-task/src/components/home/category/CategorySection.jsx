"use client";
import { FaArrowRight } from "react-icons/fa";
import { GoNorthStar } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import SectionBar from "../bar/SectionBar";

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
    <section className="mt-[60px] lg:my-[100px] px-[20px] md:px-[30px]">
      <div className="container mx-auto">
        {/* Section Bar  */}
        <SectionBar
          category="Categories"
          heading="Browse Top Category"
          option={
            <div
              className="text-center flex md:text-right"
              data-aos="fade-left"
              data-aos-delay="15"
              data-aos-duration="1200"
            >
              <Link
                href="/shops"
                className="inline-block rounded-[25px] hover:bg-red-600 bg-black text-white font-medium py-[10px] px-[18px] lg:py-[12px] lg:px-[28px] transition duration-300"
              >
                View All <FaArrowRight className="inline ml-1" />
              </Link>
            </div>
          }
        />

        {/* Category Grid */}
        <div className="pt-10 md:pt-20">
          <div className="flex flex-wrap justify-center md:justify-between w-full">
            {categories.map((category) => (
              <div
                className="relative category-item group h-[190px] flex items-end justify-center pb-[20px] aos-init aos-animate bg-white hover:bg-black transition-all duration-700 w-[80%] md:w-[30%] lg:w-[14%] mb-[120px] lg:mb-0"
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
