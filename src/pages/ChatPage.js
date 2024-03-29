import React, { useContext, useEffect, useState } from "react";
import UserCard from "../components/cards/UserCard";

import "../styles/ChatStyle.css";

import UserContext from "../context/userContext";

// import MessageBody from "../components/MessageBody";
import { Link, Outlet } from "react-router-dom";
// import FriendContext from "../context/friendContext";
// import { client } from "../api/client";
// import { toast } from "react-toastify";
import FriendContext from "../context/friendContext";
import ProtectedRoute from "../Router/ProtectedRoute";
// const socket = io.connect("http://localhost:3001");
function ChatPage() {
  const { user } = useContext(UserContext);
  const { friends } = useContext(FriendContext);

  // const { friends, setFriends } = useState([]);
  // console.log(friends);

  const [publicChannel, setPublicChannel] = useState([
    { name: "IPT", id: 1 },
    { name: "Network security", id: 2 },
    { name: "Cloud computing", id: 3 },
  ]);
  useEffect(() => {
    document.title = "IPT |  Chatting";
    return () => (document.title = "IPT | MERN APP");
  }, []);
  // console.log(user);

  return (
    <ProtectedRoute>
      <div className="chat-container">
        {/* User containers */}
        <div className="chat-user-container">
          <UserCard title={user.name} subTitle="Nothing Now" />
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
            <Link to={`/chat/${el.id}`} state={{ name: el.name, room: el.id }}>
              <UserCard title={el.name} key={el.id} />
            </Link>
          ))}

          <h4>Users</h4>
          {friends.map((el) => (
            <Link
              to={`/chat/${el._id}`}
              state={{
                name: el.friend_name,
                userId: el?.friend_id,
                room: el._id,
              }}
            >
              <UserCard
                title={el.friend_name}
                image={el?.friend_photo}
                key={el._id}
              />
            </Link>
            // <h2>helo</h2>
          ))}
          {/* <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard /> */}
        </div>

        <Outlet />
      </div>
    </ProtectedRoute>
  );
}

export default ChatPage;
