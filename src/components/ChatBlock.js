import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import { Imageclient } from "../api/client";
import userPhoto from "../assets/user.jpg";
import UserContext from "../context/userContext";
// import userPhoto from "../App";

function ChatBlock({ messageData, newUser }) {
  const { setUser, user } = useContext(UserContext);
  //   console.log(user?._id, messageData.userId);

  return (
    // <div className="chat-block-msg">
    <ScrollToBottom className="message-container">
      <div
        className={`chat-block-msg ${
          messageData?.userId !== user?._id ? "" : "reciver-block"
        } `}
      >
        <div>
          <img
            className="msg-user--photo"
            // src={`${Imageclient}/users/${newUser || "default.jpg"}`}
            src={`${Imageclient}/users/${
              messageData?.userId == user?._id ? user.photo : newUser.photo
            }`}
            // src={userPhoto}
            alt=""
          />
          <p> {messageData.time || " 12 : 40"} </p>
        </div>
        <div>
          <p
            className={`chat-actual--msg ${
              messageData?.userId !== user?._id ? "sender" : "reciver"
            }`}
          >
            {messageData?.message}
          </p>
        </div>
      </div>
    </ScrollToBottom>
  );
}

export default ChatBlock;
