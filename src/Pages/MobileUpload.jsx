import React from "react";
import IconButton from "@mui/material/IconButton";
import { Avatar, Button, Modal, Box, Typography, Badge } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import "../Components/global.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const MobileUpload = () => {
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);
  const [displayVideo, setDisplayVideo] = useState([]);
  const [imgSelect, setImgSelect] = useState(false);
  const [videoSelect, setVideoSelect] = useState(false);
  const Navigate = useNavigate();
  const post = async () => {
    setLoading(true);
    if (imgSelect) {
      var myForm = new FormData();
      for (let i = 0; i < image.length; i++) {
        myForm.append("images", image[i]);
      }
      myForm.append("title", title);
      myForm.append("id", user?._id);

      const res = await axios.post(
        "http://localhost:5000/api/v1/post",
        myForm,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      if (res?.data.data) {
        toast.success("Post Upload successfully :)");
      } else {
        toast.error(res?.data.message);
      }
      setLoading(false);
      return;
    }
    if (videoSelect) {
      setLoading(true);
      var myForm = new FormData();
      myForm.append("video", video);
      myForm.append("title", title);
      myForm.append("id", user?._id);
      const res = await axios.post(
        "http://localhost:5000/api/v1/post-video",
        myForm,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      if (res?.data.data) {
        toast.success("Post Upload successfully :)");
        Navigate("/");
      } else {
        toast.error(res?.data.message);
      }
      setLoading(false);
      return;
    }
  };
  ////handle Images set

  const handleImage = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((data) => {
      return URL.createObjectURL(data);
    });
    setDisplayImages(imagesArray);
    setImage(e.target.files);
    setImgSelect(true);
    setVideoSelect(false);
  };

  ////// handle Video set

  const handleVideo = (e) => {
    setVideo(e.target.files[0]);
    setDisplayVideo(URL.createObjectURL(e.target.files[0]));
    setImgSelect(false);
    setVideoSelect(true);
  };
  return (
    <section className="mobnav">
      <div className="wrap">
        <h2>Upload Post</h2>
        <div className="left">
          <label>Post Title</label>
          <textarea
            placeholder="Enter your Post Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></textarea>
          <p>Your media files here</p>
          <div className="damp">
            {displayImages &&
              displayImages.map((data, index) => (
                <Avatar
                  key={index}
                  style={{ border: "1px solid silver", margin: "0 0.5rem" }}
                  alt="Remy Sharp"
                  src={data}
                />
              ))}
            {video && <video src={displayVideo} className="vfx" />}
          </div>
        </div>
        <div className="right">
          <button>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImage}
                multiple
              />
              <i className="bx bx-images"></i> Upload Images
            </IconButton>
          </button>
          <button>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="video/*"
                type="file"
                onChange={handleVideo}
                multiple
              />
              <i className="bx bx-video-plus"></i> Upload Video
            </IconButton>
          </button>
          <button>
            {" "}
            <i className="bx bx-poll"></i> Create Poll
          </button>
          <button>
            {" "}
            <i className="bx bx-calendar-event"></i>Create Event
          </button>
          <button className="post" onClick={post}>
            {loading ? <CircularProgress style={{ color: "black" }} /> : "Post"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileUpload;
