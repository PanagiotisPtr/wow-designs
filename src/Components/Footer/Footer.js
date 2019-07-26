import React from 'react';
import './Footer.css';

const PinkSeparator = ({}) => <div className="footer-separator"></div>;

const SectionOption = ({icon, label, link}) => 
  <div className="row-container align-center option-container">
    {icon && <img src={icon} alt={icon} className="icon" />}
    <span className="option">
      <a href={link}>{label}</a>
    </span>
  </div>

const CopyrightNotice = ({}) => 
  <div className="col-container full-width align-center">
    <span>©2019 wowdesigns All Rights Reserved</span>
  </div>;

const InfoSection = ({title, options}) =>
  <div className="info-section col-container full-width align-center">
    <div className="col-container">
      <div className="title">{title}</div>
      {options && options.map(option =>
        <SectionOption
          icon={option.icon}
          label={option.label}
          link={option.link}
        />
      )}
    </div>
  </div>;

const Footer = ({sections}) => 
  <div className="footer">
    <PinkSeparator />
    <div className="section-container row-container full-width">
      {sections && sections.map(section => <InfoSection title={section.title} options={section.options} /> )}
    </div>
  </div>;

export {
  Footer,
  CopyrightNotice
};