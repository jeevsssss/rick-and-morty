import React from 'react';
import './character.css';

const CharacterCard = ({ name, image, status, species }) => {
  return (
    <div className="character-card">
      <div className="image-container">
        <img src={image} alt={name} className="character-image" />
      </div>
      <h2 className="character-name">{name}</h2>
      <p className="character-status">Status: {status}</p>
      <p className="character-species">Species: {species}</p>
    </div>
  );
};

export default CharacterCard;
