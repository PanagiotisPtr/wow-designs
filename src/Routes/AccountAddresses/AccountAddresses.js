import React from 'react';
import './AccountAddresses.css'

// Components
import SideMenu from '../../Components/SideMenu/SideMenu';
import { InfoBar } from '../../Components/NavBar/NavBar';
import MainButton from '../../Components/MainButton/MainButton';

const Address = ({selected}) => {
  const addressStyle = {
    backgroundColor: selected ? '#e4e4e4': ''
  };

  return <div className="col-container address" style={addressStyle}>
    {selected ? <h3>προεπιλεγμένη  Διευθηνση</h3> : <h3></h3>}
    <div>Μαρία Παπαδοπούλου</div>
    <div>Δ.ΒΕΤΣΟΠΟΥΛΟΥ 45</div>
    <div>ΑΛΕΞΑΝΔΡΕΙΑ ΗΜΑΘΙΑΣ, 59300</div>
    <div>ΕΛΛΑΔΑ</div>
    <div>ΤΗΛ: 6985631569</div>
    <div className="row-container stick-right container-hspread-sm">
      <div className="edit">Επεξεργασία</div>
      <div className="delete">Διαγραφή</div>
    </div>
  </div>;
}

const AddressGrid = _ =>
  <div className="row-container address-grid">
    <Address selected={true}/>
    <Address/>
    <Address/>
    <Address/>
  </div>;

const AccountAddresses = _ => 
  <div className="AccountAddresses">
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
          <div className="row-container full-width align-center wrap-content">
            <h1 style={{marginRight: '28vw'}}>Διευθύνσεις</h1>
            <div style={{width: '18em'}}>
              <MainButton label="ΠΡΟΣΘΗΚΗ ΝΕΑΣ ΔΙΕΥΘΥΝΣΗΣ"/>
            </div>
          </div>
          <AddressGrid/>
        </div>
    </div>
  </div>;

export default AccountAddresses;