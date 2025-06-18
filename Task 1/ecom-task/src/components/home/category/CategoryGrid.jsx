
//'use client';

// import Image from 'next/image';
// import Link from 'next/link';

// // Category banner data
// const categories = [
//   {
//     id: 'women',
//     title: 'Women',
//     productCount: 54,
//     description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
//     subCategories: [
//       { name: 'Blazers', url: 'https://klbtheme.com/clotya/product-category/women/blazers/' },
//       { name: 'Blouses & shirts', url: 'https://klbtheme.com/clotya/product-category/women/blouses-shirts/' },
//       { name: 'Dresses', url: 'https://klbtheme.com/clotya/product-category/women/dresses/' },
//       { name: 'Jackets & coats', url: 'https://klbtheme.com/clotya/product-category/women/jackets-coats-woman/' },
//       { name: 'Jeans', url: 'https://klbtheme.com/clotya/product-category/women/jeans/' },
//       { name: 'Knit', url: 'https://klbtheme.com/clotya/product-category/women/knit-woman/' },
//       { name: 'Pants', url: 'https://klbtheme.com/clotya/product-category/women/pants-woman/' },
//     ],
//     imageUrl: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/banner-11.jpg',
//     categoryUrl: 'https://klbtheme.com/clotya/product-category/women/',
//   },
//   {
//     id: 'men',
//     title: 'Men',
//     productCount: 23,
//     description: '',
//     subCategories: [
//       { name: 'Pants', url: 'https://klbtheme.com/clotya/product-category/men/pants/' },
//       { name: 'Shirts', url: 'https://klbtheme.com/clotya/product-category/men/shirts/' },
//       { name: 'Shorts', url: 'https://klbtheme.com/clotya/product-category/men/shorts/' },
//       { name: 'Sweatshirts & Hoodies', url: 'https://klbtheme.com/clotya/product-category/men/sweatshirts-hoodies/' },
//     ],
//     imageUrl: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/banner-12.jpg',
//     categoryUrl: 'https://klbtheme.com/clotya/product-category/men/',
//   },
//   {
//     id: 'shoes',
//     title: 'Shoes',
//     productCount: 1,
//     description: '',
//     subCategories: [],
//     imageUrl: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/banner-13.jpg',
//     categoryUrl: 'https://klbtheme.com/clotya/product-category/shoes/',
//   },
//   {
//     id: 'accessories',
//     title: 'Accessories',
//     productCount: 3,
//     description: '',
//     subCategories: [],
//     imageUrl: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/banner-14.jpg',
//     categoryUrl: 'https://klbtheme.com/clotya/product-category/accessories/',
//   },
// ];

// // Individual category banner component
// const CategoryBanner = ({ category }) => {
//   return (
//     <div className="relative group module-category-grid">
//       {/* Banner container with dark overlay */}
//       <div className="relative banner dark content-top content-left">
//         {/* Banner content */}
//         <div className="absolute top-6 left-6 z-10 banner-content text-white">
//           <div className="banner-inner">
//             {/* Product count */}
//             <div className="total-product text-sm font-semibold">
//               {category.productCount} product{category.productCount !== 1 ? 's' : ''}
//             </div>
//             {/* Category title */}
//             <h2 className="entry-category text-2xl font-bold mt-2">{category.title}</h2>
//             {/* Description */}
//             {category.description && (
//               <div className="entry-description mt-2 text-sm">
//                 <p>{category.description}</p>
//               </div>
//             )}
//             {/* Sub-categories */}
//             {category.subCategories.length > 0 && (
//               <div className="sub-categories mt-4">
//                 <ul className="space-y-1">
//                   {category.subCategories.map((subCategory, index) => (
//                     <li key={index}>
//                       <Link
//                         href={subCategory.url}
//                         className="text-sm hover:text-gray-300 transition-colors"
//                       >
//                         {subCategory.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//         {/* Banner image */}
//         <div className="banner-image relative w-full h-[400px]">
//           <Image
//             src={category.imageUrl}
//             alt={category.title}
//             fill
//             className="object-cover"
//             decoding="async"
//             priority={category.id === 'women' || category.id === 'men'}
//           />
//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
//         </div>
//         {/* Overlay link */}
//         <Link href={category.categoryUrl} className="absolute inset-0 overlay-link z-20" />
//       </div>
//     </div>
//   );
// };

// // Main category banners section
// const CategoryGrid = () => {
//   return (
//     <section className="py-8 px-4 sm:px-6 lg:px-8">
//       <div className="container mx-auto max-w-7xl">
//         {/* Main grid for Women and Men banners */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Women banner */}
//           <CategoryBanner category={categories[0]} />
//           {/* Men banner with nested Shoes and Accessories */}
//           <div className="flex flex-col gap-6">
//             <CategoryBanner category={categories[1]} />
//             {/* Nested grid for Shoes and Accessories */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <CategoryBanner category={categories[2]} />
//               <CategoryBanner category={categories[3]} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoryGrid;



'use client';


import Image from 'next/image';
import Link from 'next/link';

