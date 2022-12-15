import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { client } from "../api/client";

import Layout from "../components/Layout";
import UserCard from "../components/cards/UserCard";
import "../styles/FriendRequestStyle.css";
// import { useMemo } from "react";
// import { useParams } from "react-router-dom";

function FriendRequestScreen() {
  // const abx = useParams();
  // console.log(abx);
  const [peopleUmayKnow, setPeopleUmayKnow] = useState([]);
  const [friendsRequest, setFriendsRequest] = useState([]);
  let tempPeopleUmayKnow;
  const getfriendsRequest = async () => {
    try {
      const { data } = await client.get("/users/friendsRequest", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      // set newly Friends Request data
      // console.log(data.data.data);
      setFriendsRequest(data.data.data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  };
  const getUserList = async () => {
    // try {
    const { data } = await client.get("/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    // console.log(data.data);
    setPeopleUmayKnow(data.data);
    // console.log("Friend rquest ", friendsRequest[0].from_user._id);
    const friendsRequestArray = friendsRequest.map((val) => val.from_user._id);
    // console.log("Friend rquest ", friendsRequestArray);

    tempPeopleUmayKnow = data.data?.filter(
      (val) => !friendsRequestArray.includes(val._id)
    );

    console.log("temp", tempPeopleUmayKnow);

    // Set People you may know
    setPeopleUmayKnow(tempPeopleUmayKnow);
  };
  // const
  const sendFriendRequest = async (id) => {
    try {
      const { data } = await client.post(
        "/users/addFriend",
        { to_user: id },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  };

  const confirmFriendRequest = async (id, name) => {
    // console.log("Will confirm friend request....", id);
    try {
      const { data } = await client.post("/users/confirmFriendsRequest", {
        id: id,
      });
      if (data.status === "Success")
        toast.success(`Nice ,you have added new friend now `);
      console.log(data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  };
  // useCallback(  , peopleUmayKnow)

  useEffect(() => {
    getfriendsRequest();
    getUserList();
    document.title = " Request || Recomendation";
    return () => (document.title = "IPT | MERN APP");
  }, []);
  return (
    <Layout>
      <div className="content-media">
        <div className="friend-request-container">
          <p className="poppins subtitle">Friends Request</p>
          {/*Friends Request section  */}
          {friendsRequest.map((el) => {
            return (
              <div id={el._id} className="friend-reqest-card">
                <UserCard title={el.from_user?.name} subTitle="50 Friends" />
                <div className="reqest-action--btns">
                  <button
                    onClick={() =>
                      confirmFriendRequest(el._id, el.to_user?.name)
                    }
                    className="primary-btn"
                  >
                    Confirm
                  </button>
                  <button className="secondary-btn">Delete</button>
                </div>
              </div>
            );
          })}
        </div>

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
