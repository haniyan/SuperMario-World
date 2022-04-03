import React from "react";
// import {API_KEY, API_URL, MAP_ID} from "./api/constans";


// export function initMap(){
//     //form google maps documentation
//     const map = new google.maps.Map(document.getElementById('map'), {
//
//         //wroclaw 51.11155555628178, 17.047630976703307
//
//         center: {lat: 51.11155555628178, lng: 17.047630976703307},
//         zoom: 16,
//         mapId: MAP_ID,
//         mapTypeControl: false,
//         fullscreenControl: false,
//         streetViewControl: false,
//     });


//name
//latitude,longitude
// image url
// scaleSize width, height


// const markers =[
// [
//     "Kliknij żeby odkryć",
//     51.11155555628178,
//     17.047630976703307,
//     "url",
//     38,
//     38
// ]
// ]

// for (let i=0;i<markers.length;i++){
//     const currMarker = markers[i];
// const marker = new google.maps.Marker({
//     position: myLatLng,   podaje pozycje markerow w ten sposob {lat: currMarker[1], lng: currMarker[2]}
//     map,
//     title: currMarker[0],
//     icon: {
//     url: currMarker[3],
//        scaledSize: new google.maps.Size( currMarker[4], currMarker[5])
//},
// animation: google.maps.Animation.DROP,
// });

// const infowindow = new google.maps.Infowindow({
//     content: currMarker[0], //nazwa contentu
// })
//
// marker.addListener("click", () =>{
//     infowindow.open(map,marker)
// })
// }

// }

// export const initMap = callback => {
//   fetch(`${API_URL}`, {
//     headers: {
//       "Authorization": API_KEY
//     }
//   })
//       .then(r => r.json())
//       .then(data => {
//
//
//         if (data.error === false && typeof callback === "function") {
//         }
//       })
//       .catch(err => console.log(error));
// };


function App() {
    return (
        <div className="App">
            <h1>Działa czy nie działa oto jest pytanie</h1>
        </div>
    );
}

export default App;