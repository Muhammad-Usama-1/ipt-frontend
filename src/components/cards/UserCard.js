import React from "react";
import { Imageclient } from "../../api/client";
import userPhoto from "../../assets/user.jpg";
function UserCard({
  toComment,
  createdAt,
  title = "Anna Sthesia",
  subTitle = "Just Now",
  cta,
  image,
}) {
  return (
    <div className="usercard--container">
      {/* <img className="usercard-photo" src={image ? image : userPhoto} alt="" /> */}
      <img
        className="usercard-photo"
        src={`${Imageclient}/users/${image || "default.jpg"}`}
        // src={`http://localhost:3002/img/users/default.jpg`}
        alt=""
      />

      <div className="usercard-info">
        <div style={{ display: "flex" }}>
          <p>
            <span className="poppins">{title}</span>
            {cta && cta}
          </p>
        </div>
        {subTitle && <p className={cta && "primary-text"}>{subTitle}</p>}
        {createdAt && (
          <div className="user-comment" style={{ display: "flex" }}>
            {/* <span>Like </span>
            <span>Reply </span>
            <span>Translate </span> */}
            <span>{createdAt} </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserCard;
