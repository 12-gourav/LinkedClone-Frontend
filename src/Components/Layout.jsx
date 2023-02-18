import Sidebar from "./Sidebar";
import o1 from "../assets/o1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import "./global.css";

function Layout({ children, showNews, width }) {
  return (
    <div className="flex flex-row">
      <div className="w-[25%]">
        <Sidebar />
      </div>
      <div
        className={
          "w-[45%] max-w-[45%] overflow-hidden" + width
            ? "w-[75%] max-w-[70%]"
            : ""
        }
      >
        {children}
      </div>
      {showNews == null ? (
        <div className="w-[35%] max-w-[35%] sticky">
          <div className="rounded-full bg-white w-[80%]  p-2 px-6 mt-6 mx-auto ">
            <input
              type="text"
              className="bg-transparent outline-none w-[89%]"
              placeholder="Search"
            />
          </div>
          <div>
            <p className="text-xl m-2 my-4">Top Business News</p>
            {/* {data.map((e) => (
              <div className="flex items-center mx-2 bg-white rounded-xl py-3 px-1 my-2">
                <Image src={o1} className="w-[150px] rounded-xl" />
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
            ))} */}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Layout;
