import React from 'react';
import clsx from 'clsx';
import styles from './Follow.module.scss';
const Follow = () => {
    const createCard = (card) => (
        <div className={clsx(styles.socialCard)}>
            <div
                className={styles.imgWrapper}
                style={{ backgroundImage: 'url(' + card + ')' }}
            ></div>
        </div>
    );
    const cards = [
        '/Social-1.png',
        '/Social-2.png',
        '/Social-3.png',
        '/Social-4.png',
        '/Social-5.png',
    ];
    return (
        <section>
            <h2 className={clsx('h1', styles.h1)}>Follow Us On Instagram!</h2>
            <div className={clsx('container')}>
                <div className={clsx(styles.cardDeck)}>
                    {cards.map((card) => createCard(card))}
                </div>
            </div>
        </section>
    );
};
export default Follow;
