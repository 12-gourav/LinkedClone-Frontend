import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactTypingEffect from "react-typing-effect";
import { useDispatch } from "react-redux";
import axios from "axios";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      const token = localStorage.getItem("token");
      e.preventDefault();
      if (otp == "") {
        return toast.error("All fields are Required :)");
      }
      setLoading(true);
      const data = await axios.post(
        "http://localhost:5000/api/v1/verify",
        { otp },
        {
          headers: { token: token },
        }
      );
      console.log(data);
      if (data) {
        toast.success("Your account is Successfully Verified");
        Navigate("/");
      }

      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="relative min-h-screen flex ">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-3/5 h-full w-[0%] hidden  md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
          <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
          <div className="w-full  max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              <ReactTypingEffect text={["Welcome to", "Startshort"]} />
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
                  Verify Your Account
                </h2>
              )}
              <p className="mt-2 text-sm text-gray-500">
                Your OTP is send your register mail.If not get check your spam
                folder
              </p>
            </div>
            <form className="mt-8 space-y-6" action="/" method="POST">
              <input type="hidden" name="remember" value="true" />
              <TextField
                label="OTP"
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter Your OTP"
                className="w-full"
                value={otp}
                type="text"
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
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l
                   hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4
                     rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer 
                     transition ease-in duration-500"
                >
                  Verify
                </button>
              </div>
              <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <span>Already have an account?</span>
                <Link
                  to="/login"
                  className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  SignIn ?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
