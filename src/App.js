import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Menu />
      </div>
    </Router>
  );
};

export default App;
