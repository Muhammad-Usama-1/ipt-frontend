import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import UserCard from "../components/cards/UserCard";
import "../styles/FriendRequestStyle.css";
import { client } from "../api/client";
import { toast } from "react-toastify";

function FriendRequestScreen() {
  const [friends, setFriends] = useState([]);
  const [friendsRequest, setFriendsRequest] = useState([]);
  const getfriendsRequest = async () => {
    try {
      const { data } = await client.get("/users/friendsRequest");
      // console.log(data.data.data);
      setFriendsRequest(data.data.data);

      // console.log(myarr);
      // setFriends(
      //   friends.filter((el, i) => el._id !== friendsRequest[i].to_user._id)
      // );
      const myArr = friends.filter((el, i) => {
        console.log(friendsRequest[i].to_user._id, el._id);
        return true;
      });
      console.log("my array", myArr);
      // setFriends(() =>
      //   friends.filter((el, i) => el._id !== friendsRequest[i].to_user._id)
      // );
      setFriends(myArr);

      // console.log("my arra", myarr);
      // const arr = friends.forEach(
      //   (el, i) => el._id === friendsRequest[i].to_user._id
      // );

      console.log("new recomendations", friends);
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
  const sendFriendRequest = async (id) => {
    console.log("sending frined request..");
    try {
      // e.preventDefault();
      const { data } = await client.post("/users/addFriend", { to_user: id });
      console.log(data);
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
    getfriendsRequest();
  }, [0]);
  return (
    <Layout>
      <div className="content-media">
        <div className="friend-request-container">
          <p className="poppins subtitle">Friends Request</p>
          {friendsRequest.map((el) => {
            console.log(el.from_user.name);
            return (
              <div id={el._id} className="friend-reqest-card">
                <UserCard title={el.to_user.name} subTitle="50 Friends" />
                <div className="reqest-action--btns">
                  <button className="primary-btn">Confirm</button>
                  <button className="secondary-btn">Delete</button>
                </div>
              </div>
            );
          })}
          {/* <div className="friend-reqest-card">
            <UserCard title="Zohaib Khan" subTitle="50 Friends" />
            <div className="reqest-action--btns">
              <button className="primary-btn">Confirm</button>
              <button className="secondary-btn">Delete</button>
            </div>
          </div> */}
        </div>
        {/* ----------------------------------------- */}

        {/*Adding Freind  section */}

        <div className="friend-request-container">
          <p className="poppins subtitle">People You may know</p>
          {friends.map((el) => (
            <div id={el._id} className="friend-reqest-card">
              <UserCard title={el?.name} subTitle="50 Friends" />
              <div className="reqest-action--btns">
                <button
                  onClick={() => sendFriendRequest(el._id)}
                  className="primary-btn"
                >
                  Add friend
                </button>
                <button className="secondary-btn">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default FriendRequestScreen;
