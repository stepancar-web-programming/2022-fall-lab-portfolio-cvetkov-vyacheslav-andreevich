import React from "react";
import PropTypes from "prop-types";

const YouTubeEmbed = ({ embedId, demoWidth }) => (
  <div className="video-responsive">
    <iframe
      width={demoWidth}
      height={demoWidth / 16 * 9}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YouTubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YouTubeEmbed;