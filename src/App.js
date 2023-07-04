import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import './App.css';

const App = () => {
  return (
    <Router>
        <Menu />
    </Router>
  );
};

export default App;
