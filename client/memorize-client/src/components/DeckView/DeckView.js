import React, { useState } from 'react';
import DeckViewHeader from "./DeckViewHeader"
import DeckViewPreview from "./DeckViewPreview"
import Header from '../Header';
import { StatsCircle } from '../Stats/StatsCircle';


// TODO Need to have a different way to render when the we are not the owner of the deck
// Render different stuff, also need a way to edit from this screen

const DeckView = ({ loading, data, error, onBack}) => {
    const [index, setIndex] = useState(0)

    return (
        <div>
            <Header
                onBack={onBack}
            />

            {/* {loading && <DeckViewHeaderPlaceholder/>} */}
            {!loading && <DeckViewHeader title={data[0].name} description={data[0].description} author={data[0].author} categories={data[0].categories}/>}

            {/*// embed flash card app in here to preview */}

            {!loading && <DeckViewPreview deck={data[0].deck} index={index} setIndex={setIndex}/>}

            {!loading && 
                <div className="desktop-stats">
                    <StatsCircle
                        width={'100%'}
                        red={data[0].percentages.red}
                        orange={data[0].percentages.orange}
                        green={data[0].percentages.green}
                        hasInternalLabel={true}
                    />
                </div>
            }
            
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