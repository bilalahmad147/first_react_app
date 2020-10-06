import React from 'react';
import './App.css';
import CountContext from './Components/CountContext';
import CounterContext from './Components/CounterContext';

function App() {

  let initValue = 0;

  return (
    <CounterContext.Provider value={initValue}>
      <div className="App">
          <CountContext />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
