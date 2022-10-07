import React, { useState } from "react";
import "../styles/TabStyle.css";

function ProfileEditTab() {
  const [toggle, setToggle] = useState(1);
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    address: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = () => {
    console.log(inputs);
  };
  return (
    <div className="content-media">
      <>
        <div className="tab-btns">
          <button
            onClick={() => setToggle(1)}
            className={toggle === 1 ? "tab-btn-active" : null}
          >
            Personal Inforamation
          </button>
          <button
            onClick={() => setToggle(2)}
            className={toggle === 2 ? "tab-btn-active" : null}
          >
            Change Password
          </button>
          <button
            onClick={() => setToggle(3)}
            className={toggle === 3 ? "tab-btn-active" : null}
          >
            Emails And SMS
          </button>
          <button
            onClick={() => setToggle(4)}
            className={toggle === 4 ? "tab-btn-active" : null}
          >
            Manage Contacts
          </button>
        </div>
        <div className={toggle === 1 ? "content-active" : "content-hidden"}>
          <div className="content-active-box">
            <h3 className="tab-title">Personal Information</h3>
            <div className="profile-edit--form">
              <div className="app-input">
                <label htmlFor="firstname">First Name:</label>
                <input
                  id="firstname"
                  value={inputs?.firstname}
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={handleChange}
                />
              </div>
              <div className="app-input">
                <label htmlFor="lastname">Last Name:</label>
                <input
                  id="lastname"
                  value={inputs.lastname}
                  onChange={handleChange}
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <div className="app-input">
                <label htmlFor="username">User Name:</label>
                <input
                  id="username"
                  onChange={handleChange}
                  value={inputs.username}
                  type="text"
                  name="username"
                  placeholder="usama855"
                />
              </div>
              <div className="app-input">
                <label htmlFor="city">City:</label>
                <input
                  id="city"
                  value={inputs.city}
                  name="city"
                  onChange={handleChange}
                  type="text"
                  placeholder="Karachi"
                />
              </div>
              <div className="app-input">
                <label htmlFor="gender">Gender:</label>
                <div className="input-radio--btns">
                  <input
                    id="male"
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    value="Male"
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    id="female"
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                    value="Female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="app-input">
                <label htmlFor="dob">Date of Birth:</label>
                <input name="dob" type="date" onChange={handleChange} />
              </div>
              <div className="app-input">
                <label htmlFor="marital-status">Marital Status</label>
                <select
                  onChange={handleChange}
                  name="marital-status"
                  id="marital-status"
                  defaultValue={"single"}
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="widowed">Widowed</option>
                  <option value="divorced">Divorced</option>
                  <option value="seperated">Seperated</option>
                </select>
              </div>
              {/* --------------------------- */}
              <div className="app-input">
                <label htmlFor="age">Age:</label>
                <select
                  defaultValue={63}
                  onChange={handleChange}
                  name="age"
                  id="age"
                >
                  <option value={63}>63</option>
                  <option value="">42-11</option>
                </select>
              </div>

              <textarea
                className="textarea"
                name="address"
                id="address"
                onChange={handleChange}
                cols={100}
                rows={10}
                placeholder="Enter your Address"
              ></textarea>
              <div className="edit-form--btns">
                <button onClick={handleSubmit} className="primary-btn ">
                  Submit
                </button>
                <button className="primary-btn red-btn">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle === 2 ? "content-active" : "content-hidden"}>
          <div className="content-active-box">
            <h3 className="tab-title">Changed Password</h3>
            <div className="profile-edit--form">
              <div className="app-input-full">
                <label htmlFor="password">Current Password:</label>
                <input type="password" name="passowrd" />
              </div>
              <div className="app-input-full">
                <label htmlFor="newpassword">New Password:</label>
                <input type="password" name="newpassowrd" />
              </div>
              <div className="app-input-full">
                <label htmlFor="confirmpassword">Password Confirm:</label>
                <input type="password" name="confirmpassword" />
              </div>

              {/* --------------------------- */}

              <div className="edit-form--btns">
                <button className="primary-btn ">Submit</button>
                <button className="primary-btn red-btn">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle === 3 ? "content-active" : "content-hidden"}>
          <div className="content-active-box">
            <h3 className="tab-title">Manage Contacts</h3>
            <div className="profile-edit--policy">
              <div className="policy">
                <p>Email Notification</p>
                <input id="email-notify" name="" type="checkbox" />
                <label htmlFor="email-notify">
                  Checked switch checkbox input
                </label>
              </div>
              <div className="policy">
                <p>SMS Notification</p>
                <input id="sms-notify" type="checkbox" />
                <label htmlFor="sms-notify">
                  Checked switch checkbox input
                </label>
              </div>
              <div className="policy">
                <p>When to Email</p>
                <div className="policy-checkboxes">
                  <div>
                    <input id="new-notify" type="checkbox" />
                    <label htmlFor="new-notify">
                      You have new notifications.
                    </label>
                  </div>
                  <div>
                    <input name="direct-notify" type="checkbox" />
                    <label htmlFor="direct-notify">
                      You're sent a direct message
                    </label>
                  </div>
                  <div>
                    <input name="connection-notify" type="checkbox" />
                    <label htmlFor="connection-notify">
                      Someone adds you as a connection
                    </label>
                  </div>
                </div>
              </div>
              {/* =========== */}

              <div className="policy">
                <p>When to Email</p>
                <div className="policy-checkboxes">
                  <div>
                    <input id="order-notify" type="checkbox" />
                    <label htmlFor="order-notify">Upon new order.</label>
                  </div>
                  <div>
                    <input name="member-notify" type="checkbox" />
                    <label htmlFor="member-notify">
                      New membership approval
                    </label>
                  </div>
                  <div>
                    <input name="register-notify" type="checkbox" />
                    <label htmlFor="register-notify">Member registration</label>
                  </div>
                </div>
              </div>
              <div className="edit-form--btns">
                <button className="primary-btn ">Submit</button>
                <button className="primary-btn red-btn">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className={toggle === 4 ? "content-active" : "content-hidden"}>
          <div className="content-active-box">
            <h3 className="tab-title">Manage Contacts</h3>
            <div className="profile-edit--form">
              <div className="app-input-full">
                <label htmlFor="contact">Contact Number:</label>
                <input
                  type="number"
                  name="contact"
                  placeholder="Contact Number"
                />
              </div>
              <div className="app-input-full">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email Address" />
              </div>
              <div className="app-input-full">
                <label htmlFor="url">Url:</label>
                <input type="url" name="url" placeholder="www.portfolio.com" />
              </div>
              <div className="edit-form--btns">
                <button className="primary-btn ">Submit</button>
                <button className="primary-btn red-btn">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ProfileEditTab;
