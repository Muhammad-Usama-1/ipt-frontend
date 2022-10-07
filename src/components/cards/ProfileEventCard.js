import React from "react";

function EventCard() {
  return (
    <div className="event-card">
      <div className="event-card--img">
        <img
          src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/52.7708f2fe.jpg"
          alt=""
        />
      </div>
      <div className="event-card--details">
        <div className="event-card-info">
          <p>JAN</p>
          <p className="event-card--title">New Year Celebration</p>
        </div>
        <div className="event-card-info">
          <p style={{ fontWeight: "bold" }}>21</p>
          <p> boht hi zabardast hota hy bhai log kbhi kbhi </p>
        </div>
      </div>
      <div className="round-photos">
        <img
          className="photo-line-round"
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="photo-line-round"
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="photo-line-round"
          src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img
          className="photo-line-round"
          src="https://media.istockphoto.com/photos/confident-asian-businesswoman-in-office-picture-id1212006375?b=1&k=20&m=1212006375&s=170667a&w=0&h=LHoZcLZ0UvppEQT7Bo2jNdKn95Dr51ihaTd9GrNzZwY="
          alt=""
        />
        <img
          className="photo-line-round"
          src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
}

export default EventCard;
