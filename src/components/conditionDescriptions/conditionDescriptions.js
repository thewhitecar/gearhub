import React, { Component } from 'react';

export default class ConditionDescriptions extends Component {
    render(){
        return(
            <div>
            <h1>Brand New</h1>
            <p>Brand New items are sold by an authorized dealer or original builder and include all original packaging.</p>
            <h1>Mint</h1>
            <p>Mint items are in essentially new original condition but have been opened or played</p>
            <h1>Excellent</h1>
            <p>Excellent condition items have been used but are free from any visible blemishes or imperfections</p>
            <h1>Very Good</h1>
            <p>Very Good items may show a few slight marks or scratches but are fully functional and in overall great shape.</p>
            <h1>Good</h1>
            <p>Good condition items function properly but may exhibit some wear and tear</p>
            <h1>Fair</h1>
            <p>Fair condition gear should function but will show noticeable cosmetic damage or other issues.</p>
            <h1>Poor</h1>
            <p>Poor condition gear may not work properly but can still perform most functions.</p>
            <h1>Non-Functioning</h1>
            <p>Non Functioning items do not work as they should.</p>
            </div>
        )
    }
}