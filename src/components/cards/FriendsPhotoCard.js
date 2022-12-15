import React, { useContext } from "react";
import { Imageclient } from "../../api/client";
import FriendContext from "../../context/friendContext";
import UserContext from "../../context/userContext";

function FriendsPhotoCard({ friends }) {
  // const { friends } = useContext(FriendContext);
  // console.log(friends);
  const { user } = useContext(UserContext);

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
            // src={`${Imageclient}/users/${
            //   el?.to_user?._id == user._id
            //     ? el?.from_user?.photo
            //     : el?.to_user?.photo
            // }`}
            // src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
            alt=""
          />
          <p className="small-text">
            {/* {el?.to_user?._id == user._id
              ? el?.from_user?.name
              : el?.to_user?.name} */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FriendsPhotoCard;
