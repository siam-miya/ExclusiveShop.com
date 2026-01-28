import React from 'react'

const Input = ({type="text", placeholder, ...props}) => {
  return <input {...props} className='border-b border-b-[#7d818479] placeholder:text-[#7D8184] text-[#000000] leading-8 focus:outline-0 focus:border-b-[#000000]' type="text" placeholder={placeholder} />
}

export default Input
