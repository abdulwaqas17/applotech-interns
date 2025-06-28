'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function UltimateSale() {
  return (
    <section className="banner-grid-template px-[20px] md:px-[30px]">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col w-full">
            <div className="banner-grid">
              <ul className="banner-grid-ul list-none p-0 m-0 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Left Banner - Text Top Center */}
                <li className="banner-grid-li single-banner fade-in h-full" data-fade-in="">
                  <div className="banner-wrap relative overflow-hidden h-full">
                    <Link href="/products/classic-top" className="banner-main banner-hover block h-full">
                      <Image
                        src="https://lume-demo1.myshopify.com/cdn/shop/files/Banner-1_837c9de5-38be-4d1e-bc35-036c88d60e7d.jpg?v=1749898174&width=860"
                        alt="Best deal of the week"
                        width={860}
                        height={1548}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                       <div className="banner-content absolute lg:top-15 top-8 left-0 right-0 text-center px-4">
                        <div className="text-wrap">
                          <span className="subtitle text-gray-500 block mb-2 font-semibold tracking-[2px]">LIMITED OFFERS</span>
                          <h2 className="title text-gray-800 text-[18px] lg:text-[28px] font-bold ">BEST DEAL OF <br/> THE WEEK</h2>
                        </div>
                        
                      </div>
                    </Link>
                  </div>
                </li>

                {/* Center Banner - Text Middle Center */}
                <li className="banner-grid-li grid-banner fade-in h-full" data-fade-in="">
                  <div className="banner-grid-main h-full">
                    <ul className="grid-ul list-none p-0 m-0 h-full">
                      <li className="grid-li grid-item h-full">
                        <div className="banner-wrap relative overflow-hidden h-full">
                          <Link href="#" className="banner-main banner-hover h-full flex flex-col">
                            <Image
                              src="https://lume-demo1.myshopify.com/cdn/shop/files/Banner-2_b2e36d8b-5aa5-4cd3-95f9-41edb0b51ff8.jpg?v=1749898190&width=860"
                              alt="Ultimate Sale"
                              width={860}
                              height={774}
                              className="w-full h-[50%] object-cover hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                             <div className="h-[50%] inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
                        <h2 className="text-3xl lg:text-7xl font-bold leading-tight m-0 text-black">
                          <span>ULTIAMTE</span><br />
                          <span className="block lg:text-8xl">SALE</span>
                        </h2>
                        <p className="text-base lg:text-[20px] mt-2 mb-4 m-0 text-black">
                          NEW COLLECTION
                        </p>
                        <div className="mt-4">
                          <Link href="#" className="inline-flex items-center justify-center lg:py-[13px] py-[8px] px-[25px] lg:px-[40px] rounded-[10px] font-semibold bg-black text-white lg:text-xl hover:rounded-[36px] transition-all duration-500">
                            Shop now
                          </Link>
                        </div>
                      </div>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Right Banner - Text Top Center */}
                <li className="banner-grid-li single-banner fade-in h-full" data-fade-in="">
                  <div className="banner-wrap relative overflow-hidden h-full">
                    <Link href="#" className="banner-main banner-hover block h-full">
                      <Image
                        src="https://lume-demo1.myshopify.com/cdn/shop/files/Banner-3_ea43e788-4047-4e99-bd14-e0b540250026.jpg?v=1749898206&width=860"
                        alt="Best deal of the week"
                        width={860}
                        height={1548}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="banner-content absolute lg:top-15 top-8 left-0 right-0 text-center px-4">
                        <div className="text-wrap">
                          <span className="subtitle text-gray-500 block mb-2 font-semibold tracking-[2px]">LIMITED OFFERS</span>
                          <h2 className="title text-gray-800 text-[18px] lg:text-[28px] font-bold ">BEST DEAL OF <br/> THE WEEK</h2>
                        </div>
                        
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}