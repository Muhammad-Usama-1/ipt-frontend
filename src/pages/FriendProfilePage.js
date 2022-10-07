import React from "react";

import data from "../assets/posts.json";
import FriendsPhotoCard from "../components/cards/FriendsPhotoCard";
import Layout from "../components/Layout";
import PhotosCard from "../components/cards/PhotosCard";
import Post from "../components/cards/PostCard";
import UserAbout from "../components/cards/UserAboutCard";
import UserBanner from "../components/cards/UserDetailCard";

import "../styles/FriendProfileStyle.css";

function FriendProfileScreen() {
  return (
    <Layout>
      <div className="content-friendprofile">
        <UserBanner />
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
