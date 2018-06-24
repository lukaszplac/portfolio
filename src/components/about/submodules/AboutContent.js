import React from 'react';
import AuxComp from '../../helpers/AuxComp';
import styles from './AboutContent.scss';

const AboutContent = (props) => {

    let pics = props.picsSet.map((icon,i) => (
        <img src={`../../../../res/img/${icon}`} alt="web picture" key={i}></img>
    ));
    let paragraphs = props.text.split(';').map((par,i) => {
        let classes = [styles.paragraph];
        console.log(props.fontChangable);
        if (props.fontChangable) classes.push(styles.fontChange);
        return (<p key={i} className={classes.join(' ')}>{par}</p>)
    });
    return(
        <AuxComp>
            <div className={styles.pics}>
                {pics}
            </div>
            <div className={styles.text}>
                <h2>{props.heading}</h2>
                {paragraphs}
            </div>
        </AuxComp>
    );
};

export default AboutContent;