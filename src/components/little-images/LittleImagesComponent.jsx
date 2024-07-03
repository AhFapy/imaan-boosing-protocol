import React from 'react';
import './little-images-component.css';

function LittleImagesComponent({ url, onClick, isSelected }) {
  return (
    <div
      className={`little-img-div `}
      onClick={onClick}
    >
      <img className={`little-img ${isSelected ? 'selected' : ''}`} src={url} alt="Little" />
    </div>
  );
}

export default LittleImagesComponent;
