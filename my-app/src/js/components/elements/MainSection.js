import React, {useContext, useState} from "react";
import Typical from "react-typical";

import MainDiv from '../../../assets/markers/main_div.png';
import FavBtn from '../../../assets/markers/fav_btn.png';
import iconSearch from '../../../assets/markers/ask_btn.png';

import {ThemeContext} from '../../context/ThemeContext';
import {markersArray} from './markersArray';
import {AddToFavBox} from "./AddToFavBox";


export const MainSection = () => {

    //STATE DO INFOCONTENT
    const [color, setColor] = useState('#15d326')

    //FUNKCJE INFOCONTENT

    const infoContentAnimation = () => {
        setTimeout(() => {
        }, 8500)

    }

    //potem przeniesc uzycia tych funkcji do kontextu
    const hideElement = () => {
        setHide(false)
    }
    const showElement = () => {
        setHide(true)
    }


    //do infocontent
    const [hide, setHide] = useState(true)

    //do icon
    const [show, setShow] = useState(true)

    //icon search
    const [showSearch, setShowSearch] = useState(false)

    const hideInfoContent = () => {
        setTimeout(() => {
            setHide(false)
            setShowSearch(true)
        }, 16000)
    }


    //przekazujemy kontekst do hooka i hook przechwytuje kontext najbliższego dostepnego providera, a ten przekazalam w startView
    const theme = useContext(ThemeContext)

    // console.log(markersArray)
    console.log(markersArray[theme])

    const addToFavouritePlaces = ()=>{
    //    parametry jakie będę przekazywała do kon tekstu, żeby pokazać

    }


    const { place, setPlace } = useContext(ThemeContext);

    console.log("markerarray[place]", markersArray[place])

    return (


        infoContentAnimation(), hideInfoContent(),


            <div className="mainSection">
                <button className="addToFav" style={{backgroundImage: `url(${FavBtn})`}} onClick={addToFavouritePlaces}/>
                {/*{*/}
                {/*    show ?*/}
                {/*        <div className="icon" style={{backgroundImage: markersArray[place]}}/> : null*/}
                {/*    //pomocnicze*/}
                {/*    // <div className="icon" style={{backgroundImage: `url(${FavBtn}`}}/> : null*/}
                {/*}*/}

                {
                    showSearch ? <div className="iconSearch" style={{backgroundImage: `url(${iconSearch}`}}/> : null
                }


                {
                    hide ?
                        <h1 className="infoContent" style={{color: `${color}`, fontSize: "40px", textAlign: "center"}}>
                            <Typical
                                loop={1}
                                wrapper="b"
                                steps={
                                    ["CO ROBIĆ WE WROCŁAWIU?",
                                        6000,
                                        "WYBIERZ LOSOWE MIEJSCE NA MAPIE",
                                         6000,
                                    ]
                                }/>

                        </h1> : null
                }

                <div className="infoBox" style={{backgroundImage: `url(${MainDiv})`}}/>

            </div>
    );
};

