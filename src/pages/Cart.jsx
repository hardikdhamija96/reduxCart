import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  function netCartAmount(products){
    let sum = 0;
    products.map((p)=>{sum+=p.price})

    return parseFloat(sum.toFixed(2));
  }

  function handleRemove(product){
    dispatch(removeItem(product));
  }

  return (
    <div className="p-2">
      <h2 className="text-center text-2xl font-bold">Cart</h2>
      <h2 className="text-right font-semibold pr-2">
        Total Items in Cart: {cartProducts.length}
      </h2>
      {cartProducts.map((product) => (
        <div
          key={product.id}
          className="bg-slate-500 m-1 p-2 flex justify-between text-white items-center">
          <h1>{product.title}</h1>
          <div className="flex gap-1 items-center">
            <h2>Rs.{product.price}</h2>
            <button onClick={()=>handleRemove(product)} className="border-2 border-neutral-900 rounded-lg px-2 py-1">
              {" "}
              Remove{" "}
            </button>
          </div>
        </div>
      ))}
      <h2 className="text-right font-semibold pr-2">
        Cart Net Price: Rs.{netCartAmount(cartProducts)}
      </h2>
    </div>
  );
};

export default Cart;
