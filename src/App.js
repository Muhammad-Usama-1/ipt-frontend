import React, { useCallback, useEffect, useState } from "react";
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
import ChatPage from "./pages/ChatPage";
import { client } from "./api/client";
import MessageBody from "./components/MessageBody";
import FriendContext from "./context/friendContext";
import { useTokenHook } from "./hooks/UseToken";
// import ProtectedRoutes from "./Router/PrivateRoute";

function App() {
  const [user, setUser] = useState("");
  const [friends, setFriends] = useState([]);
  const [load, setLoad] = useState(false);
  const { saveData } = useTokenHook();
  // const navigate = useNavigate();

  const getUser = async () => {
    try {
      // Get Token from Localstorage
      const token = localStorage.getItem("token");
      if (!token) return;
      saveData(token);
      // if there is token get my profile detais and set it to user
      const { data } = await client.get("/users/my-profile");
      setUser(data.user);
      // If there is use then call myfrind API and set it to freinds context

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getFriendsList = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const { data } = await client.get("/users/friends", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const arr = data.data.map((el) => {
        if (el.from_user._id == user._id) {
          el["friend_name"] = el?.from_user?.name;
          el["friend_id"] = el?.from_user?._id;
          el["friend_photo"] = el?.from_user?.photo;
          delete el.from_user;
          delete el.to_user;
        } else {
          el["friend_name"] = el?.to_user?.name;
          el["friend_id"] = el?.to_user?._id;
          el["friend_photo"] = el?.to_user?.photo;
          delete el.from_user;
          delete el.to_user;
        }
        return el;
        // console.log(el.from_user);

        // Doing experminet in friend-context branch
      });
      console.log(arr);
      setFriends(arr);

      // console.log(data.data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response?.data?.message);
        // toast.error(response.data.message);
      }
    }
  }, []);
  useEffect(() => {
    getUser();
    getFriendsList();
  }, [0]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <FriendContext.Provider value={{ friends, setFriends }}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={!user ? <LoginPage /> : <FeedPage />} />
            {/* <Route path="/" element={<FeedPage />} /> */}

            <Route path="/chat" element={<ChatPage />}>
              <Route path=":id" element={<MessageBody />} />
            </Route>

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
      </FriendContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
// Create Post and show in to my profile
// Create a signup functionality, edit profile function
// change password functionality
// userfeed functionality
// BUG frinend list error page

// Photos of loged in user friend
