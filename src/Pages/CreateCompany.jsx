import React, { useState } from "react";
import { TextField, Input, Button } from "@mui/material";
import Steppers from "./Steppers";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { createCompany } from "../Redux/Actions";
import { toast } from "react-toastify";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import { generateTag } from "../SpecailFunctions/CallTag";

const steps = [
  "Basic Company Details",
  "Configuration Details",
  "Company Media Details",
];
const CreateCompany = () => {
  return (
    <>
      <div className="relative min-h-screen flex company ">
        <div className="glass">
          <div className="left bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6 text-white">
              Reference site about Lorem Ipsum..
            </div>
            <div className="sm:text-sm xl:text-md text-white font-normal">
              {" "}
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book it has?
            </div>
          </div>
          <div className="right">
            <Steppers
              steps={steps}
              First={First}
              Second={Second}
              Third={Third}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const First = ({ activeStep, handleBack, handleNext, steps }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [dis, setDis] = useState("");
  const [email, setEmail] = useState("");
  const [size, setSize] = useState("");

  const data = {
    name: name,
    tag: tag,
    dis: dis,
    email: email,
    size: size,
  };

  const handleSurpriseMe = () => {
    const randomPrompt = generateTag(tag);
    setTag(randomPrompt);
  };
  const handleSubmit = () => {
    dispatch({ type: "first", payload: data });
    console.log(data);
    handleNext();
  };
  return (
    <>
      <p className="mt-2 text-sm text-gray-500">
        Please fill all the information correctly
      </p>
      <div className="f">
        <TextField
          label="Name"
          placeholder="Enter Your Company Name"
          className="w-full input"
          size="normall"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="f">
        <TextField
          label="Tagline"
          placeholder="Enter Your Company Tagline"
          className="w-full input"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button
          className="input gen sm-input flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600
            hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 
        tracking-wide font-semibold  shadow-lg 
        cursor-pointer transition ease-in duration-500 text-white"
          style={{ borderRadius: "5px" }}
          onClick={handleSurpriseMe}
        >
          Generate
        </button>
      </div>
      <div className="f">
        <TextField
          type="email"
          label="Email"
          placeholder="Enter Your Company Email"
          className="w-full input"
          size="normall"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Company Size"
          placeholder="Enter Your Company Size"
          className="w-full input"
          size="normall"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>
      <div className="f1">
        <label className="label">Discription</label>
        <ReactQuill
          theme="snow"
          value={dis}
          onChange={setDis}
          className="quil"
          style={{ width: "100%" }}
        />
      </div>
      <div className="btnset">
        <button
          disabled={
            name == "" || tag == "" || dis == "" || email == "" || size == ""
          }
          className="save bg-gradient-to-r from-indigo-500 to-blue-600
          hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 
      tracking-wide font-semibold  shadow-lg 
      cursor-pointer transition ease-in duration-500 text-white"
          onClick={handleSubmit}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Save & Continue"}
        </button>
      </div>
    </>
  );
};
const Second = ({ activeStep, handleBack, handleNext, steps }) => {
  const dispatch = useDispatch();
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [Website, setWebsite] = useState("");

  const data = {
    contact1: contact1,
    contact2: contact2,
    city: city,
    country: country,
    address: address,
    pincode: pincode,
    Website: Website,
  };

  const handleSubmit = () => {
    dispatch({ type: "second", payload: data });
    console.log(data);
    handleNext();
  };

  return (
    <div>
      <p className="mt-2 text-sm text-gray-500">
        Please fill all the information correctly
      </p>
      <div className="f">
        <TextField
          label="Contact Number 1"
          placeholder="Enter Your Company Contact Number"
          className="w-full input"
          size="normall"
          value={contact1}
          onChange={(e) => setContact1(e.target.value)}
        />
        <TextField
          label="Contact Number 2"
          placeholder="Enter Your Company Contact Number"
          className="w-full input"
          size="normall"
          value={contact2}
          onChange={(e) => setContact2(e.target.value)}
        />
      </div>
      <div className="f">
        <TextField
          label="City"
          placeholder="Enter Your City"
          className="w-full input"
          size="normall"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          label="Country"
          placeholder="Enter Your Country"
          className="w-full input"
          size="normall"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="f">
        <TextField
          label="Address Line"
          placeholder="Enter Your Address"
          className="w-full input"
          size="normall"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="f">
        <TextField
          label="Pincode"
          placeholder="Enter Your Pincode"
          className="w-full input "
          size="normall"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <TextField
          label="Website"
          placeholder="Enter Your Password"
          className="w-full input"
          value={Website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="btnset">
        {/* <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button> */}
        <button
          disabled={
            contact1 == "" ||
            contact2 == "" ||
            city == "" ||
            country == "" ||
            address == "" ||
            pincode == "" ||
            Website == ""
          }
          className="save bg-gradient-to-r from-indigo-500 to-blue-600
          hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 
      tracking-wide font-semibold  shadow-lg 
      cursor-pointer transition ease-in duration-500 text-white"
          onClick={handleSubmit}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Save & Continue"}
        </button>
      </div>
    </div>
  );
};
const Third = ({ activeStep, handleBack, handleNext, steps }) => {
  const { first } = useSelector((state) => state.user);
  const { name, tag, dis, email, size } = first;
  const { second } = useSelector((state) => state.user);
  const { contact1, contact2, city, country, address, pincode, Website } =
    second;
  const [img, setImg] = useState("");
  const [logo, setLogo] = useState("");
  const [banner, setBanner] = useState("");
  const [P, setP] = useState(0);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const handleSubmit = async () => {
    try {
      setLoading(true);
      var myForm = new FormData();
      myForm.append("name", name);
      myForm.append("tag", tag);
      myForm.append("dis", dis);
      myForm.append("email", email);
      myForm.append("size", size);
      myForm.append("contact1", contact1);
      myForm.append("contact2", contact2);
      myForm.append("city", city);
      myForm.append("country", country);
      myForm.append("address", address);
      myForm.append("pincode", pincode);
      myForm.append("Website", Website);
      myForm.append("logo", logo);
      myForm.append("banner", banner);

      const result = await axios.post(
        "http://localhost:5000/api/v1/create-company",
        myForm,
        {
          headers: {
            token: token,
          },
        },
        {
          onUploadProgress: (result) => {
            setP(Math.round((result.loaded / result.total) * 100));
          },
        },
        {
          "Content-Type": "multipart/form-data",
        }
      );
      if (result) {
        toast.success("Company Created Successfully");
        setImg(result.data.data);
        setLoading(false);
      } else {
        toast.error("Something went Wrong");
      }
    } catch (error) {
      toast.error("Something went wrong", error.response.data.message.errors);
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <LinearProgress variant="determinate" valueBuffer={P} value={P} />
      {P == 0 ? "" : P}
      <p className="mt-2 text-sm text-gray-500">
        Please fill all the information correctly
      </p>

      <h2>Upload Media Files</h2>
      <div className="f1">
        <label style={{ fontWeight: "bolder" }} className="ul">
          Upload Company Logo
        </label>
        <label className="flex w-full  items-center justify-center up  ">
          <div className=" hhh w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input
              onChange={(e) => setLogo(e.target.files[0])}
              type="file"
              className="hidden"
            />
          </div>
        </label>
      </div>
      <div className="f1">
        <label style={{ fontWeight: "bolder" }} className="ul">
          Upload Company Banner
        </label>
        <label className="flex w-full  items-center justify-center up ">
          <div className=" hhh w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input
              onChange={(e) => setBanner(e.target.files[0])}
              type="file"
              className="hidden"
            />
          </div>
        </label>
      </div>
      <div className="btnset">
        {/* <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button> */}
        <button
          disabled={
            contact1 == "" ||
            contact2 == "" ||
            city == "" ||
            country == "" ||
            address == "" ||
            pincode == "" ||
            Website == "" ||
            name == "" ||
            tag == "" ||
            dis == "" ||
            size == "" ||
            email == "" ||
            logo == "" ||
            banner == ""
          }
          className="save bg-gradient-to-r from-indigo-500 to-blue-600
          hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 
      tracking-wide font-semibold  shadow-lg 
      cursor-pointer transition ease-in duration-500 text-white"
          onClick={handleSubmit}
        >
          {loading ? (
            <CircularProgress style={{ color: "#fff" }} />
          ) : activeStep === steps.length - 1 ? (
            "Finish"
          ) : (
            "Save & Continue"
          )}
        </button>
      </div>
    </div>
  );
};

export default CreateCompany;
{
  /* <div className="relative min-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
            <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
            <div className="w-full  max-w-md z-10">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Reference site about Lorem Ipsum..
              </div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                {" "}
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book it has?
              </div>
            </div>
          </div>
      //     {/* hello */
}
//     {state == 1 ? <First /> : null}
//     {state == 2 ? <Second /> : null}
//     {state == 3 ? <Third /> : null}
//   </div>
// </div> */}
