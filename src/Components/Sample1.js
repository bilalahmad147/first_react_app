import React,{useState} from 'react'

function Sample1() {

    let [num, setNum] = useState(0)

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={()=>{setNum(++num)}}>Plus</button>
        </div>
    )
}

export default Sample1
