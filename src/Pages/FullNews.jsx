import React, { useEffect, useState } from "react";
import o1 from "../assets/o1.jpg";
import { toast } from "react-toastify";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

const FullNews = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = () => {
    try {
      setLoading(true);
      return axios
        .get("https://linkedin-54mx.onrender.com/api/v1/news")
        .then((res) => {
          setResult(res.data.data);
          console.log(res);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err);
          setLoading(false);
        });
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  };
  const searched = (keyword) => (p) => p.title.toLowerCase().includes(keyword);
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="fnews">
      <div className="wrap2">
        <div className="left">
          <nav className="sidebar">
            <Link to="/" className="box">
              <span className="icon">
                <i className="bx bx-home"></i>
              </span>
              <span className="title">Home</span>
            </Link>
            <Link className="box">
              <span className="icon">
                <i className="bx bx-user-plus"></i>
              </span>
              <span className="title">Connections</span>
            </Link>
            <Link to="/news" className="box active">
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
        </div>
        <div className="right">
          <div className="sideNews">
            <h5>Top Bussiness News</h5>
            <div className="search">
              <i className="bx bx-search"></i>
              <input
                type="text"
                placeholder="Latest News Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="roll">
              {loading ? (
                <center style={{ marginTop: "1rem" }}>
                  <CircularProgress
                    style={{ textAlign: "center", fontSize: "3rem" }}
                  />
                </center>
              ) : (
                result.filter(searched(search)).map((data, index) => (
                  <div
                    className="flex items-center mx-2 bg-white rounded-xl py-3 px-2 my-2 news"
                    key={index}
                  >
                    <img
                      src={data.imgLink}
                      className="w-[150px] rounded-xl"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "contain",
                      }}
                    />
                    <div className="ml-2">
                      <p className="text-md font-semibold">{data.title}</p>
                      <p className="text-sm text-justify text-gray-500">
                        {data.news}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullNews;
