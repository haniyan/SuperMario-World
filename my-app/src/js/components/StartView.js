import React, {useState, useMemo} from 'react';
import {LeftColumn} from "./LeftColumn";
import {RightColumn} from "./RightColumn";
import {ThemeContext} from '../context/ThemeContext';
import {markersArray} from './elements/markersArray';
import BackgroundImage from '../../assets/background.jpg'
import MyMarkers from "../../data/wroclaw.json";
import {markerHandleClick} from "../function/markerClick";



export const StartView = () => {

    const [place, setPlace] = useState(MyMarkers.features.map(marker => (marker.properties.id)));
    const value = useMemo(() => ({ place, setPlace }), [place]);


    return (
        <ThemeContext.Provider value={value}>
            <div className="windowApp" style={{backgroundImage: `url(${BackgroundImage})`}}>
                <LeftColumn/>
                <RightColumn/>
            </div></ThemeContext.Provider>
    )

}
