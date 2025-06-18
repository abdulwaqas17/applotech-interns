
import Image from 'next/image';
import Link from 'next/link';

const CategoryBanner = ({ 
  category, 
  productCount, 
  description, 
  subCategories, 
  imageUrl, 
  link 
}) => {
  return (
    <div className="relative h-full group overflow-hidden rounded-lg shadow-md">
      {/* Banner Image */}
      <div className="relative h-full min-h-[400px]">
        <Image
          src={imageUrl}
          alt={category}
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Banner Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
        <div className="text-white mb-2">
          <span className="text-sm font-medium">{productCount} products</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{category}</h2>
        
        {description && (
          <p className="text-white text-sm md:text-base mb-4 max-w-md">{description}</p>
        )}

        {subCategories && subCategories.length > 0 && (
          <div className="mt-auto">
            <ul className="flex flex-wrap gap-2">
              {subCategories.map((subCat) => (
                <li key={subCat.name}>
                  <Link 
                    href={subCat.link}
                    className="text-white text-xs md:text-sm hover:underline"
                  >
                    {subCat.name}
                  </Link>
                  {subCat !== subCategories[subCategories.length - 1] && (
                    <span className="mx-2 text-white">|</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Overlay Link */}
        <Link href={link} className="absolute inset-0 z-10" aria-label={`Shop ${category}`}></Link>
      </div>
    </div>
  );
};

export default CategoryBanner;