import React from 'react';
import "./About.css"

function About() {
    return (
        <>
        <div className='about-container'>
            <div className='about-me'>
            <h1>About me</h1>
                <p>
                    Full Stack Developer with Engineering background to think more
                    logically and process more efficiently in creating code. Recently
                    earned a certificate in Full Stack Development from Georgia
                    institute of Technology. I have honed my skills in HTML5, CSS,
                    Bootstrap, jQuery, JavaScript, React.js, and responsive Web design
                    to develop clear and impactive client-side applications and MySQL,
                    MoingoDB, Node.js and Express.js to develop effective server-side
                    applications. Known as an outstanding problem solver with analyzing
                    skills and able to work with a team while solving problems in
                    high-stress environments. My motivation is to make great
                    collaboration by giving respect and support to my teammates and this
                    motivation leads our project and team to success. Looking to bring
                    my passion and technical skills to the company to grow and become a
                    valuable asset.
                </p>
            </div>

            <div className='skill-strength row'>
                <div className='skill-set col-sm-12 col-md-12 col-lg-6'>
                    <h1>Skill Set</h1>
                    <div className="icons row">
                        <i className="devicon-css3-plain-wordmark about-devicon col"></i>
                        <i className="devicon-bootstrap-plain-wordmark about-devicon col"></i>
                        <i className="devicon-jquery-plain-wordmark about-devicon col"></i>
                        <i className="devicon-javascript-plain about-devicon col"></i>
                        <i className="devicon-html5-plain-wordmark about-devicon col"></i>
                        <i className="devicon-react-plain-wordmark about-devicon col"></i>
                        <i className="devicon-nodejs-plain-wordmark about-devicon col"></i>
                        <i className="devicon-express-original-wordmark about-devicon col"></i>
                        <i className="devicon-mysql-plain-wordmark about-devicon col"></i>
                        <i className="devicon-mongodb-plain-wordmark about-devicon col"></i>
                        <i className="devicon-heroku-original-wordmark about-devicon col"></i>
                    </div>
                </div>
                
                <div className='workplace-strength col-sm-12 col-md-12 col-lg-6'>
                    <h1>Workplace Strength</h1>
                    <div className="row">
                        <div>Great Teamwork Skill</div> 
                        <div>Collaboration</div>
                        <div>Fast Learner</div>
                        <div>Problem-Solving by Analyzing</div> 
                        <div>Excellent Time Management</div> 
                        <div>Mind Control Under Pressure</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
