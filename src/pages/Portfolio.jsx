import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
import img1 from '../images/gifs/1.gif'
import img2 from '../images/gifs/2.gif'
import img3 from '../images/gifs/3.gif'
import img4 from '../images/gifs/4.gif'
import img5 from '../images/gifs/5.gif'
import img6 from '../images/gifs/6.gif'
import img7 from '../images/gifs/7.gif'
import img8 from '../images/gifs/8.gif'
import img9 from '../images/gifs/9.gif'
import img10 from '../images/gifs/10.gif'
import img11 from '../images/gifs/11.gif'
import img12 from '../images/gifs/12.gif'
import img13 from '../images/gifs/13.gif'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <h1>Creative <span>Portfolio</span></h1>
            <hr />
            <div>
                <Splide options={{ autoWidth: true, gap: 10, pagination: false }}>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/Flight-Radar"}>
                            <img className='splide-img' src={img1} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/translate-app"}>
                            <img className='splide-img' src={img2} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/Netflix"}>
                            <img className='splide-img' src={img3} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/ChatGPT-app"}>
                            <img className='splide-img' src={img4} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/Job-List"}>
                            <img className='splide-img' src={img5} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/firebase-chat-app"}>
                            <img className='splide-img' src={img6} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/My-bookshelf"}>
                            <img className='splide-img' src={img7} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/NISSAN"}>
                            <img className='splide-img' src={img8} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/MVC-forum"}>
                            <img className='splide-img' src={img9} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/piton-bookshelf"}>
                            <img className='splide-img' src={img10} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/hamburger-restaurant-app"}>
                            <img className='splide-img' src={img11} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/pokedox-app"}>
                            <img className='splide-img' src={img12} />
                        </Link>
                    </SplideSlide>
                    <SplideSlide>
                        <Link to={"https://github.com/emretirabzonlu/react-todo-app"}>
                            <img className='splide-img' src={img13} />
                        </Link>
                    </SplideSlide>
                </Splide>
            </div>

        </div>
    )
}

export default Portfolio