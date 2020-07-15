import React, {useState} from "react";
import Flashcard from "./Flashcard";

const Deck = (props) => {
    // only render 3 cards at a time?
    return (
        <Flashcard card={props.deck[props.index]}/>
    );
}

export default Deck;