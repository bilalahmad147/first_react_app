import React from 'react'
import '../App.css'
import useWebAnimations,{headShake} from "@wellyshen/use-web-animations";

function Animation() {

    const { ref } = useWebAnimations({...headShake})

    return (
        <div>
            <div className='target' ref={ref}>
                <h1>hello world</h1>
            </div>
        </div>
    )
}

export default Animation
