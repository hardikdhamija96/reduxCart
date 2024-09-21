import { useEffect, useState } from "react";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProductList(data);
    };
    fetchProducts();
  }, []);

  function handleAdd(product) {
    // add product in redux store
    // we dispatch action from here
    dispatch(addItem(product));
  }

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {productList.map((product) => (
        <div
          key={product.id}
          className="p-2  w-60 flex flex-col items-center gap-2 justify-between border-2 border-black rounded-md bg-white">
          <h1 className="text-sm font-bold text-center">{product.title}</h1>
          <img src={product.image} className="min-w-28" alt="" />
          <div>
            <h3 className="text-sm text-gray-800 font-bold">
              {product.category}
            </h3>
            <h3 className="text-sm text-gray-800 font-bold">
              Rs.{product.price}
            </h3>
            <button
              onClick={() => handleAdd(product)}
              className="border-2 border-neutral-900 rounded-lg px-2 py-1">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
