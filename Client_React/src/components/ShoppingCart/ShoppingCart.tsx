import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";

const ShoppingCart = (): React.ReactNode => {
  return (
    <button className="inline-block bg-gray-50 rounded-full relative scale-50">
      <FontAwesomeIcon className="text-4xl px-8 py-8" icon="faCartShopping" />
      <span className="absolute bg-red-500 rounded-full text-white top-3 right-2 text-sm w-8 h-8 flex justify-center items-center">10</span>
    </button>
  );
};

export default ShoppingCart;
