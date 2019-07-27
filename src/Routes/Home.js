import React from 'react';
import './Home.css';

// Components
import { InfoBar } from '../Components/NavBar/NavBar';
import Hero from '../Components/Hero/Hero';
import Separator from '../Components/Separator/Separator';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Highlights from '../Components/Highlights/Highlights';

// Hero Banner
import HeroBanner from '../Images/hero-banner.png';

// Gallery
import GalleryImageLeft from '../Images/Gallery/Gallery1.png';
import GalleryImageCenter from '../Images/Gallery/Gallery2.png';
import GalleryImageRight from '../Images/Gallery/Gallery3.png';
import Gallery from '../Components/Gallery/Gallery';

// Separator
import SeparatorImage from '../Images/Separator.png';
import SubMenu from '../Components/SubMenu/SubMenu';

// Footer Banner
import FooterBanner from '../Images/footer-banner.png';

// Highlights
import HighlightPicTopLeft from '../Images/Highlights/Highlight1.png';
import HighlightPicTopCenter from '../Images/Highlights/Highlight2.png';
import HighlightPicTopRight from '../Images/Highlights/Highlight3.png';

import HighlightPicBotttomLeft from '../Images/Highlights/Highlight4.png';
import HighlightPicBotttomCenter from '../Images/Highlights/Highlight5.png';
import HighlightPicBotttomRight from '../Images/Highlights/Highlight6.png';

const Home = () =>
  <div className="col-container main-layout">

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


  <div className="subsection col-container">
    <SectionTitle title="ΝΕΕΣ ΠΑΡΑΛΑΒΕΣ"/>

    <SubMenu menu={['ΟΛΑ ΤΑ ΕΙΔΗ', 'ΦΟΡΕΜΑΤΑ', 'ΜΠΛΟΥΖΕΣ', 'ΤΣΑΝΤΕΣ']} />
  </div>

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

  </div>;

export default Home;