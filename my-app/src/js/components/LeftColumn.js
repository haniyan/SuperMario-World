import React from "react";
import {TipSection} from "./elements/TipSection";
import {MyMap} from "./MapSection";


// import MapSection from "./MapSection";

export const LeftColumn = () => {
    return (
        <>
            <div className="leftColumn">
                <div className="mapSection">
                    <MyMap/>

                </div>
                <TipSection/>

            </div>
        </>
    )
}


{/*<MapSection     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC5wLdzlHyrigrwHViGuOgRspZk9udmIac&map_ids=2aa77f8c10881da9&v=3.exp&libraries=geometry,drawing,places"*/}
{/*                loadingElement={<div style={{ height: `100%` }} />}*/}
{/*                containerElement={<div style={{ height: `400px`, width: "850px" }} />}*/}
{/*                mapElement={<div style={{ height: `100%` }} />}/>*/}