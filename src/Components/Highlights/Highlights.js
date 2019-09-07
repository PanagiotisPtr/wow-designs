import React from 'react';
import './Highlights.css';

const Highlight = ({item}) =>
  <div className="highlight-container row-container justify-center">
    <div className="col-container align-center">
      <img src={item.src} alt={item.alt} className="highlight-item"/>
      <span className="label">Σαμπάνια σατινέ φέτα μπροστινή φόρεμα Maxi</span>
      <span className="price">20.00€</span>
    </div>
  </div>;

const Highlights = ({items}) =>
  <div className="row-container justify-center align-center highlight-items">
    {items && items.map((item, index) => <Highlight key={'highlight_' + index} item={item}/> )}
  </div>;

export default Highlights;