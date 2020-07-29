import React from 'react';
import logo from './logo.svg';
import './App.css';
import ViewJokes from './components/ViewJokes/ViewJokes';
import AddJokes from './components/AddJokes/AddJokes';

function App() {
  return (
    <div className="App" >
      <div className="content">
        <h1>Joke trend - Chumma - Fun project</h1>
        <div className="Jokes">

          <AddJokes />
          <ViewJokes />
        </div>
      </div>
      <div class="waveWrapper waveAnimation">
        <div class="waveWrapperInner bgTop">
          <div class="wave waveTop wave1"></div>
        </div>
        <div class="waveWrapperInner bgMiddle">
          <div class="wave waveMiddle wave2"></div>
        </div>
        <div class="waveWrapperInner bgBottom">
          <div class="wave waveBottom wave3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
