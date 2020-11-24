import React from 'react';
import Main from './views/Main';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
      </Router>
    </div>
  );
}

export default App;