import React, { useState } from 'react';
import FooterView from './FooterView';
import HeaderView from './HeaderView';
import MainView from './MainView';



const App = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = (e) => {
        const target = e.target;
        if (target.matches('.dropdown__hamburger') || target.matches('.dropdown__hamburger--use')) {
            setClicked(!clicked);
        } else {
            setClicked(false);
        }
        console.log(clicked);
    };

    window.addEventListener('resize', () => {
        setClicked(false);
    });

    return (
        <div className='container' onClick={ handleClick }>
            <div className='component'>
                <HeaderView menuClicked={ clicked } />
                <MainView />
                <FooterView />
            </div>
        </div>
    );
};

export default App;
