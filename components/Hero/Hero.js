import Button from '../Button';
import React from 'react';
import Slide from './Slide';
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
        dotsClass: clsx(styles.slickDots, 'slick-dots'),
    };
    return (
        <section>
            <Slider {...settings}>
                <Slide
                    img="./firstslide.png"
                    contentTitle={'Shop New Arrivals'}
                    content={'Our Coolest new items are waiting for you!'}
                    btnType={'black'}
                    btnText={'SHOP NOW'}
                    link="#"
                    color={'green'}
                />
                <Slide
                    img="./slide2.png"
                    contentTitle={'Our Fave Tees'}
                    content={'Shop all of our favorites.'}
                    btnType={'black'}
                    btnText={'SHOP NOW'}
                    link="#"
                />
                <Slide
                    img="./slide3.png"
                    contentTitle={'Men’s Tees'}
                    content={'Find the perfect shirt.'}
                    btnType={'black'}
                    btnText={'SHOP NOW'}
                    link="#"
                />
            </Slider>
        </section>
    );
};
export default Hero;
