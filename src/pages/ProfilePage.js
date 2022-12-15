import React, { useContext, useEffect, useState } from "react";

import Layout from "../components/Layout";
import Tab from "../components/Tab";
import UserBanner from "../components/cards/UserDetailCard";

import "../styles/ProfileScreenStyle.css";
import { client } from "../api/client";
import { toast } from "react-toastify";
import UserContext from "../context/userContext";
import FriendContext from "../context/friendContext";
function ProfileScreen() {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { friends } = useContext(FriendContext);
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

  const getUserPhoto = async () => {
    try {
      const { data } = await client.get("/users/my-photo", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // headers: { Authorization: `Bearer ${token}` },
      });
      // console.log("PHTO-->", data.data.photos);
      setPhotos(data.data.photos);
      // setPosts(data.data);
      // console.log(posts.length);
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
    getUserPhoto();
  }, []);

  // const [files, setFiles] = useState("");
  return (
    <Layout>
      <div className="content-profile">
        <UserBanner title={user.name} posts={posts} />
        <Tab photos={photos} posts={posts} friends={friends} />
      </div>
    </Layout>
  );
}

export default ProfileScreen;
