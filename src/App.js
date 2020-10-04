import React from 'react';
import './App.css';
import Hello from "./Components/Hello"
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Hello name="bilal" />
      <Welcome name="bilal" />
    </div>
  );
}

export default App;
