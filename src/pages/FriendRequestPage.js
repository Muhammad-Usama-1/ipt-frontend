import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import UserCard from "../components/cards/UserCard";
import "../styles/FriendRequestStyle.css";
import { client } from "../api/client";
import { toast } from "react-toastify";

function FriendRequestScreen() {
  const [peopleUmayKnow, setPeopleUmayKnow] = useState([]);
  const [friendsRequest, setFriendsRequest] = useState([]);
  const getfriendsRequest = async () => {
    try {
      const { data } = await client.get("/users/friendsRequest");
      console.log(data);
      // set newly Friends Request data
      setFriendsRequest(data.data.data);
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

      setPeopleUmayKnow(data.data.data);
      const friendsRequestArray = friendsRequest.map((val) => val.to_user?._id);
      const tempPeopleUmayKnow = data.data.data.filter(
        (val) => !friendsRequestArray.includes(val._id)
      );
      // Set People U may know
      setPeopleUmayKnow(tempPeopleUmayKnow);
      console.log("People you may now", peopleUmayKnow);
      // console.log("Friend Request", friendsRequest);
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
    getfriendsRequest();
    getUserList();
  }, [0]);
  return (
    <Layout>
      <div className="content-media">
        <div className="friend-request-container">
          <p className="poppins subtitle">Friends Request</p>
          {/*Friends Request section  */}
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
        </div>
        {/* ----------------------------------------- */}
        {/*People U may know  section */}

        <div className="friend-request-container">
          <p className="poppins subtitle">People You may know</p>
          {peopleUmayKnow.map((el) => (
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
