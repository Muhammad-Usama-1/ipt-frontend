import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import io from "socket.io-client";
import UserCard from "./cards/UserCard";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
// import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ChatBlock from "../components/ChatBlock";
import ScrollToBottom from "react-scroll-to-bottom";
import { Link, Outlet, useLocation } from "react-router-dom";
import { client } from "../api/client";

const socket = io.connect("http://localhost:3001");
function MessageBody() {
  const location = useLocation();
  // console.log(location.state);
  const { userId } = location.state;

  const [messageInput, setMessageInput] = useState("");
  const [room, setRoom] = useState(location.state.room);
  const [newUser, setNewUser] = useState("");

  const [messageList, setMessageList] = useState([]);
  const getAUser = async () => {
    if (!userId) {
      alert("User id is missing , i mean your friend id");
      return;
    }

    try {
      const { data } = await client.get(`/users/${userId} `, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log(data.data);
      setNewUser(data.data.data);
      // console.log(data.data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response?.data?.message);
        // toast.error(response.data.message);
      }
    }
  };

  // const [username, setUsername] = useState("");
  const { setUser, user } = useContext(UserContext);
  const joinRoom = () => {
    socket.emit("join_room", location.state.room);
  };
  const deleteChat = () => {
    setMessageList([]);
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
    joinRoom();
    getAUser();
  }, [location.state.name]);
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("new message arrived..");
      // console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-message-container">
      <Outlet />
      <header>
        <div className="chat-message-container--header">
          <UserCard title={location?.state?.name} />
          <div className="flex-x">
            <LocalPostOfficeOutlinedIcon
              style={{ marginLeft: 10, color: "#00b4cc" }}
            />
            <DeleteIcon
              onClick={deleteChat}
              style={{ marginLeft: 10, color: "#00b4cc" }}
            />
            <PeopleOutlinedIcon style={{ marginLeft: 10, color: "#00b4cc" }} />
            <Link to="/feed">
              <HomeOutlinedIcon style={{ marginLeft: 10, color: "#00b4cc" }} />
            </Link>
            {/* <UserCard title={`${`} subTitle={false} /> */}
          </div>
        </div>
      </header>
      {/* <div id="id" className="chat-message-container--msgs"> */}
      <ScrollToBottom className="chat-message-container--msgs">
        {/* <button onClick={joinRoom}>join now</button> */}

        {messageList.map((el) => (
          <ChatBlock newUser={newUser} messageData={el} />
        ))}
      </ScrollToBottom>

      <footer className="chat-message-container--footer">
        <div className="iq-search-bar device-search only-for-msg-chat">
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
