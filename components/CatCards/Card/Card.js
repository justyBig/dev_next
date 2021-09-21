import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.scss';

const Card = ({ image, label }) => (
    <div className={clsx(styles.card)}>
        <div
            className={clsx(styles.imgWrapper)}
            style={{ backgroundImage: 'url(' + image + ')' }}
        ></div>
        <div className={clsx(styles.label)}>
            <h2 className={clsx('h2')}>{label}</h2>
        </div>
    </div>
);
export default Card;
