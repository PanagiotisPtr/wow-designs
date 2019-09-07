import React from 'react';
import './SubMenu.css';

const SubMenu = ({menu}) =>
  <div className="col-container full-width align-center sub-menu">
    <div className="row-container justify-center">
      {menu && menu.map((option, index) => <span key={'option_' + index} className="option clickable">{option}</span> )}
    </div>
  </div>;

export default SubMenu;