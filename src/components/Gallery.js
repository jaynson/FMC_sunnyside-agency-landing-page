import React from 'react';

const Gallery = () => {
    return (
        <div className='gallery'>
            <picture className='gallery__pic'>
                <source srcSet='./images/mobile/image-gallery-milkbottles.jpg' media="(max-width: 50em)" className='gallery__photo'></source>
                <img src='./images/desktop/image-gallery-milkbottles.jpg' alt='milk bottles' className='gallery__photo'></img>
            </picture>
            <picture className='gallery__pic'>
                <source srcSet='./images/mobile/image-gallery-orange.jpg' media="(max-width: 50em)" className='gallery__photo'></source>
                <img src='./images/desktop/image-gallery-orange.jpg' alt='milk bottles' className='gallery__photo'></img>
            </picture>
            <picture className='gallery__pic'>
                <source srcSet='./images/mobile/image-gallery-cone.jpg' media="(max-width: 50em)" className='gallery__photo'></source>
                <img src='./images/desktop/image-gallery-cone.jpg' alt='milk bottles' className='gallery__photo'></img>
            </picture>
            <picture className='gallery__pic'>
                <source srcSet='./images/mobile/image-gallery-sugar-cubes.jpg' media="(max-width: 50em)" className='gallery__photo'></source>
                <img src='./images/desktop/image-gallery-sugarcubes.jpg' alt='milk bottles' className='gallery__photo'></img>
            </picture>
        </div>
    );
};

export default Gallery;
