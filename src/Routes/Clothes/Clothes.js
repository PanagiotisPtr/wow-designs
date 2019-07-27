import React from 'react';
import './Clothes.css';

// Components
import TextBanner from '../../Components/TextBanner/TextBanner';
import ClothesFilters from '../../Components/ClothesFilters/ClothesFilters';
import ClothesList from '../../Components/ClothesList/ClothesList';

// Clothes images
import ItemPhoto1 from '../../Images/Items/ItemPhoto1.png';
import ItemPhoto2 from '../../Images/Items/ItemPhoto2.png';
import ItemPhoto3 from '../../Images/Items/ItemPhoto3.png';
import ItemPhoto4 from '../../Images/Items/ItemPhoto4.png';
import ItemPhoto5 from '../../Images/Items/ItemPhoto5.png';
import ItemPhoto6 from '../../Images/Items/ItemPhoto6.png';
import ItemPhoto7 from '../../Images/Items/ItemPhoto7.png';
import ItemPhoto8 from '../../Images/Items/ItemPhoto8.png';
import ItemPhoto9 from '../../Images/Items/ItemPhoto9.png';
import ItemPhoto10 from '../../Images/Items/ItemPhoto10.png';

const Clothes = () =>
  <div>
    <TextBanner
      title={'ΠΡΑΜΑΤΙΑ'}
      description={`Live your life in denim jeans? Then get ready to find your perfect fit today with our range 
      of women’s jeans. Whether your style is straight leg, mom or wide leg jeans, we’ve got you and 
      your pins covered. Keep your look classic with a pair of high of waisted blue jeans that can you can dress up or grunge down in black jeans. 
      Give your off-duty wardrobe a new style saviour with some distressed boyfriend white jeans, just add a simple tee and 
      this season's must-have accessories. From figure flattering high waisted styles to low risers, there's a pair of 
      jeans to suit every shape. Stay true blue this season with our range of jeans.`}
    />
    
    <ClothesFilters
      filters={[
        { title: 'ΜΕΓΕΘΟΣ', options: [] },
        { title: 'ΧΡΩΜΑ', options: [] },
        { title: 'ΤΥΠΟΣ', options: [] },
        { title: 'ΤΙΜΗ', options: [] },
        { title: 'ΤΑΞΙΝΟΜΗΣΗ', options: [] },
      ]}
    />

    <ClothesList
      clothes={[
        { photo: ItemPhoto1, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto2, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto3, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto4, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto5, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto6, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto7, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto8, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto9, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto10, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto1, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto2, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto3, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto4, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto5, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto6, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto7, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto8, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto9, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] },
        { photo: ItemPhoto10, title: 'ασπρα πραματατια', price: '20.00€', colors: ['#E13131', '#F4B28F', '#FEFEFE'] }
      ]}
    />
  </div>;

export default Clothes;