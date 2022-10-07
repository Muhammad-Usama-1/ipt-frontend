import React from "react";

function PageHeader({ title }) {
  return (
    <div className="friendlist--header">
      <img
        className="friendlist__header--image"
        src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/profile-bg3.ac4a1ef7.jpg"
        alt=""
      />
      <div className="friendlist__header--title"> {title} </div>
    </div>
  );
}

export default PageHeader;
