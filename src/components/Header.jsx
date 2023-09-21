import React, { useState } from 'react'
import logo from '../images/logo.png'
import menu from '../images/icons8-menu-30.png'
import close from '../images/icons8-close-50.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <img className='logo' src={logo} />
            <ul className={`${menuOpen && "responsive_nav"}`}>
                <li onClick={()=>setMenuOpen(false)} className='li-a'><Link to={"/"}>Home</Link></li>
                <li onClick={()=>setMenuOpen(false)} className='li-a'><Link to={"/about-me"}>About</Link></li>
                <li onClick={()=>setMenuOpen(false)} className='li-a'><Link to={"/portfolio"}>Portfolio</Link></li>
                <li onClick={()=>setMenuOpen(false)} className='li-a'><Link to={"/contact"}>Contact</Link></li>
                <img className='nav-btn nav-close-btn' onClick={() => setMenuOpen(false)} src={close} alt="" />

            </ul>
            <img className='nav-btn' onClick={() => setMenuOpen(true)} src={menu} alt="" />
        </header>
    )
}

export default Header