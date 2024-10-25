import { useSelector } from "react-redux";
import { ProductCardType } from "../../interfaces/interfaces";

const Summary = () => {
  const data = useSelector((state: any) => state.cart.items);
  const totalItems = data.length;
  const totalAmount = data.reduce((acc:number, item:ProductCardType):number => acc + item.price, 0)

  return (
    <div>
      <div>
        <h3 className="text-2xl font-medium">YOUR CART</h3>
        <h1 className="text-4xl font-bold">SUMMARY</h1>
      </div>
      <div className="mt-20">
        <h3 className="text-2xl font-medium">Total Items: {totalItems}</h3>
        <h3 className="text-2xl font-medium">Total Amount: ${totalAmount}</h3>      
      </div>
      <div className="my-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">CHECK OUT</button>
      </div>
    </div>
  );
};

export default Summary;