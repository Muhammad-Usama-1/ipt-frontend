import React from "react";
import { Imageclient } from "../../api/client";

function FriendsPhotoCard({ el }) {
  return (
    <div className="timeline-event-photo">
      <div className="live-event--title">
        <h3>Friends </h3>
        <button>Add friends</button>
      </div>
      <div className="timeline-event-photos">
        <div>
          <img
            className="small-friend--img-inprofile-page"
            src={`${Imageclient}/users/${el.friend_photo}`}
            alt=""
          />
          <p className="small-text">{el.friend_name}</p>
        </div>
      </div>
    </div>
  );
}

export default FriendsPhotoCard;
