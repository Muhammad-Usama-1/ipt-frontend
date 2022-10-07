import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import StarsIcon from "@mui/icons-material/Stars";

import UserCard from "./cards/UserCard";
import "../styles/TabStyle.css";
import Post from "./cards/PostCard";
import data from "../assets/posts.json";
import PhotosCard from "./cards/PhotosCard";
// import FriendCard from "./FriendCard";
import FriendsPhotoCard from "./cards/FriendsPhotoCard";
function Tab() {
  const [toggle, setToggle] = useState(2);
  const [inToggle, setInToggle] = useState(1);
  return (
    <>
      <div className="tab-btns">
        <button
          onClick={() => setToggle(1)}
          className={toggle === 1 ? "tab-btn-active" : null}
        >
          Timeline
        </button>
        <button
          onClick={() => setToggle(2)}
          className={toggle === 2 ? "tab-btn-active" : null}
        >
          About
        </button>
        <button
          onClick={() => setToggle(3)}
          className={toggle === 3 ? "tab-btn-active" : null}
        >
          Friends
        </button>
        <button
          onClick={() => setToggle(4)}
          className={toggle === 4 ? "tab-btn-active" : null}
        >
          Photos
        </button>
      </div>
      <div
        className={toggle === 1 ? "content-active-timeline" : "content-hidden"}
      >
        <div style={{ backgroundColor: "none" }}>
          {/* TIMELINE SECTION START */}
          <div className="tabtimeline-box">
            <div className="event-box">
              <div className="timeline--offer">
                <StarsIcon />
                <p>27 Offers for you</p>
              </div>
              <div className="live-event">
                <div className="live-event--title">
                  <h3>Life Event </h3>
                  <button>create</button>
                </div>

                <div className="live-event-description">
                  <img
                    className="live-event--image"
                    src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/07.9230e6d0.jpg"
                    alt=""
                  />
                  <p className="live-event-description-title">
                    Started new job
                  </p>
                  <p>january 24 2022</p>
                </div>
                <div className="live-event-description">
                  <img
                    className="live-event--image"
                    src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/07.9230e6d0.jpg"
                    alt=""
                  />
                  <p className="live-event-description-title">
                    Started new job
                  </p>
                  <p>january 24 2022</p>
                </div>
              </div>
              <PhotosCard />
              {/* =========== */}
              <FriendsPhotoCard />
            </div>
            <div className="posts">
              {data.map((post) => (
                <Post
                  key={post.user.title}
                  videoUrl={post.videoUrl}
                  comments={post.comments}
                  images={post.images}
                  user={post.user}
                  like={post.like}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={toggle === 2 ? "content-active" : "content-hidden"}>
        <div className="tab-about">
          <div className="tab-about-btns">
            <button
              onClick={() => setInToggle(1)}
              className={
                inToggle === 1 ? "tab-about-btn-active" : "tab-about-btn"
              }
            >
              contact and basic info
            </button>
            <button
              onClick={() => setInToggle(2)}
              className={
                inToggle === 2 ? "tab-about-btn-active" : "tab-about-btn"
              }
            >
              Family and relationship
            </button>
            <button
              onClick={() => setInToggle(3)}
              className={
                inToggle === 3 ? "tab-about-btn-active" : "tab-about-btn"
              }
            >
              work and education
            </button>
            <button
              onClick={() => setInToggle(4)}
              className={
                inToggle === 4 ? "tab-about-btn-active" : "tab-about-btn"
              }
            >
              Place you have lived
            </button>
            <button
              onClick={() => setInToggle(5)}
              className={
                inToggle === 5 ? "tab-about-btn-active" : "tab-about-btn"
              }
            >
              Details about you
            </button>
          </div>
          <div
            className={inToggle === 1 ? "inner-tab-active" : "inner-tab-hidden"}
          >
            <div className="inner-content-box">
              <h4>Contact information</h4>
              <hr className="margin-line" />
              <div>
                <div className="box">
                  <p>Email</p>
                  <p>mdusama225@gmail.com</p>
                </div>
                <div className="box">
                  <p>Mobile</p>
                  <p>03402306855</p>
                </div>
                <div className="box">
                  <p>Address</p>
                  <p>Asia , Pakistan (Islamic country) </p>
                </div>
              </div>
              {/* ---------------------- */}
              <h4>Website and social links</h4>
              <hr className="margin-line" />
              <div>
                <div className="box">
                  <p>Website</p>
                  <p>usama-portfolio.netlify.app</p>
                </div>
                <div className="box">
                  <p>social </p>
                  <p>www.github.com/muhammad-usama-1</p>
                </div>
              </div>
              {/* ---------------------- */}
              <h4>Basic information</h4>
              <hr className="margin-line" />
              <div>
                <div className="box">
                  <p>Birth Date</p>
                  <p>24 january</p>
                </div>
                <div className="box">
                  <p>Birthyear</p>
                  <p>1999</p>
                </div>
                <div className="box">
                  <p>Gender</p>
                  <p>Male</p>
                </div>
                <div className="box">
                  <p>internseted in</p>
                  <p>Designing</p>
                </div>
                <div className="box">
                  <p>language</p>
                  <p>English, Japenense</p>
                </div>
              </div>
              {/* ---------------------- */}
            </div>
          </div>
          <div
            className={inToggle === 2 ? "inner-tab-active" : "inner-tab-hidden"}
          >
            <div className="inner-content-box">
              <h4 style={{ marginBottom: "10px" }}>Relationship</h4>
              <div style={{ display: "flex" }}>
                <p>+</p>
                <p>Add your relationship status</p>
              </div>
              <h4 style={{ marginBottom: "10px" }}>Family Members</h4>
              <div style={{ display: "flex" }}>
                <p>+</p>
                <p>Add family members</p>
              </div>
              <div>
                <div className="tab-relation-user-box">
                  <UserCard />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>Edit</span>
                    <SearchIcon />
                  </div>
                </div>
                <div className="tab-relation-user-box">
                  <UserCard />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>Edit</span>
                    <SearchIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={inToggle === 3 ? "inner-tab-active" : "inner-tab-hidden"}
          >
            <div className="inner-content-box">
              <h4 style={{ marginBottom: "10px" }}>Work</h4>
              <div style={{ display: "flex" }}>
                <p>+</p>
                <p>Add your workplace</p>
              </div>
              <div>
                <div className="tab-relation-user-box">
                  <UserCard />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>Edit</span>
                    <SearchIcon />
                  </div>
                </div>
                <div className="tab-relation-user-box">
                  <UserCard />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>Edit</span>
                    <SearchIcon />
                  </div>
                </div>
              </div>
              <h4 style={{ marginBottom: "10px" }}>Professional skills</h4>
              <div style={{ display: "flex" }}>
                <p>+</p>
                <p>Add Professional skills</p>
              </div>
              <h4 style={{ marginBottom: "10px" }}>college</h4>
              <div style={{ display: "flex" }}>
                <p>+</p>
                <p>Add college</p>
              </div>
              <div>
                <div className="tab-relation-user-box">
                  <UserCard />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>Edit</span>
                    <SearchIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={inToggle === 4 ? "inner-tab-active" : "inner-tab-hidden"}
          >
            <div className="inner-content-box">
              <h4>Current city and home town</h4>
              <div>
                <div className="tab-relation-user-box">
                  <UserCard />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>Edit</span>
                    <SearchIcon />
                  </div>
                </div>
                <div className="tab-relation-user-box">
                  <UserCard />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>Edit</span>
                    <SearchIcon />
                  </div>
                </div>
              </div>
              <h4 style={{ marginBottom: "10px" }}>Other place lived</h4>
              <div style={{ display: "flex" }}>
                <p>+</p>
                <p>Add palace</p>
              </div>
            </div>
          </div>
          <div
            className={inToggle === 5 ? "inner-tab-active" : "inner-tab-hidden"}
          >
            <div className="inner-content-box">
              <h4 style={{ marginBottom: "20px" }}> About You</h4>
              <p style={{ marginBottom: "20px" }}>
                Hi i am Usama i have been designing and coding for 1 years{" "}
              </p>
              <h4 style={{ marginBottom: "20px" }}>Others name</h4>

              <p style={{ marginBottom: "20px" }}>Bini Rock</p>
              <h4 style={{ marginBottom: "20px" }}>Favourite qqoutes</h4>

              <p style={{ marginBottom: "20px" }}>
                Your time is limited, so don't waste it living someone else's
                life. ..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={toggle === 3 ? "content-active" : "content-hidden"}>
        <div className="content-active-box">
          <h1>Friends </h1>
          <div className="tab-friendsbtn-container">
            <button>All friends</button>
            <button>Recently Added</button>
            <button>Close friends</button>
            <button>Home /town</button>
            <button>Following</button>
          </div>
          <div className="friendsCard-container">
            <div className="tab-friendCard">
              <img
                src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
                alt=""
              />
              <div>
                <p>Petey Curiser</p>
                <span>15 Friends</span>
              </div>
              <button style={{ marginLeft: "auto" }}>Friends</button>
            </div>
            <div className="tab-friendCard">
              <img
                src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
                alt=""
              />
              <div>
                <p>Petey Curiser</p>
                <span>15 Friends</span>
              </div>
              <button style={{ marginLeft: "auto" }}>Friends</button>
            </div>
            <div className="tab-friendCard">
              <img
                src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
                alt=""
              />
              <div>
                <p>Petey Curiser</p>
                <span>15 Friends</span>
              </div>
              <button style={{ marginLeft: "auto" }}>Friends</button>
            </div>
            <div className="tab-friendCard">
              <img
                src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
                alt=""
              />
              <div>
                <p>Petey Curiser</p>
                <span>15 Friends</span>
              </div>
              <button style={{ marginLeft: "auto" }}>Friends</button>
            </div>
            <div className="tab-friendCard">
              <img
                src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
                alt=""
              />
              <div>
                <p>Petey Curiser</p>
                <span>15 Friends</span>
              </div>
              <button style={{ marginLeft: "auto" }}>Friends</button>
            </div>
            <div className="tab-friendCard">
              <img
                src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/05.803eaf62.jpg"
                alt=""
              />
              <div>
                <p>Petey Curiser</p>
                <span>15 Friends</span>
              </div>
              <button style={{ marginLeft: "auto" }}>Friends</button>
            </div>
          </div>
        </div>
      </div>
      <div className={toggle === 4 ? "content-active" : "content-hidden"}>
        <div className="content-active-box">
          <h3 className="tab-heading">Photos</h3>
          <div>
            <button className="btn">photos of you</button>
            <button className="btn">your photos</button>
          </div>
          <div className="tab-photo-section">
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/59.9cbeb915.jpg"
              alt=""
            />
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/54.d81af111.jpg"
              alt=""
            />
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/57.0cd71def.jpg"
              alt=""
            />
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/53.e97dd35c.jpg"
              alt=""
            />
            <img
              src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/53.e97dd35c.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab;
