import React from 'react'
import './statsCircle.css';

export const StatsCircle = ({ width, green, orange, red, hasMasteryLabel, hasInternalLabel, size="m" }) => {
    const display_green = green === 0 ? false : true
    const display_orange = orange === 0 ? false : true
    const display_red = red === 0 ? false : true

    const circle_style = {
        width: width, 
        strokeWidth: "10px"
    }

    const label_style = {
        'font-size': width/3
    }

    return (
        <div className="stats">
            <div className="stats-circle" style={circle_style}>
                <svg viewBox="-5 -5 45 45" className="circular-chart">
                    <path className={"circle-bg " + size}
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                    {display_red && 
                        <path className={"circle " + size +  " red"}
                            strokeDasharray={(green + orange + red).toString() + ", 100"}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    }
                    {display_orange &&
                        <path className={"circle " + size +  " orange"}
                            strokeDasharray={(orange + green).toString() + ", 100"}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    }
                    {display_green &&
                        <path className={"circle " + size +  " green"}
                            strokeDasharray={green.toString() + ", 100"}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    }
                    {hasInternalLabel &&
                        <text x="52%" y="58%" className="internal-label">{green}%</text>
                    }
                </svg>
                
            </div>
            {hasMasteryLabel && 
                <h4 className="stats-label" style={label_style}>
                    {green}% Mastery
                </h4>
            }
        </div>
    )
}
