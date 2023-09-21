import React from 'react'
import profil from '../images/Profil.jpeg'
import user from '../images/icons8-user-30.png'
import date from '../images/icons8-date-30.png'
import location from '../images/icons8-location-30.png'
import telephone from '../images/icons8-telephone-30.png'
import mail from '../images/icons8-mail-30.png'
import close from '../images/icons8-close-30.png'
import pdf from '../assets/my-cv.pdf'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (

        <div className='sidebar'>
            <div className='left-bar'>
                <img src={profil} />
                <h1>EMRE <span>TIRABZONLU</span></h1>
                <h3><span>Frontend </span> Developer</h3>
                <div className='my-detail'>
                    <p> <img src={user} />Emre Tırabzonlu</p>
                    <p> <img src={date} /> 16.02.1999</p>
                    <p> <img src={location} />Kocaeli/İzmit</p>
                    <p> <img src={telephone} />+90 542 392 16 02</p>
                    <p> <img src={mail} />emretrabzonluu@gmail.com</p>
                </div>
                <a
                    href={pdf}
                    download="ET-CV"
                    target="_blank"
                    rel="noopener noreferrer"
                ><button>Download CV</button>
                </a>
            </div>
            <div className='right-bar'>

                <div>
                    <div className='head-detail'>
                        <h2 style={{ paddingBottom: "30px" }}>About <span>me</span></h2>
                        <div className='close-button'>
                            <Link to={"/about-me"}><img src={close} /></Link>
                        </div>
                    </div>
                    <p>Hello everybody! My name is Emre Tırabzonlu. I am a frontend developer, and I'm very passionate and dedicated to my work. With 1 years experience as a professional a frontend developer, I have acquired the skills and knowledge.</p>
                </div>

                <hr />

                <div>
                    <h2 style={{ paddingBottom: "30px" }}>Programming <span>Skills</span></h2>
                    <div className='skills-detail'>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Javascript</p>
                        <p>Typescript</p>
                        <p>React.js</p>
                        <p>React-redux</p>
                        <p>Redux-Thunk</p>
                        <p>Redux-Toolkit</p>
                        <p>SCSS</p>
                        <p>Bootstrap</p>
                    </div>
                </div>
                <hr />
                <div className='education-detail'>
                    <h2>Education <span>Timeline</span></h2>
                    <div>
                        <div style={{ color: "gray" }}>2022-2024</div>
                        <div>
                            <h3>Public Relations and Advertising- Anadolu University, TR</h3>
                            <span>Bachelor Degree</span>
                        </div>
                    </div>

                    <div>
                        <div style={{ color: "gray" }}>2019-2021</div>
                        <div>
                            <h3>Construction Technology- Istanbul Aydin University, TR</h3>
                            <span>Associate Degree</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <h2 style={{ paddingBottom: "30px" }}>Working <span>Timeline</span></h2>

                    <div style={{ color: "gray" }}>2022-2023</div>
                    <div className='working-details'>
                        <h3>React Frontend Developer - Arabuleu, Paris <br /> Full Remote</h3>
                        <p>* I've built projects with HTML5, CSS3, SASS, Bootstrap, JavaScript and React. <br /> <br />
                            * While developing applications in React, I've used Axios, Redux, and Bootstrap.<br /><br />
                            * Different projects have been done with a variety of APIs.<br /><br />
                            * I have used utility applications such as GIT, Trello, Figma, and Slack.</p>
                    </div>

                </div>
                <hr />
                <div>
                    <h2 style={{ paddingBottom: "30px", color: "gold" }}>Certifications</h2>
                    <h3 style={{ paddingBottom: "30px" }}>REACT WITH WEB FRONTEND</h3>
                    <p><span>Programming Languages: </span>HTML5, CSS3, JavaScript, React.js, Redux, Redux-Toolkit, Redux-Thunk, TypeScript, SASS, SCSS, Slack, GitHub, Figma, Trello, Bootstrap, Tailwind</p>
                </div>
            </div>
        </div>


    )
}

export default Sidebar