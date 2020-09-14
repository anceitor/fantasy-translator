import React from 'react';
import Translator from './Componets/Translator'
import './App.css';
import './background.css'

function App() {
  return (
    <div className="App">
      <header className="App-header" id="patterned">
        <h1>Fantasy Language Translator</h1>
        <Translator/>
      </header>
    </div>
  );
}

export default App;
