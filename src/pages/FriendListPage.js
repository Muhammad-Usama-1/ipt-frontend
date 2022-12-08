import React, { useCallback, useEffect, useState } from "react";

import FriendCard from "../components/cards/FriendCard";
import Layout from "../components/Layout";
import PageHeader from "../components/cards/PageHeaderCard";

import "../styles/friendListStyle.css";
import { client } from "../api/client";
import { toast } from "react-toastify";
function FriendListScreen() {
  const [friends, setFriends] = useState([]);
  const getFriendsList = useCallback(async () => {
    try {
      const { data } = await client.get("/users/friends", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data.data);
      setFriends(data.data);

      // console.log(data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  }, []);
  useEffect(() => {
    getFriendsList();
  }, [0]);
  return (
    <Layout>
      <div className="content-friendlist">
        <PageHeader title="Friend List Screen" />
        <div className="friendlist-cards">
          {friends.map((el) => (
            <FriendCard el={el} />
          ))}
          {/* <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard /> */}
        </div>
      </div>
    </Layout>
  );
}

export default FriendListScreen;
