import React, { useContext, useEffect, useState } from "react";
import UserCard from "../components/cards/UserCard";

import "../styles/ChatStyle.css";

import UserContext from "../context/userContext";

// import MessageBody from "../components/MessageBody";
import { Link, Outlet } from "react-router-dom";
// const socket = io.connect("http://localhost:3001");
function ChatPage() {
  const { setUser, user } = useContext(UserContext);
  const [publicChannel, setPublicChannel] = useState([
    { name: "IPT", id: 1 },
    { name: "Network security", id: 2 },
    { name: "Cloud computing", id: 3 },
  ]);
  console.log(user);

  useEffect(() => {
    // Get List of old messages from message Model with login user id and id of the freind
  }, [0]);

  return (
    <>
      <div className="chat-container">
        {/* User containers */}
        <div className="chat-user-container">
          <UserCard title="Muhhamd Usama " subTitle="Graphic Designer" />
          <div className="iq-search-bar device-search search-in-user-chat">
            <form action="#" className="">
              <a
                className="search-link"
                href="/socialv/bs5/react/build/dashboard/app/profile"
              >
                <i className="bx bx-search"></i>
              </a>
              <input
                type="text"
                className="text search-input"
                placeholder="Search here..."
              />
            </form>
          </div>
          {/* form end */}
          <h4>Public Channel</h4>
          {publicChannel.map((el) => (
            <Link to={`/chat/${el.id}`} state={{ name: el.name }}>
              <UserCard title={el.name} key={el.id} />
            </Link>
          ))}

          <h4>Users</h4>

          <Link to="/chat/123" state={{ name: "Annaa" }}>
            <UserCard />
          </Link>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default ChatPage;
