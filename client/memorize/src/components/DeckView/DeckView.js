import React from 'react';
import Deck from "../Study/Deck";


// TODO Need to have a different way to render when the we are not the owner of the deck
// Render different stuff, also need a way to edit from this screen

const DeckView = (props) => {
    const index = 0;
    const { loading, payload, error } = props.data;

    return (
        <div>
            <div>
                <h3>Created by</h3>
            </div>
            <div>
                <p>{!loading && payload[0].topic}</p>
                <h1>{loading && "loading..."} {!loading && payload[0].name}</h1>
            </div>
            <h3>{!loading && payload[0].description}</h3>

            {/*// embed flash card app in here to preview */}

            {!loading && <Deck deck={payload[0].deck} index={index}/>}

            <div>
                <button>Back</button>
                <button>Next</button>
                <button>Keyboard Shortcuts</button>
            </div>

            <div>
                <button>Study</button>
                <button>Flashcards</button>
            </div>

            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>



            {/*{loading &&*/}
            {/*    */}
            {/*}*/}

            {/*{!loading &&*/}
            {/*    payload[0].name*/}
            {/*}*/}
            <div>
                <h2>Cards in the deck</h2>

            </div>
        </div>
    );
}

export default DeckView;