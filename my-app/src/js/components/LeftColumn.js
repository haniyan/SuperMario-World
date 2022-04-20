import React, {useContext, useMemo, useState} from "react";
import {TipSection} from "./elements/TipSection";
import {MyMap} from "./MapSection";
import {AddToFavBox} from "./elements/AddToFavBox";


export const LeftColumn = () => {





    return (
        <div className="leftColumn">
            <div className="mapSection">
                <div className="mapdiv">
                    <div id="map">
                        <MyMap/>
                    </div>
                </div>
            </div>
            <TipSection/>

        </div>
    )
}


