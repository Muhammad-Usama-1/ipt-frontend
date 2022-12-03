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
  const params = useParams();
  // console.log(params); // 👉️ {userId: '4200'}
  const getFriendProfile = useCallback(async () => {
    try {
      const { data } = await client.get(`/users/${params.userId}`);
      setFriendprofile(data.data.data);

      console.log(data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  }, [params]);
  useEffect(() => {
    getFriendProfile();
  }, [getFriendProfile]);
  return (
    <Layout>
      <div className="content-friendprofile">
        <UserBanner title={friendprofile.name} />
        <div className="timeline-box">
          <div>
            <UserAbout />
            <PhotosCard />
            <FriendsPhotoCard />
          </div>
          <div>
            <div className="posts">
              {data.map((post, i) => (
                <Post
                  key={i}
                  videoUrl={post.videoUrl}
                  comments={post.comments}
                  images={post.images}
                  user={post.user}
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
