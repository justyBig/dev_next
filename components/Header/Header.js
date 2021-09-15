import React, { useState } from 'react';

import Hamburger from './Hamburger';
import clsx from 'clsx';
import styles from './Header.module.scss';

const Menu = ({ mobileClick, mobileOpenProp }) => {
    const [open, setOpen] = useState(false);
    const handelBurgerClick = () => {
        setOpen(!open);
    };
    return (
        <header className={styles.header}>
            <Hamburger handelMobileClick={mobileClick} />
            <div className={clsx(styles.header__item, styles.header__logo)}>
                <img className={clsx(styles.imgLogo)} src="/logo.png" />
            </div>
            <div
                className={clsx(styles.header__item, styles.header__nav, {
                    [styles.show]: mobileOpenProp,
                })}
            >
                {mobileOpenProp && (
                    <div
                        className={clsx(styles.closeBtn)}
                        onClick={mobileClick}
                    ></div>
                )}
                <nav>
                    <ul className={clsx(styles.mobile, styles.navList)}>
                        <li className={styles.hasSub}>
                            TOPS
                            <ul>
                                <li>T-Shirts</li>
                                <li>Short Sleeve</li>
                                <li>Long Sleeve</li>
                            </ul>
                        </li>
                        <li className={styles.hasSub}>
                            BOTTOMS
                            <ul>
                                <li>Shorts</li>
                                <li>Pants</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className={clsx(styles.desktop, styles.navList)}>
                        <li>MEN'S</li>
                        <li>WOMENS</li>
                        <li>ACCESSORIES</li>
                        <li>SALE!</li>
                    </ul>
                </nav>
            </div>
            <div className={clsx(styles.header__item, styles.header__icons)}>
                <div className={clsx(styles.header__search)}>
                    <a href="javascript:void(0)">
                        <img src="/icons/loupe_1.png" />
                    </a>
                </div>
                <div className={clsx(styles.header__account)}>
                    <a
                        href="javascript:void(0)"
                        className="header__icon header__icon--account"
                    >
                        <img src="/icons/user_1.png" />
                    </a>
                </div>
                <div className={clsx(styles.header__cart)}>
                    <a
                        href="javascript:void(0)"
                        className="header__icon header__icon--cart"
                    >
                        <img src="/icons/shopping-cart.png" />
                    </a>
                </div>
            </div>
        </header>
    );
};
export default Menu;
