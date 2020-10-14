import React from 'react'
import '../App.css'
import useWebAnimations from "@wellyshen/use-web-animations";

function Animation() {

    const { ref, playState } = useWebAnimations({
        keyframes: {
            transform: ["translateX(500px)"], // Move by 500px
            background: ["red", "blue", "green"], // Go through three colors
        },
        timing: {
            delay: 500, // Start with a 500ms delay
            duration: 1000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        },
        onReady: ({ playState, animate, animation }) => { },
        onUpdate: ({ playState, animate, animation }) => { },
        onFinish: ({ playState, animate, animation }) => { },
    });

    return (
        <div>
            <div className='target' ref={ref}></div>
        </div>
    )
}

export default Animation
