import React from 'react';
import './Wishlist.css'

// Components
import SideMenu from '../../Components/SideMenu/SideMenu';
import { InfoBar } from '../../Components/NavBar/NavBar';
import ClothesTable from './../../Components/ClothesTable/ClothesTable';
import MainButton from './../../Components/MainButton/MainButton';

// Images
import ItemPhoto1 from '../../Images/Items/ItemPhoto1.png';

const Wishlist = _ => 
  <div className="Wishlist">
    <InfoBar
      info={[
        { text: 'ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ ΓΙΑ ΠΑΡΑΓΓΕΛΙΕΣ ΑΝΩ ΤΟΝ 30€', extra: '' },
        { text: 'ΓΙΑ ΤΗΛΕΦΩΝΙΚΕΣ ΠΑΡΑΓΓΕΛΙΕΣ ΚΑΛΕΣΤΕ ΜΑΣ', extra: '2333026489' },
        { text: 'ΑΜΕΣΗ ΚΑΙ ΔΩΡΕΑΝ ΠΑΡΑΛΑΒΗ ΑΠΟ ΤΟ ΚΑΤΑΣΤΗΜΑ', extra: 'Βετσοπούλου 43, Αλεξάνδρεια'}
      ]}
    />
    <div className="row-container full-width">
        <SideMenu/>
        <div className="col-container settings-section" style={{flex: 3, marginTop: '10vh', marginBottom: '10vh'}}>
          <h1>Η λίστα επιθυμιών μου</h1>
          <ClothesTable
            items = {[
              {thumbnail: ItemPhoto1, size: 'L', color: 'λευκό', quantity: 1, price: '15,00€', showAddToBasket: true},
              {thumbnail: ItemPhoto1, size: 'L', color: 'λευκό', quantity: 1, price: '15,00€', showAddToBasket: true},
              {thumbnail: ItemPhoto1, size: 'L', color: 'λευκό', quantity: 1, price: '15,00€', showAddToBasket: true},
              {thumbnail: ItemPhoto1, size: 'L', color: 'λευκό', quantity: 1, price: '15,00€', showAddToBasket: true}
            ]}
          />
          <div style={{marginLeft: '40vw', marginTop: '2em', width: '18em'}}>
            <MainButton label="ΠΡΟΣΘΗΚΗ ΟΛΑ ΣΤΟ ΚΑΛΑΘΙ"/>
          </div>
        </div>
    </div>
  </div>;

export default Wishlist;