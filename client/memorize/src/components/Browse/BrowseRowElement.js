import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const circleConfig = {
    viewBox: '0 0 28 28',
    x: '19',
    y: '19',
    radio: '15.91549430918954'
};

const BrowseRowElement = ({ deck }) => {
    const [hover, setHover] = useState(false);

    return (
        <div>
            <Link to={`${deck.id}`}>
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
                    {deck.name}
                </div>
            </Link>
        </div>

    );
}

export default BrowseRowElement;