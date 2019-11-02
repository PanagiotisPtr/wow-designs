import React from 'react';
import './ClothesTable.css';

// Components
import Counter from './../../Components/Counter/Counter';
import MainButton from './../../Components/MainButton/MainButton';

const ClothesTableRow = ({thumbnail, size, color, quantity, price, showAddToBasket}) => 
  <tr className="ClothesTableRow">
    <td>
      <div className="row-container">
        <img className="thumbnail" src={thumbnail} alt="item"/>
        <div className="col-container item-details">
          <div>Σαμπάνια σατινέ φέτα μπροστινή φόρεμα Maxi</div>
          <div>ΜΕΓΕΘΟΣ: {size}</div>
          <div>ΧΡΩΜΑ: {color}</div>
        </div>
      </div>
    </td>
    <td>
      <div className="col-container align-center">
        <Counter value={quantity}/>
        <div className="delete">Διαγραφή</div>
      </div>
    </td>
    <td>
      <div className="col-container align-center">
        <div className="price" style={{marginBottom: showAddToBasket ? '2em' : ''}}>
          {price}
        </div>
        {showAddToBasket ? <MainButton label="Προσθηκη στο καλαθι"/> : <div></div>}
      </div>
    </td>    
  </tr>;

const ClothesTable = ({items}) =>
  <div>
    <table className="ClothesTable" style={{width: '55vw'}}>
      <tr className="header">
        <td>ΠΡΟΪΟΝ</td>
        <td>ΕΠΕΞΕΡΓΑΣΙΑ</td>
        <td>ΣΥΝΟΛΟ</td>
      </tr>
      {items && items.map(item => <ClothesTableRow {...item}/>)}
    </table>
  </div>;

export default ClothesTable;