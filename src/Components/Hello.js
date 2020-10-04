import React, { Component } from 'react'

class Hello extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div>
                <h1>hello world {this.props.name}</h1>
            </div>
        )
    }
}

export default Hello;
