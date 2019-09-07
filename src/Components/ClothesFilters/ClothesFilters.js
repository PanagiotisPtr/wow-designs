import React from 'react';
import './ClothesFilters.css';

// icons
import ChevronIcon from '../../Images/chevronDown.png';

const FilterOption = ({title, options}) =>
  <div className="row-container align-center filter-option clickable">
    <div className="title">{title}</div>
    <img src={ChevronIcon} alt="chevron down" className="icon" />
    <div className="options col-container align-center">
      {options && options.map(option => <span key={'option_' + option}>{option}</span> )}
    </div>
  </div>;

const ClothesFilters = ({filters}) =>
  <div className="row-container justify-center align-center full-width clothes-filters">
    {filters && filters.map(filter => <FilterOption key={'filter_' + filter} title={filter.title} options={filter.options}/> )}
  </div>;

export default ClothesFilters;