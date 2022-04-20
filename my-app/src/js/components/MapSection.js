import React, {useMemo, useState, useContext } from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import {markersArray} from "./elements/markersArray";
import MyMarkers from "../../data/wroclaw.json";
import MarkerBtn from '../../assets/markers/marker.png';
import {ThemeContext} from "../context/ThemeContext";
import 'mapbox-gl/dist/mapbox-gl.css';

import Map, {NavigationControl} from 'react-map-gl';



export function MyMap() {
    //initial viewport info
    const {setPlace} = useContext(ThemeContext);
    const {setShowIcon} = useContext(ThemeContext);

    const [viewport, setViewport] = useState({
        latitude: 51.107883,
        longitude: 17.038538,
        width: "784px",
        height: "531px",

    });

    const markerHandleClick = (marker) => {

        const theme = marker.properties.id;

        console.log(theme, typeof(theme))
        console.log(marker.geometry.coordinates[0],marker.geometry.coordinates[1])

        setPlace(theme)

    }




    return (

        <>
            <ReactMapGL {...viewport}
                        mapboxAccessToken="pk.eyJ1IjoiaGFuaXlhbiIsImEiOiJjbDF0NmNwbzIwMmxjM29tcmJ0Y2ZiMm00In0.SSjgbJpIpDS2l4hRyIO5mA"
                        mapStyle="mapbox://styles/haniyan/cl1rro81r002t14mq3jeqaayo"
                        onViewportChange={(viewport) => {
                            setViewport(viewport)
                        }}
            >
                {MyMarkers.features.map(marker => (
                    <Marker key={marker.properties.id}
                            latitude={marker.geometry.coordinates[1]}
                            longitude={marker.geometry.coordinates[0]}
                            offset={null}
                            anchor="center"
                            pitchAlignment= "map"
                            style={{width: '40px', height: '40px', position:'absolute'}}>
                        <button onClick={() => markerHandleClick(marker)} style={{backgroundImage: `url(${MarkerBtn})`}}
                                className="markerBtn"/>

                    </Marker>)
                )}

                <NavigationControl />
            </ReactMapGL>


        </>
    )


}