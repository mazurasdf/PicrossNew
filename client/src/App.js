import React from 'react';
import Main from './views/Main';
import SinglePuzzle from './views/SinglePuzzle';
import { Router } from '@reach/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <SinglePuzzle path="/single" />
      </Router>
    </div>
  );
}

export default App;