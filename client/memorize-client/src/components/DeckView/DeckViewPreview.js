import React from 'react';
import Deck from "../Study/Deck";


const DeckViewPreview = ({ deck, index}) => {
    return (
        <div className="deck-view-preview">
            <Deck deck={deck} index={index}/>
        </div>
    );
}

export default DeckViewPreview;