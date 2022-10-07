import React from "react";
import UserCard from "./UserCard";

function UpcomingBirthday() {
  return (
    <div className="birthday-card">
      <h3>upcoming birthdays</h3>
      <hr />
      <UserCard title="Create your Story" subTitle="time to story" />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default UpcomingBirthday;
