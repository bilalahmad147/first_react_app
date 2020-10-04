import React, { Component } from 'react'

class Hello extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "ahmad"
        }
    }

    changeName (){
        this.setState(
            {
                name : "Ali"
            }
        )
    }


    render() {
        return (
            <div>
                <h1>hello {this.state.name} </h1>
                <button onClick={() => { this.changeName() }}>Change Name</button>
            </div>
        )
    }
}

export default Hello;
