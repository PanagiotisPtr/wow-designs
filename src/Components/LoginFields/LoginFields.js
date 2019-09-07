import React from 'react';
import './LoginFields.css';

// Components
import TextInput from '../../Components/TextInput/TextInput';
import MainButton from '../../Components/MainButton/MainButton';

const LoginFields = () => 
  <div className="col-container login-section" style={{flex: 1}}>
  <h3>Σύνδεση Στον Λογαριασμού μου</h3>
    <div className="col-container input-fields" style={{width: '25em'}}>
      <TextInput label="E-mail" type="email"></TextInput>
      <TextInput label="Κωδικός" type="password"></TextInput>
      <div style={{width: '15em'}}><MainButton label="ΕΙΣΟΔΟΣ"></MainButton></div>
    </div>
  </div>;

export default LoginFields;