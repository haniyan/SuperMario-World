import React, {useContext, useState, useEffect} from "react";
import Typical from "react-typical";
import MainDiv from '../../../assets/markers/main_div.png';
import iconSearch from '../../../assets/markers/ask_btn.png';
import {ThemeContext} from '../../context/ThemeContext';
import {markersArray} from './markersArray';


export const MainSection = () => {

    const [color, setColor] = useState('#15d326')
    const [hideContent, setHideContent] = useState(true)
    const [showSearch, setShowSearch] = useState(false)
    const [showIcon, setShowIcon] = useState(false)

    const infoContentAnimation = () => {
        setTimeout(() => {
            hideInfoContentElements()
            showSearchElement()

        }, 16000)
        setTimeout(() => {
            showIconElement()
            hideSearchElement()
        }, 30000)
    }

    useEffect(() => {
        infoContentAnimation()
    }, []);


    const hideInfoContentElements = () => {
        setHideContent(false)
    }
    const showSearchElement = () => {
        setShowSearch(true)
        console.log("pokazuje")
    }
    const hideSearchElement = () => {
        setShowSearch(false)
        console.log("chowam")
    }
    const showIconElement = () => {
        setShowIcon(true)
    }


    const {place} = useContext(ThemeContext)


    return (
        <div className="mainSection">

            {
                showIcon ?
                    <div className="icon" style={{backgroundImage: markersArray[place]}}/> : null
            }
            {
                showSearch ? <div className="iconSearch" style={{backgroundImage: `url(${iconSearch}`}}/> : null
            }
            {
                hideContent ?
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
}

