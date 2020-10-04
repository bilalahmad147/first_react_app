import React, { Component, useState } from 'react'

class CounterClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    minusNum (){
        this.setState({
            count: this.state.count - 1
        })
    }


    render() {
        return (
            <div>
                <h1>Counter by CC : {this.state.count}</h1>
                <button onClick={(pre)=>{this.minusNum()}}>MINUS</button>
            </div>
        )
    }
}

export default CounterClass;
