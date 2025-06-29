'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function DiscountSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 12,
    minutes: 1,
    seconds: 9
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { days, hours, minutes, seconds } = prev
        
        if (seconds > 0) return { ...prev, seconds: seconds - 1 }
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 }
        if (hours > 0) return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 }
        if (days > 0) return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 }
        
        clearInterval(timer)
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="px-[20px] md:px-[30px] my-[60px] lg:my-[100px]">
      <div className="container mx-auto">
        <div className="col w-full">
          <div className="banner-deal-wrap flex justify-center lg:justify-between flex-wrap gap-[40px] lg:gap-0">
            {/* First Banner - Men Collection */}
            <div className="banner-deal-block w-[100%] md:w-[45%] order-0 md:order-0 lg:order-0 lg:w-[32%]  group relative overflow-hidden rounded-lg">
              <div className="deal-main h-full">
                <span className="deal-image block h-full">
                  <Image
                    src="https://lume-demo1.myshopify.com/cdn/shop/files/Cat-1_90d98bae-a0c5-461c-b215-0a70937ada19.jpg?v=1750047498&width=860"
                    alt="Men collection"
                    width={860}
                    height={1254}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </span>
                <div className="deal-content absolute inset-0 flex flex-col justify-end items-center text-center pb-[60px] lg:pb-[80px]">
                  <div className="deal-title mb-4">
                    <span className="subtitle text-white text-[16px] lg:text-[20px] font-semibold block">Men Collection</span>
                    <h2 className="title text-white text-[35px] lg:text-[45px] font-bold">New Arrivals</h2>
                  </div>
                  <div className="deal-button">
                    <Link href="/collections/all" className=" bg-white text-[14px] lg:text-[18px] font-medium text-black px-[20px] lg:px-[28px] py-[12px] lg:py-[14px] rounded-[7px] hover:bg-black hover:text-white duration-500 transition-colors inline-block">
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Banner - Special Discount */}
            <div className="deal-banner-block w-[100%] md:w-[45%] order-1 md:order-2 lg:order-1 lg:w-[32%] group  relative overflow-hidden rounded-lg">
              <div className="deal-main h-full">
                <span className="deal-image block h-full">
                  <Image
                    src="https://lume-demo1.myshopify.com/cdn/shop/files/Cat-3_f6816321-a9ab-42b6-a74c-f32f9161e258.jpg?v=1750049688&width=860"
                    alt="Special discount"
                    width={860}
                    height={1254}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </span>
                <div className="deal-content absolute inset-0 flex flex-col justify-center items-center text-center px-[20px] lg:px-[40px]">
                  <div className="deal-title lg:mb-[12px]">
                    <span className="subtitle text-white lg:text-[18px]  font-semibold mb-2 block">Up to 20% off</span>
                    <h2 className="title text-white text-2xl text-[36px] md:text-[42px] lg:text-[50px] font-bold">Special discount</h2>
                    <p className="desc text-gray-200 text-[13px] lg:text-[16px] font-bold mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elited
                    </p>
                  </div>
                  
                  <div className="deal-timer w-full my-[18px]">
                    <ul className="list-none p-0 m-0 flex justify-between">
                      {Object.entries(timeLeft).map(([unit, value]) => (
                        <li key={unit} className="text-center">
                          <div className="timer-block">
                            <span className="countdown_timer text-white text-[28px] lg:text-[35px] font-bold block">
                              {value.toString().padStart(2, '0')} 
                            </span>
                            <span className="countdown_title text-[14px] lg:text-[18px] text-white font-medium">
                              {unit.charAt(0).toUpperCase() + unit.slice(1)}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                     <Link href="/collections/all" className=" bg-white text-[14px] lg:text-[18px] font-medium text-black px-[20px] lg:px-[28px] py-[12px] lg:py-[14px] rounded-[7px] hover:bg-black hover:text-white duration-500 transition-colors inline-block">
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Banner - Women Collection */}
            <div className="banner-deal-block w-[100%] md:w-[45%] order-2 md:order-1 lg:order-2 lg:w-[32%]  group relative overflow-hidden rounded-lg">
              <div className="deal-main h-full">
                <span className="deal-image block h-full">
                  <Image
                    src="https://lume-demo1.myshopify.com/cdn/shop/files/Cat-2_2f102931-ba11-4f9f-93d7-6f26f7064b04.jpg?v=1750049788&width=860"
                    alt="Women collection"
                    width={860}
                    height={1254}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </span>
                <div className="deal-content absolute inset-0 flex flex-col justify-end items-center text-center pb-[60px] lg:pb-[80px]">
                  <div className="deal-title mb-4">
                    <span className="subtitle text-white text-[16px] lg:text-[20px] font-semibold block">Women Collection</span>
                    <h2 className="title text-white text-[35px] lg:text-[45px] font-bold">New Arrivals</h2>
                  </div>
                  <div className="deal-button">
                    <Link href="#" className=" bg-white text-[14px] lg:text-[18px] font-medium text-black px-[20px] lg:px-[28px] py-[12px] lg:py-[14px] rounded-[7px] hover:bg-black hover:text-white duration-500 transition-colors inline-block">
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}