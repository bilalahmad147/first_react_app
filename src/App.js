import React from 'react';
import './App.css';
import FetchUseEffect from './Components/FetchUseEffect';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';


function App() {

  return (
      <div className="App">
        <FetchUseEffect />
        <Router>
          <Route path='/home'><Home /></Route>
          <Route path='/about'><About /></Route>
        </Router>
      </div>
      
  );
}

export default App;
