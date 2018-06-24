import React from 'react';
import AuxComp from './AuxComp';
import styles from './Header.scss';

const Header = (props) => {

    return(
        <AuxComp>
            <h2 className="animated fadeInLeft">{props.welcome}</h2>
            <h1 className={"animated fadeInDown " + styles.header1}>{props.headerMain}</h1>
            <h2 className={"animated fadeInUpBig " + styles.header2}>{props.headerSub}</h2>
            <p className={"animated fadeInRight " + styles.text}>{props.text}</p>
        </AuxComp>
    );
};

export default Header;