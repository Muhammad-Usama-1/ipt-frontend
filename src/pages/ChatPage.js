import React, { useContext, useEffect, useState } from "react";
import UserCard from "../components/cards/UserCard";
import Layout from "../components/Layout";
import "../styles/ChatStyle.css";
import io from "socket.io-client";

import userPhoto from "../assets/user.jpg";

// ---------------------
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ChatBlock from "../components/ChatBlock";
import ScrollToBottom from "react-scroll-to-bottom";
import UserContext from "../context/userContext";

import MessageBody from "../components/MessageBody";
import { Link, Outlet, Route, Routes } from "react-router-dom";
// const socket = io.connect("http://localhost:3001");
function ChatPage() {
  const [messageInput, setMessageInput] = useState("");
  const [room, setRoom] = useState("123");
  const [messageList, setMessageList] = useState([]);
  const [username, setUsername] = useState("");
  const { setUser, user } = useContext(UserContext);
  console.log(user);
  //   const joinRoom = () => {
  //     socket.emit("join_room", room);
  //   };

  //   const sendMessage = async (e) => {
  //     // Save message to DB

  //     e.preventDefault();
  //     setMessageInput("");
  //     console.log("Will send message");
  //     //
  //     // if (messageInput !== "") {
  //     const messageData = {
  //       room: room,
  //       message: messageInput,
  //       userId: user?._id,
  //       time:
  //         new Date(Date.now()).getHours() +
  //         ":" +
  //         new Date(Date.now()).getMinutes(),
  //     };
  //     //   joinRoom();

  //     await socket.emit("send_message", messageData);
  //     setMessageList((list) => [...list, messageData]);
  //     // setCurrentMessage("");
  //     // }
  //   };
  useEffect(() => {
    // Get List of old messages from message Model with login user id and id of the freind
  }, [0]);
  //   useEffect(() => {
  //     socket.on("receive_message", (data) => {
  //       console.log("new message arrived..");
  //       console.log(data);
  //       setMessageList((list) => [...list, data]);
  //     });
  //   }, [socket]);

  return (
    <>
      <div className="chat-container">
        {/* User containers */}
        <div className="chat-user-container">
          <UserCard title="Muhhamd Usama " subTitle="Graphic Designer" />
          <div className="iq-search-bar device-search">
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
          <UserCard />
          <UserCard />

          <h4>Private Channel</h4>
          <UserCard />
          <UserCard />
          <UserCard />

          <h4>Users</h4>

          <Link to="/chat/123" state={{ name: "Anna Sthesia" }}>
            <UserCard />
          </Link>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>

        {/* Messages container */}
        {/* <div className="chat-message-container"> */}
        {/* <header>
          <div className="chat-message-container--header">
            <UserCard title="team Discusscion" />
            <div className="flex-x">
              <LocalPostOfficeOutlinedIcon
                style={{ marginLeft: 10, color: "#00b4cc" }}
              />
              <NotificationsNoneOutlinedIcon
                style={{ marginLeft: 10, color: "#00b4cc" }}
              />
              <PeopleOutlinedIcon
                style={{ marginLeft: 10, color: "#00b4cc" }}
              />
              <HomeOutlinedIcon style={{ marginLeft: 10, color: "#00b4cc" }} />
            </div>
          </div>
        </header> */}

        {/* <ScrollToBottom className="chat-message-container--msgs">
          <button onClick={joinRoom}>join now</button>

          {messageList.map((el) => (
            <ChatBlock messageData={el} />
          ))}
        </ScrollToBottom> */}

        {/* <footer className="chat-message-container--footer">
          <div
            className="iq-search-bar device-search only-for-msg-chat"
            // style={{ width: "70rem" }}
          >
            <form onSubmit={sendMessage} action="#" className="">
              <a
                className="search-link"
                href="/socialv/bs5/react/build/dashboard/app/profile"
              >
                <i className="bx bx-search"></i>
              </a>
              <input
                type="text"
                className="text search-input"
                placeholder="Type your message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
            </form>
          </div>
        </footer> */}
        {/* </div> */}
        <Outlet />
        {/* <Routes>
          <Route path=":id" element={<MessageBody />} />
        </Routes> */}
      </div>
    </>
  );
}

export default ChatPage;
