import React from 'react';
import './AccountDetails.css';

// Components
import { InfoBar } from '../../Components/NavBar/NavBar';
import TextInput from '../../Components/TextInput/TextInput';
import MainButton from '../../Components/MainButton/MainButton';
import CheckBox from '../../Components/CheckBox/CheckBox';
import SideMenu from '../../Components/SideMenu/SideMenu';

const AccountInfo = _ => 
<div className="row-container">
  <div className="inputs" style={{flex: 1}}>
    <TextInput label="Όνομα *" type="text"/>
    <TextInput label="Επώνυμο *" type="text"/>
    <TextInput label="Email *" type="text"/>
    <TextInput label="Επιβεβαίωση Email *" type="text"/>
    <div className="col-container">
      <span>Ημερομηνία Γέννησης</span>
      <div className="row-container full-width date-fields">
          <TextInput label="Ημέρα" type="text" style={{flex: 1}}/>
          <TextInput label="Μήνας" type="text" style={{flex: 1}}/>
          <TextInput label="Έτος" type="text" style={{flex: 1}}/>
      </div>
    </div>
    <div className="col-container">
      <span>Φύλο</span>
      <div className="row-container full-width date-fields">
          <div className="row-container container-hspread-sm" style={{flex: 1}}>
            <span>Γυναίκα</span>
            <CheckBox checked={true} />
          </div>
          <div className="row-container container-hspread-sm" style={{flex: 1}}>
            <span>Άνδρας</span>
            <CheckBox checked={false} />
          </div>
          <div className="row-container container-hspread-sm" style={{flex: 1}}>
            <span>Άλλο</span>
            <CheckBox checked={false} />
          </div>
      </div>
    </div>
    <div className="row-container full-width half-button-container">
      <div style={{flex: 1}}/>
      <MainButton label="ΕΝΗΜΕΡΩΣΗ" style={{flex: 1}}/>
    </div>
  </div>
  <div style={{flex: 1}}></div>
</div>;

const LoginInfo = _ =>
<div className="row-container">
  <div className="inputs" style={{flex: 1}}>
    <TextInput label="Τρέχων κωδικός πρόσβασης *" type="text"/>
    <TextInput label="Όνομα*" type="text"/>
    <TextInput label="Όνομα*" type="text"/>
    <div className="row-container full-width half-button-container">
      <div style={{flex: 1}}/>
      <MainButton label="ΕΝΗΜΕΡΩΣΗ" style={{flex: 1}}/>
    </div>
  </div>
  <div style={{flex: 1}}></div>
</div>;

const AccountDetails = _ => 
<div className="AccountDetails">
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
          <h2>Στοιχεία λογαριασμού</h2>
          <h3>ΠΛΗΡΟΦΟΡΙΕΣ ΛΟΓΑΡΙΑΣΜΟΥ</h3>
          <AccountInfo/>

          <h2>Πληροφορίες Σύνδεσης</h2>
          <h3>ΠΛΗΡΟΦΟΡΙΕΣ ΛΟΓΑΡΙΑΣΜΟΥ</h3>
          <LoginInfo/>
      </div>
  </div>
</div>;

export default AccountDetails;