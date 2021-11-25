import React from 'react';

const Testimonial = ({ name, position, photoID, summary }) => {
    return (
        <div className='testimonial'>
            <div className='testimonial__wrapper'>
                <div className='testimonial__photo'>
                    <img
                        src={ `./images/image-${photoID}.jpg` }
                        alt={ `Photo ${photoID}` }
                        className='testimonial__pic'
                    />
                </div>
                <p className='testimonial__summary ff-barlow'>
                    { summary }
                </p>
                <div className='testimonial__client'>
                    <p className='testimonial__client-name ff-fraunces'>
                        { name }
                    </p>
                    <p className='testimonial__client-position ff-barlow'>
                        { position }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
