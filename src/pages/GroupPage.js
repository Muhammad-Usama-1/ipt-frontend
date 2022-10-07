import React from "react";

import GroupCard from "../components/cards/GroupCard";
import Layout from "../components/Layout";
import PageHeader from "../components/cards/PageHeaderCard";

import "../styles/GroupScreenStyle.css";
function GroupScreen() {
  return (
    <Layout>
      <div className="content-group">
        <PageHeader title="Group Screen" />
        <div className="groups-cards">
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </div>
      </div>
    </Layout>
  );
}

export default GroupScreen;
