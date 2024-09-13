import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-blue-200 h-[70px] justify-between px-8 items-center font-bold'>
        <span className='text-2xl'>Redux Cart</span>
        <div className='flex gap-5'>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <span>
                Cart Item: 0
            </span>
        </div>
    </div>
  )
}

export default Navbar;