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
                className={clsx(styles.slideContent, {
                    [styles.green]: color === 'green',
                })}
            >
                {contentTitle && (
                    <h2 className={clsx('h2', styles.h2)}>{contentTitle}</h2>
                )}
                {content && <p>{content}</p>}
                <Button
                    btnType={btnType}
                    btnText={btnText}
                    styleName={clsx(styles.shopBtn)}
                    link={link}
                ></Button>
            </div>
        </div>
    );
};
export default Slide;
