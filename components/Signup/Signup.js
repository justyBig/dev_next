import Button from '../Button';
import { Email } from '../Icons';
import React from 'react';
import clsx from 'clsx';
import styles from './Signup.module.scss';

const Signup = () => {
    return (
        <section className={clsx('bg-green', styles.signup)}>
            <div className={clsx('container')}>
                <h2 className={clsx('h2', styles.sectionTitle)}>
                    <Email fill="#fff" />
                    Sign Up & Stay Connected
                </h2>
                <div className={clsx(styles.signupContent)}>
                    <p className={clsx(styles.content)}>
                        Sign up for the newsletter and get 20% off! Gain access
                        to exclusive offers and be the first to know when new
                        stuff drops!
                    </p>
                    <form className={clsx(styles.emailSignup)}>
                        <input type="text" />
                        <Button
                            btnType="outline"
                            btnText="Subscribe"
                            styleName={styles.subscribeBtn}
                            link="#"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Signup;
