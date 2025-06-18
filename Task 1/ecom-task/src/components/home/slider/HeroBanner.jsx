import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

// --- Individual Hero Banner Component ---
const HeroBanner = ({
  subtitle,
  title,
  description,
  linkHref,
  imageUrl,
  altText,
}) => {
  return (
    <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <Image
        src={imageUrl}
        alt={altText}
        layout="fill" // Makes the image fill the parent
        objectFit="cover" // Ensures the image covers the area, cropping if necessary
        quality={90} // Image quality
        priority // For hero images that are critical for LCP
        className="z-0" // Ensure image is behind content
      />
      {/* Optional: Add an overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      {/* Banner Content */}
      <div className="relative z-20 container max-w-7xl mx-auto px-4 text-white text-center md:text-left">
        <div className="flex flex-col justify-center items-center md:items-start h-full p-4 md:p-8 lg:p-12">
          {/* Subtitle */}
          <h4 className="entry-subtitle text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            {subtitle}
          </h4>
          {/* Title */}
          <h2 className="entry-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 max-w-2xl">
            {title}
          </h2>
          {/* Description */}
          <div className="entry-description text-base sm:text-lg mb-6 max-w-xl">
            <p>{description}</p>
          </div>
          {/* Shop Collection Button */}
          <Link
            href={linkHref}
            className="btn link inline-flex items-center bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-full font-bold text-lg transition-colors duration-300"
          >
            Shop Collection <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Overlay Link (if the whole banner is clickable, adjust linkHref above or use this) */}
      {/* <Link href={linkHref} className="overlay-link absolute inset-0 z-30"></Link> */}
    </div>
  );
};

export default HeroBanner;
