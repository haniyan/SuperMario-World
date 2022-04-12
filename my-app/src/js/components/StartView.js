import React, {useContext} from 'react';
import {LeftColumn} from "./LeftColumn";
import {RightColumn} from "./RightColumn";
import {ThemeContext} from '../context/ThemeContext';
import {markersArray} from './elements/markersArray';

import BackgroundImage from '../../assets/background.jpg'


export const StartView = () => {
    const theme = useContext(ThemeContext)

    return (
        <ThemeContext.Provider value={theme}>
        <div className="windowApp" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <LeftColumn/>
            <RightColumn/>
        </div></ThemeContext.Provider>
    )

}