import { useEffect } from "react";
import { useSelector } from "react-redux"

const Cart = () => {
  const cartProducts = useSelector(state => state.cart)

  useEffect(()=>{
    console.log(cartProducts)
  },[cartProducts])

  return (
    <div className="p-2">
      <h2 className="text-center text-2xl font-bold">Cart</h2>
      <h2 className="text-right font-semibold pr-2">Total Items in Cart: {cartProducts.length}</h2>
      {
        cartProducts.map((product)=>(
          <div key={product.id} className="bg-slate-500 m-1 p-2 flex justify-between text-white">
            <h1>{product.title}</h1>
            <h2>Rs.{product.price}</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Cart