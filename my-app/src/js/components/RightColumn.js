import React from "react";
import {MainSection} from "./elements/MainSection";
import {BtnSection} from "./elements/BtnSection";

export const RightColumn = () => {
    return (
        <>
            <div className="rightColumn">
                <BtnSection/>
                <MainSection/>
            </div>
        </>
    )
}

