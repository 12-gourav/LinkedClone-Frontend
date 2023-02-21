import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();
  const [result, setResult] = useState([]);

  const getResult = async () => {
    try {
      const data = await axios.post(
        "https://linkedin-54mx.onrender.com/api/v1/search",
        {
          query,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      setResult(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <section className="searchResult">
      <div className="container">
        <h2>Your User Search Result....</h2>
        <hr></hr>
        <div className="user">
          <h6>Your Post Results</h6>
          <br></br>
          {result.user &&
            result.user.map((data, index) => (
              <Link to="/" key={index}>
                <div className="box">
                  <div className="left">
                    <img src={data.avatar.url} />
                  </div>
                  <div className="right">
                    <h3>{data.name}</h3>
                    <p className="tag">{data.tag}</p>
                    <p>{data.about.substring(100, [0])}....</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <div className="post">
          <h6>Your Post Search Results</h6>
          <br></br>
          {result.post &&
            result.post.map((data, index) => (
              <Link to="/" key={index}>
                <div className="box">
                  <div className="left">
                    {data.image && <img src={data.image[0].url} />}
                  </div>
                  <div className="right">
                    <h3>{data.user_id.name}</h3>
                    <p className="tag">{data.title}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
