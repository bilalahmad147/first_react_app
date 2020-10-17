import React from 'react';
import './App.css';
import Child1 from './Components/Child1';
import { connect } from 'react-redux'


function App() {

  console.log("redux-data",)

  return (
    <div className='App'>
      <Child1 />
    </div>
  );
}

const stateToProp = (state) => ({
  name: state.name,
  email: 'bilal@gmail.com'
})

export default connect(stateToProp,null)(App);
