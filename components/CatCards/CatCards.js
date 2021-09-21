import Card from './Card';
import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import styles from './CatCards.module.scss';

const CatCards = () => {
    return (
        <section>
            <div className="container">
                <div className={clsx(styles.cardDeck)}>
                    <Card image="/WomensCatImg.png" label="Womens" />
                    <Card image="/MensCatImg.png" label="Mens" />
                    <Card image="/AccessoriesCatIimg.png" label="Accessories" />
                </div>
            </div>
        </section>
    );
};
export default CatCards;
