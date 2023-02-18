import React from "react";
import { Link } from "react-router-dom";
import "./global.css";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link className="box active">
        <span className="icon">
          <i className="bx bx-home"></i>
        </span>
        <span className="title">Home</span>
      </Link>
      <Link to="/connection" className="box">
        <span className="icon">
          <i className="bx bx-user-plus"></i>
        </span>
        <span className="title">Connections</span>
      </Link>
      <Link to="/news" className="box">
        <span className="icon">
          <i className="bx bx-news"></i>
        </span>
        <span className="title">News</span>
      </Link>
      <Link className="box">
        <span className="icon">
          <i className="bx bx-message-rounded-dots"></i>
        </span>
        <span className="title">Messages</span>
      </Link>
      <Link className="box">
        <span className="icon">
          <i className="bx bx-bell"></i>
        </span>
        <span className="title">Notifications</span>
      </Link>
    </nav>
  );
};

export default Sidebar;
