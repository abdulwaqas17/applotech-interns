// import Image from 'next/image';
// import Link from 'next/link';

// // Brand info data
// const brandInfo = {
//   logo: {
//     src: 'https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo-300x67.png',
//     alt: '',
//     width: 148,
//     height: 33,
//   },
//   description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in termapol.',
//   contact: '(+800) 1234 5678 90 – info@example.com',
// };

// // Navigation menu data
// const menus = [
//   {
//     title: 'Information',
//     items: [
//       { label: 'About Us', href: 'https://klbtheme.com/clotya/about-us/' },
//       { label: 'Privacy Policy', href: 'https://klbtheme.com/clotya/privacy-policy/', rel: 'privacy-policy' },
//       { label: 'Returns Policy', href: 'https://klbtheme.com/clotya/refund_returns/' },
//       { label: 'Shipping Policy', href: 'https://klbtheme.com/clotya/privacy-policy/', rel: 'privacy-policy' },
//       { label: 'Dropshipping', href: '#' },
//     ],
//   },
//   {
//     title: 'Account',
//     items: [
//       { label: 'Dashboard', href: 'https://klbtheme.com/clotya/my-account/' },
//       { label: 'My Orders', href: 'https://klbtheme.com/clotya/my-account/orders/' },
//       { label: 'My Wishlist', href: 'https://klbtheme.com/clotya/wishlist/' },
//       { label: 'Account details', href: 'https://klbtheme.com/clotya/my-account/edit-account/' },
//       { label: 'Track My Orders', href: 'https://klbtheme.com/clotya/order-tracking/' },
//     ],
//   },
//   {
//     title: 'Shop',
//     items: [
//       { label: 'Affiliate', href: 'https://klbtheme.com/clotya/contact/' },
//       { label: 'Bestsellers', href: 'https://klbtheme.com/clotya/shop/?orderby=popularity' },
//       { label: 'Discount', href: 'https://klbtheme.com/clotya/shop/?on_sale=onsale' },
//       { label: 'Latest Products', href: 'https://klbtheme.com/clotya/shop' },
//       { label: 'Sale Products', href: 'https://klbtheme.com/clotya/shop/?on_sale=onsale' },
//     ],
//   },
//   {
//     title: 'Categories',
//     items: [
//       { label: 'Women', href: 'https://klbtheme.com/clotya/product-category/women/' },
//       { label: 'Men', href: 'https://klbtheme.com/clotya/product-category/men/' },
//       { label: 'Bags', href: 'https://klbtheme.com/clotya/product-category/bags/' },
//       { label: 'Outerwear', href: 'https://klbtheme.com/clotya/product-category/outerwear/' },
//       { label: 'Shoes', href: 'https://klbtheme.com/clotya/product-category/shoes/' },
//     ],
//   },
// ];

// // Reusable navigation widget component
// const FooterNavWidget = ({ title, items }) => {
//   return (
//     <div className="klbfooterwidget widget widget_nav_menu">
//       <h4 className="widget-title text-lg font-semibold text-white mb-4">{title}</h4>
//       <div className="menu-container">
//         <ul className="menu space-y-2">
//           {items.map((item, index) => (
//             <li key={index} className="menu-item">
//               <Link
//                 href={item.href}
//                 rel={item.rel || undefined}
//                 className="text-sm text-gray-300 hover:text-white transition-colors"
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// // Main footer widgets section
// const MidFooter = () => {
//   return (
//     <div className="footer-row widgets-row border-boxed bg-gray-900 text-white py-8">
//       <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="footer-row-wrapper">
//           <div className="grid grid-cols-12 gap-6">
//             {/* Brand Info Column */}
//             <div className="col col-12 col-lg-4">
//               <div className="klbfooterwidget widget widget_text">
//                 <div className="brand-info">
//                   <p>
//                     <Image
//                       src={brandInfo.logo.src}
//                       alt={brandInfo.logo.alt}
//                       width={brandInfo.logo.width}
//                       height={brandInfo.logo.height}
//                       className="alignnone"
//                       decoding="async"
//                       sizes="(max-width: 148px) 100vw, 148px"
//                     />
//                   </p>
//                   <p className="text-sm text-gray-300 mt-4">{brandInfo.description}</p>
//                   <p className="text-sm text-gray-300 mt-2">{brandInfo.contact}</p>
//                 </div>
//               </div>
//             </div>
//             {/* Navigation Columns */}
//             {menus.map((menu, index) => (
//               <div key={index} className="col col-12 col-lg-2">
//                 <FooterNavWidget title={menu.title} items={menu.items} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MidFooter;

