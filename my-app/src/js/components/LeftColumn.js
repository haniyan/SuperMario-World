import React from "react";
import {TipSection} from "./elements/TipSection";


import MapSection from "./MapSection";

export const LeftColumn = () => {
    return (
        <>
            <div className="leftColumn">
                <div className="mapSection">
                    <MapSection     googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"

                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `400px`, width: "500px" }} />}
                                    mapElement={<div style={{ height: `100%` }} />}/>    </div>
                <TipSection/>
            </div>
        </>
    )
}

//
// export const LeftColumn = () => {
//     return (
//         <>
//             <div className="leftColumn">
//                 <div className="mapSection">
//                     <div id="map"/>
//                 </div>
//                 <TipSection/>
//             </div>
//         </>
//     )
// }
