import { FC } from "react";
import { assets } from "../../../assets/assets";
import { ProductCardType } from "../../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/slices/CartSlice";


type ProductCardProps = ProductCardType;

const ProductCard:FC<ProductCardProps> = (data) => {  
  const title = data.title.length > 20 ? data.title.slice(0, 20) + "..." : data.title;
  const description = data.description.length > 50 ? data.description.slice(0, 50) + "..." : data.description;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(data));
  }
  
  return (
    <div
      className="bg-white border rounded-lg shadow-lg overflow-hidden w-[250px] p-3"
    >
      <div
        className="w-full h-48 p-10 flex justify-center items-center"
      >
        <img src={data.image} alt={title} width="100"/>
      </div>
      <div 
        className="flex flex-col justify-between h-full"
      >
        <p
          className="font-semibold text-lg mt-4"
        >{title}</p>
        <p
          className="text-gray-500 text-sm"
        >{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span>{data?.rating?.rate ?? "No rating"}</span>
            <span>
              <img src={assets.star} />
            </span>
          </div>
          <p>{data?.rating?.count ?? "0"} Ratings</p>
        </div>
        <div
          className="flex w-full justify-between items-center py-2"
        >
          <p
            className="font-bold text-2xl"
          >${data.price}</p>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-lg"
            onClick={handleAddToCart}
          >Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;