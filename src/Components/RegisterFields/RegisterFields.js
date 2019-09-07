import React from 'react';
import './RegisterFields.css';

// Link from React Router
import { Link } from 'react-router-dom'

// Components
import TextInput from '../../Components/TextInput/TextInput';
import MainButton from '../../Components/MainButton/MainButton';
import CheckBox from './../../Components/CheckBox/CheckBox';

const RegisterFields = ({showPage}) =>
  <div className="col-container register-section" style={{flex: 1}}>
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
        <Link to="/signup" className="signup-button" ><MainButton label="ΕΓΓΡΑΦΗ"></MainButton></Link>
      </div>
    </div>
  </div>;

export default RegisterFields;