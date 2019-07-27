import React from 'react';
import './Product.css';

// Components
import Showcase from '../../Components/Showcase/Showcase';
import { InfoBar } from '../../Components/NavBar/NavBar';

// Images
import ItemPhoto1 from '../../Images/Items/ItemPhoto1.png';
import ItemPhoto2 from '../../Images/Items/ItemPhoto2.png';
import ItemPhoto3 from '../../Images/Items/ItemPhoto3.png';

const Product = () => 
  <div className="col-container container-vspread-md">
    <InfoBar
      info={[
        { text: 'ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ ΓΙΑ ΠΑΡΑΓΓΕΛΙΕΣ ΑΝΩ ΤΟΝ 30€', extra: '' },
        { text: 'ΓΙΑ ΤΗΛΕΦΩΝΙΚΕΣ ΠΑΡΑΓΓΕΛΙΕΣ ΚΑΛΕΣΤΕ ΜΑΣ', extra: '2333026489' },
        { text: 'ΑΜΕΣΗ ΚΑΙ ΔΩΡΕΑΝ ΠΑΡΑΛΑΒΗ ΑΠΟ ΤΟ ΚΑΤΑΣΤΗΜΑ', extra: 'Βετσοπούλου 43, Αλεξάνδρεια'}
      ]}
    />

    <Showcase
      product={{
        colors: ['#E13131', '#F4B28F', '#FEFEFE'],
        activeColor: 0,
        photos: [ItemPhoto1, ItemPhoto2, ItemPhoto3],
        activePhoto: 0,
        sizes: ['S', 'M', 'XL'],
        activeSize: 1,
        availability: 'Αμεσα διαθέσημο',
        title: 'Πολύ Ωραιο Πραγμα',
        info: [
          {title: 'ΠΕΡΙΓΡΑΦΗ', text: 'Πολυ ωραιο φορεμα, ανετο  και μαλακο , από κλωστη κανββης ότι καλυτερο μπορεις να βρεις στην αγορα ελα παρε παρε δεν μετανειωνεις'},
          {title: 'ΦΡΟΝΤΙΔΑ', text: 'Πρόσεχε το σαν τα μάτια σου'}
        ],
        activeInfo: 0,
        code: '6666',
        price: '15,00€'
      }}
    />
  </div>;

export default Product;