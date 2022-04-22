import React from "react";
import {MainSection} from "./RightColumn/MainSection";
import {BtnSection} from "./RightColumn/BtnSection";

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

