import React from 'react';
import clsx from 'clsx';
import styles from './Hamburger.module.scss';
const Hamburger = ({ handelMobileClick }) => {
    return (
        <div className={clsx(styles.hamburger)} onClick={handelMobileClick}>
            <div className={clsx(styles.topBun)}></div>
            <div className={clsx(styles.patty)}></div>
            <div className={clsx(styles.botBun)}></div>
        </div>
    );
};

export default Hamburger;
