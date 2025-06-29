// components/ProductReelCard.jsx
import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa'; // Star icon for ratings
import { FiShoppingBag } from 'react-icons/fi'; // Shopping bag icon for Add to cart

export default function ProductReelCard({
  videoSrc = "//lume-demo1.myshopify.com/cdn/shop/videos/c/vp/aaba7b1f4a3f4ea19656e68029e34644/aaba7b1f4a3f4ea1f4a3f4ea19656e68029e34644.HD-720p-1.6Mbps-47878281.mp4?v=0",
  posterSrc = "//lume-demo1.myshopify.com/cdn/shop/files/preview_images/aaba7b1f4a3f4ea19656e68029e34644.thumbnail.0000000000_small.jpg?v=1747715556",
  productLink = "/products/spread-collar-shirt",
  img1Src = "//lume-demo1.myshopify.com/cdn/shop/files/pro-demo-5-33.jpg?v=1744179961&width=720",
  img2Src = "//lume-demo1.myshopify.com/cdn/shop/files/pro-demo-5-34.jpg?v=1744179961&width=720",
  imgAlt = "Collar shirt",
  title = "Collar shirt",
  newPrice = "$21.00",
  oldPrice = "$30.00",
  rating = 0, // 0 means no stars
  numberOfReviews = 0,
  colors = [
    { name: 'Orange', hex: '#FF8A00', isActive: true, img: "//lume-demo1.myshopify.com/cdn/shop/files/pro-demo-5-34.jpg?v=1744179961&width=720", link: "/products/spread-collar-shirt?variant=48271569715433" },
    { name: 'Red', hex: '#F61F1F', isActive: false, img: "//lume-demo1.myshopify.com/cdn/shop/files/pro-demo-5-36.jpg?v=1744179961&width=720", link: "/products/spread-collar-shirt?variant=48279915987177" },
    { name: 'Pink', hex: '#FFC0CB', isActive: false, img: "//lume-demo1.myshopify.com/cdn/shop/files/pro-demo-5-37.jpg?v=1744179961&width=720", link: "/products/spread-collar-shirt?variant=48279916019945" },
  ],
}) {
  const getStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xs ${i < count ? 'text-yellow-500' : 'text-gray-300'}`}>
        <FaStar />
      </span>
    ));
  };

  return (
    // Outer most wrapper, simulating swiper-slide behavior
    // fixed width (290px) aur margin-right (30px) se alignment maintain ki hai.
    <div className="w-[290px] mr-[30px] flex-shrink-0">
      <div className="reel-video">
        <div className="reel-video-wrapper w-full relative pt-[100.1001001001001%] overflow-hidden">
          {/* Video element */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            playsInline
            autoPlay
            loop
            muted
            preload="metadata"
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            {/* Fallback image if video not supported */}
            <Image src={posterSrc} alt="Video Thumbnail" layout="fill" objectFit="cover" />
          </video>
        </div>

        <div className="single-product mt-4"> {/* mt-4 added for spacing between video and product info */}
          <div className="product-grid-list">
            <div className="single-product-wrap">
              <div className="product-image group relative overflow-hidden" style={{ paddingTop: '100.1001001001001%' }}> {/* ratio and pt for aspect ratio */}
                <Link href={productLink} className="absolute inset-0 block w-full h-full">
                  <div className="img1 absolute top-0 left-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0">
                    <Image
                      src={img1Src}
                      alt={imgAlt}
                      width={720} // Adjust based on actual image dimensions for best performance
                      height={720} // Assuming square or similar aspect ratio
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="img2 absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Image
                      src={img2Src}
                      alt={imgAlt}
                      width={720} // Adjust based on actual image dimensions
                      height={720}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </div>

              <div className="product-content mt-3 text-center"> {/* mt-3 for spacing, text-center for alignment */}
                <h6 className="mr-0 mb-1 text-base font-semibold"> {/* mb-1 for spacing */}
                  <Link href={productLink} title={title} className="text-gray-800 hover:text-blue-600 transition-colors">
                    {title}
                  </Link>
                </h6>
                <div className="price-box price--on-sale text-lg font-bold">
                  <span className="new-price text-blue-600">{newPrice}</span>
                  {oldPrice && (
                    <span className="old-price text-gray-400 line-through ml-2">{oldPrice}</span>
                  )}
                </div>
                {/* Unit price (hidden in original, keeping it hidden) */}
                <small className="unit-price caption hidden">
                  <span className="price-item price-item--last">
                    <span></span>
                    <span aria-hidden="true">/</span>
                    <span></span>
                  </span>
                </small>

                <div className="product-grid-rating flex justify-center mt-2"> {/* flex justify-center for ratings alignment */}
                  <div className="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup">
                    <div className="jdgm-prev-badge jdgm--js flex items-center gap-1">
                      <span className="jdgm-prev-badge__stars flex">
                        {getStars(rating)}
                      </span>
                      <span className="jdgm-prev-badge__text text-xs text-gray-500">
                        {numberOfReviews === 0 ? 'No reviews' : `(${numberOfReviews} reviews)`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pr-gr-option flex justify-center gap-2 mt-3"> {/* flex justify-center for color options alignment */}
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className={`variant-option item-color rounded-full border-2 p-[2px] ${color.isActive ? 'border-blue-500' : 'border-transparent'}`}
                    >
                      <label
                        className="op-lb color cust-checkbox-label relative w-6 h-6 rounded-full block cursor-pointer"
                        title={color.name}
                        style={{ backgroundColor: color.hex }}
                      >
                        {/* No actual checkbox needed if just displaying color */}
                        {/* <span className="color-swatch cust-check swatch" style={{ '--swatch--background': color.hex }}></span> */}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="product-action mt-4"> {/* mt-4 for spacing */}
                  {/* Quick Add Button */}
                  <Link
                    href={productLink} // Actual add to cart functionality would be handled by state management or API call
                    className="quick-add-btn w-full py-2 px-4 bg-gray-800 text-white rounded-md flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-300"
                  >
                    <FiShoppingBag className="text-lg" />
                    <span className="title">Add to cart</span>
                    <div className="ajax-loader hidden">
                      {/* Spinner for loading state, hidden by default */}
                      <span className="spinner-border"></span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}