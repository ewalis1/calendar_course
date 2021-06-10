import React, {useState} from 'react';
import logo from '../logo.png';

export default function Navbar() {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    
    return (
        <div className='row banner'>
            {/* <img className="banner" src={image} alt="mtb"/> */}
            <div className="nav">
                <nav className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="bikeszkola"/>
                </div>
                <div className='menu-icon' onClick={() => setHamburgerMenu(!hamburgerMenu)}>
                    <i className={hamburgerMenu ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={hamburgerMenu ? "navbar__menu-active" : "navbar__menu"}>
                    <li><a href='./' className='navbar__link'>Start</a></li>
                    <li><a href='#calendar' className='navbar__link'>Kalendarz</a></li>
                    <li><a href='http://bikeszkola.pl' className='navbar__link'>Bikeszkoła</a></li>
                    <li><a href='https://www.hls-shop.pl/kategoria-produktu/hls/' className='navbar__link'>Sklep</a></li>
                    <li><a href='#contact' className='navbar__link'>Social media</a></li>
                </ul>
            </nav>
            </div>
        </div>
    );
}