import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import '../CSS/About.css';

export const About = ({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart
}) => {
    return (
        <>
            <div
                className={lightBg ? 'home__about-section' : 'home__about-section darkBg'}
            >
                <div className='container'>
                    <div
                        className='row home__about-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>
                            <div className='home__about-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__about-subtitle'
                                            : 'home__about-subtitle dark'
                                    }
                                >
                                    {description}
                                </p>
                                <Link to='/sign-up'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__about-img-wrapper'>
                                <img src={img} alt={alt} className='home__about-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
