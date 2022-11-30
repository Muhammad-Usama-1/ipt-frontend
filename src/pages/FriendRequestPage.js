import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import UserCard from "../components/cards/UserCard";
import "../styles/FriendRequestStyle.css";
import { client } from "../api/client";
import { toast } from "react-toastify";

function FriendRequestScreen() {
  const [friends, setFriends] = useState([]);
  const getUserList = async () => {
    try {
      const { data } = await client.get("/users");
      console.log(data.data.data);
      setFriends(data.data.data);
      // localStorage.setItem("token", data.token);
      // setUser(data.data);
      // setUser(...user, data.data?.posts);
      // navigate("/feed");
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  };

  useEffect(() => {
    getUserList();
  }, [0]);
  return (
    <Layout>
      <div className="content-media">
        <div className="friend-request-container">
          <p className="poppins subtitle">Friends Request</p>
          <div className="friend-reqest-card">
            <UserCard title="Zohaib Khan" subTitle="50 Friends" />
            <div className="reqest-action--btns">
              <button className="primary-btn">Confirm</button>
              <button className="secondary-btn">Delete</button>
            </div>
          </div>
          <div className="friend-reqest-card">
            <UserCard
              title="Rahat Ali"
              image="https://images.unsplash.com/photo-1647456757917-ea444a2b703b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              subTitle="0 Friends"
            />
            <div className="reqest-action--btns">
              <button className="primary-btn">Confirm</button>
              <button className="secondary-btn">Delete</button>
            </div>
          </div>
          <div className="friend-reqest-card">
            <UserCard
              title="Hafeez"
              image="https://images.unsplash.com/photo-1647456757917-ea444a2b703b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              subTitle="1k+ Friends"
            />
            <div className="reqest-action--btns">
              <button className="primary-btn">Confirm</button>
              <button className="secondary-btn">Delete</button>
            </div>
          </div>
        </div>
        {/* ----------------------------------------- */}

        {/*Adding Freind  section */}

        <div className="friend-request-container">
          <p className="poppins subtitle">People You may know</p>
          {friends.map((el) => (
            <div id={el._id} className="friend-reqest-card">
              <UserCard title={el?.name} subTitle="50 Friends" />
              <div className="reqest-action--btns">
                <button className="primary-btn">Add friend</button>
                <button className="secondary-btn">Remove</button>
              </div>
            </div>
          ))}
          <div className="friend-reqest-card">
            <UserCard title="Zohaib Khan" subTitle="50 Friends" />
            <div className="reqest-action--btns">
              <button className="primary-btn">Add friend</button>
              <button className="secondary-btn">Remove</button>
            </div>
          </div>
          <div className="friend-reqest-card">
            <UserCard
              title="Rahat Ali"
              image="https://images.unsplash.com/photo-1647456757917-ea444a2b703b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              subTitle="0 Friends"
            />
            <div className="reqest-action--btns">
              <button className="primary-btn">Add friend</button>
              <button className="secondary-btn">Remove</button>
            </div>
          </div>
          <div className="friend-reqest-card">
            <UserCard
              title="Hafeez"
              image="https://images.unsplash.com/photo-1647456757917-ea444a2b703b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              subTitle="1k+ Friends"
            />
            <div className="reqest-action--btns">
              <button className="primary-btn">Add friend</button>
              <button className="secondary-btn">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FriendRequestScreen;
