import React, { useContext, useState } from 'react'
import CounterContext from './CounterContext'

function CountContext() {

    let Count = useContext(CounterContext)
    let [Count1, setCount] = useState(Count)

    return (
        <div>
            <h1>Counter : {Count1}</h1>
            <button onClick={setCount(++Count1)}> + </button>
        </div>
    )
}

export default CountContext
