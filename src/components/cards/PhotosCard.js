import React from "react";
import { Imageclient } from "../../api/client";

function PhotosCard({ el, photo }) {
  console.log("PHOTO", el);
  return (
    <div className="timeline-event-photo">
      <div className="live-event--title">
        <h3>Photos </h3>
        <button>Add photos</button>
      </div>
      <div className="timeline-event-photos">
        <div>
          <img
            className="small-friend--img-inprofile-page"
            src={`${Imageclient}/posts/${photo || "default.jpg"}`}
            // src="http://localhost:3002/img/users/default.jpg"            //

            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default PhotosCard;
