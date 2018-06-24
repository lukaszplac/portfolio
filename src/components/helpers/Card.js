import React from 'react';
import styles from './Card.scss';
import AuxComp from './AuxComp';

const Card = (props) => {
    let offset = props.offset * 5;
    let inlineStyling = {
        clipPath: `polygon(0 0, 100% 0, 100% ${offset}px, calc(100% - 30px) ${offset}px, calc(100% - 30px) 100%, 0 100%, 0 0)`,
        backgroundColor: props.background.color,
        zIndex: props.zIndex,
        animationDelay: props.delay
    }
    return(
        <AuxComp>
            <div className={styles.hoverArea} style={{minHeight: `${offset}px`, zIndex: props.zIndex+1}}></div>
            <div className={styles.card} style={inlineStyling}>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </AuxComp>
    );
};

export default Card;