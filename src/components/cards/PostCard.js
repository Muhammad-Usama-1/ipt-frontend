import React from "react";
import UserCard from "./UserCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { Avatar, Divider, Menu, MenuItem } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LinkIcon from "@mui/icons-material/Link";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import EmededVideo from "../EmededVideo";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import "../../styles/PostStyle.css";
function Post({ videoUrl, images, user, comments, like }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="post">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <UserCard
          title={user?.title}
          cta={user?.cta}
          image={user?.photo}
          // cta={"Added new photo"}
        />
        <MoreHorizIcon
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          fontSize="large"
          // aria-expanded={open ? "true" : undefined}
        ></MoreHorizIcon>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "center", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          // anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          <MenuItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <div>
                <p>Save Post</p>
                <p>Add this to your saved item</p>
              </div>
            </div>
          </MenuItem>
          <Divider />

          <MenuItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <div>
                <p>Hide Post</p>
                <p>see fewer post like this</p>
              </div>
            </div>
          </MenuItem>
          <Divider />

          <MenuItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <div>
                <p>Unfollow User</p>
                <p>stop seeing post but stay friends</p>
              </div>
            </div>
          </MenuItem>
          <Divider />

          <MenuItem>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar />
              <div>
                <p>Notification</p>
                <p>turn on notification for this post</p>
              </div>
            </div>
          </MenuItem>
          <Divider />
        </Menu>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
          aspernatur expedita. Sit soluta, id repellat ut ullam laboriosam
          quidem vero.
        </p>
      </div>

      <div className="post-media">
        {videoUrl && <EmededVideo videoUrl={videoUrl} />}
        {!videoUrl && images && (
          <img className="post--img" src={images[0]} alt="" />
        )}
      </div>

      <div
        className="post-reaction"
        style={{ display: "flex", alignItems: "center" }}
      >
        <ThumbUpAltOutlinedIcon style={{ color: "#00b4cc", margin: 5 }} />
        <span> {like} Likes </span>
        <span>20 Comments</span>
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <ShareOutlinedIcon style={{ margin: 5 }} />
          <span>99 shares</span>
        </div>
      </div>
      <Divider />

      <div className="post-comment">
        <input
          placeholder="Enter your comment..."
          type="text"
          className="post-comment__input"
        />
        <div className="post-comment__icons-box" style={{ marginLeft: "auto" }}>
          <LinkIcon />
          <TagFacesIcon />
          <CameraAltIcon />
        </div>
      </div>
      <div className="posted-comments">
        {comments?.map((com, i) => (
          <UserCard
            key={i}
            title={com?.user?.name}
            createdAt="5 min"
            subTitle={com?.comment}
            image={com?.user?.photo}
          />
        ))}
        {/* <UserCard toComment={true} /> */}
        {/* <UserCard toComment={true} /> */}
      </div>
    </div>
  );
}

export default Post;
