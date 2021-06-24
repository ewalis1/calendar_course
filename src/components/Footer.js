import React from 'react';

export default function Footer() {
    return (
        <div className='row footer' id="contact">
            <div className='container'>
                <ul>
                    <li><a href='https://www.instagram.com/bikeszkola/' className='footer__link'><i className="fab fa-instagram"></i></a></li>
                    <li><a href='https://www.facebook.com/bikeszkola' className='footer__link'><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href='https://www.instagram.com/hard_luck_story/' className='footer__link'><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    );
}