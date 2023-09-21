import React, { useEffect, useState } from 'react'
import profil from '../images/Profil.jpeg'
import TextTransition, { presets } from 'react-text-transition';
import { Link } from 'react-router-dom';

const About = () => {

    const [index, setIndex] = useState(0);
    const texts = ["FRONTEND", "REACT"];

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1), 3000
        );

        return () => clearTimeout(intervalId);
    }, [])
    return (
        <div className='about-container'>

            <div className='img-container'>
                <img src={profil} />
            </div>

            <div className="text-container">
                <h1>EMRE <span>TIRABZONLU</span></h1>
                <div className='text-animation'>
                    <h2 className='animation-h3'><TextTransition springConfig={presets.wobbly}>{texts[index % texts.length]}</TextTransition></h2>
                    <h2>DEVELOPER</h2>
                </div>
                <p>Hi, I'm a Frontend Developer especiallly interested in React.js. I’m passioned in front-end developing such as HTML5, CSS3 and JavaScript. Creating is the best motivation for me. I I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative.</p>
                <Link to={"/about-me/detail"}><button>Learn More</button></Link>
            </div>

        </div>
    )
}

export default About