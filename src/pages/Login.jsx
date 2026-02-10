import Input from "../components/input";
import Button from "../components/Button";
import OutlineButton from "../components/OutlineButton";
import { Link, useNavigate } from "react-router";
import { useUser } from "../context/UserContext";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const {currentUser} = useUser();
  const { logIn } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }
  async function handleLogin(e) {
    e.preventDefault();
    await logIn(newUser.email, newUser.password);
    try {
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  if (currentUser) {
  return navigate("/");
  }
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
            <h2 className="text-[#000000] font-medium text-[36px] leading-[30px]">
              Log in to Exclusive
            </h2>
            <p className="text-[#000000] text-4 leading-6 pt-6 pb-8">
              Enter your details below
            </p>
            <div className="grid grid-cols-1 gap-10">
              <Input
                onChange={(e) => handleChange(e)}
                placeholder={"Email or Phone Number"}
                name="email"
              />
              <Input
                onChange={(e) => handleChange(e)}
                placeholder={"Password"}
                name="password"
              />
              <div className="grid grid-cols-2 gap-[20px]">
                <Button
                  onClick={(e) => handleLogin(e)}
                  TagName={"button"}
                  type="submit"
                >
                  Login
                </Button>
                <button className="text-[#DB4444] cursor-pointer" type="submit">
                  Forget Password?
                </button>
              </div>
              <p>Don't have an account? <Link to="/signup" className="text-[#DB4444]">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
