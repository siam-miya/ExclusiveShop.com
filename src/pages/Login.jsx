
import Input from "../components/input";
import Button from "../components/Button";
import OutlineButton from "../components/OutlineButton";
import { Link } from "react-router";

const Login = () => {
  return (
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
            <h2 className="text-[#000000] font-medium text-[36px] leading-[30px]">Log in to Exclusive</h2>
            <p className="text-[#000000] text-4 leading-6 pt-6 pb-8">Enter your details below</p>
            <div className="grid grid-cols-1 gap-10">
              <Input placeholder={"Email or Phone Number"} />
              <Input placeholder={"Password"} />
              <div className="grid grid-cols-2 gap-[20px]">
                <Button TagName={"button"} type="submit">Login</Button>
               <button className="text-[#DB4444] cursor-pointer" type="submit">Forget Password?</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
