import React from 'react';
import './Gallery.css';

const GalleryImage = ({image}) =>
  <img src={image.src} alt={image.alt} className="gallery-image"/>;

const Gallery = ({images}) =>
  <div className="col-container full-width align-center">
    <div className="row-container image-gallery">
      {images && images.map(image => <GalleryImage image={image} />)}
    </div>
  </div>;

export default Gallery;