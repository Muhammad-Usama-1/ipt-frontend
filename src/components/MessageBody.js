import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import io from "socket.io-client";
import UserCard from "./cards/UserCard";

//
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
import { Outlet, useLocation } from "react-router-dom";

const socket = io.connect("http://localhost:3001");
function MessageBody() {
  const location = useLocation();
  // const { from } = location.state
  const [messageInput, setMessageInput] = useState("");
  const [room, setRoom] = useState("123");
  const [messageList, setMessageList] = useState([]);
  const [username, setUsername] = useState("");
  const { setUser, user } = useContext(UserContext);
  const joinRoom = () => {
    socket.emit("join_room", room);
  };

  const sendMessage = async (e) => {
    console.log(user);
    // Save message to DB

    e.preventDefault();
    setMessageInput("");
    console.log("Will send message");
    //
    // if (messageInput !== "") {
    const messageData = {
      room: room,
      message: messageInput,
      userId: user?._id,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };
    //   joinRoom();

    await socket.emit("send_message", messageData);
    setMessageList((list) => [...list, messageData]);
    // setCurrentMessage("");
    // }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("new message arrived..");
      console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-message-container">
      <Outlet />
      <header>
        <div className="chat-message-container--header">
          <UserCard title={location?.state?.from} />
          <div className="flex-x">
            <LocalPostOfficeOutlinedIcon
              style={{ marginLeft: 10, color: "#00b4cc" }}
            />
            <NotificationsNoneOutlinedIcon
              style={{ marginLeft: 10, color: "#00b4cc" }}
            />
            <PeopleOutlinedIcon style={{ marginLeft: 10, color: "#00b4cc" }} />
            <HomeOutlinedIcon style={{ marginLeft: 10, color: "#00b4cc" }} />
            {/* <UserCard title={`${`} subTitle={false} /> */}
          </div>
        </div>
      </header>
      {/* <div id="id" className="chat-message-container--msgs"> */}
      <ScrollToBottom className="chat-message-container--msgs">
        {/* <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> */}
        <button onClick={joinRoom}>join now</button>

        {/* <ChatBlock sender={false} /> */}

        {messageList.map((el) => (
          <ChatBlock messageData={el} />
        ))}
        {/* ---------------------- */}
      </ScrollToBottom>
      {/* </div> */}
      <footer className="chat-message-container--footer">
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
      </footer>
    </div>
  );
}

export default MessageBody;