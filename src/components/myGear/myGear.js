import React from 'react';
import './myGear.css'
import SelectByDropDown from '../subcomponents/filterGearByDropDown/SelectByDropDown';

export default function () {
    return (
        <div>
        <div className="title_div">
            <h1 className="title">My Gear</h1>
            <div>
                <div className="title_sub">arrange by: <SelectByDropDown /> </div>
            </div>
        </div>
        <div className="carousel" />
        </div>
    )
}