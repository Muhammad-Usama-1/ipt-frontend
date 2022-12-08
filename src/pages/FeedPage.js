import React, { useCallback, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import data from "../assets/posts.json";
import Post from "../components/cards/PostCard";
import Layout from "../components/Layout";
import VerticalContent from "../components/VerticalContent";
import ProtectedRoute from "../Router/ProtectedRoute";
import UserContext from "../context/userContext";
import { client } from "../api/client";

function FeedScreen({ setLoad }) {
  const [feeds, setFeeds] = useState([]);

  const getFeeds = useCallback(async () => {
    try {
      const { data } = await client.get("/posts/feeds", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setFeeds(data.data);
      console.log(data.data);
      setLoad(true);
      // Get Token from Localstorage
      // if there is token get my profile detais and set it to user
    } catch (error) {
      console.log(error.response);
    }
  }, []);
  useEffect(() => {
    getFeeds();
  }, [0]);
  const { setUser, user } = useContext(UserContext);
  console.log("---------->", user);
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
            {/* {data.map((post) => (
              <Post
                videoUrl={post.videoUrl}
                comments={post.comments}
                images={post.images}
                user={post.user}
                like={post.like}
              />
            ))} */}
            {feeds.map((el) => (
              <Post
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
