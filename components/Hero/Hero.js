import React from 'react';
import Slider from 'react-slick';
import clsx from 'clsx';
import styles from './Hero.module.scss';
const Hero = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section>
            <Slider {...settings}>
                <div className={clsx(styles.slideWrapper)}>
                    <div
                        className={clsx(styles.slide)}
                        style={{
                            backgroundImage: 'url(' + './firstslide.png' + ')',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <div className={clsx(styles.slideContent)}>
                        <h2>{'Shop New Arrivals'}</h2>
                        <p>{'Our Coolest new items are waiting for you!'}</p>
                        <a className="button">{'Shop now'}</a>
                    </div>
                </div>
                <div className={clsx(styles.slideWrapper)}>
                    <div
                        className={clsx(styles.slide)}
                        style={{
                            backgroundImage: 'url(' + './slide2.png' + ')',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <div className={clsx(styles.slideContent)}>
                        <h2>{'Shop New Arrivals'}</h2>
                        <p>{'Our Coolest new items are waiting for you!'}</p>
                        <a className="button">{'Shop now'}</a>
                    </div>
                </div>
                <div className={clsx(styles.slideWrapper)}>
                    <div
                        className={clsx(styles.slide)}
                        style={{
                            backgroundImage: 'url(' + './slide3.png' + ')',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <div className={clsx(styles.slideContent)}>
                        <h2>{'Shop New Arrivals'}</h2>
                        <p>{'Our Coolest new items are waiting for you!'}</p>
                        <a className="button">{'Shop now'}</a>
                    </div>
                </div>
            </Slider>
        </section>
    );
};
export default Hero;
