import React,{useState} from 'react'

function Greet() {
    let initialState = "hello bilal";
    let [name, setName] = useState(initialState)
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={()=>{setName('welcome ali')}}>Change Name</button>
        </div>
    )
}

export default Greet;