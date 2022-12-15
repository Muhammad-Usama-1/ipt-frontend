import React, { useContext } from "react";

import FriendCard from "../components/cards/FriendCard";
import Layout from "../components/Layout";
import PageHeader from "../components/cards/PageHeaderCard";

import "../styles/friendListStyle.css";

import FriendContext from "../context/friendContext";
function FriendListScreen() {
  const { friends, _ } = useContext(FriendContext);

  return (
    <Layout>
      <div className="content-friendlist">
        <PageHeader title="Friend List Screen" />
        <div className="friendlist-cards">
          {friends.map((el) => (
            <FriendCard el={el} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default FriendListScreen;
