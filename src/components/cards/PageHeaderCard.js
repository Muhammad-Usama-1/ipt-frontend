import React from "react";
import pageHeader from "../../assets/images/page-header.jpg";
function PageHeader({ title }) {
  return (
    <div className="friendlist--header">
      <img
        className="friendlist__header--image"
        src={pageHeader}
        alt="Page Header"
      />
      <div className="friendlist__header--title"> {title} </div>
    </div>
  );
}

export default PageHeader;
