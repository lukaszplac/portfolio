import React from 'react';
import AuxComp from '../../helpers/AuxComp';

const StartContent = (props) => {

    return(
        <AuxComp>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
        </AuxComp>
    );
};

export default StartContent;