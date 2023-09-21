import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TextTransition, { presets } from 'react-text-transition';

const Home = () => {
    const [index, setIndex] = useState(0);
    const texts = ["FRONTEND", "REACT"];

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1), 3000
        );

        return () => clearTimeout(intervalId);
    }, [])
    return (
        <>

            <div className='home-container'>

                <h1>EMRE <span>TIRABZONLU</span></h1>
                <div className='text-animation'>
                    <h3 className='animation-h3'><TextTransition springConfig={presets.wobbly}>{texts[index % texts.length]}</TextTransition></h3>
                    <h3>DEVELOPER</h3>
                </div>
                <Link to={"/contact"}><button>Get in Touch</button></Link>
            </div>
        </>
    )
}

export default Home