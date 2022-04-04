import React from 'react';
import {LeftColumn} from "./LeftColumn";
import {RightColumn} from "./RightColumn";


export const StartView = () => {
    return (

            <div className="windowApp">
                <LeftColumn/>
                <RightColumn/>
            </div>
    )

}