import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { LogoutUser } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    LogoutUser(token)
      .then(() => {
        dispatch({ type: "logout" });
        localStorage.removeItem("token");
        toast.error("Logout Success Fully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>Logout</div>;
};

export default Logout;
