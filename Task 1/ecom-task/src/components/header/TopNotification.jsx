import Link from "next/link";

const TopNotification = () => {
  return (
    <div className="global-notification bg-black text-white py-3 text-sm">
      <div className="container mx-auto px-4">
        <p className="text-center">
          SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY
          - OFF 50%!
          <Link
            href="/shop"
            className="font-semibold underline hover:text-blue-400 ml-2"
          >
            SHOP NOW
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TopNotification;
