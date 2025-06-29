'use client'
import { FaBahai } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

export default function AnimatedHeadline() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    // This creates the infinite marquee effect
    const marquee = marqueeRef.current;
    if (marquee) {
      const marqueeContent = marquee.querySelector('.marquee-inner')
      const marqueeContentClone = marqueeContent.cloneNode(true)
      marquee.appendChild(marqueeContentClone)
    }
  }, [])

  const marqueeItems = [
    { text: "Women" },
    { text: "Shirts" },
    { text: "Jackets" },
    { text: "Jeans" },
    { text: "Outwear" },
    { text: "Men" },
    { text: "Jackets" }
  ]

  return (
    <section className="bg-gray-950 py-[15px] lg:py-[24px] overflow-hidden">
      <div className="headline-wrap">
        <span 
          ref={marqueeRef}
          className="marquee-wrap flex whitespace-nowrap"
        >
          <span className="marquee-inner flex whitespace-nowrap items-center animate-marquee-smooth">
            {marqueeItems.map((item, i) => (
              <span key={`item-${i}`} className="marquee-item flex justify-between items-center gap-[40px] lg:gap-[60px]  mx-[20px] lg:mx-[30px]">
                <span className="flex items-center">
                  <b className="font-bold text-white text-[18px] lg:text-[25px]">{item.text}</b>
                </span>
                <FaBahai className="text-red-500 w-[16px] h-[16px] text-xs " />
              </span>
            ))}
          </span>
          <span className="marquee-inner flex whitespace-nowrap items-center animate-marquee-smooth">
            {marqueeItems.map((item, i) => (
              <span key={`item-clone-${i}`} className="marquee-item flex justify-between items-center gap-[40px] lg:gap-[60px]  mx-[20px] lg:mx-[30px]">
                <span className="flex items-center">
                  <b className="font-bold text-white text-[18px] lg:text-[25px]">{item.text}</b>
                </span>
                <FaBahai className="text-red-500 w-[16px] h-[16px] text-xs" />
              </span>
            ))}
          </span>
        </span>
      </div>

      <style jsx global>{`
        @keyframes marquee-smooth {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-smooth {
          animation: marquee-smooth 20s linear infinite;
        }
      `}</style>
    </section>
  )
}