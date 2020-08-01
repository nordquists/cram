import React from 'react'

export const StatsCircle = ({ width, green, orange, red, hasMasteryLabel, hasInternalLabel }) => {
    const display_circle = (green + orange + red) > 0
    const circle_style = {
        width: width
    }
    const internal_label_style = {
        'font-size': width/5
    }
    const label_style = {
        'font-size': width/3
    }

    return (
        <div className="stats">
            <div className="stats-circle" style={circle_style}>
                <svg viewBox="0 0 36 36" className="circular-chart">
                    <path className="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                    {display_circle && 
                        <path className="circle red"
                            strokeDasharray={(green + orange + red).toString() + ", 100"}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    }
                    {display_circle &&
                        <path className="circle orange"
                            strokeDasharray={(orange + green).toString() + ", 100"}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    }
                    {display_circle &&
                        <path className="circle green"
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
