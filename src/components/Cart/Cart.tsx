import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Summary from "./Summary";
import { ProductCardType } from "../../interfaces/interfaces";
import { useEffect, useState } from "react";


const Cart = () => {
  const [cartItems, setCartItems] = useState<ProductCardType[]>([]);
  const data = useSelector((state: any) => state.cart.items);

  useEffect(()=>{
    setCartItems(data);
  }, [data]);

  return (
    <div
      className="flex flex-col md:flex-row justify-center gap-8 my-10 px-12"
    >
      <div
        className="flex flex-col max-w-4xl gap-4"
      >
        <h1 className="text-2xl font-bold my-4">Cart Items:</h1>

        {cartItems.length === 0 ? <div>No Data</div> :
          cartItems.map((item:ProductCardType, index:number) => (
            <div
              key={index}
            >
              <CartItem
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                price={item.price}
              />
            </div>
          ))
        }
      </div>
      <div>
        <Summary />
      </div>
    </div>
  );
};

export default Cart;