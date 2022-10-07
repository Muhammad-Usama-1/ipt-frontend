import React from "react";
import Story from "./cards/StoryCard";
// import Event from "./c /EventCard";
import Event from "./cards/EventCard";
import UpcomingBirthday from "./cards/UpcomingBirthdayCard";
function VerticalContent() {
  return (
    <div className="vertical-flex">
      <Story />
      <Event />
      <UpcomingBirthday />
      <h1>Sugeestion</h1>
    </div>
  );
}

export default VerticalContent;
