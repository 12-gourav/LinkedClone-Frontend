import React, { useEffect, useState } from "react";
import img from "../assets/logo.png";
import { Link } from "react-router-dom";
import img1 from "../assets/a.png";
import img2 from "../assets/yug.png";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";

const DisplayCompany = () => {
  const { company } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);
  const {
    banner,
    city,
    contact1,
    contact2,
    tag,
    country,
    discreption,
    email,
    id,
    logo,
    name,
    pincode,
    size,
    website,
    address,
  } = company;
  console.log(company);
  return (
    <section className="profile">
      <div className="containers">
        <div className="top">
          <div className="left">
            <img src={img} alt="img" />
            <h2>Startshorts</h2>
          </div>
          <div className="right">
            <Link to="/" className="box active">
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
            {/* <Link className="box">
              <span className="icon">
                <i className="bx bxs-buildings"></i>
              </span>
              <span className="title">Jobs</span>
            </Link> */}
            <Link to="/news" className="box">
              <span className="icon">
                <i className="bx bx-news"></i>
              </span>
              <span className="title">News</span>
            </Link>
            <Link to="/messages" className="box">
              <span className="icon">
                <i className="bx bx-message-rounded-dots"></i>
              </span>
              <span className="title">Messages</span>
            </Link>
            <Link to="/notification" className="box">
              <span className="icon">
                <i className="bx bx-bell"></i>
              </span>
              <span className="title">Notifications</span>
            </Link>
          </div>
        </div>
        <div className="wrap">
          <div className="left">
            <div className="pcard">
              <div className="banner">
                <img src={banner.url} alt="img" />
              </div>
              <div className="box">
                <div className="circle">
                  <img src={logo.url} alt="profile pic" />
                </div>
                <div className="deco">
                  <h2>
                    {name}
                    <span className="updatebtn">
                      {/* <Link to="/update/company"> */}{" "}
                      <i className="bx bxs-pencil"></i>
                      {/* </Link> */}
                    </span>
                  </h2>
                  <p className="tag">
                    {tag ? tag : "Complete your Profile make some cool tags"}
                  </p>
                  <p className="about">
                    {discreption ? (
                      <ReactQuill
                        value={discreption}
                        readOnly={true}
                        theme={"bubble"}
                      />
                    ) : (
                      " Startshorts is hiring an Node js , React Native and Python Developer at its Work from Home. The position is full-time .We prefer local candidates, but anyone with the right skills and attitude is welcome to apply."
                    )}
                  </p>
                  <p className="address">
                    {address
                      ? address + " , " + city + ", " + country + ", " + pincode
                      : "  Raebareli, Uttar Pradesh, India"}
                    <span> (Address)</span>{" "}
                  </p>
                  <p className="address">
                    <a href={website ? website : ""}>
                      {website ? website : ""} <span> (Website)</span>{" "}
                    </a>
                  </p>
                  <p className="views">
                    <span>150 Followers</span>
                    <span>150 Connections</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="analytic">
              <h3>Analytics</h3>
              <h5>
                <i className="bx bx-lock-alt"></i> Private To You
              </h5>
              <div className="data">
                <div className="dc">
                  <h4>
                    <span>
                      <i className="bx bx-user-voice"></i>
                    </span>{" "}
                    Company Views +80
                  </h4>
                  <p>Discover who view Your Company</p>
                </div>
                <div className="dc">
                  <h4>
                    <span>
                      <i className="bx bxs-bar-chart-alt-2"></i>
                    </span>{" "}
                    Performance +790
                  </h4>
                  <p>Your profile performance around one month</p>
                </div>
                <div className="dc">
                  <h4>
                    <span>
                      <i className="bx bx-line-chart"></i>
                    </span>
                    Ranking +100
                  </h4>
                  <p> Your Company Ranking Score</p>
                </div>
              </div>
            </div>
            <div className="activity">
              <h3>Activity</h3>
              <span className="fo">+150 Follwers</span>
              <h6>Your Recent Activity</h6>
              <div className="posts">
                <div className="postcard">
                  <p className="smt">
                    Gourav bajpai <span>Posted in 12/11/2023</span>{" "}
                  </p>
                  <div className="ipd">
                    <img src={img1} alt="co" />
                    <p>
                      {" "}
                      Startshorts is hiring an Node js , React Native and Python
                      Developer at its Work from Home. The position is full-time
                      .We prefer local candidates, but
                    </p>
                  </div>
                  <hr></hr>
                </div>
                <div className="postcard">
                  <p className="smt">
                    Gourav bajpai <span>Posted in 12/11/2023</span>{" "}
                  </p>
                  <div className="ipd">
                    <img src={img1} alt="co" />
                    <p>
                      {" "}
                      Startshorts is hiring an Node js , React Native and Python
                      Developer at its Work from Home. The position is full-time
                      .We prefer local candidates, but
                    </p>
                  </div>
                  <hr></hr>
                </div>
                <div className="postcard">
                  <p className="smt">
                    Gourav bajpai <span>Posted in 12/11/2023</span>{" "}
                  </p>
                  <div className="ipds">
                    <p>
                      {" "}
                      Startshorts is hiring an Node js , React Native and Python
                      Developer at its Work from Home. The position is full-time
                      .We prefer local candidates, but
                    </p>
                  </div>
                  <hr></hr>
                </div>
              </div>
              <div className="act">
                <Link to="/activity">
                  <p>
                    Show All Activity <span>--</span>
                  </p>
                </Link>
              </div>
            </div>
            <div className="exp">
              <h3>Company Info</h3>
              <span className="fo">Your Update Info</span>
              <div className="data">
                <h4>{name}</h4>
                <p
                  className="ppp"
                  style={{
                    marginBottom: "0.5rem",
                    color: "#0381bb",
                    fontWeight: "bold",
                    marginTop: "0.5rem",
                  }}
                >
                  "{tag ? tag : "required position"}"
                </p>
                <p className="ppp">
                  {discreption ? (
                    <ReactQuill
                      value={discreption}
                      readOnly={true}
                      theme={"bubble"}
                    />
                  ) : (
                    "As CTO in startsshorts"
                  )}
                </p>
              </div>
              <div className="data">
                <h4>Contact Details</h4>
                <br></br>
                <p className="ppp">
                  <b>Contact No :- </b>
                  {contact1 ? contact1 : "As CTO in startsshorts"}
                </p>
                <p className="ppp">
                  <b>Official Mail :- </b>
                  {email ? email : "As CTO in startsshorts"}
                </p>
                <p className="ppp">
                  <b>Contact No 2 :- </b>
                  {contact2 ? contact2 : "As CTO in startsshorts"}
                </p>
              </div>
              <div className="data">
                <h4>Addtional Info</h4>
                <p className="ppp">
                  {user?.addtional ? user?.addtional : "As CTO in startsshorts"}
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="view">
              <h3>People also viewed </h3>
              <div className="vcard">
                <img src={img1} alt="img" />
                <div>
                  <h4>Gaurav bajpai</h4>
                  <p>#tages game of thrones</p>
                </div>
              </div>
              <div className="vcard">
                <img src={img1} alt="img" />
                <div>
                  <h4>Gaurav bajpai</h4>
                  <p>#tages game of thrones</p>
                </div>
              </div>
              <div className="vcard">
                <img src={img1} alt="img" />
                <div>
                  <h4>Gaurav bajpai</h4>
                  <p>#tages game of thrones</p>
                </div>
              </div>
              <div className="vcard">
                <img src={img1} alt="img" />
                <div>
                  <h4>Gaurav bajpai</h4>
                  <p>#tages game of thrones</p>
                </div>
              </div>
            </div>
            <div className="companys">
              <h3>Your Company</h3>
              <div className="vcard">
                <img src={img1} alt="img" />
                <div>
                  <h4>Gaurav bajpai</h4>
                  <p>#tages game of thrones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayCompany;
