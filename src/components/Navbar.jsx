import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';


const Navbar = () => {
  //subscribing to cart using useSelector
  // useSelector requires selector function
  const cartItem = useSelector((state)=>state.cart);

  // useEffect(()=>{
  //   console.log(cartItem);
  // },[cartItem])
  return (
    <div className='flex bg-blue-300 h-[10vh] justify-between px-8 items-center font-bold text-blue-950'>
        <span className='text-3xl'>Redux Cart</span>
        <div className='flex gap-5 text-[1.1rem]'>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <span>
                Cart Item: {cartItem.length}
            </span>
        </div>
    </div>
  )
}

export default Navbar;