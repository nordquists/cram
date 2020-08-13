import React, { useState } from 'react';
import DeckViewHeader from "./DeckViewHeader"
import DeckViewPreview from "./DeckViewPreview"
import Header from '../Header';
import { DeckViewButtonGroup } from './DeckViewButtonGroup';
import { Redirect } from "react-router-dom";


// TODO Need to have a different way to render when the we are not the owner of the deck
// Render different stuff, also need a way to edit from this screen

const DeckView = ({ loading, data, error, onBack}) => {
    const [index, setIndex] = useState(0) 

    return (
        <div>
            { error && <Redirect to="/404"/> }
            <Header
                onBack={onBack}
            />
            {/* {loading && <DeckViewHeaderPlaceholder/>} */}
            {!loading && 
                <DeckViewHeader 
                    title={data.name} 
                    description={data.description} 
                    author={data.author} 
                    categories={data.categories}
                />
            }

            {!loading && 
                <DeckViewPreview 
                    deck={data.cards} 
                    index={index} 
                    setIndex={setIndex}
                    id={data.id}
                    percentages={data.stats.percentages}
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