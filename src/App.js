import React from 'react';
import './App.css';
import CounterClass from './Components/CounterClass';
import CounterFunction from './Components/CounterFunction';
import Hello from "./Components/Hello"
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <CounterFunction />
      <CounterClass />
      {/* <Hello />
      <Welcome /> */}
    </div>
  );
}

export default App;
