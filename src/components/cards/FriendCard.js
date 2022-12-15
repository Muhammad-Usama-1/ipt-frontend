import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Imageclient } from "../../api/client";
import UserContext from "../../context/userContext";

function FriendCard({ el }) {
  const { user } = useContext(UserContext);

  return (
    <div className="friendlist-card">
      <div className="friendlist-card--header">
        <img
          src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/profile-bg2.804a5d98.jpg"
          alt=""
        />
      </div>
      <div className="friendlist-card-info">
        <div className="d-flex">
          <img
            className="friendlist-card-info--img"
            // Here default will be replace with actual IMAGEURI in future when we have real user in production
            src={`${Imageclient}/users/${el.friend_photo}`}
            // src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/06.753c45f1.jpg"
            alt=""
          />
          <Link to={`/friend-profile/${el.friend_id}`}>
            <div className="card-info-box">
              <p className="card-info--title">{el.friend_name}</p>
              <p>@developer</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
            </div>
          </Link>
        </div>
        <button className="card-info-box--btn">Following/Friends</button>
      </div>
    </div>
  );
}

export default FriendCard;
