import React from 'react';
import './App.css';
import { NavBar, InfoBar } from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Separator from './Components/Separator/Separator';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import Highlights from './Components/Highlights/Highlights';

// Logos
import logo from './Images/NavBarLogo.png';

import facebookLogo from './Images/FacebookLogo.png';
import telegramLogo from './Images/TelegramLogo.png';
import instagramLogo from './Images/InstagramLogo.png';

import searchLogo from './Images/SearchLogo.png';
import greeceLogo from './Images/GreeceLogo.png';
import userLogo from './Images/UserLogo.png';
import cartLogo from './Images/CartLogo.png';

// Hero Banner
import HeroBanner from './Images/hero-banner.png';

// Gallery
import GalleryImageLeft from './Images/Gallery/Gallery1.png';
import GalleryImageCenter from './Images/Gallery/Gallery2.png';
import GalleryImageRight from './Images/Gallery/Gallery3.png';
import Gallery from './Components/Gallery/Gallery';

// Separator
import SeparatorImage from './Images/Separator.png';
import SubMenu from './Components/SubMenu/SubMenu';

// Footer Banner
import FooterBanner from './Images/footer-banner.png';

// Highlights
import HighlightPicTopLeft from './Images/Highlights/Highlight1.png';
import HighlightPicTopCenter from './Images/Highlights/Highlight2.png';
import HighlightPicTopRight from './Images/Highlights/Highlight3.png';

import HighlightPicBotttomLeft from './Images/Highlights/Highlight4.png';
import HighlightPicBotttomCenter from './Images/Highlights/Highlight5.png';
import HighlightPicBotttomRight from './Images/Highlights/Highlight6.png';

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

      <Hero banner={HeroBanner} />

      <Gallery
        images={[
          {src: GalleryImageLeft, alt: 'Cool Dress 1'},
          {src: GalleryImageCenter, alt: 'Cool Dress 2'},
          {src: GalleryImageRight, alt: 'Cool Dress 3'}
        ]}
      />

      <Separator image={{src: SeparatorImage, alt: 'Separator Image'}} />

      <SectionTitle title="ΝΕΕΣ ΠΑΡΑΛΑΒΕΣ"/>

      <SubMenu menu={['ΟΛΑ ΤΑ ΕΙΔΗ', 'ΦΟΡΕΜΑΤΑ', 'ΜΠΛΟΥΖΕΣ', 'ΤΣΑΝΤΕΣ']} />

      <Highlights items={[
        {src: HighlightPicTopLeft, alt: 'Dress 1'},
        {src: HighlightPicTopCenter, alt: 'Dress 2'},
        {src: HighlightPicTopRight, alt: 'Dress 3'},
      ]}/>

      <Highlights items={[
        {src: HighlightPicBotttomLeft, alt: 'Dress 4'},
        {src: HighlightPicBotttomCenter, alt: 'Dress 5'},
        {src: HighlightPicBotttomRight, alt: 'TShirt 1'},
      ]}/>

      <Hero banner={FooterBanner} />
    </div>
  );
}

export default App;
