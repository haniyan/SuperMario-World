import React from 'react';
import Typical from "react-typical";




import GreenStar from '../../../assets/markers/green_star.png'


export const TipBox = () => {
    const tipText = ["Odkryj miejsce wybierając je na mapie",
        "Odkryte miejsce możesz zapisać na później",
        "Kliknij na znak zapytania i odkryj tajemnicze miejsce",
        "Dodaj miejsce do ulubionych, żeby zapisać lokalizację na później"]



    return (

    <div className="tipBox">
        <div className="icon" style={{backgroundImage: `url(${GreenStar})`}}/>
        <p className="tipText" style={{color: `#0f865c`, fontSize: "24px", textAlign: "center"}}>
            <Typical
                loop={1}
                wrapper="b"
                steps={
                    [`${tipText[0]}`,
                        3000,
                        `${tipText[1]}`,
                        3000,
                        `${tipText[2]}`,
                        3000,
                        `${tipText[3]}`,
                        3000,
                    ]
                }/>

        </p>
    </div>


    );
};


