import React, { useState } from 'react'

function CounterFunction() {

    let initialState = 0;
    let [count, setCount] = useState(initialState)

    return (
        <div>
            <h1>Counter by FC : {count} </h1>
            <button onClick={()=>{setCount(++count)}}>PLUS ONE</button>
        </div>
    )
}

export default CounterFunction;
