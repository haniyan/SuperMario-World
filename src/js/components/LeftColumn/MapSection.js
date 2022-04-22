import React, {useState, useContext} from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import {NavigationControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MyMarkers from "../../../data/wroclaw.json";
import MarkerBtn from '../../../assets/markers/marker.png';
import {MapPlaceContext} from "../../context/MapPlaceContext";


export function MyMap() {
    const {setPlace} = useContext(MapPlaceContext);

    const [viewport, setViewport] = useState({
        latitude: 51.107883,
        longitude: 17.038538,
        width: "784px",
        height: "531px",

    });

    const markerHandleClick = (marker) => {
        const theme = marker.properties.id;
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
                            pitchAlignment="map"
                            style={{width: '40px', height: '40px', position: 'absolute'}}>
                        <button onClick={() => markerHandleClick(marker)} style={{backgroundImage: `url(${MarkerBtn})`}}
                                className="markerBtn"/>
                    </Marker>)
                )}
                <NavigationControl/>
            </ReactMapGL>
        </>
    )


}