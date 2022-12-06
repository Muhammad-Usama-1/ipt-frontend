import React, { useState } from "react";

import Layout from "../components/Layout";
import Tab from "../components/Tab";
import UserBanner from "../components/cards/UserDetailCard";

import "../styles/ProfileScreenStyle.css";
function ProfileScreen() {
  // const [files, setFiles] = useState("");
  return (
    <Layout>
      <div className="content-profile">
        <UserBanner />
        <Tab />
      </div>
    </Layout>
  );
}

export default ProfileScreen;
