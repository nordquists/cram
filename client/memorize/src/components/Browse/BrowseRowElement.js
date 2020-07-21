import React, {useState} from 'react';

const circleConfig = {
    viewBox: '0 0 28 28',
    x: '19',
    y: '19',
    radio: '15.91549430918954'
};

const BrowseRowElement = (props) => {
    const [hover, setHover] = useState(false);

    return (
        <div>
            <div className="element" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                <div className="card">
                    {/*<div className="card-hover hidden">*/}
                    {/*    <svg viewBox={circleConfig.viewBox}>*/}
                    {/*        <circle*/}
                    {/*            className="progress"*/}
                    {/*            cx={circleConfig.x}*/}
                    {/*            cy={circleConfig.y}*/}
                    {/*            r={circleConfig.radio}*/}
                    {/*            fill="transparent"/>*/}
                    {/*    </svg>*/}

                    {/*</div>*/}
                    {/*<div className="title">*/}
                    {/*    {props.name}*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="title">
                {props.name}
            </div>
        </div>

    );
}

export default BrowseRowElement;