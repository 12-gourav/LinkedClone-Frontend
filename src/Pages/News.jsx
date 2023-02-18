import React, { useState } from "react";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const News = () => {
  const [news, setNews] = useState("");
  const [title, setTitle] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (news == "" || title == "" || imgLink == "") {
        return toast.error("All fields are required");
      }
      setLoading(true);
      const data = await axios.post("http://localhost:5000/api/v1/news", {
        news,
        title,
        imgLink,
      });
      if (data.data) {
        toast.success("News post saved successfully");
        setImgLink("");
        setTitle("");
        setNews("");
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <section className="news">
      <div className="box">
        <h3>News Post</h3>
        <TextField
          label="News Title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Your News Heading"
          className="w-full nf"
          value={title}
        />
        <TextField
          label="News"
          onChange={(e) => setNews(e.target.value)}
          placeholder="Enter Your News Heading"
          className="w-full nf"
          value={news}
        />
        <TextField
          label="News Post Image Link"
          onChange={(e) => setImgLink(e.target.value)}
          placeholder="Enter Your News Heading"
          className="w-full nf"
          value={imgLink}
        />
        <img src={imgLink} alt="image" />
        <button
          className="news-btn"
          onClick={handleSubmit}
          style={{ color: "#fff" }}
        >
          {loading ? <CircularProgress style={{color:"#fff"}} /> : "Submit"}
        </button>
      </div>
    </section>
  );
};

export default News;
