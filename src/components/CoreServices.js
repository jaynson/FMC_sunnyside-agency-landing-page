import React from 'react';
import './coreServices.css';

const CoreServices = () => {
    return (
        <section className='core-services'>
            <div className='core-services__wrapper'>
                <div className='core-services__feature core-services__feature-description'>
                    <div className='core-services__feature-content'>
                        <h2 className='core-services__title ff-fraunces'>
                            Transform your brand
                        </h2>
                        <p className='core-services__summary ff-barlow'>
                            We are a full-service creative agency specializing in helping brands grow fast.
                            Engage your clients through compelling visuals that do most of the marketing for you.
                        </p>
                        <div className="btn-inline btn-inline--stand-out ">
                            <a className='btn ff-fraunces' href='#'>
                                Learn more
                            </a>
                            <div className='inline inline--transform'></div>
                        </div>
                    </div>
                </div>
                <picture className='core-services__feature'>
                    <source srcSet='./images/mobile/image-transform.jpg' media="(max-width: 50em)" className='core-services__photo'></source>
                    <img src='./images/desktop/image-transform.jpg' alt='Transform egg' className='core-services__photo'></img>
                </picture>
                <picture className='core-services__feature'>
                    <source srcSet='./images/mobile/image-stand-out.jpg' media="(max-width: 50em)" className='core-services__photo'></source>
                    <img src='./images/desktop/image-stand-out.jpg' alt='Stand out wine glass' className='core-services__photo'></img>
                </picture>
                <div className='core-services__feature core-services__feature-description'>
                    <div className='core-services__feature-content'>
                        <h2 className='core-services__title ff-fraunces'>
                            Stand out to the right audience
                        </h2>
                        <p className='core-services__summary ff-barlow'>
                            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                        </p>
                        <div className="btn-inline btn-inline--stand-out ">
                            <a className='btn ff-fraunces' href='#'>
                                Learn more
                            </a>
                            <div className='inline inline--stand-out'></div>
                        </div>
                    </div>
                </div>

                <div className="cropper core-services__feature ">
                    <figure className='core-services__offering core-services__offering--gfx'>
                        <picture className='core-services__feature--pic'>
                            <source srcSet='./images/mobile/image-graphic-design.jpg' media="(max-width: 50em)" className='core-services__photo'></source>
                            <img src='./images/desktop/image-graphic-design.jpg' alt='Graphic Design Cherries' className='core-services__photo'></img>
                        </picture>
                        <figcaption className='core-services__offering-content'>
                            <h3 className='core-services__offering-title ff-fraunces'>
                                Graphic design
                            </h3>
                            <p className='core-services__offering-description ff-barlow'>
                                Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                            </p>
                        </figcaption>
                    </figure>
                </div>
                <div className="cropper core-services__feature ">
                    <figure className='core-services__feature core-services__offering core-services__offering--photography'>
                        <picture className='core-services__feature--pic'>
                            <source srcSet='./images/mobile/image-photography.jpg' media="(max-width: 50em)" className='core-services__photo'></source>
                            <img src='./images/desktop/image-photography.jpg' alt='Graphic Design Cherries' className='core-services__photo'></img>
                        </picture>
                        <figcaption className='core-services__offering-content'>
                            <h3 className='core-services__offering-title ff-fraunces'>
                                Photography
                            </h3>
                            <p className='core-services__offering-description ff-barlow'>
                                Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                            </p>
                        </figcaption>
                    </figure>
                </div>

            </div>
        </section>
    );
};

export default CoreServices;
