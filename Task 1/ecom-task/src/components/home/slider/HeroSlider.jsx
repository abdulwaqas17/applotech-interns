'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // If you want fade effect, otherwise remove

// Import Swiper modules
// For this example, we'll add Navigation, Pagination, Autoplay (optional)
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import React Icon for the arrow

import HeroBanner from './HeroBanner';

// --- Utility Data for Slider Banners ---
const sliderData = [
  {
    id: 1,
    subtitle: 'WINTER 2022 COLLECTION',
    title: 'VALENTIN PAUL ESSENTIAL COLLECTION',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    linkHref: '/shop', // Assuming a shop link
    imageUrl: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-10.jpg',
    altText: 'Winter 2022 Collection Banner 1',
  },
  {
    id: 2,
    subtitle: 'NEW ARRIVALS',
    title: 'TRENDING FASHION PICKS',
    description: 'Discover the latest styles and elevate your wardrobe with our fresh collection.',
    linkHref: '/new-arrivals',
    imageUrl: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-11.jpg',
    altText: 'New Arrivals Banner',
  },
  {
    id: 3,
    subtitle: 'SUMMER VIBES',
    title: 'BEACHWEAR & SWIMSUITS',
    description: 'Get ready for sunny days with our exclusive range of summer essentials.',
    linkHref: '/summer-collection',
    imageUrl: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/slider-12.jpg',
    altText: 'Summer Collection Banner',
  },
];


// --- Main Hero Slider Component ---
const HeroSlider = () => {
  

  return (
    <section className="hero-slider relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true} // Enable looping for continuous sliding
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        pagination={{ clickable: true }} // Add clickable pagination dots
        navigation={true} // Add navigation arrows
        effect="fade" // Optional: Add a fade effect for transitions
        fadeEffect={{ crossFade: true }} // Ensure smooth cross-fade
        className="mySwiper w-full h-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroBanner {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;

