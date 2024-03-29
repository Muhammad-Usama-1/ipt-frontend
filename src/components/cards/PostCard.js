import React, { useContext, useState } from "react";
import UserCard from "./UserCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Avatar, Divider, Menu, MenuItem } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LinkIcon from "@mui/icons-material/Link";
import TagFacesIcon from "@mui/icons-material/TagFaces";
// import EmededVideo from "../EmededVideo";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import "../../styles/PostStyle.css";
import UserContext from "../../context/userContext";
import { client, Imageclient } from "../../api/client";
import { toast } from "react-toastify";
function Post({ videoUrl, images, comments, like, post }) {
  console.log(post);
  const { setUser, user } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [comment, setComment] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLike = async (postId) => {
    console.log(postId);

    // Call an API
    if (post?.likes?.includes(user._id)) {
      alert("you can not like twice");
      return;
    }
    try {
      const { data } = await client.post(
        "/posts/like",
        {
          postId,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  };
  const handleSubmitComment = async (e, postId) => {
    e.preventDefault();
    // console.log(comment, postId);
    try {
      const { data } = await client.post(
        "/posts/comment",
        {
          comment,
          postId,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(data.data);
      post.comments = data.data.comments;
      setComment("");
    } catch (error) {}
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
          title={post?.user_id?.name}
          // cta={user?.cta}
          image={user?.user_id?.photo}
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
        <p>{post?.text || "No text was there in the Post"} </p>
      </div>

      <div className="post-media">
        {/* {videoUrl && <EmededVideo videoUrl={videoUrl} />} */}

        {post?.photo ? (
          <img
            className="post--img"
            src={`${Imageclient}/posts/${post.photo}`}
            alt=""
          />
        ) : null}
      </div>

      <div
        className="post-reaction"
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* If already liked by the user filled icon */}
        {post.likes?.includes(user?._id) ? (
          <ThumbUpIcon
            className="like-btn"
            onClick={() =>
              alert(
                "Unlike feature is not implmented , its simple but i am affraid "
              )
            }
            style={{ color: "#00b4cc", margin: 5 }}
          />
        ) : (
          <ThumbUpAltOutlinedIcon
            className="like-btn"
            onClick={() => handleLike(post._id)}
            style={{ color: "#00b4cc", margin: 5 }}
          />
        )}
        {/* <ThumbUpAltOutlinedIcon
          className="like-btn"
          onClick={() => handleLike(post._id)}
          style={{ color: "#00b4cc", margin: 5 }}
        /> */}
        <span> {post?.likes?.length || "zero"} Likes </span>
        <span>20 Comments</span>
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <ShareOutlinedIcon style={{ margin: 5 }} />
          <span>99 shares</span>
        </div>
      </div>
      <Divider />

      <form
        onSubmit={(e) => handleSubmitComment(e, post._id)}
        className="post-comment"
      >
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment..."
          type="text"
          className="post-comment__input"
        />
        <div className="post-comment__icons-box" style={{ marginLeft: "auto" }}>
          <LinkIcon />
          <TagFacesIcon />
          <CameraAltIcon />
        </div>
      </form>
      <div className="posted-comments">
        {post.comments?.map((com, i) => (
          <UserCard
            key={com._id}
            title={com?.postedBy?.name}
            createdAt={` ${new Date(com?.createdAt).getMinutes()} min `}
            subTitle={com?.text}
            // image={com?.user?.photo}
          />
        ))}
        {/* <UserCard toComment={true} /> */}
        {/* <UserCard toComment={true} /> */}
      </div>
    </div>
  );
}

export default Post;
