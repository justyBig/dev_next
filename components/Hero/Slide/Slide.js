import Button from '../../Button';
import React from 'react';
import clsx from 'clsx';
import styles from './Slide.module.scss';
const Slide = ({
    img,
    contentTitle,
    content,
    btnType,
    btnText,
    link,
    color = 'white',
    variation = 'slider',
}) => {
    return (
        <div className={clsx(styles.slideWrapper)}>
            <div
                className={clsx(styles.slide)}
                style={{
                    backgroundImage: 'url(' + `${img}` + ')',
                }}
            ></div>
            <div
                className={clsx(
                    styles.slideContent,
                    {
                        [styles.green]: color === 'green',
                    },
                    {
                        [styles.fullWidth]: variation === 'fullWidth',
                    }
                )}
            >
                {contentTitle && (
                    <h2 className={clsx('h1', styles.h2)}>{contentTitle}</h2>
                )}
                {content && <p>{content}</p>}
                <Button
                    btnType={variation === 'fullWidth' ? 'green' : btnType}
                    btnText={btnText}
                    styleName={clsx(styles.shopBtn)}
                    link={link}
                ></Button>
            </div>
        </div>
    );
};
export default Slide;
