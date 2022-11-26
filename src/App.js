import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

  const getUser = async () => {
    try {
      // setLoading(true);
      // const { data } = await client.get("/users/isLoggedIn");
      // console.log(token);
      // if (token)
      setUser({ name: "Usama" });
      console.log(user);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, [0]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="signup" element={<SignupPage />} />
          {/* <Route path="feed" element={<FeedPage />} /> */}
          <Route
            path="feed"
            element={
              <PublicRoute>
                <FeedPage />
              </PublicRoute>
            }
          />

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
          <Route path="login" element={<LoginPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
