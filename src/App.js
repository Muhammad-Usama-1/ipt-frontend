import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import UserContext from "./context/userContext";
import PublicRoute from "./Router/PublicRoute";
// import ProtectedRoutes from "./Router/PrivateRoute";

function App() {
  const [user, setUser] = useState("");

  // const navigate = useNavigate();

  const getUser = async () => {
    try {
      // Get Token from Localstorage
      // if there is token get my profile detais and set it to user
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // getUser();
  }, [0]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="signup" element={<SignupPage />} />
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
          <Route
            path="friend-profile/:userId"
            element={<FriendProfilePage />}
          />
          <Route path="group" element={<GroupPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
// Create Post and show in to my profile
// Create a signup functionality, edit profile function
// change password functionality
// userfeed functionality
