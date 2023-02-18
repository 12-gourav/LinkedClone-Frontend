import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginUser } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import ReactTypingEffect from "react-typing-effect";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user, isvalid } = useSelector((state) => state?.user);
  const Navigate = useNavigate();

  useEffect(() => {
    if (isvalid) {
      toast.error("Already Login");
      Navigate("/");
    }
  }, [Navigate, isvalid]);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (email == "" || password == "") {
        return toast.error("All fields are Required :)");
      }
      setLoading(true);
      LoginUser(email, password)
        .then((data) => {
          console.log(data.data.message);
          if (data.data.message === "Login successFully") {
            toast.success("User Login SuccessFully");
            dispatch({ type: "login", payload: data.data.data });
            localStorage.setItem("token", data.data.token);
          } else {
            toast.error("Something Went Wrong !!!!!!");
          }
          setLoading(false);
          setName("");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          toast.error(err);
        });

      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="relative min-h-screen flex ">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-3/5 h-full w-[0%] hidden  md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
          <div className="w-full  max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              <ReactTypingEffect text={["Welcome to", "STARTSHORTS "]} />
            </div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
              {" "}
              Community technology is the practice of synergizing the efforts of
              individuals, community technology centers and national
              organizations with federal policy initiatives around broadband,
              information access, education, and economic development. National
              organizations efforts include: Developing effective language
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center  sm:w-auto md:h-full  xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              {loading ? (
                <h2
                  className="mt-6 text-3xl font-bold "
                  style={{ color: "red" }}
                >
                  Loading.....
                </h2>
              ) : (
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  Welcome Back!
                </h2>
              )}
              <p className="mt-2 text-sm text-gray-500">
                Please sign in to your account
              </p>
            </div>
            <form className="mt-8 space-y-6" action="/" method="POST">
              <input type="hidden" name="remember" value="true" />

              <TextField
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full"
                value={email}
              />
              <TextField
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                className="w-full"
                value={password}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-indigo-400 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className="w-full flex justify-center 
                  bg-gradient-to-r from-indigo-500 to-blue-600  
                  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Signin
                </button>
              </div>
              <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <span>Don't have an account?</span>
                <Link
                  to="/signup"
                  className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  SignUp ?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
