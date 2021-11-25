import React from 'react';
import Testimonial from './Testimonial';
import data from '../data.json';

const TestimonialView = () => {

    const testimonials = data.map(client => {
        return (
            <Testimonial
                key={ client.key }
                name={ client.client }
                position={ client.position }
                summary={ client.testimonial }
                photoID={ (client.client.split(' ')[0].substr(0, 1).toLowerCase() + client.client.split(' ')[0].slice(1)).trim() }
            />
        );
    });

    return (
        <section className='testimonial-view'>
            <h3 className='testimonial-view__title ff-fraunces'>Client Testimonials</h3>
            <div className='testimonial-view__wrapper'>
                { testimonials }
            </div>

        </section>
    );
};

export default TestimonialView;
