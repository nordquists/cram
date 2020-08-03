import React, { useState } from 'react';
import DeckViewHeader from "./DeckViewHeader"
import DeckViewPreview from "./DeckViewPreview"
import Header from '../Header';
import { DeckViewButtonGroup } from './DeckViewButtonGroup';


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
            {!loading && 
                <DeckViewHeader 
                    title={data[0].name} 
                    description={data[0].description} 
                    author={data[0].author} 
                    categories={data[0].categories}
                />
            }

            {!loading && 
                <DeckViewPreview 
                    deck={data[0].deck} 
                    index={index} 
                    setIndex={setIndex}
                    id={data[0].id}
                    percentages={data[0].percentages}
                />
            }

            {/* {!loading && 
                <DeckViewButtonGroup
                    id={data[0].id}
                    percentages={data[0].percentages}
                />
            } */}

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