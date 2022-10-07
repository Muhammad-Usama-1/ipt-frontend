import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ------------Styles ---------------------
import "./styles/golbalStyles.css";
import "./styles/FeedStyle.css";
import "./styles/layoutStyle.css";

// --------------Pages -------------------
import FeedPage from "./pages/FeedPage";
import FriendListPage from "./pages/FriendListPage";
import FriendProfilePage from "./pages/FriendProfilePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileVideoPage from "./pages/ProfileVideoPage";
import ProfilePhotoPage from "./pages/ProfilePhotoPage";
import ProfileEventPage from "./pages/ProfileEventPage";
import ProfileBadgePage from "./pages/ProfileBadgePage";
// import ProfileBadgePage from "./pages/";
import GroupPage from "./pages/GroupPage";
import NotificationPage from "./pages/NotificationPage";
import NotFound from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";
import FriendRequestPage from "./pages/FriendRequestPage";
import ProfileEditPage from "./pages/ProfileEditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="friend-request" element={<FriendRequestPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="profile-edit" element={<ProfileEditPage />} />
        <Route path="profile-image" element={<ProfilePhotoPage />} />
        <Route path="profile-badge" element={<ProfileBadgePage />} />
        <Route path="profile-event" element={<ProfileEventPage />} />
        <Route path="notification" element={<NotificationPage />} />
        <Route path="profile-video" element={<ProfileVideoPage />} />
        <Route path="friends" element={<FriendListPage />} />
        <Route path="friendprofile" element={<FriendProfilePage />} />
        <Route path="group" element={<GroupPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
