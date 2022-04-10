import React from 'react';
import {TipBox} from "./TipBox";
import {AddToFavBox} from "./AddToFavBox";


export const TipSection = () => {
    return (
        <div className="tipSection">
            <AddToFavBox/>
            <TipBox/>
            {/*<TipBox/>*/}
        </div>
    );
};
