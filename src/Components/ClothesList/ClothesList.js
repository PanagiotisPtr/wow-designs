import React from 'react';
import './ClothesList.css';

const Item = ({photo, title, price, colors, sizeClass}) => 
  <div className="col-container align-center item-details">
    <img src={photo} alt={title} className={'photo clickable ' + sizeClass}/>
    <span className="title clickable">{title}</span>
    <span className="price">{price}</span>
    <div className="row-container justify-center colors">
      {colors && colors.map(color =>
        <div className="color-option clickable" style={{background: color}}></div>
      )}
    </div>
  </div>;

const ClothesList = ({clothes, preview, size}) => {
  const fullScreen = preview ? '' : 'full-width full-height';
  const smaller = size === 'small' ? 'smaller-image' : '';
  return (
    <div className={'row-container clothes-list ' + fullScreen}>
      {clothes && clothes.map(item => { item.sizeClass = smaller; return <Item {...item} /> }
      )}
    </div>
  );
}

export default ClothesList;