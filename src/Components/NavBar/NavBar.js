import React from 'react';
import './NavBar.css';

const Logos = ({leftLogos, mainLogo, rightLogos}) => 
  <div className="row-container small-margin-top">
    
    <div className="row-container align-end stick-left small-margin-left">
      {leftLogos && leftLogos.map(logo => <img className="small-logo" src={logo.src} alt={logo.alt} />)}
    </div>
    
    <img className="logo" src={mainLogo.src} alt={mainLogo.alt} />

    <div className="row-container align-end stick-right small-margin-right">
      {rightLogos && rightLogos.map(logo => <img className="small-logo" src={logo.src} alt={logo.alt} />)}
    </div>

  </div>;

const InfoText = ({text, extra}) =>
  <div className="col-container justify-center center-items info-text" >
    <div className="text col-container align-center">
      <span className="simple">{text}</span>
      <span className="large">{extra}</span>
    </div>
  </div>;

const InfoBar = ({info}) =>
  <div className="full-width row-container info-bar">
    
    {info && info.map(detail =>
      <InfoText text={detail.text} extra={detail.extra} />
    )}

  </div>

const Menu = ({options}) =>
  <div className="full-width row-container justify-center">
  <div className="row-container small-margin-top">
    {options && options.map(option => <h2 className="link">{option}</h2>)}
  </div>
  </div>;

const NavBar = ({menu, logos}) =>
  <div>
    <Logos
      leftLogos={logos.left}
      mainLogo={logos.main}
      rightLogos={logos.right}
    />
    <Menu options={menu}/>
  </div>;

export {
  NavBar,
  InfoBar
};