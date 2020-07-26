import React, {useState, useEffect} from 'react';

const ClosableCard = (props) => {
    const [closed, setClosed] = useState(false);

    return (
        <div>
            {!closed && <button onClick={() => setClosed(!closed)}>Close</button>}
            {!closed && <div className="closable-card"> {props.render()} </div>}
        </div>
    );
}

export default ClosableCard;