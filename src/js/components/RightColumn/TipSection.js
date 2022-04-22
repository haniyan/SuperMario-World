import React, {useEffect, useState} from 'react';
import {TipBox} from "./TipBox";

export const TipSection = () => {
    const [tipHide, setTipHide] = useState(false)

    const showTipBox = () => {
        setTimeout(() => {
            setTipHide(true)

        }, 8000)
    }
    const hideTipBox = () => {
        setTimeout(() => {
            setTipHide(false)

        }, 30000)
    }


    useEffect(() => {
        showTipBox()
        hideTipBox()
    }, []);


    return (
        <div className="tipSection">
            {
                tipHide ? <TipBox/> : null
            }
        </div>
    );
};
