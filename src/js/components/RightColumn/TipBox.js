import React from 'react';
import Typical from "react-typical";
import GreenStar from '../../../assets/markers/green_star.png'


export const TipBox = () => {

    const tipText = ["Nudzisz się i nie wiesz co robić?",
        "Odkryj miejsce wybierając je na mapie",
        "Kliknij wykrzyknik i zobacz co się pod nim kryje"
    ]

    return (
        <div className="tipBox">
            <div className="icon" style={{backgroundImage: `url(${GreenStar})`}}/>
            <p className="tipText" style={{color: `#0f865c`, fontSize: "24px", textAlign: "center"}}>
                <Typical
                    loop={10}
                    wrapper="b"
                    steps={
                        [`${tipText[0]}`,
                            4000,
                            `${tipText[1]}`,
                            4000,
                            `${tipText[2]}`,
                            4000,
                        ]
                    }/>
            </p>
        </div>


    );
};


