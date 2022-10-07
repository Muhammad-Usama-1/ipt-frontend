import React from "react";
// import Search from "@mui/icons-material/Search";
import { useMediaQuery } from "@mui/material";

import "../styles/sidebarStyle.css";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ sidebar }) {
  const loc = useLocation();
  const handleNavigate = (pageName) => {
    if (!matchesmobile) {
      console.log("Clicked  occur on Mobile Size");
      sidebar.current.classList.toggle("show");
      sidebar.current.classList.toggle("close");

      // sidebar.
    }
  };
  const matches1300 = useMediaQuery("(min-width:1300px)");
  const matchesbig = useMediaQuery("(min-width:1500px)");
  const matchesmobile = useMediaQuery("(min-width:600px)");

  return (
    <nav
      ref={sidebar}
      className={`sidebar ${!matchesbig && "close"} ${!matches1300 && "hide"}
     
    `}
    >
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li onClick={() => handleNavigate("/")} className="nav-link">
              <Link
                className={loc.pathname === "/feed" ? "active" : null}
                to="/feed"
              >
                {/* <i className="bx bx-home-alt icon"></i> */}
                <i className="bx bx-news icon"></i>
                <span className="text nav-text">NewsFeed</span>
              </Link>
            </li>
            <li onClick={() => handleNavigate("/")} className="nav-link">
              <Link
                className={loc.pathname === "/profile" ? "active" : null}
                to="/profile"
              >
                {/* <i className="bx bx-home-alt icon"></i> */}
                {/* <i className="bx bx-user icon"></i> */}
                <i className="bx bx-user icon"></i>
                <span className="text nav-text">Profile</span>
              </Link>
            </li>
            <li onClick={() => handleNavigate("/")} className="nav-link">
              <Link
                className={loc.pathname === "/friends" ? "active" : null}
                to="/friends"
              >
                {/* <i className="bx bx-home-alt icon"></i> */}
                <i className="bx bx-user icon"></i>
                <span className="text nav-text">Friends List</span>
              </Link>
            </li>
            <li onClick={() => handleNavigate("/")} className="nav-link">
              <Link
                className={loc.pathname === "/friendprofile" ? "active" : null}
                to="/friendprofile"
              >
                {/* <i className="bx bx-home-alt icon"></i> */}
                <i className="bx bx-user icon"></i>

                <span className="text nav-text">Friends Profile</span>
              </Link>
            </li>
            <li onClick={() => handleNavigate("/")} className="nav-link">
              <Link
                className={loc.pathname === "/group" ? "active" : null}
                to="/group"
              >
                {/* <i className="bx bx-home-alt icon"></i> */}
                <i className="bx bx-group icon"></i>

                <span className="text nav-text">Groups</span>
              </Link>
            </li>
            <li onClick={() => handleNavigate("/")} className="nav-link">
              <Link
                className={loc.pathname === "/profile-image" ? "active" : null}
                to="/profile-image"
              >
                {/* <i className="bx bx-home-alt icon"></i> */}
                <i className="bx bx-image icon"></i>

                <span className="text nav-text">Profile Image</span>
              </Link>
            </li>
            <li onClick={() => handleNavigate("/")} className="nav-link">
              <Link
                className={loc.pathname === "/profile-video" ? "active" : null}
                to="/profile-video"
              >
                {/* <i className="bx bx-home-alt icon"></i> */}
                <i className="bx bx-video icon"></i>

                <span className="text nav-text">Profile Video</span>
              </Link>
            </li>
            <li onClick={() => handleNavigate("/")} className="nav-link">
              <Link
                className={loc.pathname === "/profile-event" ? "active" : null}
                to="/profile-event"
              >
                {/* <i className="bx bx-home-alt icon"></i> */}
                <i className="bx bx-user icon"></i>
                <span className="text nav-text">Profile Event</span>
              </Link>
            </li>
            <li onClick={() => handleNavigate("/")} className="nav-link">
              <Link
                className={loc.pathname === "/profile-badge" ? "active" : null}
                to="/profile-badge"
              >
                {/* <i className="bx bx-home-alt icon"></i> */}
                <i className="bx bx-user icon"></i>
                <span className="text nav-text">Profile Badges</span>
              </Link>
            </li>
            <li onClick={() => handleNavigate("/")} className="nav-link">
              <Link
                className={loc.pathname === "/notification" ? "active" : null}
                to="/notification"
              >
                {/* <i className="bx bx-home-alt icon"></i> */}
                <i className="bx bx-user icon"></i>
                <span className="text nav-text">Notifications</span>
              </Link>
            </li>
            <li onClick={() => handleNavigate("/")} className="nav-link">
              <Link
                className={loc.pathname === "/friend-request" ? "active" : null}
                to="/friend-request"
              >
                {/* <i className="bx bx-home-alt icon"></i> */}
                <i className="bx bx-user icon"></i>
                <span className="text nav-text">friend Requests</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
