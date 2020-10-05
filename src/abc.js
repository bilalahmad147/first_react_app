import React,{useState} from 'react'

function Abc() {

    let initialState = 0;
    const [Count, setCount] = useState(initialState)

    return (
        <div>
            <h1>counter : {Count}</h1>
            <button onClick={()=>setCount(initialState)}>Reset</button>
            <button onClick={()=>setCount(Count + 1)}>Plus</button>
            <button onClick={()=>setCount(Count - 1)}>Minus</button>
            <button onClick={()=>setCount(Count + 5)}>Plus 5</button>
        </div>
    )
}

export default Abc;
