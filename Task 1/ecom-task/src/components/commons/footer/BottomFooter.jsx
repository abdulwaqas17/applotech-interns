import Image from 'next/image';
import Link from 'next/link';

// Footer menu data
const footerMenu = [
  {
    label: 'Privacy Policy',
    href: 'https://klbtheme.com/clotya/privacy-policy/',
    rel: 'privacy-policy',
  },
  {
    label: 'Terms and Conditions',
    href: 'https://klbtheme.com/clotya/terms-and-conditions/',
  },
  {
    label: 'Returns Policy',
    href: 'https://klbtheme.com/clotya/refund_returns/',
  },
];

// Copyright text
const copyrightText = 'Copyright 2025 © Clotya WordPress Theme. All rights reserved. Powered by KLBTheme.';

// Footer copyright section component
const BottomFooter = () => {
  return (
    <div className='md:mx-8 mx-2 bg-white'>
        <div className="footer-row footer-copyright text-black boder border-t-[1px] border-black py-1 md:py-4">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="footer-row-wrapper flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright text */}
          <div className="site-copyright text-center md:text-left">
            <p className="md:text-sm  text-[.8rem] text-gray-600">{copyrightText}</p>
          </div>
          {/* Payment cards image */}
          <Link href="https://klbtheme.com/clotya/shop/" className="order-2 md:order-1">
            <Image
              src="https://klbtheme.com/clotya/wp-content/uploads/2022/06/cards.png"
              alt="payment"
              width={200}
              height={40}
              className="object-contain"
              decoding="async"
            />
          </Link>
          {/* Footer menu */}
          <nav className="footer-menu order-1 md:order-2">
            <ul className="menu flex gap-2 sm:gap-4 justify-center">
              {footerMenu.map((item, index) => (
                <li key={index} className="menu-item">
                  <Link
                    href={item.href}
                    rel={item.rel || undefined}
                    className="md:text-sm text-[.8rem] text-gray-600 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BottomFooter;