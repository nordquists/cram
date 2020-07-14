import React, {Component, useState} from "react";

const ProgressBar = (props) => {
    const [percentage, setPercentage] = useState({
        green: 0,
        orange: 0,
        red: 0
    })

    return (
        <div className="progress-bar">
            <InnerBar percentage={this.props.percentage.green + this.props.percentage.orange + this.props.percentage.red} id={'green-bar'}/>
            <InnerBar percentage={this.props.percentage.orange + this.props.percentage.red} id={'orange-bar'}/>
            <InnerBar percentage={this.props.percentage.red} id={'red-bar'}/>
        </div>
    );
}

const InnerBar = (props) => {
    return (
        <div className="inner-bar" id={props.id} style={{width: `${props.percentage}%`}} />
    );
}

export default ProgressBar;