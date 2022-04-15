import React from 'react';
import FavBtn from '../../../assets/markers/fav_btn.png';


export const AddToFavBox = () => {






    return (

        <div className="addToFavBox">
            <div className="favRow">
                <button className="addToFav" style={{backgroundImage: `url(${FavBtn})`}}/>
                <h3 className="favName">ZOo</h3>
            </div>
        </div>


    );
};


