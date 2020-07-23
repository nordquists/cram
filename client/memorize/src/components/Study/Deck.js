import React, {useState} from "react";
import Flashcard from "./Flashcard";

const Deck = (props) => {
    return (
        <Flashcard card={props.deck[props.index]}/>
    );
}

export default Deck;