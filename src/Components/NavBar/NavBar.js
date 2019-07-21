import React from 'react';
import './NavBar.css';
import logo from '../../Images/NavBarLogo.png';

import facebookLogo from '../../Images/FacebookLogo.png';
import telegramLogo from '../../Images/TelegramLogo.png';
import instagramLogo from '../../Images/InstagramLogo.png';

import searchLogo from '../../Images/SearchLogo.png';
import greeceLogo from '../../Images/GreeceLogo.png';
import userLogo from '../../Images/UserLogo.png';
import cartLogo from '../../Images/CartLogo.png';

const Logos = () => 
  <div className="row-container small-margin-top">
    <div className="row-container align-end stick-left small-margin-left">
      <img className="small-logo" src={facebookLogo} alt="Facebook logo" />
      <img className="small-logo" src={telegramLogo} alt="Telegram logo" />
      <img className="small-logo" src={instagramLogo} alt="Instagram logo" />
    </div>
    <img className="logo" src={logo} alt="logo" />
    <div className="row-container align-end stick-right small-margin-right">
      <img className="small-logo" src={searchLogo} alt="Search Logo" />
      <img className="small-logo" src={greeceLogo} alt="Greece Logo" />
      <img className="small-logo" src={userLogo} alt="User Logo" />
      <img className="small-logo" src={cartLogo} alt="Cart Logo" />
    </div>
  </div>;

const Menu = ({options}) =>
  <div className="full-width row-container justify-center">
  <div className="row-container small-margin-top center">
    {options && options.map(option => <h2 className="link">{option}</h2>)}
  </div>
  </div>;

function NavBar() {
  return (
    <div>
      <Logos />
      <Menu options={['ΕΝΔΥΜΑΤΑ', 'ΝΕΕΣ ΑΦΙΞΕΙΣ', 'ΠΡΟΣΦΟΡΕΣ', 'PLUS-SIZE', 'ΤΣΑΝΤΕΣ']}/>
    </div>
  );
}

export default NavBar;