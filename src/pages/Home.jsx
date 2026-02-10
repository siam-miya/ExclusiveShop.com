import React from 'react'
import { useUser } from '../context/userContext'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()
const {logout} = useUser()
const handleLogout = ()=>{
   logout()
   navigate("/login")
}
  return (
    <div>
    <section>
      <div className="container">
         <h1>home page</h1>
         <button onClick={handleLogout} className='p-2 cursor-pointer bg-amber-600 text-white'>Logout</button>
      </div>
    </section>
    </div>
  )
}

export default Home
