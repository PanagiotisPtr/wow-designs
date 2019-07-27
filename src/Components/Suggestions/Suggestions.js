import React from 'react';
import './Suggestions.css';

// Components
import ClothesList from '../ClothesList/ClothesList';

const Tab = ({title, active}) => {
  const style = {
    color: active ? 'black' : 'rgba(72, 72, 72, 0.5)',
    border: active ? 'solid black 1px' : 'solid rgba(72, 72, 72, 0.5) 1px',
    borderBottom: 'none'
  }
  return (
    <div className="tab col-container align-center clickable" style={style}>
      <span>{title}</span>
    </div>
  );
}

const Suggestions = ({tabs, activeTab}) =>
  <div className="suggestions col-container align-center">
    <div className="row-container container-hspread-sm tab-container">
      {tabs && tabs.map(tab => <Tab title={tab.name} active={tab===tabs[activeTab]} /> )}
    </div>
    <div className="separator"></div>
    <ClothesList size='small' preview={true} clothes={tabs[activeTab].items} />
  </div>;

export default Suggestions;