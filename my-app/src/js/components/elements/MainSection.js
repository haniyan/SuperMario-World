import React from 'react';
import MainDiv from '../../../assets/markers/main_div.png'
import FavBtn from '../../../assets/markers/fav_btn.png'



export const MainSection = () => {

    const text = "CO ROBIĆ WE WROCŁAWIU?"

    return (
        // <div className="mainSection" style={{backgroundImage: `url(${MainDiv})`}}>
        <div className="mainSection">
            <button className="addToFav" style={{backgroundImage: `url(${FavBtn})`}} />
            <div className="icon"/>
            <h1 className="infoContent" >{text}</h1>
            <div className="infoBox" style={{backgroundImage: `url(${MainDiv})`}}/>
        </div>
    );
};
