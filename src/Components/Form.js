import React, { useState } from 'react'

function Form1() {

    let [userName, setuserName] = useState('');
    let [userEmail, setuserEmail] = useState('');

    const changeUserName = e => {
        setuserName(userName = e.target.value)
    }
    const changeUserEmail = e => {
        setuserEmail(userEmail = e.target.value)
    }
    const submitHandle = e => {
        alert(`${userName} ${userEmail} `)
        e.preventDefault()
    }

    return (
        <form onSubmit={submitHandle}>
            <div>
                <label>UserName:</label>
                <input required type="text" value={userName} onChange={changeUserName} />
            </div>
            <br />
            <div>
                <label>UserEmail:</label>
                <input required type="email" value={userEmail} onChange={changeUserEmail} />
            </div>
            <br />
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form1
