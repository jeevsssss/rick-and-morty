import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import './episode.css';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(response => {
        setEpisodes(response.data.results);
      });
  }, []);

  return (
    <div>
      <h1>Rick and Morty Episodes</h1>
      <div className="episode-list">
        {episodes.map(episode => (
          <EpisodeCard
            key={episode.id}
            name={episode.name}
            airDate={episode.air_date}
            episodeCode={episode.episode}
            characters={episode.characters}
          />
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
