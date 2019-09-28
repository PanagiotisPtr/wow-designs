import React from 'react';
import './App.css';

// Components
import { NavBar } from './Components/NavBar/NavBar';
import { Footer, CopyrightNotice } from './Components/Footer/Footer';

// Routes
import Home from './Routes/Home/Home';
import Clothes from './Routes/Clothes/Clothes';
import Product from './Routes/Product/Product';
import Register from './Routes/Authenticate/Register';
import Login from './Routes/Authenticate/Login';
import Account from './Routes/Account/Account';
import AccountDetails from './Routes/AccountDetails/AccountDetails';

// Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Logos
import logo from './Images/NavBarLogo.png';

import facebookLogo from './Images/FacebookLogo.png';
import telegramLogo from './Images/TelegramLogo.png';
import instagramLogo from './Images/InstagramLogo.png';

import searchLogo from './Images/SearchLogo.png';
import greeceLogo from './Images/GreeceLogo.png';
import userLogo from './Images/UserLogo.png';
import cartLogo from './Images/CartLogo.png';

// icons
import phoneIcon from './Images/phoneLogo.png';
import emailIcon from './Images/emailLogo.png';
import locationIcon from './Images/locationLogo.png';

const App = () =>
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
    
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/clothes/" component={Clothes} />
      <Route path="/product/" component={Product} />
      <Route path="/login/" component={Login} />
      <Route path="/signup/" component={Register} />
      <Route path="/account/" exact component={Account} />
      <Route path="/account/details" exact component={AccountDetails}></Route>
    </Router>
    
    <Footer
      sections={[
        {
          title: 'ΠΛΗΡΟΦΟΡΙΕΣ',
          options: [
            {icon: '', label: 'Ποιοί  είμαστε', link: '#'},
            {icon: '', label: 'Όρη χρήσης', link: '#'},
            {icon: '', label: 'Πολιτική απορρήτου (GDPR)', link: '#'},
            {icon: '', label: 'Θέσεις Εργασίας', link: '#'},
            {icon: '', label: 'Επικοινωνήστε μαζί μας', link: '#'}
          ]
        },{
          title: 'ΕΞΥΠΗΡΕΤΗΣΗ ΠΕΛΑΤΩΝ',
          options: [
            {icon: '', label: 'Τρόπη πληρωμής', link: '#'},
            {icon: '', label: 'Αποστολή  προϊόντων  & κόστος', link: '#'},
            {icon: '', label: 'Επιστροφές & Αλλαγές', link: '#'},
            {icon: '', label: 'Παρακολούθηση παραγγελίας', link: '#'},
            {icon: '', label: 'Οδηγός μεγεθών', link: '#'},
            {icon: '', label: 'Συχνές ερωτήσεις', link: '#'}
          ]
        },{
          title: 'Επικοινωνήστε μαζί μας',
          options: [
            {icon: phoneIcon, label: '+30 23330 23921', link: '#'},
            {icon: emailIcon, label: ' info@wowdesigns.gr', link: '#'},
            {icon: locationIcon, label: 'Βετσοπούλου 43 - 59300, Αλεξάνδρεια', link: '#'}
          ]
        }
      ]}
    />

    <CopyrightNotice />
  </div>;

export default App;
