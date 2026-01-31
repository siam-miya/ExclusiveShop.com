import React, { useEffect } from "react";
import Input from "../components/input";
import Button from "../components/Button";
import OutlineButton from "../components/OutlineButton";
import { Link, useNavigate } from "react-router";
import {useUser} from "../context/UserContext"
import {useState} from 'react'
import { ToastContainer } from 'react-toastify';

const SignUp = () => {
const {addUser} = useUser()
const navigate = useNavigate()
const [loading, setLoading] = useState(false)
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  function handleChange(e) {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  function handleAddUser(e) {
    e.preventDefault()
    addUser(newUser.email, newUser.password)
    setLoading(true)
     setTimeout(()=>{
      navigate("/login")
         setLoading(false)
    }, 4000)
  }

  return (
  <>
  <ToastContainer />
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[4fr_3fr] gap-5 xl:gap-10 justify-between items-center">
        <div>
          <img
            className="w-full max-h-[780px] object-cover"
            src="signup-image.png"
            alt="signup-image"
          />
        </div>
        <div className="p-10 md:p-20 xl:px-[130px] xl:py-20">
          <form action="">
            <h2 className="text-[#000000] font-medium text-[36px] leading-[30px]">Create an account</h2>
            <p className="text-[#000000] text-4 leading-6 pt-6 pb-8">Enter your details below</p>
            <div className="grid grid-cols-1 gap-10">
              <Input onChange={(e)=>handleChange(e)} value={newUser.name} name="name" placeholder={"Input your name"} />
              <Input onChange={(e)=>handleChange(e)} placeholder={"Email or Phone Number"} name="email"/>
              <Input onChange={(e)=>handleChange(e)} placeholder={"Password"} name="password"/>
              <Button onClick={(e)=>handleAddUser(e)} TagName={"button"} type="submit">{loading ? "Creating..." : "Create account"}</Button>
              <OutlineButton TagName={"button"}>
                <img src="google-icon.svg" alt="google icon" />
                Sign up with Google
                </OutlineButton>
            </div>
            <p className="text-gray-600 text-4 leading-6 pt-[34px] text-center flex items-center justify-center gap-3 font-medium">Already have account? <Link className="text-[#000000] text-4 leading-6 border-b border-b-[#7d8184] font-bold" to={"/login"}>Log in</Link> </p>
          </form>
        </div>
      </div>
    </section>
  </>
  );
};

export default SignUp;
