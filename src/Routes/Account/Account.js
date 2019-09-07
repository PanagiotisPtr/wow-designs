import React from 'react';
import './Account.css';

// Components
import { InfoBar } from '../../Components/NavBar/NavBar';

// Icons
import userLogo from '../../Images/UserLogo.png';
import homeIcon from '../../Images/HomeIcon.png';
import reportIcon from '../../Images/ReportDock.png';
import heartIcon from '../../Images/Heart.png';
import emptyBagIcon from '../../Images/BagEmpty.png';
import deliveryIcon from '../../Images/DeliveryIcon.png';

const Option = ({icon, name}) => 
  <div className="account-option row-container align-center">
    <img src={icon} alt={name}/>
    <div>{name}</div>
  </div>;

const Account = () => 
  <div className="col-container account-page">
    <InfoBar
      info={[
        { text: 'ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ ΓΙΑ ΠΑΡΑΓΓΕΛΙΕΣ ΑΝΩ ΤΟΝ 30€', extra: '' },
        { text: 'ΓΙΑ ΤΗΛΕΦΩΝΙΚΕΣ ΠΑΡΑΓΓΕΛΙΕΣ ΚΑΛΕΣΤΕ ΜΑΣ', extra: '2333026489' },
        { text: 'ΑΜΕΣΗ ΚΑΙ ΔΩΡΕΑΝ ΠΑΡΑΛΑΒΗ ΑΠΟ ΤΟ ΚΑΤΑΣΤΗΜΑ', extra: 'Βετσοπούλου 43, Αλεξάνδρεια'}
      ]}
    />
    <div className="col-container" style={{width: '75%', alignSelf: 'center'}}>
      <div className="greeting">Γεια σας Μαρια!</div>
      <div className="welcome-message">
        Καλώς ήρθατε στο δικό σας χώρο στο WoWDesigns! Εδώ μπορείτε να δείτε της παραγγελίες σας,
        να δημιουργήσετε το δικό σας Wishlist με όλα τα αγαπημένα σας κομμάτια, να διαχειριστείτε
        τις ρυθμίσεις του λογαριασμού σας και να ενημερώσετε για τις τελευταίες τάσεις.
      </div>

      <div className="row-container">
        <Option name="Τα στοιχεία μου" icon={userLogo}></Option>
        <Option name="Οι διευθύνσεις μου" icon={homeIcon}></Option>
        <Option name="Οι παραγγελίες μου" icon={reportIcon}></Option>
      </div>

      <div className="row-container" style={{marginBottom: '3em'}}>
        <Option name="Λίστα αγαπημένων" icon={heartIcon}></Option>
        <Option name="Καλάθι αγορών" icon={emptyBagIcon}></Option>
        <Option name="Παρακολούθηση παραγγελίας" icon={deliveryIcon}></Option>
      </div>

    </div>
  </div>;

export default Account;