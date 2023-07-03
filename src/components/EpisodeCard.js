import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './episode.css';

const EpisodeCard = ({ name, airDate, episodeCode, characters }) => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterData = await Promise.all(
        characters.map(characterUrl => axios.get(characterUrl))
      );
      const characterList = characterData.map(response => response.data);
      setCharacterList(characterList);
    };

    fetchCharacters();
  }, [characters]);

  return (
    <div className="episode-card">
      <h2>{name}</h2>
      <p>Air Date: {airDate}</p>
      <p>Episode: {episodeCode}</p>
      <hr></hr>
      <h3>Characters:</h3>
      <ul>
        {characterList.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeCard;
