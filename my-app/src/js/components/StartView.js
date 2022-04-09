import React from 'react';
import {LeftColumn} from "./LeftColumn";
import {RightColumn} from "./RightColumn";

import BackgroundImage from '../../assets/background.jpg'


export const StartView = () => {
    return (

        <div className="windowApp" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <LeftColumn/>
            <RightColumn/>
        </div>
    )

}