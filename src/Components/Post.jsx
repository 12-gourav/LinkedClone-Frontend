// import { MoreHoriz, RemoveRedEyeOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import o1 from "../assets/o1.jpg";
import Like from "../assets/icons/like.png";
import Comment from "../assets/icons/comment.png";
import Share from "../assets/icons/share.png";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import like2 from "../assets/like2.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = ({ data }) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(data?.likes.length);

  //   const like = () => {
  //     axios
  //       .post("/api/post/like", {
  //         pid: data._id,
  //       })
  //       .then((res) => console.log(res.data))
  //       .catch((err) => console.log(err));
  //   };
  //   const comment = () => {
  //     // axios.post('/api/post/like', {pid})
  //   };
  //   const share = () => {
  //     axios.post("/api/post/share", { pid });
  //   };
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-[30rem]  max-w-xl my-4 postcard">
      <div className="bg-white p-4 rounded-lg  ">
        <div className="flex flex-row justify-between items-start">
          <div className=" flex flex-row">
            <Avatar src={data?.user_id.avatar.url} />
            <div className="mx-2">
              <p className="text-md leading-2 font-semibold">
                {data?.user_id.name}
              </p>
              <p className="text-sm">
                {data?.user_id.tag.substring(32, [0])}....
              </p>
            </div>
          </div>
          {/* <MoreHoriz /> */}
        </div>
        <p className="text-md p-4 px-1">{data?.title}</p>
        <Swiper
          spaceBetween={30}
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
                  className=" max-auto spdf"
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
                  className="max-auto fish"
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                ></video>
              </SwiperSlide>
            ))}
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

        <div className="flex flex-row w-[80%] mx-auto justify-between">
          <div className="flex flex-row justify-center items-center">
            <img
              alt=""
              src={like ? like2 : Like}
              className="w-[25px] h-[25px] mr-2 cursor-pointer"
              onClick={handleLike}
            />
            <span>{likeCount}</span>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Link to={`/post/${data._id}`}>
              <img
                alt=""
                src={Comment}
                className="w-[25px] h-[25px] mr-2 cursor-pointer "
              />
            </Link>

            <span>{data?.comments.length}</span>
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
      </div>
    </div>
  );
};

export default Post;
