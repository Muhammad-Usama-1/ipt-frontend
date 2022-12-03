import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import userPhoto from "../assets/user.jpg";
import UserContext from "../context/userContext";
// import userPhoto from "../App";

function ChatBlock({ messageData }) {
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
          <img className="msg-user--photo" src={userPhoto} alt="" />
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
