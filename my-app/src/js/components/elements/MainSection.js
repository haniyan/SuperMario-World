import React, {useState} from "react";
import Typical from "react-typical";
import MainDiv from '../../../assets/markers/main_div.png';
import FavBtn from '../../../assets/markers/fav_btn.png';


export const MainSection = () => {
//STATE DO INFOCONTENT

    const [color, setColor] = useState('#15d326')


//FUNKCJE INFOCONTENT
    function changeTextColorInfoContent() {
        setColor(setColor => '#e30d3e')
    }

    const infoContentAnimation = () => {
        setTimeout(() => {
            changeTextColorInfoContent()

        }, 8000)

    }


    return (
        infoContentAnimation(),
            <div className="mainSection">
                <button className="addToFav" style={{backgroundImage: `url(${FavBtn})`}}/>
                <div className="icon"/>
                <h1 className="infoContent" style={{color: `${color}`, fontSize: "40px", textAlign: "center"}}>
                    <Typical
                        loop={1}
                        wrapper="b"
                        steps={
                            ["CO ROBIĆ WE WROCŁAWIU?",
                                5000,
                                "WYBIERZ LOSOWE MIEJSCE NA MAPIE",
                                5000,
                            ]
                        }/>

                </h1>
                <div className="infoBox" style={{backgroundImage: `url(${MainDiv})`}}/>
            </div>
    );
};
