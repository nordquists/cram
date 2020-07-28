import React, {Component, useState} from "react";

const ProgressBar = ({ percentages }) => {

    return (
        <div className="progress-bar">
            <InnerBar percentage={percentages.green + percentages.orange + percentages.red} id={'green-bar'}/>
            <InnerBar percentage={percentages.orange + percentages.red} id={'orange-bar'}/>
            <InnerBar percentage={percentages.red} id={'red-bar'}/>
        </div>
    );
}

const InnerBar = ({ id, percentage }) => {
    return (
        <div className="inner-bar" id={id} style={{width: `${percentage}%`}} />
    );
}

export default ProgressBar;