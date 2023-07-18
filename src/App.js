import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Clip from './components/Clip';
import CharacterList from './components/CharacterList';
import EpisodeList from './components/EpisodeList';

import './App.css';

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/rick-and-morty" element={<Home />} />
        <Route path="/Clip" element={<Clip />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/episodes" element={<EpisodeList />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
