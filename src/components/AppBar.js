import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Toolbar from "@mui/material/Toolbar";
import { useMediaQuery } from "@mui/material";

import SearchAppBar from "./AppSearchBar";
import UserCard from "./cards/UserCard";
import { Link } from "react-router-dom";

export default function ButtonAppBar({ sidebar }) {
  const [open, setOpen] = React.useState(false);
  const matches1300 = useMediaQuery("(min-width:1300px)");
  const matches990 = useMediaQuery("(min-width:990px)");
  const matchesmobile = useMediaQuery("(min-width:680px)");
  const toggle = React.useRef(null);
  const runFunc = () => {
    if (!matches1300) {
      sidebar.current.classList.toggle("show");
      sidebar.current.classList.toggle("close");
      return;
    }
    console.log("Clicked..");
    sidebar.current.classList.toggle("close");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className="app-bar">
          <header className="appbar--header">
            <Link to={"/"}>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </Link>
            <p>SocialV</p>

            <MenuIcon
              style={{ marginLeft: 10 }}
              className="toggle"
              onClick={runFunc}
              ref={toggle}
            />
          </header>
          {matchesmobile && <SearchAppBar />}

          {matches990 ? (
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
              <UserCard title="Usama" subTitle={false} />
            </div>
          ) : (
            <LibraryBooksIcon
              style={{ color: "#00b4cc" }}
              onClick={() => setOpen(!open)}
            />
          )}
        </Toolbar>
      </AppBar>
      {open && !matches990 && (
        <div
          style={{ backgroundColor: "#fff" }}
          className="flex-x transform fullwidth align-left"
        >
          <LocalPostOfficeOutlinedIcon
            style={{ marginLeft: 10, color: "#00b4cc" }}
          />
          <NotificationsNoneOutlinedIcon
            style={{ marginLeft: 10, color: "#00b4cc" }}
          />
          <PeopleOutlinedIcon style={{ marginLeft: 10, color: "#00b4cc" }} />
          <HomeOutlinedIcon style={{ marginLeft: 10, color: "#00b4cc" }} />
          <UserCard title="Usama" subTitle={false} />
        </div>
      )}
    </Box>
  );
}
