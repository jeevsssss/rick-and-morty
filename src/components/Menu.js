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
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/episodes" element={<EpisodeList />} />
      </Routes>
    </nav>
  );
};

const Home = () => {
  return <h1>Welcome to the Home Page</h1>;
};

export default Menu;
