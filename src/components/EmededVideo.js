import React from "react";

import "../styles/Video.css";

function EmededVideo({ videoUrl }) {
  return (
    <div className="video-responsive">
      <iframe
        height="300"
        src={`${videoUrl}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default EmededVideo;
