import React, { useContext } from "react";
import FriendContext from "../../context/friendContext";

function FriendsPhotoCard() {
  const { friends } = useContext(FriendContext);

  return (
    <div className="timeline-event-photo">
      <div className="live-event--title">
        <h3>Friends </h3>
        <button>Add friends</button>
      </div>
      <div className="timeline-event-photos">
        {friends.map((el) => (
          <div>
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
              alt=""
            />
            <p className="small-text">{el?.to_user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendsPhotoCard;