// Category banner data
const categories = [
  {
    id: 'women',
    title: 'Women',
    productCount: 54,
    description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
    subCategories: [
      { name: 'Blazers', url: 'https://klbtheme.com/clotya/product-category/women/blazers/' },
      { name: 'Blouses & shirts', url: 'https://klbtheme.com/clotya/product-category/women/blouses-shirts/' },
      { name: 'Dresses', url: 'https://klbtheme.com/clotya/product-category/women/dresses/' },
      { name: 'Jackets & coats', url: 'https://klbtheme.com/clotya/product-category/women/jackets-coats-woman/' },
      { name: 'Jeans', url: 'https://klbtheme.com/clotya/product-category/women/jeans/' },
      { name: 'Knit', url: 'https://klbtheme.com/clotya/product-category/women/knit-woman/' },
      { name: 'Pants', url: 'https://klbtheme.com/clotya/product-category/women/pants-woman/' },
    ],
    imageUrl: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/banner-11.jpg',
    categoryUrl: 'https://klbtheme.com/clotya/product-category/women/',
  },
  {
    id: 'men',
    title: 'Men',
    productCount: 23,
    description: '',
    subCategories: [
      { name: 'Pants', url: 'https://klbtheme.com/clotya/product-category/men/pants/' },
      { name: 'Shirts', url: 'https://klbtheme.com/clotya/product-category/men/shirts/' },
      { name: 'Shorts', url: 'https://klbtheme.com/clotya/product-category/men/shorts/' },
      { name: 'Sweatshirts & Hoodies', url: 'https://klbtheme.com/clotya/product-category/men/sweatshirts-hoodies/' },
    ],
    imageUrl: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/banner-12.jpg',
    categoryUrl: 'https://klbtheme.com/clotya/product-category/men/',
  },
  {
    id: 'shoes',
    title: 'Shoes',
    productCount: 1,
    description: '',
    subCategories: [],
    imageUrl: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/banner-13.jpg',
    categoryUrl: 'https://klbtheme.com/clotya/product-category/shoes/',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    productCount: 3,
    description: '',
    subCategories: [],
    imageUrl: 'https://klbtheme.com/clotya/wp-content/uploads/2022/05/banner-14.jpg',
    categoryUrl: 'https://klbtheme.com/clotya/product-category/accessories/',
  },
];

// Individual category banner component
const CategoryBanner = ({ category }) => {
  return (
    <div className="relative group module-category-grid h-full"> {/* Ensure banner fills height */}
      {/* Banner container with dark overlay */}
      <div className="relative banner dark content-top content-left h-full flex flex-col"> {/* Use flex-col for content stretching */}
        {/* Banner content */}
        <div className="absolute top-6 left-6 z-10 banner-content text-white">
          <div className="banner-inner">
            {/* Product count */}
            <div className="total-product text-sm font-semibold">
              {category.productCount} product{category.productCount !== 1 ? 's' : ''}
            </div>
            {/* Category title */}
            <h2 className="entry-category text-2xl font-bold mt-2">{category.title}</h2>
            {/* Description */}
            {category.description && (
              <div className="entry-description mt-2 text-sm">
                <p>{category.description}</p>
              </div>
            )}
            {/* Sub-categories */}
            {category.subCategories.length > 0 && (
              <div className="sub-categories mt-4">
                <ul className="space-y-1">
                  {category.subCategories.map((subCategory, index) => (
                    <li key={index}>
                      <Link
                        href={subCategory.url}
                        className="text-sm hover:text-gray-300 transition-colors"
                      >
                        {subCategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Banner image */}
        <div className="banner-image relative w-full h-full"> {/* Make image fill available height */}
          <Image
            src={category.imageUrl}
            alt={category.title}
            fill
            className="object-cover"
            decoding="async"
            priority={category.id === 'women' || category.id === 'men'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes for better optimization
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
        </div>
        {/* Overlay link */}
        <Link href={category.categoryUrl} className="absolute inset-0 overlay-link z-20" />
      </div>
    </div>
  );
};

// Main category banners section
const CategoryGrid = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl h-[800px]"> {/* Set a fixed height for the parent to allow percentage heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full"> {/* Parent div, 2 children, full height */}
          {/* Left Child: Women banner (50% width, 100% height) */}
          <div className="w-full h-full">
            <CategoryBanner category={categories[0]} />
          </div>

          {/* Right Child: Contains Men, Shoes, and Accessories (50% width, 100% height) */}
          <div className="flex flex-col gap-6 w-full h-full">
            {/* Top Right: Men banner (50% height of right column) */}
            <div className="h-1/2 w-full"> {/* 50% height of its parent (right column) */}
              <CategoryBanner category={categories[1]} />
            </div>

            {/* Bottom Right: Nested grid for Shoes and Accessories (50% height of right column) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-1/2 w-full"> {/* 50% height of its parent */}
              {/* Bottom Left: Shoes banner (50% width of bottom right, 100% height) */}
              <div className="h-full w-full">
                <CategoryBanner category={categories[2]} />
              </div>
              {/* Bottom Right: Accessories banner (50% width of bottom right, 100% height) */}
              <div className="h-full w-full">
                <CategoryBanner category={categories[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;