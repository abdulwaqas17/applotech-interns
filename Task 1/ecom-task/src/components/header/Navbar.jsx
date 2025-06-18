"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiMenu,
  FiUser,
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiChevronDown,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  // State for mobile menu, cart dropdown, and search
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [cartOpen, setCartOpen] = useState(false);
  // const [searchOpen, setSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Menu data structure
  const menuItems = [
    {
      id: "home",
      title: "Home",
      url: "/",
    },
    {
      id: "shop",
      title: "Shop",
      url: "/shop",
      submenu: [
        {
          id: "shop-lists",
          title: "Shop Lists",
          submenu: [
            { id: "shop-default", title: "Shop Default", url: "/shop" },
            {
              id: "shop-right",
              title: "Shop Right Sidebar",
              url: "/shop?opt=right-sidebar",
            },
            // Add more shop list items as needed
          ],
        },
        {
          id: "product-detail",
          title: "Product Detail",
          submenu: [
            {
              id: "product-variable",
              title: "Product Variable",
              url: "/product/basic-colored-sweatpants",
            },
            {
              id: "product-default",
              title: "Product Default",
              url: "/product/basic-high-neck-puff-jacket",
            },
            // Add more product detail items as needed
          ],
        },
        // Add more shop submenus as needed
      ],
    },
    // { id: 'women', title: 'Women', url: '/shop?filter_cat=63' },
    // { id: 'men', title: 'Men', url: '/shop?filter_cat=42' },
    // { id: 'outerwear', title: 'Outerwear', url: '/shop?filter_cat=44' },
    // { id: 'blog', title: 'Blog', url: '/blog' },
    { id: "contact", title: "Contact", url: "/contact" },
  ];

  // Toggle submenu for mobile
  const toggleSubmenu = (menuId) => {
    setActiveSubmenu(activeSubmenu === menuId ? null : menuId);
  };

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Left Column - Menu and Navigation */}
            <div className="flex items-center space-x-6">
              {/* Menu Button (hidden on desktop) */}
              <button className=" p-2 hover:text-primary">
                <FiMenu size={20} />
              </button>

              {/* Main Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-1">
                  {menuItems.map((item) => (
                    <li key={item.id} className="group relative">
                      <Link
                        href={item.url}
                        className="flex items-center px-3 py-2 hover:text-primary"
                      >
                        {item.title}
                        {item.submenu && (
                          <FiChevronDown className="ml-1" size={16} />
                        )}
                      </Link>

                      {/* Desktop Submenu */}
                      {item.submenu && (
                        <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          {item.submenu.map((subItem) => (
                            <div key={subItem.id}>
                              {subItem.url ? (
                                <Link
                                  href={subItem.url}
                                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                >
                                  {subItem.title}
                                </Link>
                              ) : (
                                <div className="border-t border-gray-100">
                                  <p className="px-4 py-2 font-medium text-gray-800">
                                    {subItem.title}
                                  </p>
                                  {subItem.submenu &&
                                    subItem.submenu.map((child) => (
                                      <Link
                                        key={child.id}
                                        href={child.url}
                                        className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50"
                                      >
                                        {child.title}
                                      </Link>
                                    ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Center Column - Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="site-brand">
                <Image
                  src="/images/company-logo.jpeg"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="h-15 w-auto"
                />
              </Link>
            </div>

            {/* Right Column - Icons */}
            <div className="flex items-center space-x-4">
              {/* Account */}
              <Link href="/my-account" className="p-2 hover:text-primary">
                <FiUser size={20} />
              </Link>

              {/* Search */}
              <button
                // onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:text-primary"
              >
                <FiSearch size={20} />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="p-2 relative hover:text-primary"
              >
                <FiHeart size={20} />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Cart */}
              <div className="relative">
                <button
                  // onClick={() => setCartOpen(!cartOpen)}
                  className="flex items-center p-2 hover:text-primary"
                >
                  <div className="hidden md:block mr-2 text-sm font-medium">
                    $0.00
                  </div>
                  <div className="relative">
                    <FiShoppingBag size={20} />
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      0
                    </span>
                  </div>
                </button>

                {/* Cart Dropdown */}
               {/* {cartOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-md z-20 p-4">
                    <div className="text-center py-8">
                      <div className="flex justify-center mb-3">
                        <div className="text-gray-400">
                         
                          <svg
                            className="w-12 h-12 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-600">No products in the cart.</p>
                    </div>
                  </div>
                )}*/}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Left Column - Menu Button */}
            <div>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 hover:text-primary"
              >
                <FiMenu size={20} />
              </button>
            </div>

            {/* Center Column - Logo */}
            <div>
              <Link href="/" className="site-brand">
                <Image
                  src="/images/company-logo.jpeg"
                  alt="Clotya – Fashion Store eCommerce Theme"
                  width={100}
                  height={34}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Right Column - Cart */}
            <div className="relative">
              <button
                // onClick={() => setCartOpen(!cartOpen)}
                className="flex items-center p-2 hover:text-primary"
              >
                <div className="relative">
                  <FiShoppingBag size={20} />
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </div>
              </button>

              {/* Cart Dropdown */}
              {/* {cartOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-md z-20 p-4">
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-3">
                      <div className="text-gray-400">
                       
                        <svg
                          className="w-12 h-12 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-600">No products in the cart.</p>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden">
          <div className="absolute inset-y-0 left-0 w-4/5 bg-white shadow-lg overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <Link href="/" className="site-brand">
                <Image
                  src="/images/company-logo.jpeg"
                  alt="Clotya – Fashion Store eCommerce Theme"
                  width={100}
                  height={34}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 hover:text-primary"
              >
                <FiX size={24} />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <div className="flex flex-col">
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() => toggleSubmenu(item.id)}
                            className="flex items-center justify-between py-2 px-3 hover:bg-gray-100 rounded"
                          >
                            <span>{item.title}</span>
                            <FiChevronDown
                              className={`transition-transform ${
                                activeSubmenu === item.id
                                  ? "transform rotate-180"
                                  : ""
                              }`}
                              size={16}
                            />
                          </button>

                          {activeSubmenu === item.id && (
                            <div className="pl-4 mt-1 space-y-1">
                              {item.submenu.map((subItem) => (
                                <div key={subItem.id}>
                                  {subItem.url ? (
                                    <Link
                                      href={subItem.url}
                                      className="block py-2 px-3 hover:bg-gray-50 rounded"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  ) : (
                                    <>
                                      <p className="py-2 px-3 font-medium">
                                        {subItem.title}
                                      </p>
                                      {subItem.submenu && (
                                        <div className="pl-4 space-y-1">
                                          {subItem.submenu.map((child) => (
                                            <Link
                                              key={child.id}
                                              href={child.url}
                                              className="block py-2 px-3 text-sm hover:bg-gray-50 rounded"
                                              onClick={() =>
                                                setMobileMenuOpen(false)
                                              }
                                            >
                                              {child.title}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.url}
                          className="py-2 px-3 hover:bg-gray-100 rounded"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {/* {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Search Products</h3>
              <button
                // onClick={() => setSearchOpen(false)}
                className="p-1 hover:text-primary"
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-3 top-3 text-gray-500 hover:text-primary">
                <FiSearch size={20} />
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
