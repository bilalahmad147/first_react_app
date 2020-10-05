import React from 'react'

function Abc() {

    let nameObj = {
        firstName: "bilal",
        lastName: "ahmad",
        rollNo: 15
    }

    return (
        <div>
            {nameObj.map(
                (obj) => {
                    return (
                        <h1>{obj}</h1>
                    )
                }
            )}
        </div>
    )
}

export default Abc;
