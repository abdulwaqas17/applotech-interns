'use client'
import BottomFooter from "@/components/commons/footer/BottomFooter";
import MidFooter from "@/components/commons/footer/MidFooter";
import TopFooter from "@/components/commons/footer/TopFooter";
import CategoryGrid from "@/components/home/category/CategoryGrid";
import FeaturedProductsDetail from "@/components/home/featured-products/FeaturedProductsDetail";
import FeaturedProductsSection from "@/components/home/featured-products/FeaturedProductsSection";
import LRMan from "@/components/home/LR-img-text/LRMan";
import LRWomen from "@/components/home/LR-img-text/LRWomen";
import ServiceBoxes from "@/components/home/service/ServiceBoxes";
import CircularSlider from "@/components/home/slider/CirculerSlider";
import HeroSection from "@/components/home/slider/HeroSection";
import HeroSlider from "@/components/home/slider/HeroSlider";
import ProductsSlider from "@/components/products/slider/ProductsSlider";
import { useState } from "react";
import Loading from "./loading";
import CategorySection from "@/components/home/category/CategorySection";


export default function Home() {
  //  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-gray-50">
      {/* {isLoading && <Loading />} */}
      
      <HeroSection/>
      <CategorySection/>
       <LRWomen/>
      <CircularSlider/>
      <LRMan/>
      {/* <ProductsSlider/> */}
      {/* <ServiceBoxes/> */}
      {/* <CategoryGrid/> */}
      {/* <FeaturedProductsDetail/> */}
      {/* <FeaturedProductsSection/> */}
       <div className="p-8">
        <h2 className="text-2xl font-bold mt-8">Explore Our Products</h2>
        <p className="mt-4">This is where your product listings would go.</p>
      </div>
      <TopFooter/>
      <MidFooter/>
      <BottomFooter/> 
    </div>
  );
}
