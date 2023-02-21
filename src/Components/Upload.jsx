import React from "react";
import Video from "../assets/icons/videocam-outline.svg";
import ImageIcon from "../assets/icons/image-outline.svg";
import Calendar from "../assets/icons/calendar-outline.svg";
import Poll from "../assets/icons/bar-chart-outline.svg";
import IconButton from "@mui/material/IconButton";
import { Avatar, Button, Modal, Box, Typography, Badge } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import "./global.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Upload = () => {
  const { user } = useSelector((state) => state.user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);
  const [displayVideo, setDisplayVideo] = useState([]);
  const [imgSelect, setImgSelect] = useState(false);
  const [videoSelect, setVideoSelect] = useState(false);

  const post = async () => {
    if (imgSelect) {
      var myForm = new FormData();
      for (let i = 0; i < image.length; i++) {
        myForm.append("images", image[i]);
      }
      myForm.append("title", title);
      myForm.append("id", user?._id);

      const res = await axios.post(
        "https://linkedin-54mx.onrender.com/api/v1/post",
        myForm,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      if (res?.data.data) {
        handleClose();
        toast.success("Post Upload successfully :)");
      } else {
        toast.error(res?.data.message);
      }
      return;
    }
    if (videoSelect) {
      var myForm = new FormData();
      myForm.append("video", video);
      myForm.append("title", title);
      myForm.append("id", user?._id);
      const res = await axios.post(
        "https://linkedin-54mx.onrender.com/api/v1/post-video",
        myForm,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      if (res?.data.data) {
        handleClose();
        toast.success("Post Upload successfully :)");
      } else {
        toast.error(res?.data.message);
      }
      return;
    }
  };

  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 420,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
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
    <div className=" m-4 bg-white p-4 rounded-lg flex flex-col pt-6 upload">
      <div className="flex justify-center items-center" onClick={handleOpen}>
        <Avatar fontSize="large" src={user?.avatar?.url} />
        <p
          className="text-lg mx-2 text-gray-800 border-gray-400 border-2 w-[400px] rounded-full py-1 px-4 cursor-pointer"
          style={{ padding: "6px 10px" }}
        >
          What's happening
        </p>
      </div>
      <div className="flex flex-row  items-center justify-between mt-2 mx-2">
        <div
          className=" flex flex-row items-center mx-2 p-2 rounded-xl"
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        >
          <img src={ImageIcon} className="w-[29px] " />
          <p className="text-md px-2">Image</p>
        </div>
        <div
          className=" flex flex-row items-center mx-2 p-2 rounded-xl"
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        >
          <img src={Video} className="w-[29px] " />
          <p className="text-md px-2">Video</p>
        </div>
        <div
          className=" flex flex-row items-center mx-2 p-2 rounded-xl"
          onClick={handleOpen}
          style={{ cursor: "pointer", opacity: 0.4 }}
        >
          <img src={Poll} className="w-[29px] " />
          <p className="text-md px-2">Poll</p>
        </div>
        <div
          className=" flex flex-row items-center mx-2 p-2 rounded-xl"
          onClick={handleOpen}
          style={{ cursor: "pointer", opacity: 0.4 }}
        >
          <img src={Calendar} className="w-[29px] " />
          <p className="text-md px-2">Event</p>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Post
            <hr />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            <textarea
              className="w-full h-[200px] text-lg outline-none"
              placeholder="What's happening"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <div
              className="flex"
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "50px",
              }}
            >
              {displayImages.map((data, index) => (
                <Badge
                  color="primary"
                  badgeContent="X"
                  variant="dot"
                  key={index}
                  // onClick={() => {
                  //   console.log(data);
                  //   setDisplayImages(displayImages.filter((e) => e !== data));
                  //   setImage([...image].filter((s) => console.log(s)));
                  // }}
                >
                  <Avatar
                    key={data}
                    style={{ border: "1px solid silver", margin: "0 0.5rem" }}
                    alt="Remy Sharp"
                    src={data}
                  />
                </Badge>
              ))}
              {video && <video src={displayVideo} />}
            </div>
            <div className="flex justify-between">
              <div className="flex">
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
                  <img src={ImageIcon} className="w-[25px] mx-1 " />
                </IconButton>
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
                  <img src={Video} className="w-[29px] " />
                </IconButton>

                <img src={Poll} className="w-[25px] mx-1 " />
                <img src={Calendar} className="w-[25px] mx-1 " />
              </div>
              <button
                className="bg-blue-700 text-white p-1 rounded-full px-4"
                onClick={post}
              >
                Post
              </button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Upload;
