import React, { useEffect, useState } from "react";
import Post from "./Post";
import CircularProgress from "@mui/material/CircularProgress";
import Tooltip from "@mui/material/Tooltip";
import SkeletonCard from "./SkeltonCard";
import axios from "axios";
import SkeltonCard from "./SkeltonCard";

const Posts = () => {
  const [state, setState] = useState([]);
  const [count, setCount] = useState(2);
  const [loading, setloading] = useState(false);

  const Fetchdata = async () => {
    setloading(true);
    const data = await axios.get(
      `https://linkedin-54mx.onrender.com/api/v1/post/${count}`
    );
    setState((prev) => [...prev, ...data.data.data]);
    setloading(false);
  };

  useEffect(() => {
    Fetchdata();
  }, [count]);

  return (
    <div className="posts" id="post" style={{ width: "100%" }}>
      {loading
        ? ["h", "i", "o", "d"].map((index) => <SkeltonCard key={index} />)
        : state.map((data, index) => <Post data={data} key={index} />)}
      <Tooltip title="Click to Load more">
        <button className="load" onClick={() => setCount(count + 2)}>
          {" "}
          <CircularProgress />
        </button>
      </Tooltip>
    </div>
  );
};

export default Posts;
