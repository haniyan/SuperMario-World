import React, {useContext} from 'react';
import FavBtn from '../../../assets/markers/fav_btn.png';
import {ThemeContext} from "../../context/ThemeContext";
import {markersArray} from "./markersArray";


export const AddToFavBox = () => {

    const {place} = useContext(ThemeContext)

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


