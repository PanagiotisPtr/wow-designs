import React from 'react';
import './Separator.css';

const Separator = ({image}) =>
  <img src={image.src} alt={image.alt} className="separator-image"/>;

export default Separator;