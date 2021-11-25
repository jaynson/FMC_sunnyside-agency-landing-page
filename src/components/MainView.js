import React from 'react';
import CoreServices from './CoreServices';
import Gallery from './Gallery';
import TestimonialView from './TestimonialView';

const MainView = () => {
    return (
        <main className='main' >
            <div className='main-container'>
                <CoreServices />
                <TestimonialView />
                <Gallery />
            </div>
        </main>
    );
};

export default MainView;
