import { FC } from "react";
import { ProductCardType } from "../../interfaces/interfaces";
import { assets } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/CartSlice";


type CartItemsProps = ProductCardType;

const CartItem:FC<CartItemsProps> = (data) => {
  const dispatch = useDispatch();
  let title;
  let description;
  if(data.title && data.description){
    title = data.title.length > 80 ? data.title.slice(0, 80) + "..." : data.title;
    description = data.description.length > 150 ? data.description.slice(0, 150) + "..." : data.description;
  }

  const removeItemFromCart = () => {
    dispatch(removeItem(data.id));
    // console.log("Item Removed");
  }

  return (
    <div
      className="flex flex-col justify-between md:flex-row gap-4 border p-6"
    >
      <div className="w-36 h-36 flex justify-center items-center">
        <img src={data.image} alt={data.title} width="100" />        
      </div>
      <div className="mt-2 md:mt-0 w-full">
        <h3 className="text-wrap font-semibold text-lg mt-4">{title}</h3>
        <p className="text-wrap text-gray-500 text-sm">{description}</p>
        <div
          className="flex justify-between items-center mt-2"
        >
          <h3 className="font-bold text-2xl">${data.price}</h3>
          <button 
            className="bg-slate-400 p-4 rounded-full"
            onClick={removeItemFromCart}  
          >
            <img src={assets.delete} alt="Delete Button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;