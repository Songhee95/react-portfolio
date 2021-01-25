import React from 'react'
import About from '../About/About'
import './Intro.css'

function Intro() {
    return (
        <div>
            <div className='intro-container'>
                <img className="intro-pic fadeOut" src={process.env.PUBLIC_URL + '/images/1.jpg'} alt='songhee'></img>
                <div className="intro-context fadeIn">
                    <p>&lt;Hello my="name-is"&gt;</p>
                    <h1>SONGHEE YIM</h1>
                    <h2>FULL STACK DEVELOPER</h2>
                    <p>&lt;I like="Debugging"&gt;&lt;/I&gt;</p>
                    <p>&lt;/Hello&gt;</p>
                </div>
            </div>
            <About />
        </div>
    )
}

export default Intro
