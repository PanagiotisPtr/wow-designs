import React from 'react';
import './App.css';
import { NavBar, InfoBar } from './Components/NavBar/NavBar';

// Logos
import logo from './Images/NavBarLogo.png';

import facebookLogo from './Images/FacebookLogo.png';
import telegramLogo from './Images/TelegramLogo.png';
import instagramLogo from './Images/InstagramLogo.png';

import searchLogo from './Images/SearchLogo.png';
import greeceLogo from './Images/GreeceLogo.png';
import userLogo from './Images/UserLogo.png';
import cartLogo from './Images/CartLogo.png';

function App() {
  return (
    <div>
      <NavBar
        menu={['ΕΝΔΥΜΑΤΑ', 'ΝΕΕΣ ΑΦΙΞΕΙΣ', 'ΠΡΟΣΦΟΡΕΣ', 'PLUS-SIZE', 'ΤΣΑΝΤΕΣ']}
        logos={{
          left: [
            {src: facebookLogo, alt: 'Facebook Logo'},
            {src: telegramLogo, alt: 'Telegram Logo'},
            {src: instagramLogo, alt: 'Instagram Logo'},
          ],
          main: {src: logo, alt: 'wow designs logo'},
          right: [
            {src: searchLogo, alt: 'Search Logo'},
            {src: greeceLogo, alt: 'Greece Logo'},
            {src: userLogo, alt: 'User Logo'},
            {src: cartLogo, alt: 'Cart Logo'},
          ]
        }}
      />
      <InfoBar
        info={[
          { text: 'ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ ΓΙΑ ΠΑΡΑΓΓΕΛΙΕΣ ΑΝΩ ΤΟΝ 30€', extra: '' },
          { text: 'ΓΙΑ ΤΗΛΕΦΩΝΙΚΕΣ ΠΑΡΑΓΓΕΛΙΕΣ ΚΑΛΕΣΤΕ ΜΑΣ', extra: '2333026489' },
          { text: 'ΑΜΕΣΗ ΚΑΙ ΔΩΡΕΑΝ ΠΑΡΑΛΑΒΗ ΑΠΟ ΤΟ ΚΑΤΑΣΤΗΜΑ', extra: 'Βετσοπούλου 43, Αλεξάνδρεια'}
        ]}
      />
    </div>
  );
}

export default App;
