import React from 'react'

const OutlineButton = ({children, type="button", TagName, ...props}) => {
  return (
    <TagName {...props} className='py-4 px-30 rounded-1  cursor-pointer text-center border border-black/40 bg-transparent flex items-center justify-center gap-4  text-[#000000] leading-10' type={type}>{children}</TagName>
  )
}

export default OutlineButton
