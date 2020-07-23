import React from 'react';
import DeckViewHeader from "./DeckViewHeader"
import DeckViewHeaderPlaceholder from "./DeckViewHeaderPlaceholder"
import DeckViewPreview from "./DeckViewPreview"


// TODO Need to have a different way to render when the we are not the owner of the deck
// Render different stuff, also need a way to edit from this screen

const DeckView = (props) => {
    const index = 0;
    const { loading, payload, error } = props.data;

    return (
        <div>
            <div>
                <button>Back</button>
            </div>

            {loading && <DeckViewHeaderPlaceholder/>}
            {!loading && <DeckViewHeader title={payload[0].name} description={payload[0].description} author={payload[0].author} topic={payload[0].topic}/>}

            {/*// embed flash card app in here to preview */}

            {!loading && <DeckViewPreview deck={payload[0].deck} index={index}/>}

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
                <button>Pin</button>
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