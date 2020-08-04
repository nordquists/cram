import React from "react";

const ProgressBar = ({ counts, length }) => {
    const { green, orange, red } = counts;

    return (
        <div className="progress-bar">
            <InnerBar percentage={(green + orange + red) / length * 100} id={'green-bar'}/>
            <InnerBar percentage={(orange + red) / length * 100} id={'orange-bar'}/>
            <InnerBar percentage={(red) / length * 100} id={'red-bar'}/>
        </div>
    );
}

const InnerBar = ({ id, percentage }) => {
    return (
        <div className="inner-bar" id={id} style={{width: `${percentage}%`}} />
    );
}

export default ProgressBar;