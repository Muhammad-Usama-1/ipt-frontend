import React from "react";

import EventCard from "../components/cards/ProfileEventCard";
import Layout from "../components/Layout";
import PageHeader from "../components/cards/PageHeaderCard";

import "../styles/profileEventStyle.css";

function ProfileEventScreen() {
  return (
    <Layout>
      <div className="content-media">
        <PageHeader title={"Your Events"} />
        <div className="events-cards">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </Layout>
  );
}

export default ProfileEventScreen;
