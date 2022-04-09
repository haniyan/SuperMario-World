import React from 'react';

import FavBtn from '../../../assets/markers/fav_btn.png'
import AskBtn from '../../../assets/markers/ask_btn.png'



export const BtnSection = () => {
    return (
        <div className="btnSection">
            <button className="searchBtn" style={{backgroundImage: `url(${FavBtn})`}}/>
            <button className="favBtn"  style={{backgroundImage: `url(${AskBtn})`}}/>
        </div>
    );
};
