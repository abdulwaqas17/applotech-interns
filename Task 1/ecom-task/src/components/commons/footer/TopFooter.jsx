// import Image from 'next/image';
// import Link from 'next/link';

// // Footer subscribe section component
// const TopFooter = () => {
//   return (
//     <div className="footer-row subscribe-row style-1 bg-black text-white py-8">
//       <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="footer-row-wrapper flex flex-col md:flex-row gap-8">
//           {/* Subscription form section */}
//           <div className="footer-subscribe-wrapper flex-1">
//             <h3 className="entry-title text-2xl font-bold">
//               Get our emails for info on new items, sales and more.
//             </h3>
//             <div className="entry-description mt-4 text-sm">
//               <p>We&apos;ll email you a voucher worth £10 off your first order over £50.</p>
//             </div>
//             <div className="newsletter-form mt-6">
//               <form className="flex flex-col sm:flex-row gap-4" action="/subscribe" method="POST">
//                 <input
//                   className="subscribe-input flex-1 px-4 py-2 text-black rounded placeholder-gray-500 focus:outline-none"
//                   type="email"
//                   name="EMAIL"
//                   placeholder="Enter your email address"
//                   required
//                 />
//                 <button
//                   className="btn btn-dark px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
//                   type="submit"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//               <p className="privacy-text mt-4 text-xs">
//                 By subscribing you agree to our{' '}
//                 <Link href="/terms" className="underline hover:text-gray-300">
//                   Terms & Conditions and Privacy & Cookies Policy.
//                 </Link>
//               </p>
//             </div>
//           </div>
//           {/* Contact and app download section */}
//           <div className="footer-contact-wrapper flex-1">
//             <h3 className="entry-title text-2xl font-bold">
//               Need help?
//               <br />
//               (+800) 1234 5678 90
//             </h3>
//             <div className="entry-description mt-4 text-sm">
//               <p>We are available 8:00am – 7:00pm</p>
//             </div>
//             <div className="download-app mt-6 flex gap-4">
//               <Link href="https://www.apple.com/app-store/">
//                 <Image
//                   src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/app-store.png"
//                   alt="App Store"
//                   width={120}
//                   height={40}
//                   className="object-contain"
//                   decoding="async"
//                 />
//               </Link>
//               <Link href="https://play.google.com/store">
//                 <Image
//                   src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/google-play.png"
//                   alt="Google Play"
//                   width={120}
//                   height={40}
//                   className="object-contain"
//                   decoding="async"
//                 />
//               </Link>
//             </div>
//             <span className="block mt-4 text-sm">
//               <strong>Shopping App:</strong> Try our View in Your Room feature, manage registries and save payment info.
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopFooter;

'use client';

import Image from 'next/image';
import Link from 'next/link';

// Footer subscribe section component
const TopFooter = () => {
  return (
    <div className="footer-row subscribe-row style-1 bg-black text-white py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="footer-row-wrapper flex flex-col md:flex-row gap-8">
          {/* Subscription form section */}
          <div className="footer-subscribe-wrapper flex-1">
            <h3 className="entry-title text-2xl font-bold">
              Get our emails for info on new items, sales and more.
            </h3>
            <div className="entry-description mt-4 text-sm">
              <p>We&apos;ll email you a voucher worth £10 off your first order over £50.</p>
            </div>
            {/* Newsletter Form Start - UI Only */}
            <div className="newsletter-form mt-6">
              <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-954" method="post" data-id="954" data-name="Clotya">
                <div className="mc4wp-form-fields flex flex-col sm:flex-row gap-4">
                  <input
                    // Changed: Background to white
                    className="subscribe-input flex-1 px-4 py-2 text-black rounded placeholder-gray-500 focus:outline-none bg-white"
                    type="email"
                    name="EMAIL"
                    placeholder="Enter your email address"
                    required
                  />
                  <button
                    // Changed: Background to black, text to white, added white border
                    className="btn btn-dark px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors border border-white"
                    type="submit"
                  >
                    Subscribe
                  </button>
                  <p className="privacy-text mt-4 text-xs sm:mt-0 sm:ml-4 sm:flex-initial">
                    By subscribing you agree to our{' '}
                    <Link href="/terms" className="underline hover:text-gray-300">
                      Terms & Conditions and Privacy & Cookies Policy.
                    </Link>
                  </p>
                </div>
                <div className="mc4wp-response"></div>
              </form>
            </div>
            {/* Newsletter Form End */}
          </div>
          {/* Contact and app download section */}
          <div className="footer-contact-wrapper flex-1">
            <h3 className="entry-title text-2xl font-bold">
              Need help?
              <br />
              (+800) 1234 5678 90
            </h3>
            <div className="entry-description mt-4 text-sm">
              <p>We are available 8:00am – 7:00pm</p>
            </div>
            <div className="download-app mt-6 flex gap-4">
              <Link href="https://www.apple.com/app-store/">
                <Image
                  src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/app-store.png"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="object-contain"
                  decoding="async"
                />
              </Link>
              <Link href="https://play.google.com/store">
                <Image
                  src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/google-play.png"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="object-contain"
                  decoding="async"
                />
              </Link>
            </div>
            <span className="block mt-4 text-sm">
              <strong>Shopping App:</strong> Try our View in Your Room feature, manage registries and save payment info.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;