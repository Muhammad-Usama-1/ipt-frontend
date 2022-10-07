import React from "react";
import UserCard from "./UserCard";

function Story() {
  return (
    <div className="story-card">
      <h3>Stories</h3>
      <hr />
      <UserCard title="Create your Story" subTitle="time to story" />
      <UserCard />
      <UserCard />
      <UserCard />
      <button className="app-btn"> see All </button>
    </div>
  );
}

export default Story;
