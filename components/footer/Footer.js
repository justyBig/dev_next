import React from 'react';
import clsx from 'clsx';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <section>
            <nav>
                <ul>
                    <li className={clsx(styles.hasSub)}>
                        {'Customer Service'}
                        <ul>
                            <li>Accessibility</li>
                            <li>Contact Us</li>
                            <li>Return Policy</li>
                            <li>FAQ</li>
                            <li>Gift Certificates</li>
                            <li>Wishlist</li>
                        </ul>
                    </li>
                    <li className={clsx(styles.hasSub)}>
                        {'Company'}
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Affiliates</li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div>
                <span>{'Follow Us'}</span>
                <div classNAme="SocialWrap">
                    <div className="SocialShare">FB</div>
                    <div className="SocialShare">Insta</div>
                    <div className="SocialShare">Twitter</div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
