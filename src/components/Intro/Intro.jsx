import React from 'react'
import About from '../About/About'
import './Intro.css'

function Intro() {
    return (
        <div>
            <div className='intro-container'>
                <img src='./images/songhee.png' alt='songhee'></img>
                <p>&lt;Hello my="name-is"&gt;</p>
                <h1>SONGHEE YIM</h1>
                <h2>FULL STACK DEVELOPER</h2>
                <p>&lt;I like="Debugging"&gt;&lt;/I&gt;</p>
                <p>&lt;/Hello&gt;</p>
            </div>
            <About />
        </div>
    )
}

export default Intro
