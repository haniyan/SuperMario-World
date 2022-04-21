import React, {useContext, useMemo, useState} from "react";
import {TipSection} from "./RightColumn/TipSection";
import {MyMap} from "./LeftColumn/MapSection";
// import {AddToFavBox} from "./futureAdds/AddToFavBox";


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


