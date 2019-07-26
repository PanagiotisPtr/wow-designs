import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({title}) =>
  <div className="col-container full-width align-center">
    <div className="section-title">{title}</div>
  </div>;

export default SectionTitle;