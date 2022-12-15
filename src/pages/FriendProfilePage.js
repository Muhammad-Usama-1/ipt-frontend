import React, { useCallback, useEffect, useState } from "react";

import data from "../assets/posts.json";
import FriendsPhotoCard from "../components/cards/FriendsPhotoCard";
import Layout from "../components/Layout";
import PhotosCard from "../components/cards/PhotosCard";
import Post from "../components/cards/PostCard";
import UserAbout from "../components/cards/UserAboutCard";
import UserBanner from "../components/cards/UserDetailCard";

import "../styles/FriendProfileStyle.css";
import { useParams } from "react-router-dom";
import { client } from "../api/client";
import { toast } from "react-toastify";

function FriendProfileScreen() {
  const [friendprofile, setFriendprofile] = useState("");
  const [friendposts, setFriendposts] = useState([]);

  const params = useParams();
  // console.log(params); // 👉️ {userId: '4200'}
  const getFriendProfile = useCallback(async () => {
    try {
      const { data } = await client.get(`/users/${params.userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setFriendprofile(data.data.data);
      console.log(data.data.data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  }, [params]);
  const getFriendPosts = useCallback(async () => {
    try {
      const { data } = await client.get(`/posts/${params.userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      // setFriendprofile(data.data.data);
      setFriendposts(data.data);
      console.log(data.data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  }, [params]);
  useEffect(() => {
    getFriendProfile();
    getFriendPosts();
  }, [getFriendProfile]);
  return (
    <Layout>
      <div className="content-friendprofile">
        <UserBanner
          posts={friendposts}
          imageUri={friendprofile.photo}
          title={friendprofile.name}
        />
        <div className="timeline-box">
          <div>
            <UserAbout />
            <PhotosCard />
            {/* <FriendsPhotoCard /> */}
          </div>
          <div>
            <div className="posts">
              {/* {data.map((post, i) => (
                <Post
                  key={i}
                  videoUrl={post.videoUrl}
                  comments={post.comments}
                  images={post.images}
                  user={post.user}
                  like={post.like}
                />
              ))} */}
              {friendposts.map((post) => (
                <Post
                  post={post}
                  key={post._id}
                  images={post.images}
                  user={post?.user_id}
                  like={post.like}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FriendProfileScreen;
