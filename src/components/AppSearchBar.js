import React from "react";

export default function SearchAppBar() {
  return (
    <div className="iq-search-bar device-search">
      <form action="#" className="searchbox">
        <a className="search-link">
          {/* <i className="ri-search-line"></i> */}
          <i className="bx bx-search"></i>
        </a>
        <input
          type="text"
          className="text search-input"
          placeholder="Search here..."
        />
      </form>
    </div>
  );
}
