import React,{useState} from 'react'

function Sample1() {

    let num = 5;
    const [num, setNum] = useState(num)
    console.log(num)

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={()=>{setNum(num++)}}>Plus</button>
        </div>
    )
}

export default Sample1
