import React, {useState} from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import MyMarkers from "../../data/wroclaw.json";

import MarkerBtn from '../../assets/markers/marker.png';




export function MyMap() {
    //initial viewport info
    const [viewport, setViewport] = useState({
        latitude: 51.107883,
        longitude: 17.038538,
        // width: "50vw",
        // height: "20vh",
        // zoom: 10,
    });

    const markerHandleClick = (marker)=>{

        console.log("ippps", marker)

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
                            longitude={marker.geometry.coordinates[0]}>
                        <button onClick={() => markerHandleClick(marker)} style={{backgroundImage: `url(${MarkerBtn})`}} className="markerBtn"/>

                    </Marker>)
                )}


            </ReactMapGL>


        </>
    )


}


// import React, {Component} from 'react';
// import {withGoogleMap, withScriptjs, GoogleMap, Marker} from "react-google-maps";
//
// class MapSection extends Component {
//
//     //
//     // for (let i = 0; i < markers.length; i++) {
//     //     const currMarker = markers[i];
//     //     const marker = new google.maps.Marker({
//     //         position: {lat: currMarker[1], lng: currMarker[2]},
//     //         map,
//     //         title: currMarker[0],
//     //         icon: {
//     //             url: currMarker[3],
//     //             scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
//     //         },
//     //         animation: google.maps.Animation.DROP,
//     //     });
//     //
//     //     const infowindow = new google.maps.Infowindow({
//     //         content: currMarker[0], //nazwa contentu
//     //     })
//     //
//     //     marker.addListener("click", () => {
//     //         infowindow.open(map, marker)
//     //     })
//     // }
//
//
//     render() {
//         return (
//             <GoogleMap
//                 defaultZoom={16}
//                 defaultCenter={{lat: 51.11155555628178, lng: 17.047630976703307}}>
//                 <Marker
//                     position={{lat: 51.11155555628178, lng: 17.047630976703307}}/>
//
//             </GoogleMap>
//
//         );
//     }
// }
//
// export default withScriptjs(withGoogleMap(MapSection));
//
//
//
//
// // export function initMap() {
// //     //form google maps documentation
// //     const map = new google.maps.Map(document.getElementById('map'), {
// //
// //         //wroclaw 51.11155555628178, 17.047630976703307
// //
// //         center: {lat: 51.11155555628178, lng: 17.047630976703307},
// //         zoom: 16,
// //         mapId: MAP_ID,
// //         mapTypeControl: false,
// //         fullscreenControl: false,
// //         streetViewControl: false,
// //     });
// //
// //
// //     for (let i = 0; i < markers.length; i++) {
// //         const currMarker = markers[i];
// //         const marker = new google.maps.Marker({
// //             position: {lat: currMarker[1], lng: currMarker[2]},
// //             map,
// //             title: currMarker[0],
// //             icon: {
// //                 url: currMarker[3],
// //                 scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
// //             },
// //             animation: google.maps.Animation.DROP,
// //         });
// //
// //         const infowindow = new google.maps.Infowindow({
// //             content: currMarker[0], //nazwa contentu
// //         })
// //
// //         marker.addListener("click", () => {
// //             infowindow.open(map, marker)
// //         })
// //     }
// //
// // }
// //
//
//
// const markers = [
//     [
//         "Bastion Ceglarski",
//         51.1119176501328,
//         17.045646173017303,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Panorama Racławicka",
//         51.11021624526383,
//         17.044375285388092,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Hydropolis",
//         51.10431872983064,
//         17.05657562586204,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Kolejkowo",
//         51.094666765245464,
//         17.019643214224054,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Movie Gates",
//         51.10952784193189,
//         17.028997310517294,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Stadion Wrocław",
//         51.1413487306034,
//         16.94381711422491,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Grabowy Labirynt",
//         51.06265193473887,
//         17.072839756551073,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Kolorowe Podwórka",
//         51.12228182464003,
//         17.043168998879644,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Afrykarium",
//         51.10451887607578,
//         17.075230985388057,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Zoo Wrocław",
//         51.104260448470065,
//         17.074218448962615,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Fontanna multimedialna ",
//         51.10892854402768,
//         17.078992114224192,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Jaz Rędzin",
//         51.155911196386924,
//         16.962246985388994,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Ruiny Grodu Sołtysowice",
//         51.15372263594108,
//         17.08074372220435,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ], [
//         "Labirynt z kukurydzy",
//         50.970526009659444,
//         16.939834043057832,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Muzeum motoryzacji Topacz",
//         51.034120611983774,
//         16.990332935458753,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Muzeum powozów w Galowicach",
//         50.98325042450391,
//         17.00179668353211,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Muzeum Sztuki Mieszczańskiej",
//         51.10959452313832,
//         17.0321166065519,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Park trampolin",
//         51.13559323770006,
//         17.066244962376732,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Park trampolin",
//         51.08688084297076,
//         17.051739575811656,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Ostrów Tumski",
//         51.114618405396264,
//         17.04675865418171,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//
//     [
//         "Ogród Japonski",
//         51.10980856913848,
//         17.079087614224317,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Wieza widokowa w Kotowicach",
//         51.04175294142379,
//         17.233980112369544,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Kłódki zakochanych",
//         51.236836703851836,
//         17.04502921533447,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Historyczny tramwaj",
//         51.09461156734288,
//         16.984491230686118,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Winna Góra",
//         52.205899366008055,
//         17.44761703760992,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Plac Strzegomski",
//         51.112971810914544,
//         17.0059671853882,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Mostek pokutnic",
//         51.10975912565731,
//         17.034684627715585,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Centrum historii Zajezdnia",
//         51.09684443511585,
//         16.99136605655169,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Małe Muzeum Ludowe",
//         51.330871799656606,
//         17.023374673877413,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Dab Andrzej",
//         51.10426907047156,
//         16.826558383534373,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Galeria Sztuki Tetno",
//         51.11225536129296,
//         17.030702014224254,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Ogród botaniczny",
//         51.11719029940949,
//         17.047551573273854,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Sky Tower",
//         51.09465607017652,
//         17.019518397025546,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Samolot szkolno-treningowy",
//         51.121289368558514,
//         16.914969708949794,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Park mamuta",
//         51.08121672038618,
//         16.975475541206503,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Park Grabiszynski",
//         51.08802168538187,
//         16.97866680310278,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Ludkoland",
//         51.1028553391116,
//         17.081240771896574,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Motylarnia",
//         51.104527637741,
//         17.071921788618724,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Iglica",
//         51.108029910802465,
//         17.0755695922009,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Fort Muzeum Militarne",
//         51.1641887947113,
//         17.000337056552947,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Plac zabaw",
//         51.100260622151524,
//         17.007106644313247,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//
//     [
//         "Plac zabaw",
//         51.10647752763872,
//         17.035890515983976,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Plac zabaw",
//         51.13428313430891,
//         16.98026211151394,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Plac zabaw",
//         51.13034447208766,
//         16.96678375738788,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//     [
//         "Plac zabaw",
//         51.119095836190766,
//         17.079487254474895,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//
//     [
//         "Plac zabaw",
//         51.100235305565924,
//         17.058029582041357,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
//
//     [
//         "Bobolandia",
//         51.06820867284158,
//         17.097340037939617,
//         "url'(../../assets/markers/marker.png)'",
//         38,
//         38
//     ],
// ]
//
//