import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

// Brand Info Component (Modular)
const BrandInfo = () => {
  return (
    <div className="brand-info space-y-4">
      {/* Logo */}
      <img 
        decoding="async" 
        className="align-none" 
        src="https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo-300x67.png" 
        alt="Company Logo" 
        width="148" 
        height="33"
        srcSet="https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo-300x67.png 300w, https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo-90x20.png 90w, https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo-64x14.png 64w, https://klbtheme.com/clotya/wp-content/uploads/2022/04/logo.png 332w"
        sizes="(max-width: 148px) 100vw, 148px"
      />
      
      {/* Description */}
      <p className="text-gray-600 text-sm">
        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in termapol.
      </p>
      
      {/* Contact Info */}
      <div className="contact-info space-y-1">
        <p className="flex items-center gap-2 text-sm text-gray-600">
          <FaPhone className="text-gray-500" />
          (+800) 1234 5678 90
        </p>
        <p className="flex items-center gap-2 text-sm text-gray-600">
          <FaEnvelope className="text-gray-500" />
          info@example.com
        </p>
      </div>
    </div>
  );
};

// Footer Menu Component (Reusable)
const FooterMenu = ({ title, items }) => {
  return (
    <div className="klbfooterwidget">
      <h4 className="widget-title text-lg font-semibold mb-4 text-gray-800">{title}</h4>
      <ul className="menu space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <a 
              href={item.link} 
              className="text-gray-600 hover:text-primary transition-colors text-sm"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Footer Component
const MidFooter = () => {
  // Menu data (can be moved to a separate file for better organization)
  const menuData = [
    {
      title: "Information",
      items: [
        { label: "About Us", link: "https://klbtheme.com/clotya/about-us/" },
        { label: "Privacy Policy", link: "https://klbtheme.com/clotya/privacy-policy/" },
        { label: "Returns Policy", link: "https://klbtheme.com/clotya/refund_returns/" },
        { label: "Shipping Policy", link: "https://klbtheme.com/clotya/privacy-policy/" },
        { label: "Dropshipping", link: "#" }
      ]
    },
    {
      title: "Account",
      items: [
        { label: "Dashboard", link: "https://klbtheme.com/clotya/my-account/" },
        { label: "My Orders", link: "https://klbtheme.com/clotya/my-account/orders/" },
        { label: "My Wishlist", link: "https://klbtheme.com/clotya/wishlist/" },
        { label: "Account details", link: "https://klbtheme.com/clotya/my-account/edit-account/" },
        { label: "Track My Orders", link: "https://klbtheme.com/clotya/order-tracking/" }
      ]
    },
    {
      title: "Shop",
      items: [
        { label: "Affiliate", link: "https://klbtheme.com/clotya/contact/" },
        { label: "Bestsellers", link: "https://klbtheme.com/clotya/shop/?orderby=popularity" },
        { label: "Discount", link: "https://klbtheme.com/clotya/shop/?on_sale=onsale" },
        { label: "Latest Products", link: "https://klbtheme.com/clotya/shop" },
        { label: "Sale Products", link: "https://klbtheme.com/clotya/shop/?on_sale=onsale" }
      ]
    },
    {
      title: "Categories",
      items: [
        { label: "Women", link: "https://klbtheme.com/clotya/product-category/women/" },
        { label: "Men", link: "https://klbtheme.com/clotya/product-category/men/" },
        { label: "Bags", link: "https://klbtheme.com/clotya/product-category/bags/" },
        { label: "Outerwear", link: "https://klbtheme.com/clotya/product-category/outerwear/" },
        { label: "Shoes", link: "https://klbtheme.com/clotya/product-category/shoes/" }
      ]
    }
  ];

  return (
    <div className="footer-row widgets-row border-boxed bg-white py-12">
      <div className="container">
        <div className="footer-row-wrapper">
          <div className="row flex flex-wrap justify-evenly">
            {/* Brand Info Column */}
            <div className="col col-12 lg:col-span-4 w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <BrandInfo />
            </div>

            {/* Menu Columns */}
            {menuData.map((menu, index) => (
              <div 
                key={index} 
                className="flex justify-evenly px-4 mb-8 sm:mb-0"
              >
                <FooterMenu title={menu.title} items={menu.items} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidFooter;