import React from "react";
import Input from "../components/input";
import Button from "../components/Button";
import OutlineButton from "../components/OutlineButton";
import Login from "./login";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <section>
      <div className="grid grid-cols-[4fr_3fr] gap-10 justify-between items-center">
        <div>
          <img
            className="w-full h-200"
            src="signup-image.png"
            alt="signup-image"
          />
        </div>
        <div className="px-[130px] py-20">
          <form action="">
            <h2 className="text-[#000000] font-medium text-[36px] leading-[30px]">Create an account</h2>
            <p className="text-[#000000] text-4 leading-6 pt-6 pb-8">Enter your details below</p>
            <div className="grid grid-cols-1 gap-10">
              <Input placeholder={"Input your name"} />
              <Input placeholder={"Email or Phone Number"} />
              <Input placeholder={"Password"} />
              <Button TagName={"button"} type="submit">Create Account</Button>
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
  );
};

export default SignUp;
