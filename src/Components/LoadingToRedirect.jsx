import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const Navigate = useNavigate();
  const [count, setCount] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => --c);
    }, 1000);
    count === 0 && Navigate("/");

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="container text-center" style={{ marginTop: "2rem" }}>
      <p>Redirecting you in {count} seconds</p>
    </div>
  );
};

export default LoadingToRedirect;
