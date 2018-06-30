import React from 'react';
import styles from './AboutContent.scss';

const AboutContent = (props) => {

    let pics = props.iconSet.map((icon,i) => {
        let image = require(`../../../../res/img/${icon}`);
        return (<img src={image} alt="web picture" key={i}></img>);
    });
    let paragraphs = props.text.split(';').map((par,i) => {
        let classes = [styles.paragraph];
        if (props.fontChangable) classes.push(styles.fontChange);
        return (<p key={i} className={classes.join(' ')}>{par}</p>)
    });
    return(
        <div className={styles.content}>
            <div className={styles.pics}>
                {pics}
            </div>
            <div className={styles.text}>
                <h2>{props.heading}</h2>
                {paragraphs}
            </div>
        </div>
    );
};

export default AboutContent;