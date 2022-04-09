import React from 'react';

import TipDiv from '../../../assets/markers/tip_div.png'
import GreenStar from '../../../assets/markers/green_star.png'


export const TipBox = () => {
    return (
        <div className="tipBox">
            <div className="icon" style={{backgroundImage: `url(${GreenStar})`}}/>
            <p className="tipText"/>
        </div>
    );
};
