import React from 'react';
import styles from './Card.scss';
import AuxComp from './AuxComp';

const Card = (props) => {
    let offset = props.offset * 5;
    let inlineStyling = {
        clipPath: `polygon(0 0, 100% 0, 100% ${offset}px, calc(100% - 30px) ${offset}px, calc(100% - 30px) 100%, 0 100%, 0 0)`,
        backgroundColor: props.background.color,
        zIndex: props.zIndex,
        animationDelay: props.delay,
    }
    let classes=[styles.card];
    if (props.show) classes.push(styles.show);
    if (props.showFull) classes.push(styles.showFull);
    if (props.someCardIsOpen && props.hidden) classes.push(styles.hidden);
    return(
        <AuxComp>
            <div className={classes.join(' ')} 
                 style={inlineStyling} 
                 onMouseEnter={() => props.onEnter(props.id)}
                 onMouseLeave={() => props.onLeave()}
                 onClick={() => props.onClick(props.id)}
                 onMouseOver={(e) => props.onMove(e)}>
                 
                 <div className={styles.content}>
                    {props.children}
                 </div>
            </div>
        </AuxComp>
    );
};

export default Card;