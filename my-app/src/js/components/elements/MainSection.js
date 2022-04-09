import React, {useState} from "react";
import Typical from "react-typical";
import MainDiv from '../../../assets/markers/main_div.png';
import FavBtn from '../../../assets/markers/fav_btn.png';




export const MainSection = () => {
//STATE DO INFOCONTENT

    const [color, setColor] =useState('#0e8d63')
    // const [text, setText] =useState(["CO ROBIĆ WE WROCŁAWIU?"])

//FUNKCJE INFOCONTENT
    function changeTextColorInfoContent(){
        setColor(setColor=> '#e34864')
    }
    const infoContentAnimation=()=>{

        setTimeout(()=>{
            changeTextColorInfoContent()

        },7000)

    }

    //WYSWIETLANIE PO LITERCE - react typical




    return (
        infoContentAnimation(),
        <div className="mainSection">
            <button className="addToFav" style={{backgroundImage: `url(${FavBtn})`}}/>
            <div className="icon"/>
            <h1 className="infoContent" style={{color: `${color}`, fontSize: "40px", textAlign: "center"}}>
            <Typical
                loop = {Infinity}
                wrapper="b"
                steps={
                    ["CO ROBIĆ WE WROCŁAWIU?",
                        7000,
                        "WYBIERZ LOSOWE MIEJSCE NA MAPIE",
                        7000,
                    ]
                }/>

            </h1>
            <div className="infoBox" style={{backgroundImage: `url(${MainDiv})`}}/>
        </div>
    );
};
