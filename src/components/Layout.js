import React from "react";
import ButtonAppBar from "./AppBar";
import CreatePostModal from "./CreatePostModal";
import FreindsSidebar from "./FreindsSidebar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const openCreatePostModal = () => {};
  const sidebar = React.useRef(null);
  const fsidebar = React.useRef(null);
  return (
    <>
      <ButtonAppBar sidebar={sidebar} />
      <main className="container">
        <div></div>
        <div className="sidebar-fixed">
          <Sidebar sidebar={sidebar} />
        </div>
        {children}
        <div></div>
        <div className="friendsSidebar">
          <FreindsSidebar fsidebar={fsidebar} />
        </div>
        {/* acaca */}
        {/* <button onClick={openCreatePostModal} className="big-post-btn"> I am button </button> */}
        <CreatePostModal />
      </main>
    </>
  );
}

export default Layout;
