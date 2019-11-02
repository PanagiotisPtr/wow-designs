import React from 'react';
import './Showcase.css';

// icons
import HeartIcon from '../../Images/HeartLogo.png';

// Components
import Counter from '../../Components/Counter/Counter';

const Thumbnail = ({src, name, active}) => 
  <div>
    { active
      ? <img src={src} alt={name} className="product-thumbnail active clickable" />
      : <img src={src} alt={name} className="product-thumbnail clickable" />
    }
  </div>;

const Thumbnails = ({photos, name, active}) =>
  <div className="col-container">
    {photos && photos.map((photo, index) =>
      <Thumbnail key={'photo_' + index} src={photo} name={name} active={photo === active} />
    )}
  </div>;

const MainImage = ({src, alt}) =>
  <div>
    <img src={src} alt={alt} className="main-image"/>
  </div>;

const ColorGlob = ({color, active}) =>
  <div className="clickable" >
    {active
      ? <div className="active color-glob" style={{background: color}}></div>
      : <div className="inactive color-glob" style={{background: color}}></div>
    }
  </div>;

const ColorSection = ({colors, activeColor}) =>
  <div className="col-container colors">
    <span className="sub-section-title">ΧΡΩΜΑΤΑ:</span>
    <div className="row-container colors-container container-hspread-sm">
      {colors && colors.map((color, index) =>
        <ColorGlob key={'color_' + index} color={color} active={color===activeColor}/>
      )}
    </div>
  </div>;

const SizeCircle = ({size, active, available}) => {
  const styles = {
    background: available ? '' : 'rgba(150, 150, 150, 0.5)',
    border: active ? 'solid black 2px' : 'solid rgba(72, 72, 72, 0.85) 1px'
  };
  return (
    <div className="col-container full-width size-circle align-center clickable" style={styles}>
      <div className="row-container full-height align-center">
        {size}
      </div>
    </div>
  );
}

const SizeSection = ({sizes, activeSize}) =>
  <div className="col-container sizes">
    <span className="sub-section-title">ΜΕΓΕΘΗ:</span>
    <div className="row-container sizes-container container-hspread-sm">
      <SizeCircle size="S" available={sizes.includes('S')} active={activeSize === 'S'} />
      <SizeCircle size="M" available={sizes.includes('M')} active={activeSize === 'M'} />
      <SizeCircle size="L" available={sizes.includes('L')} active={activeSize === 'L'} />
      <SizeCircle size="XL" available={sizes.includes('XL')} active={activeSize === 'XL'} />
    </div>
  </div>;

const Availability = ({availability}) =>
  <div>ΔΙΑΘΕΣΗΜΟΤΗΑ: {availability}</div>

const PurchaseButton = () =>
  <div className="clickable purchase-button col-container justify-center align-center">
    <span className="button-text">ΑΓΟΡΑ</span>
  </div>;

const LikeProduct = () =>
  <div className="clickable col-container align-center justify-center like-button-container">
    <img src={HeartIcon} alt="like logo" className="like-button"/>
  </div>;

const QuantitySection = ({quantity}) => 
  <div className="col-container">
    <span>Quantity</span>
    <div className="row-container container-hspread-sm">
      <Counter value={quantity}/>
      <PurchaseButton />
      <LikeProduct />
    </div>
  </div>;

const InfoSection = ({title, text, expand}) =>
  <div className="col-container info-seciton container-vspread-sm">
    {expand && ''}
    <div className="section-title">{title}</div>
    <div className="separator"></div>
    <div className="description">{text}</div>
  </div>;

const Details = ({title, code, price, colors, activeColor, 
                  sizes, activeSize, availability, 
                  info, activeInfo}) =>
  <div class="product-details col-container container-vspread-sm">
    <div className="title">{title}</div>
    <div className="code">ΚΩΔΙΚΟΣ: {code}</div>
    <div className="price">{price}</div>
    <ColorSection colors={colors} activeColor={colors[activeColor]} />
    <SizeSection sizes={sizes} activeSize={sizes[activeSize]} />
    <Availability availability={availability} />
    <div className="row-container">
      <QuantitySection quantity={1} />
    </div>
    {info && info.map((section, index) =>
      <InfoSection
        key={'info_section_' + index}
        title={section.title}
        text={section.text}
        expand={info[activeInfo] === section}
      />
    )}
  </div>;

const Showcase = ({product}) =>
  <div className="row-container justify-center showcase container-hspread-md">
    <Thumbnails
      photos={product.photos}
      name={product.title}
      active={product.photos[product.activePhoto]}
    />
    <MainImage
      src={product.photos[product.activePhoto]}
      name={product.title}
    />

    <Details
      title={product.title}
      code={product.code}
      price={product.price}
      colors={product.colors}
      activeColor={product.activeColor}
      sizes={product.sizes}
      activeSize={product.activeSize}
      availability={product.availability}
      quantity={product.quantity}
      info={product.info}
      activeInfo={product.activeInfo}
    />
  </div>;

export default Showcase;