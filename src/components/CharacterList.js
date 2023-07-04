
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import './character.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      let allCharacters = [];
      let nextPage = 'https://rickandmortyapi.com/api/character';

      while (nextPage) {
        const response = await axios.get(nextPage);
        const { results, info } = response.data;

        allCharacters = allCharacters.concat(results);
        nextPage = info.next;
      }

      setCharacters(allCharacters);
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <div className="character-head">Rick and Morty Characters</div>
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
