import React from 'react';
import styles from './StartContent.scss';

const StartContent = (props) => {

    let icons = props.iconSet.map((icon,i) => {
        let image = require(`../../../../res/img/icons/${icon}`);
        return <img src={image} alt="web icon" key={i}></img>
    });
    return(
        <div className={styles.content}>
            <div className={styles.icons}>
                {icons}
            </div>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
        </div>
    );
};

export default StartContent;