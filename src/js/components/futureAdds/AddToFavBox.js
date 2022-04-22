import React, {useContext} from 'react';
import {MapPlaceContext} from "../../context/MapPlaceContext";
import {markersArray} from "../LeftColumn/markersArray";


export const AddToFavBox = () => {

    const {place} = useContext(MapPlaceContext)

    return (

        <div className="addToFavBox">
            <h3 className="favName">Ostatnio oglądane</h3>
            <div className="favRow">
                {
                    `${place}` ?
                        <div className="addToFav" style={{backgroundImage: markersArray[place]}}/>  : null
                }

            </div>
        </div>


    );
};


