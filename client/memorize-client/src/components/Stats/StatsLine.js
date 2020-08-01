import React from 'react'

export const StatsLine = ({ green, orange, red, hasMasteryLabel, hasInternalLabel }) => {

    return (
        <div className="stats">
            <div className="stats-bar">
                <div className="progress-bar">
                    <InnerBar percentage={green + orange + red} id={'green-bar'}/>
                    <InnerBar percentage={orange + red} id={'orange-bar'}/>
                    <InnerBar percentage={red} id={'red-bar'}/>
                </div>
            {hasInternalLabel &&
                <p className="internal-label">{green}%</p>
            }  
            </div>
            {/* {hasMasteryLabel && 
                <h4 className="stats-label" style={label_style}>
                    {green}% Mastery
                </h4>
            } */}
        </div>
    )
}

const InnerBar = ({ id, percentage }) => {
    return (
        <div className="inner-bar" id={id} style={{width: `${percentage}%`}} />
    );
}
