import { useState } from "react"
import React from 'react'

function Welcome() {

    let initialState = "fiasal"
    const [name, setName] = useState(initialState)

    return (
        <div>
            <h1>welcome {name} </h1>
            <button onClick={() => { setName("bilal") }}>Change Name</button>
        </div>
    )
}

export default Welcome;
