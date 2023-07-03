import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response=> {
        setCharacters(response.data.results);
      });
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
