import React from 'react';

import "./index.css";

const Loader = () => {
  return (
    <div className="Loader">
      <div className="Loader-icon-container">
        <div className="Loader-icon"></div>
      </div>
      <div className="Loader-label">Loading</div>
    </div>
  );
}

export default Loader;
