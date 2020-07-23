import React, {useState, useEffect}from 'react';
import Resource from '../Resource';
import DeckView from './DeckView';

const DeckViewContainer = (props) => {

    useEffect(() => {
        let id = props.match.params.deck_id;
    });

    return (
        // TODO placeholder values
        <div>
            <Resource
                path="deck/id"
                render={ data => (
                    <DeckView data={data}/>
                )}
            />
        </div>
    );
}

export default DeckViewContainer;