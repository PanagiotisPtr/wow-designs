import React from 'react';

const Counter = ({value}) =>
  <div className="row-container counter align-center">
    <span className="value">{value ? value : 0}</span>
    <div className="row-container button-container justify-center align-center">
      <div className="add-button clickable col-container align-center justify-center"> <span>+</span> </div>
      <div className="sab-button clickable col-container align-center justify-center"> <span>-</span> </div>
    </div>
  </div>;

export default Counter;