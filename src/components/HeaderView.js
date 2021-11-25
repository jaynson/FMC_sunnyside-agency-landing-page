import React, { useState } from 'react';
import './headerView.css';

const HeaderView = ({ menuClicked }) => {


    return (
        <header className='header'>
            <div className='header__bg'>
                <section className="header__top">
                    <svg className='svg-logo header__logo-icon'>
                        <use xlinkHref='sprite.svg#logo'></use>
                    </svg>
                    <nav className='nav header__nav'>
                        <ul className='nav__list header__nav-list'>
                            <li className='nav-item header__nav-item'>
                                <a className='nav-link header__nav-link ff-barlow' href='#'>
                                    About
                                </a>
                            </li>
                            <li className='nav-item header__nav-item'>
                                <a className='nav-link header__nav-link ff-barlow' href='#'>
                                    Services
                                </a>
                            </li>
                            <li className='nav-item header__nav-item'>
                                <a className='nav-link header__nav-link ff-barlow' href='#'>
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a className='btn btn-rounded ff-fraunces'>Contact</a>
                    <div className='dropdown'>
                        <svg
                            className={ `dropdown__hamburger ${menuClicked ? 'activated' : ''}` }
                        // onClick={ handleClicked }
                        >
                            <use xlinkHref='sprite.svg#icon-hamburger' className='dropdown__hamburger--use'></use>
                        </svg>
                        <div className={ `dropdown__container ${menuClicked ? 'show' : ''}` }>
                            <div className='dropdown__tri'></div>
                            <div className="dropdown__square">
                                <div className='dropdown-content'>
                                    <nav className='nav dropdown__nav'>
                                        <ul className='nav__list dropdown__nav-list'>
                                            <li className='nav-item dropdown__nav-item'>
                                                <a className='nav-link dropdown__nav-link ff-barlow' href='#'>
                                                    About
                                                </a>
                                            </li>
                                            <li className='nav-item dropdown__nav-item'>
                                                <a className='nav-link dropdown__nav-link ff-barlow' href='#'>
                                                    Services
                                                </a>
                                            </li>
                                            <li className='nav-item dropdown__nav-item'>
                                                <a className='nav-link dropdown__nav-link ff-barlow' href='#'>
                                                    Projects
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <a className='btn btn-rounded btn-rounded--dropdown ff-fraunces'>Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='header__bottom'>

                    <h1 className='header__main-title ff-fraunces'>
                        We are creatives
                    </h1>
                    <svg className='header__main-icon'>
                        <use xlinkHref='sprite.svg#icon-arrow-down'></use>
                    </svg>
                </section>
            </div>
        </header>
    );
};

export default HeaderView;
