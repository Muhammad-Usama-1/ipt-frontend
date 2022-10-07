import React from "react";

function FriendCard() {
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
            src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/06.753c45f1.jpg"
            alt=""
          />
          <div className="card-info-box">
            <p className="card-info--title">Paul Molive</p>
            <p>@developer</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
          </div>
        </div>
        <button className="card-info-box--btn">Following</button>
      </div>
    </div>
  );
}

export default FriendCard;
