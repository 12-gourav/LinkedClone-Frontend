import React, { useEffect, useState } from "react";
import o1 from "../assets/o1.jpg";
import { toast } from "react-toastify";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
const SideNews = () => {
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
    <>
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
            <center>
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
                  <p className="text-md font-semibold">
                    {data.title.substring(40, [0])}...
                  </p>
                  <p className="text-sm text-justify ">
                    {data.news.substring(100, [0])}...
                  </p>
                </div>
              </div>
            ))
          )}

          <div className="flex items-center mx-2 bg-white rounded-xl py-3 px-1 my-2 news">
            <img src={o1} className="w-[150px] rounded-xl" />
            <div className="ml-2">
              <p className="text-md font-semibold">
                Zepto raised 200 dolloars in funding...
              </p>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet earum minus ...{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center mx-2 bg-white rounded-xl py-3 px-1 my-2">
            <img src={o1} className="w-[150px] rounded-xl" />
            <div className="ml-2">
              <p className="text-md font-semibold">
                Zepto raised 200 dolloars in funding...
              </p>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet earum minus ...{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center mx-2 bg-white rounded-xl py-3 px-1 my-2">
            <img src={o1} className="w-[150px] rounded-xl" />
            <div className="ml-2">
              <p className="text-md font-semibold">
                Zepto raised 200 dolloars in funding...
              </p>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet earum minus ...{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center mx-2 bg-white rounded-xl py-3 px-1 my-2">
            <img src={o1} className="w-[150px] rounded-xl" />
            <div className="ml-2">
              <p className="text-md font-semibold">
                Zepto raised 200 dolloars in funding...
              </p>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet earum minus ...{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center mx-2 bg-white rounded-xl py-3 px-1 my-2">
            <img src={o1} className="w-[150px] rounded-xl" />
            <div className="ml-2">
              <p className="text-md font-semibold">
                Zepto raised 200 dolloars in funding...
              </p>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet earum minus ...{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNews;
