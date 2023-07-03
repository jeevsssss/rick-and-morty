import React from 'react';

const CharacterCard = ({ name, image, status, species }) => {
  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
    </div>
  );
};

export default CharacterCard;
