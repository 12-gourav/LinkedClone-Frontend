import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children }) => {
  const { user, isvalid } = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  return (
    <div>{user && isvalid && token ? children : <LoadingToRedirect />}</div>
  );
};

export default UserRoute;
