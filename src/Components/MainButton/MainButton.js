import React from 'react';
import './MainButton.css';

const MainButton = ({label}) =>
  <div className="main-button col-container full-width align-center">
    <div className="row-container full-height align-center">
      {label}
    </div>
  </div>;

export default MainButton;