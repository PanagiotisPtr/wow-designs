import React from 'react';
import './ClothesList.css';

const Item = ({photo, title, price, colors}) => 
  <div className="col-container align-center item-details">
    <img src={photo} alt={title} className="photo clickable"/>
    <span className="title clickable">{title}</span>
    <span className="price">{price}</span>
    <div className="row-container justify-center colors">
      {colors && colors.map(color =>
        <div className="color-option clickable" style={{background: color}}></div>
      )}
    </div>
  </div>;

const ClothesList = ({clothes}) =>
  <div className="row-container clothes-list full-width full-height">
    {clothes && clothes.map(item => <Item {...item} />
    )}
  </div>;

export default ClothesList;