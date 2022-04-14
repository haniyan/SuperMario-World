import React, {useContext} from "react";
import {TipSection} from "./elements/TipSection";
import {MyMap} from "./MapSection";
import {ThemeContext} from "../context/ThemeContext";



// import MapSection from "./MapSection";

export const LeftColumn = () => {

    const theme = useContext(ThemeContext);

    return (

            <div className="leftColumn">
                <div className="mapSection">
                    <div id="map">
                        <MyMap/>
                    </div>
                </div>
                <TipSection/>

            </div>

    )
}


