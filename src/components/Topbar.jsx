import React from 'react'
import { Link } from 'react-router'

const Topbar = () => {
  return (
    <div className='bg-black py-5'>
      <div className="container">
        <div className='grid grid-cols-[1fr_200px] items-center'>
            <p className='text-[#FAFAFA] text-center gap-20'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
  <Link to="/shop">Shop now</Link>
           </p>
          <select className='text-white text-[14px] leading-5 focus:outline-0'>
            <option value="english">English</option>
            <option value="bangla">Bangla</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Topbar
