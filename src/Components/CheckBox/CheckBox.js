import React from 'react';
import './CheckBox.css';

const CheckBox = ({checked}) => {
  const style = {
    background: checked ? 'black' : 'white'
  };
  return (
    <div className="check-box" style={style}></div>
  );
}

export default CheckBox;