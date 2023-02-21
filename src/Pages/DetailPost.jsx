import React, { useEffect, useState } from "react";
import "../Components/host.css";
import logo from "../assets/logo.png";
import img from "../assets/yug.png";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Upload from "../Components/Upload";
import SideNews from "../Components/SideNews";
import Posts from "../Components/Posts";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import o1 from "../assets/o1.jpg";
import Like from "../assets/icons/like.png";
import Comment from "../assets/icons/comment.png";
import Share from "../assets/icons/share.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import like2 from "../assets/like2.png";
import Tooltip from "@mui/material/Tooltip";
import { toast } from "react-toastify";

const DetailPost = () => {
  const { user } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState();
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");

  const { pid } = useParams();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  console.log(pid);

  const getData = async () => {
    const res = await axios.post(
      "https://linkedin-54mx.onrender.com/api/v1/post/detail",
      {
        pid,
      }
    );
    console.log(res);
    setLikeCount(res?.data.data.likes.length);
    setData(res?.data.data);
  };
  const handleLike = async () => {
    const pid = data?._id;
    const token = localStorage.getItem("token");
    await axios
      .post(
        "https://linkedin-54mx.onrender.com/api/v1/post/likes",
        { pid },
        { headers: { token: token } }
      )
      .then((res) => {
        if (like) {
          setLike(!like);
          setLikeCount(likeCount - 1);
        } else {
          setLikeCount(likeCount + 1);
          setLike(!like);
        }
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleComment = async () => {
    try {
      const token = localStorage.getItem("token");
      const name = user?.name;
      const url = user?.avatar.url;
      const result = await axios.post(
        "https://linkedin-54mx.onrender.com/api/v1/post/comment",
        { name, url, pid, comment },
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(result);
      setComment("");
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (cid) => {
    try {
      const token = localStorage.getItem("token");
      if (window.confirm("Are you sure you want Delete the comment")) {
        const result = await axios.post(
          "https://linkedin-54mx.onrender.com/api/v1/post/comment/delete",

          { cid, pid },
          { headers: { token: token } }
        );
        console.log(result);
        toast.success("Comment delete successfully...");
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <input type="text" placeholder="Search something......" />
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
              <Avatar alt="Remy Sharp" src={user?.avatar.url} />
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
            <Link className="pl" to="/">
              <i className="bx bx-message-rounded-dots"></i>
              Messages
            </Link>
            <Link className="pl" to="/">
              <i className="bx bx-cloud-download"></i>
              saved Posts
            </Link>
            <Link to="/" className="pl">
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
        <div
          className="two"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
          }}
        >
          <div
            className="w-[30rem]  max-w-xl my-4 postcard"
            style={{ height: "100%" }}
          >
            <div className="bg-white p-4 rounded-lg  ">
              <div className="flex flex-row justify-between items-start">
                <div className=" flex flex-row">
                  <Avatar src={data.user_id?.avatar.url} />
                  <div className="mx-2">
                    <p className="text-md leading-2 font-semibold">
                      {data.user_id?.name}
                    </p>
                    <p className="text-sm">
                      {data.user_id?.tag.substring(32, [0])}....
                    </p>
                  </div>
                </div>
                {/* <MoreHoriz /> */}
              </div>
              <p className="text-md p-4 px-1">{data.title}</p>
              <Swiper
                spaceBetween={30}
                autoplay={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {data.image &&
                  data.image.map((imgdata, index) => (
                    <SwiperSlide key={index}>
                      {" "}
                      <img
                        src={imgdata.url}
                        alt=""
                        className=" max-auto"
                        style={{
                          height: "250px",
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                {data.video &&
                  data.video.map((vdata, index) => (
                    <SwiperSlide key={index}>
                      {" "}
                      <video
                        src={vdata.url}
                        autoPlay
                        controls
                        className="max-auto"
                        style={{ height: "250px", width: "100%" }}
                      ></video>
                    </SwiperSlide>
                  ))}{" "}
                <SwiperSlide>
                  {" "}
                  <img src={o1} alt="" className=" max-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={o1} alt="" className=" max-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={o1} alt="" className=" max-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={o1} alt="" className=" max-auto" />
                </SwiperSlide>
              </Swiper>

              <div className="flex flex-row w-[80%] mx-auto justify-between mt-5">
                <div className="flex flex-row justify-center items-center ">
                  <img
                    alt=""
                    src={like ? like2 : Like}
                    className="w-[25px] h-[25px] mr-2 cursor-pointer"
                    onClick={handleLike}
                  />
                  <span>{likeCount}</span>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <img
                    alt=""
                    src={Comment}
                    className="w-[25px] h-[25px] mr-2 cursor-pointer "
                  />

                  <span>{data.comments?.length}</span>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <img
                    alt=""
                    src={Share}
                    className="w-[25px] h-[25px] mr-2 cursor-pointer "
                  />
                  <span>234</span>
                </div>
                <div className="flex flex-row justify-center items-center cursor-pointer ">
                  {/* <RemoveRedEyeOutlined /> */}
                  <span>234</span>
                </div>
              </div>
              <div
                className="com"
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  background: "#fafafa",
                  width: "100%",
                  padding: "0.6rem 1rem",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Write Comment..."
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  style={{
                    padding: "0.6rem 1rem",
                    width: "100%",
                    borderRadius: "10px",
                    outline: "none",
                    border: "none",
                    background: "#fafafa",
                  }}
                />
                <Tooltip title="Comment">
                  <button
                    style={{
                      height: "100%",
                      background: "#fafafa",
                      fontSize: "25px",
                      color: "#ddd",
                    }}
                    onClick={handleComment}
                  >
                    <i className="bx bx-paper-plane"></i>
                  </button>
                </Tooltip>
              </div>
              <hr></hr>
              <div className="comments">
                {data.comments
                  ?.map((data, index) => (
                    <div className="comment-card" key={index}>
                      <div className="left">
                        <Avatar src={data.url} />
                      </div>
                      <div className="right">
                        <p>
                          {data.name}{" "}
                          {data.id === user?._id ? (
                            <Tooltip title="Delete">
                              <i
                                className="bx bx-message-alt-x"
                                onClick={() => handleDelete(data._id)}
                              ></i>
                            </Tooltip>
                          ) : (
                            ""
                          )}
                        </p>
                        <span>{data.comment}</span>
                      </div>
                    </div>
                  ))
                  .reverse()}
              </div>
            </div>
          </div>
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

export default DetailPost;
