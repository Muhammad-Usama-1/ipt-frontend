import React from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
function UserAbout() {
  return (
    <div className="user-about-card">
      <h3 className="user-about-card--title">About</h3>
      <hr />
      <div className="about-card-details">
        <div className="about-card-info">
          <PersonOutlinedIcon />
          <span>Web developer</span>
        </div>
        <div className="about-card-info">
          <CollectionsBookmarkOutlinedIcon />
          <span>Succes in making $100k dollar</span>
        </div>
        <div className="about-card-info">
          <LocationOnOutlinedIcon />
          <span>USA</span>
        </div>

        <div className="about-card-info">
          <FavoriteBorderOutlinedIcon />
          <span>Single</span>
        </div>
      </div>
    </div>
  );
}

export default UserAbout;
