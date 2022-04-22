import React, {useState, useMemo} from 'react';
import {LeftColumn} from "./LeftColumn";
import {RightColumn} from "./RightColumn";
import {MapPlaceContext} from '../context/MapPlaceContext';
import BackgroundImage from '../../assets/background.jpg'
import MyMarkers from "../../data/wroclaw.json";


export const StartView = () => {

    const [place, setPlace] = useState(MyMarkers.features.map(marker => (marker.properties.id)));
    const value = useMemo(() => ({place, setPlace}), [place]);


    return (
        <MapPlaceContext.Provider value={value}>
            <div className="windowApp" style={{backgroundImage: `url(${BackgroundImage})`}}>
                <LeftColumn/>
                <RightColumn/>
            </div>
        </MapPlaceContext.Provider>
    )
}
