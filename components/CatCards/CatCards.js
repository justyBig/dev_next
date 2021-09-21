import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import styles from './CatCards.module.scss';

const CatCards = () => {
    return (
        <section>
            <div className="container">
                <div className={clsx(styles.cardDeck)}>
                    <div className={clsx(styles.card)}>
                        <div>Image</div>
                        <div>TYPE</div>
                    </div>
                    <div className={clsx(styles.card)}>
                        <div>Image</div>
                        <div>TYPE</div>
                    </div>
                    <div className={clsx(styles.card)}>
                        <div>Image</div>
                        <div>TYPE</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CatCards;
