import React, { useContext, useEffect, useState } from "react";

import Layout from "../components/Layout";
import Tab from "../components/Tab";
import UserBanner from "../components/cards/UserDetailCard";

import "../styles/ProfileScreenStyle.css";
import { client } from "../api/client";
import { toast } from "react-toastify";
import UserContext from "../context/userContext";
function ProfileScreen() {
  const [posts, setPosts] = useState([]);
  const { _, user } = useContext(UserContext);

  const getUserPost = async () => {
    try {
      const { data } = await client.get("/posts", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data.data);
      setPosts(data.data);
      console.log(posts.length);
      // setFriends(data.data);

      // console.log(data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  };
  useEffect(() => {
    getUserPost();
  }, []);

  // const [files, setFiles] = useState("");
  return (
    <Layout>
      <div className="content-profile">
        <UserBanner title={user.name} posts={posts} />
        <Tab posts={posts} />
      </div>
    </Layout>
  );
}

export default ProfileScreen;
