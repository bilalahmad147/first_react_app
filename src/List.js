import React from 'react'

function List() {

    let listArray = ['ali', 'bilal', 'sira', 'hira'];

    return (
        <div>
            {
                listArray.map((obj) => {
                    return <li key={obj}>{obj}</li>
                })}
        </div>
    )
}

export default List;