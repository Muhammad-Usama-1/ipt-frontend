import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useMediaQuery } from "@mui/material";

import UserCard from "./cards/UserCard";
import "../styles/FriendsSidebar.css";

function FreindsSidebar({ fsidebar }) {
  // const matches = useMediaQuery("(min-width:980px)");
  // const matches990 = useMediaQuery("(min-width:990px)");

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
                <UserCard />
                <UserCard title="Mughees Khan" />
                <UserCard title="Mudassir Ahmed" subTitle="Moderator" />
                <UserCard title="Imran Ali" subTitle="Admin" />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default FreindsSidebar;
