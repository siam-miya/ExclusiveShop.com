
import { Link } from 'react-router'
import { useUser } from '../context/userContext'
const Footer = () => {
 const {currentUser} = useUser()
  return (
    <footer className='bg-black py-20'>
      <div className="container">
        <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-[87px]">
           <div>
            <div>
                <img src="footer-logo.png" alt="logo" />
            </div>
            <h3 className='text-5 leading-7 text-[#FAFAFA] py-6'>Subscribe</h3>
            <p className='text-[#FAFAFA] pb-4'>Get 10% off your first order</p>        
           <div className='border border-1 border-[#FAFAFA] inline-block py-3 px-4 '>
             <form action="" className='flex items-center'>
                <input type="email" name="" id="" placeholder='Enter your email' className='placeholder:text-[#fafafa97] focus:outline-0 focus:text-[#ffffff]'/>
                <button className='cursor-pointer'>
                    <img src="arrowRight.png" alt="arrowRight" />
                </button>
            </form>
           </div>
           </div>

           <div>
                <h2 className='text-5 leading-7 text-[#FAFAFA] font-medium'>Support</h2>
                <p className='pt-6 pb-4 w-[175px] text-[#FAFAFA]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <li>
                    <Link to="exclusive@gmail.com" className='text-[#FAFAFA] text-4 leading-6'>exclusive@gmail.com</Link>
                </li>
                <li className='pt-4'>
                    <Link className='text-[#FAFAFA] text-4 leading-6 ' to="+88015-88888-9999">+88015-88888-9999</Link>
                </li>

           </div>

           <div>
                <h2 className='text-5 leading-7 text-[#FAFAFA] font-medium '>Account</h2>
               <li className='pt-6'>
                <Link to="/myaccount" className='text-[#FAFAFA]'>My Account</Link>
               </li>
                <li className='py-4'>
                    <Link to="/login" className='text-[#FAFAFA] text-4 leading-6 '>Login / Register</Link>
                </li>
                <li>
                    <Link className='text-[#FAFAFA] text-4 leading-6' to="/cart">Cart</Link>
                </li>
                <li className='py-4'>
                    <Link className='text-[#FAFAFA] text-4 leading-6' to="/wishlist">Wishlist</Link>
                </li>
                <li>
                    <Link className='text-[#FAFAFA] text-4 leading-6' to="/">Shop</Link>
                </li>

           </div>
           <div>
                <h2 className='text-5 leading-7 text-[#FAFAFA] font-medium '>Quick Link</h2>
               <li className='pt-6'>
                <Link to="/" className='text-[#FAFAFA]'>Privacy Policy</Link>
               </li>
                <li className='py-4'>
                    <Link to="/" className='text-[#FAFAFA] text-4 leading-6 '>Terms Of Use</Link>
                </li>
                <li>
                    <Link className='text-[#FAFAFA] text-4 leading-6' to="/">FAQ</Link>
                </li>
                <li className='py-4'>
                    <Link className='text-[#FAFAFA] text-4 leading-6' to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className='text-[#FAFAFA] text-4 leading-6' to="/">Shop</Link>
                </li>
           </div>
           <div>
                <h2 className='text-5 leading-7 text-[#FAFAFA] font-medium '>Download App</h2>
               <p className='pt-6 text-[rgba(250,250,250,0.38)] text-3 leading-[18px]'>Save $3 with App New User Only</p>
               <div className='flex items-center gap-2 pt-6 pb-6'>
                <div>
                    <img src="qr-code.png" alt="qr-code" />
                </div>
                <div>
                   <img src="play-store.png" alt="playStore" />
                   <img className='pt-1' src="app-store.png" alt="appStore" />
                </div>
               </div>
               <div className='flex items-center gap-6'>
                <button className='cursor-pointer'>
                    <img src="facebook.svg" alt="facebook" />
                </button>
                <button className='cursor-pointer'>
                    <img src="twitter.svg" alt="twitter" />
                </button>
                <button className='cursor-pointer'>
                    <img src="instagram.svg" alt="instagram" />
                </button>
                <button className='cursor-pointer'>
                    <img src="linkedin.svg" alt="linkedin" />
                </button>
               </div>
           </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
