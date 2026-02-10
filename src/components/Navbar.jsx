import React from 'react'
import { Link } from 'react-router'
import { useUser } from '../context/userContext';

const Navbar = () => {
    const currentUser = useUser();
  return (
    <nav className='pt-9 pb-9 bg-white border-b border-b-gray-400'>
        <div className="container">
            <div className="grid grid-cols-[auto_1fr_auto] items-center justify-center">
                <div>
                    <img src="main-logo.png" alt="logo" />
                </div>
                <ul className='flex items-center justify-center gap-[38px]'>
                   <li>
                     <Link to="/">Home</Link>
                   </li>
                   <li>
                     <Link to="/contact">Contact</Link>
                   </li>
                   <li>
                     <Link to="/about">About</Link>
                   </li>
                  {!currentUser && (
                     <li>
                     <Link to="/signup">Sign UP</Link>
                   </li>
                  )}
                </ul>
                <div className='flex items-center justify-center gap-6'>
                    <form action="" className='grid grid-cols-[1fr_24px] gap-8 bg-[#F5F5F5] py-[7px] pl-5 pr-3 rounded-[4px]'>
                        <input className='focus:outline-0 placeholder:text-3 placeholder:leading-3 placeholder:text-[rgba(0,0,0,0.49)]' type="search" name="" id="" placeholder='What are you looking for?'/>
                        <button>
                            <img src="search.svg" alt="search" />
                        </button>
                    </form>
                    <div className='flex items-center justify-center gap-4'>
                        <button className='cursor-pointer'>
                            <img src="wishlist.svg" alt="wishlist" />
                        </button>
                        <button className='cursor-pointer'>
                            <img src="cart.svg" alt="cart" />
                        </button>
                        <button className='cursor-pointer'>
                            <img src="user.svg" alt="user" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
