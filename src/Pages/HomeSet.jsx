import React, { useState } from "react";
import "../Components/host.css";
import logo from "../assets/logo.png";
import img from "../assets/yug.png";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Upload from "../Components/Upload";
import SideNews from "../Components/SideNews";
import Posts from "../Components/Posts";
import { useSelector } from "react-redux";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const HomeSet = () => {
  const { user } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [query, setQuery] = useState("");
  const Navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSearch = () => {
    Navigate(`/search/${query}`);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <section className="home">
      <div className="top">
        <div className="left">
          <img src={logo} alt="logo" />
          <h5>Startshorts</h5>
        </div>
        <div className="right">
          <div className="search">
            <i className="bx bx-search"></i>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search something......"
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="last">
          {user?.email ? (
            <div
              className="profile"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              <h5>{user?.name}</h5>
              <Avatar alt="Remy Sharp" src={user?.avatar?.url} />
            </div>
          ) : (
            <div className="profile" aria-describedby={id} variant="contained">
              <Link
                to="/login"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h5>Login</h5>
                <Avatar alt="Remy Sharp" src={img} />
              </Link>
            </div>
          )}
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          className="pop"
        >
          <Typography sx={{ p: 2 }} style={{ fontWeight: "600" }}>
            Welcome To the Startshorts
          </Typography>
          <div className="poplink">
            <Link className="pl" to="/profile">
              <i className="bx bx-user"></i> Your Profile
            </Link>
            <Link className="pl" to="/postjob">
              <i className="bx bx-buildings"></i> Post a Job
            </Link>
            <Link className="pl" to="/createcompany">
              <i className="bx bx-globe"></i> Create Company page
            </Link>
            <Link to="/messages" className="pl">
              <i className="bx bx-message-rounded-dots"></i>
              Messages
            </Link>
            <Link className="pl">
              <i className="bx bx-cloud-download"></i>
              saved Posts
            </Link>
            <Link to="/notification" className="pl">
              <i className="bx bx-bell"></i>
              Notifications
            </Link>
            <Link className="pl" to="/logout">
              <i className="bx bx-log-out-circle"></i>
              Logout
            </Link>
          </div>
        </Popover>
      </div>
      <div className="wrap">
        <div className="one">
          <Sidebar />
        </div>
        <div className="two">
          <Upload pic={user?.avatar?.url} />
          <Posts />
        </div>
        <div className="three">
          <SideNews />
        </div>
      </div>
      <div className="bottomnav">
        <Link to="/" className="bnav">
          <i className="bx bx-home"></i>
        </Link>
        <Link to="/connection" className="bnav">
          <i className="bx bx-user-plus"></i>
        </Link>

        <Link to="/mobnav" className="pnav">
          <i className="bx bxs-plus-circle"></i>
        </Link>
        <Link to="/notification" className="bnav">
          <i className="bx bxs-buildings"></i>
        </Link>
        <Link to="/news" className="bnav">
          <i className="bx bx-news"></i>
        </Link>
      </div>
    </section>
  );
};

export default HomeSet;
