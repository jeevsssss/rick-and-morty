import React from 'react';
import "./Clip.css";

const Clip = () => {
  return (
    <div className="clip-container">
      <iframe
        title="Rick and Morty Clip"
        src="https://www.adultswim.com/videos/rick-and-morty"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default Clip;
