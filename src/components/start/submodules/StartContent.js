import React from 'react';
import AuxComp from '../../helpers/AuxComp';
import styles from './StartContent.scss';

const StartContent = (props) => {

    let icons = props.iconSet.map((icon,i) => (
        <img src={`../../../../res/img/icons/${icon}`} alt="web icon" key={i}></img>
    ));
    return(
        <AuxComp>
            <div className={styles.icons}>
                {icons}
            </div>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
        </AuxComp>
    );
};

export default StartContent;