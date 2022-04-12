import React, {useState} from 'react';
import {TipBox} from "./TipBox";
import {AddToFavBox} from "./AddToFavBox";


export const TipSection = () => {


    const [hide, setHide] = useState(false)
    const [show, setShow] = useState(false)

    const showTipBox =()=>{
        setTimeout(()=>{
            setHide(true)
        }, 16000)
    }


    return (
        showTipBox(),

        <div className="tipSection">
            {
                show ?
                    <AddToFavBox/> : null
            }
            {
                hide ?
                    <TipBox/> : null
            }

            {/*<TipBox/>*/}
        </div>
    );
};
