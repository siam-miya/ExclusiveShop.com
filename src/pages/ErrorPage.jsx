import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router'

const ErrorPage = () => {
  return (
    <div>
      <div className="container">
        <p className='mt-20'><Link to={"/"}>Home</Link>  /<span className='text-[14px] font-semibold leading-6 text-black'>404 Error</span></p>
      <div className='h-[95vh] w-full flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[110px] leading-[115px] text-[#000000]'>404 Not Found</h1>
            <p className='text-4 leading-6 text-black pt-10 pb-20'>Your visited page not found. You may go home page.</p>
           <Button TagName={Link} to="/">Back to home page</Button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ErrorPage;
