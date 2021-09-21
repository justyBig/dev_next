import { Facebook, Insta, Twitter } from '../Icons';
import React, { useState } from 'react';

import clsx from 'clsx';
import styles from './Footer.module.scss';

const Footer = () => {
    const [mobileMenu, setMobileMenu] = useState([]);
    const handelItemClick = (menu) => {
        if (mobileMenu.includes(menu)) {
            const newList = mobileMenu.filter((subMenu) => subMenu !== menu);
            setMobileMenu(newList);
        } else {
            setMobileMenu([...mobileMenu, menu]);
        }
    };
    return (
        <footer className={clsx('bg-black', styles.footer)}>
            <nav>
                <ul className={clsx(styles.footerLinks)}>
                    <li
                        className={clsx(styles.hasSub, {
                            [styles.subMenuActive]:
                                mobileMenu.includes('CustServ'),
                        })}
                        onClick={(e) => handelItemClick('CustServ')}
                    >
                        {'Customer Service'}
                        <ul className={clsx(styles.subMenu)}>
                            <li>
                                <a href="#">{'Accessibility'}</a>
                            </li>
                            <li>
                                <a href="#">{'Contact Us'}</a>
                            </li>
                            <li>
                                <a href="#">{'Return Policy'}</a>
                            </li>
                            <li>
                                <a href="#">{'FAQ'}</a>
                            </li>
                            <li>
                                <a href="#">{'Gift Certificates'}</a>
                            </li>
                            <li>
                                <a href="#">{'Wishlist'}</a>
                            </li>
                        </ul>
                    </li>
                    <li
                        className={clsx(styles.hasSub, {
                            [styles.subMenuActive]:
                                mobileMenu.includes('company'),
                        })}
                        onClick={(e) => handelItemClick('company')}
                    >
                        {'Company'}
                        <ul>
                            <li>
                                <a href="#">{'About Us'}</a>
                            </li>
                            <li>
                                <a href="#">{'Careers'}</a>
                            </li>
                            <li>
                                <a href="#">{'Press'}</a>
                            </li>
                            <li>
                                <a href="#">{'Affiliates'}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className={clsx(styles.socialShare)}>
                <span className={clsx(styles.socialShareTitle)}>
                    {'Follow Us'}
                </span>
                <div className={clsx(styles.socialShareIcons)}>
                    <div className={clsx(styles.icon)}>
                        <a href="#">
                            <Facebook fill="#fff" />
                        </a>
                    </div>
                    <div className={clsx(styles.icon)}>
                        <a href="#">
                            <Insta fill="#fff" />
                        </a>
                    </div>
                    <div className={clsx(styles.icon)}>
                        <a href="#">
                            <Twitter fill="#fff" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
