import React, { lazy, useEffect, Suspense } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { LoadUser } from "./Redux/Actions";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./assets/l2.gif";
import CircularProgress from "@mui/material/CircularProgress";
import MobileUpload from "./Pages/MobileUpload";
import DisplayCompany from "./Pages/DisplayCompany";

const Home = lazy(() => import("./Pages/Home"));
const Profile = lazy(() => import("./Pages/Profile"));
const Login = lazy(() => import("./Pages/Login"));
const Signup = lazy(() => import("./Pages/Signup"));
const CreateCompany = lazy(() => import("./Pages/CreateCompany"));
const HomeSet = lazy(() => import("./Pages/HomeSet"));
const UserForm = lazy(() => import("./Components/UserForm"));
const Logout = lazy(() => import("./Pages/Logout"));
const UserRoute = lazy(() => import("./Components/UserRoute"));
const Activity = lazy(() => import("./Pages/Activity"));
const DetailPost = lazy(() => import("./Pages/DetailPost"));
const News = lazy(() => import("./Pages/News"));
const FullNews = lazy(() => import("./Pages/FullNews"));
const Connection = lazy(() => import("./Pages/Connection"));
const Search = lazy(() => import("./Pages/Search"));
const Verify = lazy(() => import("./Pages/verify"));
import Message from "./Pages/Message";

import Notiification from "./Pages/Notiification";
const App = () => {
  const dispatch = useDispatch();
  const unSubscribe = () => {
    const token = localStorage.getItem("token");
    LoadUser(token)
      .then((res) => {
        if (res?.data.data) dispatch({ type: "load", payload: res?.data.data });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    unSubscribe();
    ////cleanup function
    // return () => unSubscribe();
  }, [dispatch]);

  return (
    <div>
      <Suspense
        fallback={
          <div
            className="col text-center p-5"
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={img} alt="img" className="anim" />
            <div>
              <b>
                Welcome to <CircularProgress /> Startshorts
              </b>
            </div>
          </div>
        }
      >
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <UserRoute>
                <Home />
              </UserRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:pid" element={<DetailPost />} />
          <Route
            path="/createcompany"
            element={
              <UserRoute>
                <CreateCompany />
              </UserRoute>
            }
          />
          <Route path="/host" element={<HomeSet />} />
          <Route path="/company" element={<DisplayCompany />} />
          <Route
            path="/user"
            element={
              <UserRoute>
                <UserForm />
              </UserRoute>
            }
          />
          <Route path="/activity" element={<Activity />} />
          <Route path="/mobnav" element={<MobileUpload />} />
          <Route
            path="/logout"
            element={
              <UserRoute>
                <Logout />
              </UserRoute>
            }
          />
          <Route
            path="/news/create"
            element={
              <UserRoute>
                <News />
              </UserRoute>
            }
          />
          <Route path="/news" element={<FullNews />} />
          <Route
            path="/connection"
            element={
              <UserRoute>
                <Connection />
              </UserRoute>
            }
          />
          <Route path="/search/:query" element={<Search />} />
          <Route
            path="/verify"
            element={
              <UserRoute>
                <Verify />
              </UserRoute>
            }
          />
          <Route path="/notification" element={<Notiification />} />
          <Route path="/messages" element={<Message />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
