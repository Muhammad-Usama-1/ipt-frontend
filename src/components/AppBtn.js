import React from "react";

function AppBtn(title, onClick, style) {
  return (
    <button onClick={onClick} className="primary-btn" style={style}>
      {title}
    </button>
  );
}

export default AppBtn;
