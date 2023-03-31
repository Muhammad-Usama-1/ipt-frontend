import React, { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";

// import data from "../assets/posts.json";
import Post from "../components/cards/PostCard";
import Layout from "../components/Layout";
import VerticalContent from "../components/VerticalContent";
import ProtectedRoute from "../Router/ProtectedRoute";
// import UserContext from "../context/userContext";
import { client } from "../api/client";
import { Box } from "@mui/system";
// import AddIcon from "@mui/icons-material/Add";
// import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const style = {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // width: 500,
  // height: 500,
  bgcolor: "#fff",
  // border: "2px solid #469AD9",
  // boxShadow: 24,
  p: 4,
};
function FeedScreen() {
  const navigate = useNavigate();
  const [feeds, setFeeds] = useState([]);
  const [files, setFiles] = useState("");
  const [text, setText] = useState("");

  const upload = (e) => {
    if (e.target.files) {
      setFiles(e.target.files[0]);
    }
  };

  const handlecreatePost = async () => {
    // Form for miltipart-data
    try {
      const form = new FormData();
      // Append form data
      form.append("photo", files);
      form.append("text", text);

      // make an api call to create a post in db
      await client.post("/posts", form, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      // show success message on post upload
      toast.success("Post Succecfully created");
      setText("");
      navigate("/feed");

      // Close the modal
    } catch ({ response }) {
      // Catch unwanted 400-499 error
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  };

  const getFeeds = useCallback(async () => {
    try {
      const { data } = await client.get("/posts/feeds", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setFeeds(data.data);
      // console.log(data.data);
    } catch (error) {
      console.log(error.response);
    }
  }, []);
  useEffect(() => {
    getFeeds();
  }, [getFeeds]);
  // const { setUser, user } = useContext(UserContext);
  // console.log("---------->", user);
  const matches990 = useMediaQuery("(min-width:990px)");
  const matches680 = useMediaQuery("(min-width:680px)");

  return (
    <ProtectedRoute>
      <Layout>
        <div
          className={`content ${!matches990 ? "content-990" : null}
  ${!matches680 ? "content-680" : null}
  `}
        >
          <div className="posts">
            {feeds.length === 0 ? <h1>No post in DB currently</h1> : null}
            {!feeds ? <h1>Loading</h1> : null}
            <div className="create-your-post">
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Create Your Post, And Build your Audeince
                </Typography>

                <textarea
                  className="text-area-in-feed"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  cols={55}
                  rows={11}
                  placeholder="Write something"
                ></textarea>
                <input
                  type="file"
                  accept="image/*"
                  id="photo"
                  name="photo"
                  onChange={upload}
                />

                <button onClick={handlecreatePost} className="create-post-btn">
                  Post Now
                </button>
              </Box>
            </div>
            {feeds.map((el) => (
              <Post
                key={el._id}
                // videoUrl={post.videoUrl}
                // comments={post.comments}
                // images={post.images}
                // user={post.user}
                // like={post.like}
                post={el}
              />
            ))}
          </div>

          {matches990 && <VerticalContent />}
        </div>
      </Layout>
    </ProtectedRoute>
  );
}

export default FeedScreen;
