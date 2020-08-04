import React, {useState} from "react";

const Card = ({ card }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className={`flashcard ${flipped ? 'flipped': ''}`} onClick={() => setFlipped(!flipped)}>
            <div className="front">
                {card.front}
            </div>
            <div className="back">
                {card.back}
            </div>
        </div>
    );
}

export default Card;