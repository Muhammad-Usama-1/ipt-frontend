import React from "react";
import ButtonAppBar from "./AppBar";
import FreindsSidebar from "./FreindsSidebar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
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
      </main>
    </>
  );
}

export default Layout;
