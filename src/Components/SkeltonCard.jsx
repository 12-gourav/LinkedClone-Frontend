import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Avatar } from "@mui/material";

import o1 from "../assets/o1.jpg";
import Like from "../assets/icons/like.png";
import Comment from "../assets/icons/comment.png";
import Share from "../assets/icons/share.png";
import Skeleton from "@mui/material/Skeleton";

const SkeltonCard = () => {
  return (
    <div className="w-[30rem]  max-w-xl my-4 postcard">
      <div className="bg-white p-4 rounded-lg  ">
        <div className="flex flex-row justify-between items-start">
          <div className=" flex flex-row">
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
            <div className="mx-2">
              <p className="text-md leading-2 font-semibold">
                {" "}
                <Skeleton animation="wave" height={18} width="100px" />
              </p>
              <p className="text-sm">
                {" "}
                <Skeleton
                  animation="wave"
                  height={18}
                  width="300px"
                  className="skull"
                />
              </p>
            </div>
          </div>
          {/* <MoreHoriz /> */}
        </div>
        <Skeleton
          animation="wave"
          height={300}
          style={{ marginTop: "0rem" }}
          className="mx-auto"
        />

        <div className="flex flex-row w-[80%] mx-auto justify-between">
          <div className="flex flex-row justify-center items-center">
            <Skeleton animation="wave" height={50} width="50px" />
          </div>
          <div className="flex flex-row justify-center items-center">
            <Skeleton animation="wave" height={50} width="50px" />
          </div>
          <div className="flex flex-row justify-center items-center">
            <Skeleton animation="wave" height={50} width="50px" />
          </div>
          <div className="flex flex-row justify-center items-center cursor-pointer ">
            <Skeleton animation="wave" height={50} width="50px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeltonCard;
