import { Link } from "react-router-dom";
import React, { useCallback, useContext, useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useMediaQuery } from "@mui/material";

import UserCard from "./cards/UserCard";
import "../styles/FriendsSidebar.css";
// import { toast } from "react-toastify";
// import { client } from "../api/client";
// import { useTokenHook } from "../hooks/UseToken";
import FriendContext from "../context/friendContext";
import { toast } from "react-toastify";
import { client } from "../api/client";

function FreindsSidebar({ fsidebar }) {
  // const { token } = useTokenHook();
  const { _, setFriends: setFriendsC } = useContext(FriendContext);
  const [friends, setFriends] = useState([]);

  const matches1300 = useMediaQuery("(min-width:1300px)");
  const matches1500 = useMediaQuery("(min-width:1500px)");
  const runFunc = () => {
    if (!matches1300) {
      fsidebar.current.classList.toggle("show");
      fsidebar.current.classList.toggle("close");
      return;
    }
    fsidebar.current.classList.toggle("close");
  };

  const getFriendsList = useCallback(async () => {
    try {
      const { data } = await client.get("/users/friends", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data.data);
      setFriends(data.data);
      setFriendsC(data.data);

      // console.log(data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  }, []);
  useEffect(() => {
    getFriendsList();
  }, [0]);
  return (
    <div style={{ display: "flex" }}>
      <div onClick={runFunc} className="fsidebar-mobile">
        <ArrowForwardIcon style={{ color: "white" }} fontSize="large" />
      </div>

      <div className="">
        <nav
          ref={fsidebar}
          className={`fsidebar ${!matches1500 && "close"} ${
            !matches1300 && "hide"
          }
    `}
        >
          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links">
                {friends?.map((el) => (
                  <Link
                    key={el._id}
                    className="move-to-friend-profile"
                    to={`/friend-profile/${el.to_user?._id}`}
                  >
                    <UserCard title={el.to_user?.name} key={el.to_user._id} />
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default FreindsSidebar;
