import React, {useState} from "react";
import Flashcard from "./Flashcard";

const Deck = (props) => {
    const [index, setIndex] = useState(0);
    const [cards, setCards] = useState({});




    // only render 3 cards at a time?
    return (
        <Flashcard/>
    );
}

export default Deck;