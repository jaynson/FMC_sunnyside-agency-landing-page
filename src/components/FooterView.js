import React from 'react';
import './footerView.css';

const FooterView = () => {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <svg className='svg-logo footer__logo-icon'>
                    <use xlinkHref='sprite.svg#logo'></use>
                </svg>
                <nav className='nav footer__nav'>
                    <ul className='nav__list footer__nav-list'>
                        <li className='nav-item footer__nav-item'>
                            <a className='nav-link footer__nav-link ff-barlow' href='#'>
                                About
                            </a>
                        </li>
                        <li className='nav-item footer__nav-item'>
                            <a className='nav-link footer__nav-link ff-barlow' href='#'>
                                Services
                            </a>
                        </li>
                        <li className='nav-item footer__nav-item'>
                            <a className='nav-link footer__nav-link ff-barlow' href='#'>
                                Projects
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className='footer__share-group'>
                    <svg className='footer__share-icon'>
                        <use xlinkHref='sprite.svg#icon-facebook'></use>
                    </svg>
                    <svg className='footer__share-icon'>
                        <use xlinkHref='sprite.svg#icon-instagram'></use>
                    </svg>
                    <svg className='footer__share-icon'>
                        <use xlinkHref='sprite.svg#icon-twitter'></use>
                    </svg>
                    <svg className='footer__share-icon'>
                        <use xlinkHref='sprite.svg#icon-pinterest'></use>
                    </svg>
                </div>
            </div>

        </footer>
    );
};

export default FooterView;
