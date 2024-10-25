import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import ProductCard from "../ui/ProductCard/ProductCard";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/GetProducts";
import { ProductCardType } from "../../interfaces/interfaces";

const Products = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state: any) => state.getProducts.products);
  const isLoading = useSelector((state: any) => state.getProducts.isLoading);
  const error = useSelector((state: any) => state.getProducts.error);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  

  return (
    <div
      className="grid justify-center place-items-center xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {products.map((product:ProductCardType) => (
        <div key={product.id}>
          <ProductCard 
            id={product.id}
            title={product.title} 
            price={product.price}
            description={product.description}
            image={product.image}
            rating={product.rating}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;