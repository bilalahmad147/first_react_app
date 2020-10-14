import React from 'react'
import '../App.css'
import useWebAnimations from "@wellyshen/use-web-animations";

function Animation() {

    const { ref } = useWebAnimations({...animate__tada})

    return (
        <div>
            <div className='target' ref={ref}></div>
        </div>
    )
}

export default Animation
