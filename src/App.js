import React from 'react';
import './App.css';
import List from './List';

function App() {

  let className = "App"

  return (
    <div className={`list1 ${className}`}>
      <List />
    </div>
  );
}

export default App;
