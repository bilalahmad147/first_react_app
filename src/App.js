import React, { useState } from 'react';
import './App.css';
import Child1 from './Components/Child1';
import { connect } from 'react-redux'


function App() {

  const [state, setstate] = useState(0)
  console.log(state)

  return (
    <div className='App'>
      <Child1 name={state} />
    </div>
  );
}

const stateToProp = (state) => ({
  name: state.name,
  email: 'bilal@gmail.com'
})


export default connect(stateToProp, null)(App);
