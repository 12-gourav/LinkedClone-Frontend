import React, { useState, useMemo } from "react";
import { TextField, Input, Button, Select } from "@mui/material";
import Steppers from "../Pages/Steppers";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import { generateTag } from "../SpecailFunctions/CallTag";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";

const steps = ["Personal Info", "Proffessional Info", "Upload Media"];

const UserForm = () => {
  return (
    <>
      <div className="relative min-h-screen flex company ">
        <div className="glass">
          <div className="left bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6 text-white">
              <ReactTypingEffect text={["Welcome to", "STARTSHORTS "]} />
            </div>
            <div className="sm:text-sm xl:text-md text-white font-normal">
              {" "}
              Community technology is the practice of synergizing the efforts of
              individuals, community technology centers and national
              organizations with federal policy initiatives around broadband,
              information access, education, and economic development. National
              organizations efforts include: Developing effective language
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
  const { user } = useSelector((state) => state.user);
  const options = useMemo(() => countryList().getData(), []);
  const dispatch = useDispatch();
  const [name, setName] = useState(user?.name);
  const [tag, setTag] = useState(user?.tag);
  const [dob, setDob] = useState(user?.dob);
  const [about, setAbout] = useState(user?.about);
  const [city, setCity] = useState(user?.city);
  const [country, setCountry] = useState(user?.country);
  const [address, setAddress] = useState(user?.address);

  const data = {
    name: name,
    tag: tag,
    dob: dob,
    about: about,
    country: country,
    city: city,
    address: address,
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
      <div className="f1">
        <label>Date Of Birth</label>
        <TextField
          type="date"
          placeholder="Enter Your DOB"
          className="w-full input"
          size="normall"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <div className="f">
        <TextField
          label="About us"
          type="text"
          placeholder="Enter Your About info"
          className="w-full input"
          size="normall"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
      <div className="f1">
        <TextField
          label="Address"
          type="text"
          placeholder="Enter Your Home Address"
          className="w-full input"
          size="normall"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="f">
        <TextField
          label="City"
          type="text"
          placeholder="Enter Your City Name"
          className="w-full input"
          size="normall"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <TextField
          label="Country"
          type="text"
          placeholder="Enter Your Country Name"
          className="w-full input"
          size="normall"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <div className="btnset">
        <button
          disabled={
            name == "" ||
            tag == "" ||
            dob == "" ||
            about == "" ||
            city == "" ||
            country == "" ||
            address == ""
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
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [education, setEducation] = useState(user?.Education);
  const [position, setPosition] = useState(user?.position);
  const [experiance, setExperiance] = useState(user?.Experience);
  const [skills, setSkills] = useState(user?.skill);
  const [addtional, setAddtional] = useState(user?.addtional);
  const [Website, setWebsite] = useState(user?.Website);

  const data = {
    education: education,
    position: position,
    experiance: experiance,
    skills: skills,
    addtional: addtional,
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
          label="Education"
          placeholder="Enter Your Highest Qualifications"
          className="w-full input"
          size="normall"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
      </div>
      <div className="f">
        <TextField
          label="Current Working Posistion"
          placeholder="Enter Your Current Working Position"
          className="w-full input"
          size="normall"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <div className="f">
        <TextField
          label="Experiance"
          placeholder="Enter Your Experiance"
          className="w-full input"
          size="normall"
          value={experiance}
          onChange={(e) => setExperiance(e.target.value)}
        />
      </div>
      <div className="f">
        <TextField
          label="Skills"
          placeholder="Enter Your Skills"
          className="w-full input"
          size="normall"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </div>
      <div className="f">
        <TextField
          label="Addtional Info"
          placeholder="Enter Your Addtional Info"
          className="w-full input"
          size="normall"
          value={addtional}
          onChange={(e) => setAddtional(e.target.value)}
        />
      </div>
      <div className="f">
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
            education == "" ||
            experiance == "" ||
            position == "" ||
            skills == "" ||
            addtional == "" ||
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
  const Navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { first } = useSelector((state) => state.user);
  const { second } = useSelector((state) => state.user);
  const { name, tag, dob, about, city, country, address } = first;
  const { education, experiance, position, skills, addtional, Website } =
    second;
  const [img, setImg] = useState("");
  const [avatar, setAvatar] = useState("");
  const [banner, setBanner] = useState("");
  const [P, setP] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      var myForm = new FormData();
      myForm.append("name", name);
      myForm.append("tag", tag);
      myForm.append("dob", dob);
      myForm.append("about", about);
      myForm.append("city", city);
      myForm.append("country", country);
      myForm.append("address", address);
      myForm.append("education", education);
      myForm.append("experiance", experiance);
      myForm.append("position", position);
      myForm.append("skills", skills);
      myForm.append("addtional", addtional);
      myForm.append("Website", Website);
      myForm.append("avatar", avatar);
      myForm.append("banner", banner);
      myForm.append("id", user?._id);

      const result = await axios.post(
        "http://localhost:5000/api/v1/user-info",
        myForm,
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
        toast.success("User Info Saved Successfully");
        setImg(result.data.data);
        setLoading(false);
        Navigate("/profile");
        dispatch({ type: "load", payload: result?.data.data });
      } else {
        toast.error("Something went Wrong");
      }
    } catch (error) {
      toast.error("Something went wrong", error.response.data.message);
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
          Upload Profile Photo
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
              onChange={(e) => setAvatar(e.target.files[0])}
              type="file"
              className="hidden"
            />
          </div>
        </label>
      </div>
      <div className="f1">
        <label style={{ fontWeight: "bolder" }} className="ul">
          Upload Profile Banner
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
            education == "" ||
            experiance == "" ||
            position == "" ||
            skills == "" ||
            addtional == "" ||
            Website == "" ||
            name == "" ||
            tag == "" ||
            dob == "" ||
            about == "" ||
            city == "" ||
            country == "" ||
            address == "" ||
            avatar == "" ||
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

export default UserForm;
