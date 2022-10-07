import React from "react";

import FriendCard from "../components/cards/FriendCard";
import Layout from "../components/Layout";
import PageHeader from "../components/cards/PageHeaderCard";

import "../styles/friendListStyle.css";
function FriendListScreen() {
  return (
    <Layout>
      <div className="content-friendlist">
        <PageHeader title="Friend List Screen" />
        <div className="friendlist-cards">
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
        </div>
      </div>
    </Layout>
  );
}

export default FriendListScreen;
