import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Menu.css';
import CharacterList from './CharacterList';
import EpisodeList from './EpisodeList';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/"/>
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/episodes" element={<EpisodeList />} />
      </Routes>
    </nav>
  );
};



export default Menu;
