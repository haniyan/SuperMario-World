import React from "react";
import {TipSection} from "./elements/TipSection";

export const LeftColumn = () => {
    return (
        <>
            <div className="leftColumn">
                <div className="mapSection">
                    <div id="map">...</div>
                </div>
                <TipSection/>
            </div>
        </>
    )
}
