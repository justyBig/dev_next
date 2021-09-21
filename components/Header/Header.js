import React, { useState } from 'react';

import Hamburger from './Hamburger';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './Header.module.scss';

const Menu = ({ mobileClick, mobileOpenProp }) => {
    const [open, setOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    console.log('menu', mobileMenu);
    const handelBurgerClick = () => {
        setOpen(!open);
    };
    const handelItemClick = (menu) => {
        if (mobileMenu.includes(menu)) {
            const newList = mobileMenu.filter((subMenu) => subMenu !== menu);
            setMobileMenu(newList);
        } else {
            setMobileMenu([...mobileMenu, menu]);
        }
    };
    const handelSearchClick = () => {
        setShowSearch(!showSearch);
    };
    return (
        <header className={styles.header}>
            <div className={clsx(styles.alertBanner)}>
                <span>FREE SHIPPING ON ALL ORDERS OVER $75</span>
            </div>
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
                        <li
                            className={clsx(styles.hasSub, {
                                [styles.subMenuActive]:
                                    mobileMenu.includes('tops'),
                            })}
                            onClick={(e) => handelItemClick('tops')}
                        >
                            {'TOPS'}
                            <ul>
                                <li>
                                    <a href="#">{'T-Shirts'}</a>
                                </li>
                                <li>
                                    <a href="#">{'Short Sleeve'}</a>
                                </li>
                                <li>
                                    <a href="#">{'Long Sleeve'}</a>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={clsx(styles.hasSub, {
                                [styles.subMenuActive]:
                                    mobileMenu.includes('bottoms'),
                            })}
                            onClick={(e) => handelItemClick('bottoms')}
                        >
                            {'BOTTOMS'}
                            <ul>
                                <li>
                                    <a href="#">{'Shorts'}</a>
                                </li>
                                <li>
                                    <a href="#">{'Pants'}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className={clsx(styles.desktop, styles.navList)}>
                        <li>
                            <a href="#">{"MEN'S"}</a>
                        </li>
                        <li>
                            <a href="#">{'WOMENS'}</a>
                        </li>
                        <li>
                            <a href="#">{'ACCESSORIES'}</a>
                        </li>
                        <li>
                            <a href="#">{'SALE!'}</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={clsx(styles.header__item, styles.header__icons)}>
                <div className={clsx(styles.header__search)}>
                    <a
                        href="javascript:void(0)"
                        onClick={handelSearchClick}
                        className={clsx({
                            [styles.searchIconHide]: showSearch,
                        })}
                    >
                        <Image
                            src="/icons/loupe_1.png"
                            layout="intrinsic"
                            height={20}
                            width={20}
                        />
                    </a>
                    <div
                        className={clsx(styles.searchForm, {
                            [styles.open]: showSearch,
                        })}
                    >
                        <form>
                            <input
                                type="text"
                                placeholder="What are you searching for?"
                            ></input>
                            <button type="submit">GO</button>
                        </form>
                    </div>
                </div>
                <div className={clsx(styles.header__account)}>
                    <a
                        href="javascript:void(0)"
                        className="header__icon header__icon--account"
                    >
                        <Image
                            src="/icons/user_1.png"
                            layout="intrinsic"
                            height={23}
                            width={23}
                        />
                    </a>
                </div>
                <div className={clsx(styles.header__cart)}>
                    <a
                        href="javascript:void(0)"
                        className="header__icon header__icon--cart"
                    >
                        <Image
                            src="/icons/shopping-cart.png"
                            layout="intrinsic"
                            height={20}
                            width={20}
                        />
                    </a>
                </div>
            </div>
        </header>
    );
};
export default Menu;
