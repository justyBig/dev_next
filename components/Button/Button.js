import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
const Button = ({ btnType, btnText, styleName = '', link }) => {
    return (
        <a
            className={clsx(
                styleName,
                { [styles.btnBlack]: btnType === 'black' },
                { [styles.btnBlack]: btnType === 'green' },
                { [styles.btnBlack]: btnType === 'outline' }
            )}
            href={link}
        >
            {btnText}
        </a>
    );
};

export default Button;
