import React from 'react';
import './TextBanner.css';

const TextBanner = ({title, description}) =>
  <div className="col-container full-width align-center text-banner">
    <div className="title">{title}</div>
    <div className="description">{description}</div>
  </div>;

export default TextBanner;