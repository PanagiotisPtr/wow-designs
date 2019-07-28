import React from 'react';
import './TextInput.css';

const TextInput = ({label, type}) =>
  <div className="col-container text-input">
    <div className="label">{label}</div>
    <div className="input-container row-container">
      <input type={type} />
    </div>
  </div>;

export default TextInput;