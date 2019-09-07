import React from 'react';
import './Authenticate.css';

// Link from React Router
import { Link } from 'react-router-dom'

// Components
import { InfoBar } from '../../Components/NavBar/NavBar';
import TextInput from '../../Components/TextInput/TextInput';
import MainButton from '../../Components/MainButton/MainButton';
import CheckBox from './../../Components/CheckBox/CheckBox';

const Login = () => 
  <div className="col-container login-section" style={{flex: 1}}>
  <h3>Σύνδεση Στον Λογαριασμού μου</h3>
    <div className="col-container input-fields" style={{width: '25em'}}>
      <TextInput label="E-mail" type="email"></TextInput>
      <TextInput label="Κωδικός" type="password"></TextInput>
      <div style={{width: '15em'}}><MainButton label="ΕΙΣΟΔΟΣ"></MainButton></div>
    </div>
  </div>;

const Signup = ({showPage}) =>
  <div className="col-container login-section" style={{flex: 1}}>
  <h3>Δέν έχετε λογαριασμό?</h3>
    <div className="col-container input-fields">
      <div className="row-container align-center" style={{display: showPage ? '' : 'none'}}>
        <div style={{flex: 1, marginRight: '0.5em'}}><TextInput label="Όνομα" type="text"></TextInput></div>
        <div style={{flex: 1, marginLeft: '0.5em'}}><TextInput label="Επώνυμο" type="text"></TextInput></div>
      </div>
      <div style={{display: showPage ? '' : 'none'}}>
        <TextInput label="E-mail" type="email"></TextInput>
      </div>
      <div style={{display: showPage ? '' : 'none'}}>
        <TextInput label="Κωδικός" type="password"></TextInput>
      </div>
      <div style={{display: showPage ? '' : 'none'}}>
        <TextInput label="Επιβεβαίωση Κωδικού" type="password"></TextInput>
      </div>
      <div className="row-container align-center" style={{display: showPage ? '' : 'none'}}>
        <CheckBox></CheckBox>
        <div style={{marginLeft: '0.5em'}}>Συμφωνώ να λαμβάνω νέα, ενημερώσεις και προσφορές!</div>
      </div>
      <div style={{width: '15em', marginLeft: 'auto', marginRight: 'auto', textDecoration: 'none'}}>
        <Link to="/signup" className="signup-button"><MainButton label="ΕΓΓΡΑΦΗ"></MainButton></Link>
      </div>
    </div>
  </div>;

const SeparatorBar = () => <div className="separator-bar"></div>

const Authenticate = ({createAccount}) => { 
  console.log(createAccount);
  return <div className="col-container">
    <InfoBar
      info={[
        { text: 'ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ ΓΙΑ ΠΑΡΑΓΓΕΛΙΕΣ ΑΝΩ ΤΟΝ 30€', extra: '' },
        { text: 'ΓΙΑ ΤΗΛΕΦΩΝΙΚΕΣ ΠΑΡΑΓΓΕΛΙΕΣ ΚΑΛΕΣΤΕ ΜΑΣ', extra: '2333026489' },
        { text: 'ΑΜΕΣΗ ΚΑΙ ΔΩΡΕΑΝ ΠΑΡΑΛΑΒΗ ΑΠΟ ΤΟ ΚΑΤΑΣΤΗΜΑ', extra: 'Βετσοπούλου 43, Αλεξάνδρεια'}
      ]}
    />

    <div className="row-container content-section justify-center">
      <Login></Login>
      <SeparatorBar></SeparatorBar>
      <Signup showPage={createAccount}></Signup>
    </div>
  </div>;}

export default Authenticate;