import React, {useState} from 'react';
import Deck from "../Study/Deck";
import {ReactComponent as LeftChevronIcon} from '../../icons/left-chevron.svg';
import {ReactComponent as RightChevronIcon} from '../../icons/right-chevron.svg';
import { DeckViewButtonGroup } from './DeckViewButtonGroup';


const DeckViewPreview = ({ deck, index, setIndex, id, percentages }) => {
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
        <div className="deck-view-preview-flex">
            <div>
                <DeckViewButtonGroup
                    id={id}
                    percentages={percentages}
                />
            </div>
            <div className="deck-view-preview">
                <div className="deck">
                    {deck.length > 0 ? 
                        <Deck deck={deck} index={index}/>
                    : <p>this deck doesn't have any cards yet</p>}
                </div>
                {deck.length > 0 &&
                    <div className="preview-button-pair">
                        <button className="preview-button" disabled={leftButton} onClick={() => goLeft()}><LeftChevronIcon/></button>
                        <h4>{index + 1} / {deck.length}</h4>
                        <button className="preview-button" disabled={rightButton} onClick={() => goRight()}><RightChevronIcon/></button>
                    </div>
                } 
            </div>
        </div>
    );
}

export default DeckViewPreview;