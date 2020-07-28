import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const circleConfig = {
    viewBox: '0 0 28 28',
    x: '19',
    y: '19',
    radio: '15.91549430918954'
};

export const RowElement = ({ element }) => {
    const [hover, setHover] = useState(false);

    return (
        <div>
            <Link to={`${element.id}`}>
                <div className="element" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                    <div className="card">
                        <div className="title">
                            {element.name}
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    );
}

export default RowElement;