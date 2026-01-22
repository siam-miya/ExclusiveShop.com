
const Button = ({children, type="button", TagName, ...props}) => {
  return (
    <TagName {...props} className='text-[#FAFAFA] bg-[#DB4444] py-4 px-30 rounded-1 border-none cursor-pointer text-center leading-10' type={type}>{children}</TagName>
  )
}

export default Button
