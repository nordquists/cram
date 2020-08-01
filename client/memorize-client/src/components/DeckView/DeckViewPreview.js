import React, {useState} from 'react';
import Deck from "../Study/Deck";
import {ReactComponent as LeftChevronIcon} from '../../icons/left-chevron.svg';
import {ReactComponent as RightChevronIcon} from '../../icons/right-chevron.svg';


const DeckViewPreview = ({ deck, index, setIndex }) => {
    const [leftButton, setLeftButton] = useState(true)
    const [rightButton, setRightButton] = useState(false)

    let goRight = () => {
        setIndex(index + 1);
        setLeftButton(false);

        if(index + 1 === deck.length - 1) {
            setRightButton(true);
        }
    }

    let goLeft = () => {
        setIndex(index - 1);
        setRightButton(false);

        if(index - 1 === 0) {
            setLeftButton(true);
        }
    }

    return (
        <div className="deck-view-preview">
            <div className="deck">
                <Deck deck={deck} index={index}/>
            </div>
            <div className="preview-button-pair">
                <button className="preview-button" disabled={leftButton} onClick={() => goLeft()}><LeftChevronIcon/></button>
                <h4>{index + 1} / {deck.length}</h4>
                <button className="preview-button" disabled={rightButton} onClick={() => goRight()}><RightChevronIcon/></button>
            </div>
        </div>
    );
}

export default DeckViewPreview;