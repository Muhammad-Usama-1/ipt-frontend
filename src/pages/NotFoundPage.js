import { Button } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div>
        <img
          src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/400.626b10c4.png"
          alt=""
        />
      </div>
      <h1 className="poppins  title ">Oops! This Page is Not Found.</h1>
      <p>The requested page dose not exist.</p>

      <button onClick={() => navigate("/feed")}>
        <HomeIcon />
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;
