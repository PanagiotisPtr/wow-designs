import React from 'react';
import './Authenticate.css';

// Components
import { InfoBar } from '../../Components/NavBar/NavBar';
import LoginFields from '../../Components/LoginFields/LoginFields';
import RegisterFields from '../../Components/RegisterFields/RegisterFields';


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
      <LoginFields></LoginFields>
      <SeparatorBar></SeparatorBar>
      <RegisterFields showPage={createAccount}></RegisterFields>
    </div>
  </div>;}

export default Authenticate;