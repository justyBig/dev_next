import React from 'react';
import Slider from 'react-slick';
import clsx from 'clsx';
import styles from './Arrivals.module.scss';
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={clsx(className, styles.nextArrow)} onClick={onClick}>
            <img src="/icons/lgAngle.png" />
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={clsx(className, styles.prevArrow)} onClick={onClick}>
            <img src="/icons/lgAngle.png" />
        </div>
    );
};
const Arrivals = () => {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        mobileFirst: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    const createSlide = () => (
        <div className={clsx(styles.slide)}>
            <div className={styles.ImgWrapper}>
                <img src="/ArrivalImg.png" />
            </div>
            <div className={clsx(styles.cardContent)}>
                <span className={clsx(styles.title)}>Product Title</span>
                <p className={clsx(styles.description)}>WOMEN’S T-SHIRT</p>
                <span className={styles.price}>$19.99</span>
            </div>
        </div>
    );
    const slides = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <section className={clsx(styles.arrivals)}>
            <h2 className={('h1', styles.sectionTitle)}>Shop New Arrivals</h2>
            <div className={clsx('container')}>
                <Slider {...settings}>
                    {slides.map((slide) => createSlide())}
                </Slider>
            </div>
        </section>
    );
};
export default Arrivals;
