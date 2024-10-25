import { useSelector } from "react-redux";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state: any) => state.cart);
  const cartLength = cartItems.items.length > 99 ? '99+' : cartItems.items.length;

  return (
    <div
      className="w-[100%] flex justify-between items-center py-4 px-16 bg-gray-800 text-white"
    >
      <Link to="/">
        <div
          className="w-[100px]"
        >
          <img src={assets.logo} alt="Logo" width="100" />
        </div>
      </Link>
      <Link to="/cart">
        <div
          className="flex items-center justify-between w-16"
        >
          <p>Cart</p>
          <div
            className="relative"
          >
            <img src={assets.cart} alt="" className="text-white" />
            {cartLength > 0 ?
            <span
              className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-4 h-4 p-3 flex items-center justify-center"
            >{cartLength}</span> : null}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;