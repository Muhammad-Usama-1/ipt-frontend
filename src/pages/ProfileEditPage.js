import React from "react";
import Layout from "../components/Layout";
import ProfileEditTab from "../components/ProfileEditTab";

function ProfileEditPage() {
  // We might have redux here for simplicity, but i dont have time or want       to do it now
  // const [files, setFiles] = useState("");
  return (
    <Layout>
      <ProfileEditTab />
    </Layout>
  );
}

export default ProfileEditPage;
