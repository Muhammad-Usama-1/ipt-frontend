import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import Layout from "../components/Layout";
import UserCard from "../components/cards/UserCard";
import "../styles/FriendRequestStyle.css";
import { client } from "../api/client";
import { toast } from "react-toastify";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

function FriendRequestScreen() {
  // const abx = useParams();
  // console.log(abx);
  const [peopleUmayKnow, setPeopleUmayKnow] = useState([]);
  const [friendsRequest, setFriendsRequest] = useState([]);
  // const [peoples, setPeoples] = useState([]);
  let tempPeopleUmayKnow;
  const getfriendsRequest = useCallback(async () => {
    try {
      const { data } = await client.get("/users/friendsRequest");
      // set newly Friends Request data
      setFriendsRequest(data.data.data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  }, []);
  const getUserList = useCallback(async () => {
    // try {
    const { data } = await client.get("/users");
    // setPeopleUmayKnow(data.data.data);
    const friendsRequestArray = friendsRequest.map((val) => val.to_user?._id);
    tempPeopleUmayKnow = data.data.data.filter(
      (val) => !friendsRequestArray.includes(val._id)
    );

    // Set People you may know
    setPeopleUmayKnow(tempPeopleUmayKnow);
    console.log("People you may know ", peopleUmayKnow);
    // console.log("Friend Requests   ", friendsRequest);

    // console.log("Friend Request", friendsRequest);
    // } catch ({ response }) {
    //   if (response && response.status >= 400 && response.status < 500) {
    //     console.log(response.data.message);
    //     toast.error(response.data.message);
    //   }
    // }
  }, []);
  // const
  const sendFriendRequest = async (id) => {
    console.log("sending frined request..");
    try {
      const { data } = await client.post("/users/addFriend", { to_user: id });
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  };

  const confirmFriendRequest = async (id, name) => {
    console.log("Will confirm friend request....", id);
    try {
      const { data } = await client.post("/users/confirmFriendsRequest", {
        id: id,
      });
      if (data.status === "Success")
        toast.success(`Nice , ${name} is your friend now `);
      console.log(data);
    } catch ({ response }) {
      if (response && response.status >= 400 && response.status < 500) {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    }
  };
  // useCallback(  , peopleUmayKnow)

  useEffect(() => {
    getfriendsRequest();
    getUserList();
  }, []);
  return (
    <Layout>
      <div className="content-media">
        <div className="friend-request-container">
          <p className="poppins subtitle">Friends Request</p>
          {/*Friends Request section  */}
          {friendsRequest.map((el) => {
            return (
              <div id={el._id} className="friend-reqest-card">
                <UserCard title={el.to_user?.name} subTitle="50 Friends" />
                <div className="reqest-action--btns">
                  <button
                    onClick={() =>
                      confirmFriendRequest(el._id, el.to_user?.name)
                    }
                    className="primary-btn"
                  >
                    Confirm
                  </button>
                  <button className="secondary-btn">Delete</button>
                </div>
              </div>
            );
          })}
        </div>
        {/* ----------------------------------------- */}
        {/*People U may know  section */}

        <div className="friend-request-container">
          <p className="poppins subtitle">People You may know</p>
          {peopleUmayKnow.map((el) => (
            <div id={el._id} className="friend-reqest-card">
              <UserCard title={el?.name} subTitle="50 Friends" />
              <div className="reqest-action--btns">
                <button
                  onClick={() => sendFriendRequest(el._id)}
                  className="primary-btn"
                >
                  Add friend
                </button>
                <button className="secondary-btn">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default FriendRequestScreen;
